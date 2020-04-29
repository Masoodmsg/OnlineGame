/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
"undefined" == typeof _pio && (_pio = {});
(function() {
    _pio.channel = function() {};
    _pio.channel.prototype.call = function(a, c, b, e, d) {
        var f = "undefined" != typeof PLAYERIO_API_HOST ? PLAYERIO_API_HOST : (PlayerIO.useSecureApiRequests ? "https" : "http") + "://api.playerio.com/json/",
            g = new XMLHttpRequest;
        "withCredentials" in g ? g.open("post", f, !0) : "undefined" != typeof XDomainRequest ? (g = new XDomainRequest, g.open("post", f)) : g = new _pio.flashWebRequest("post", f);
        var h = Error();
        null != g ? (g.send("[" + a + "|" + (this.token || "") + "]" + JSON.stringify(c)), g.onload = function() {
            var a =
                null;
            try {
                var c = g.response || g.responseText;
                if ("[" == c[0]) {
                    var f = c.indexOf("]");
                    this.token = c.substring(1, f);
                    c = c.substring(f + 1)
                }
                a = JSON.parse(c)
            } catch (n) {
                _pio.handleError(h, e, PlayerIOErrorCode.GeneralError, "Error decoding response from webservice: " + n);
                return
            }
            if ("undefined" == typeof a.errorcode && "undefined" == typeof a.message) {
                c = a;
                if (d) try {
                    c = d(a)
                } catch (n) {
                    _pio.handleError(h, e, n.code, n.message)
                }
                b && b(c)
            } else _pio.handleError(h, e, a.errorcode, a.message)
        }, g.onerror = function(b) {
            _pio.handleError(h, e, PlayerIOErrorCode.GeneralError,
                "Error talking to webservice: " + JSON.stringify(b))
        }) : _pio.handleError(h, e, PlayerIOErrorCode.GeneralError, "Need to implement flash calling")
    };
    _pio.runCallback = function(a, c, b) {
        try {
            a && a(c)
        } catch (e) {
            a = "Unhandled error in callback: " + e.message, a = a + "\nStack:\n" + (e.stack || e.stacktrace || e.StackTrace), b && (a = a + "\nCallsite stack:\n" + (b.stack || b.stacktrace || b.StackTrace)), console.log(a)
        }
    };
    _pio.handleError = function(a, c, b, e) {
        b = _pio.error(b, e);
        a && (a.stack && (b.stack = a.stack), a.stacktrace && (b.stacktrace = a.stacktrace),
            a.StackTrace && (b.StackTrace = a.StackTrace));
        c ? _pio.runCallback(c, b, a) : "undefined" != typeof console ? console.log("No error callback specified for: " + b.code + ": " + b.message + "\n" + (b.stack || b.stacktrace || b.StackTrace)) : alert("No error callback specified for: " + b.code + ": " + b.message + "\n" + (b.stack || b.stacktrace || b.StackTrace))
    };
    _pio.error = function(a, c) {
        1 == arguments.length && (c = a, a = PlayerIOErrorCode.GeneralError);
        "number" == typeof a && (a = PlayerIOErrorCode.codes[a]);
        if ("string" != typeof a) throw console.log(a, c, Error().stack),
            "Code must be a string!";
        var b = Error();
        return new PlayerIOError(a, c, b.stack || b.stacktrace || b.StackTrace)
    };
    _pio.debugLog = function(a) {
        "undefined" != typeof console && console.log(a)
    };
    _pio.convertToKVArray = function(a) {
        var c = [];
        if (a)
            for (var b in a) c.push({
                key: "" + b,
                value: "" + a[b]
            });
        return c
    };
    _pio.convertFromKVArray = function(a) {
        var c = {};
        if (a && a.length)
            for (var b in a) c[a[b].key] = a[b].value;
        return c
    };
    _pio.convertToSegmentArray = function(a) {
        var c = [];
        if (a)
            for (var b in a) c.push(b + ":" + a[b]);
        return c
    }
})();
PlayerIO = {
    useSecureApiRequests: !1,
    authenticate: function(a, c, b, e, d, f) {
        if ("auto" == b.publishingnetworklogin) "undefined" == typeof window.PublishingNetwork ? f(new PlayerIOError(PlayerIOErrorCode.GeneralError, "Could not find the PublishingNetwork object on the current page. Did you include the PublishingNetwork.js script?")) : PublishingNetwork.dialog("login", {
            gameId: a,
            connectionId: c,
            __use_usertoken__: !0
        }, function(b) {
            b.error ? f(new PlayerIOError(PlayerIOErrorCode.GeneralError, b.error)) : "undefined" == typeof b.userToken ?
                f(new PlayerIOError(PlayerIOErrorCode.GeneralError, "Missing userToken value in result, but no error message given.")) : PlayerIO.authenticate(a, c, {
                    userToken: b.userToken
                }, e, d, f)
        });
        else {
            var g = new _pio.channel;
            g.authenticate(a, c, _pio.convertToKVArray(b), _pio.convertToSegmentArray(e), "javascript", _pio.convertToKVArray({}), null, d, f, function(b) {
                g.token = b.token;
                return new _pio.client(g, a, b.gamefsredirectmap, b.userid)
            })
        }
    },
    quickConnect: null,
    gameFS: function(a) {
        return new _pio.gameFS(a)
    }
};
var JSON;
JSON || (JSON = {});
(function() {
    function a(b) {
        return 10 > b ? "0" + b : b
    }

    function c(b) {
        d.lastIndex = 0;
        return d.test(b) ? '"' + b.replace(d, function(b) {
            var a = h[b];
            return "string" === typeof a ? a : "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + b + '"'
    }

    function b(a, d) {
        var e, h = f,
            k = d[a];
        k && "object" === typeof k && "function" === typeof k.toJSON && (k = k.toJSON(a));
        "function" === typeof l && (k = l.call(d, a, k));
        switch (typeof k) {
            case "string":
                return c(k);
            case "number":
                return isFinite(k) ? String(k) : "null";
            case "boolean":
            case "null":
                return String(k);
            case "object":
                if (!k) return "null";
                f += g;
                var m = [];
                if ("[object Array]" === Object.prototype.toString.apply(k)) {
                    var r = k.length;
                    for (e = 0; e < r; e += 1) m[e] = b(e, k) || "null";
                    var x = 0 === m.length ? "[]" : f ? "[\n" + f + m.join(",\n" + f) + "\n" + h + "]" : "[" + m.join(",") + "]";
                    f = h;
                    return x
                }
                if (l && "object" === typeof l)
                    for (r = l.length, e = 0; e < r; e += 1) {
                        if ("string" === typeof l[e]) {
                            var w = l[e];
                            (x = b(w, k)) && m.push(c(w) + (f ? ": " : ":") + x)
                        }
                    } else
                        for (w in k) Object.prototype.hasOwnProperty.call(k, w) && (x = b(w, k)) && m.push(c(w) + (f ? ": " : ":") + x);
                x = 0 === m.length ? "{}" : f ? "{\n" + f + m.join(",\n" + f) + "\n" +
                    h + "}" : "{" + m.join(",") + "}";
                f = h;
                return x
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(b) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(b) {
        return this.valueOf()
    });
    var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f, g, h = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        l;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(a, d, c) {
        var e;
        g = f = "";
        if ("number" === typeof c)
            for (e = 0; e < c; e += 1) g += " ";
        else "string" === typeof c && (g = c);
        if ((l = d) && "function" !== typeof d && ("object" !== typeof d || "number" !== typeof d.length)) throw Error("JSON.stringify");
        return b("", {
            "": a
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(b, a) {
        function d(b, c) {
            var e, f = b[c];
            if (f && "object" === typeof f)
                for (e in f)
                    if (Object.prototype.hasOwnProperty.call(f, e)) {
                        var g = d(f, e);
                        void 0 !== g ? f[e] = g : delete f[e]
                    }
            return a.call(b, c, f)
        }
        b = String(b);
        e.lastIndex = 0;
        e.test(b) && (b = b.replace(e, function(b) {
            return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            var c = eval("(" + b + ")");
            return "function" === typeof a ? d({
                "": c
            }, "") : c
        }
        throw new SyntaxError("JSON.parse");
    })
})();
(function() {
    function a(b) {
        if (null != d) b(d);
        else if (f) b(null);
        else if (null == g) {
            g = [b];
            var a = setInterval(function() {
                var b = c();
                null != b && e(b)
            }, 50);
            setTimeout(function() {
                null == d && e(null)
            }, 3E4);
            var e = function(b) {
                d = b;
                f = null == b;
                clearInterval(a);
                for (var c = 0; c != g.length; c++) g[c](b)
            }
        } else g.push(b)
    }

    function c() {
        var b = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="10" height="10" style="$style$" id="$id$">\t<param name="movie" value="$src$" />\t<param name="allowNetworking" value="all" />\t<param name="allowScriptAccess" value="always" />\t\x3c!--[if !IE]>--\x3e\t<object type="application/x-shockwave-flash" data="$src$" width="10" height="10" style="$style$">\t\t<param name="allowNetworking" value="all" />\t\t<param name="allowScriptAccess" value="always" />\t</object>\t\x3c!--<![endif]--\x3e</object>'.replace(/\$id\$/gi, "__pio_flashfallback__");
        b = b.replace(/\$src\$/gi, "http://192.168.30.154/html5client/FlashFallback/bin-debug/FlashFallback.swf");
        b = b.replace(/\$style\$/gi, "width:10px;height:10px");
        var a = document.getElementById("containerId");
        if (!a) {
            var d = document.createElement("div");
            d.setAttribute("id", a);
            d.setAttribute("style", "position:absolute;top:-20px;left:-20px");
            d.innerHTML = b;
            try {
                document.body.appendChild(d)
            } catch (m) {}
        }
        b = function(b) {
            b = document.getElementsByTagName(b);
            for (var a = 0; a != b.length; a++)
                if (b[a].ping && "pong" == b[a].ping()) return b[a]
        };
        return b("embed") || b("object")
    }
    var b = {},
        e = 0;
    __pio_flashfallback_callback__ = function() {
        var a = b[arguments[0]];
        if (a) {
            for (var d = [], c = 1; c != arguments.length; c++) d[c - 1] = arguments[c];
            a.apply(null, d)
        }
    };
    _pio.flashWebRequest = function(d, c) {
        var f = this;
        this.response = null;
        this.onload = function() {};
        this.onerror = function() {};
        this.send = function(g) {
            a(function(a) {
                if (null == a) f.onerror("Browser does not support Cross-Origin (CORS) webrequest or Flash as a fallback method");
                else {
                    var h = "cb" + e++;
                    b[h] = function(a, d) {
                        delete b[h];
                        if (a) f.response = d, f.onload();
                        else f.onerror(d)
                    };
                    a.webrequest(h, d, c, g)
                }
            })
        }
    };
    _pio.flashSocketConnection = function(d, c, f, g, n) {
        var h = "cb" + e++,
            l = this,
            k = new _pio.messageSerializer,
            m = !1,
            x = !1,
            w = setTimeout(function() {
                m || (m = !0, f(!1, "Connect attempt timed out"))
            }, c);
        this.disconnect = function() {
            console.log("... this shouldn't happen")
        };
        this.sendMessage = function(b) {
            console.log("... send msg. this shouldn't happen")
        };
        a(function(a) {
            null == a ? (m = !0, f(!1, "Browser does not support WebSocket connections and the Flash fallback failed.")) :
                (b[h] = function(b, d) {
                    switch (b) {
                        case "onopen":
                            m || (clearTimeout(w), x = m = !0, a.socketSend(h, [0]), f(x));
                            break;
                        case "onclose":
                            l.disconnect();
                            break;
                        case "onerror":
                            l.disconnect();
                            break;
                        case "onmessage":
                            n(k.deserializeMessage(d, 0, d.length))
                    }
                }, l.disconnect = function() {
                    if (x) {
                        x = !1;
                        g();
                        try {
                            a.socketClose(h)
                        } catch (C) {
                            _pio.debugLog(C)
                        }
                    }
                }, l.sendMessage = function(b) {
                    b = k.serializeMessage(b);
                    a.socketSend(h, b)
                }, a.socketConnection(h, d))
        })
    };
    _pio.isFlashFallbackEnabled = function(b) {
        a(function(a) {
            b(null != a)
        })
    };
    var d = null,
        f = !1,
        g = null
})();
(function() {
    var a = _pio.channel.prototype;
    a.connect = function(a, b, e, d, f, g, h, l, k, m, n) {
        this.call(10, {
            gameid: a,
            connectionid: b,
            userid: e,
            auth: d,
            partnerid: f,
            playerinsightsegments: g,
            clientapi: h,
            clientinfo: l
        }, k, m, n)
    };
    _pio.ApiSecurityRule = {
        RespectClientSetting: 0,
        UseHttp: 1,
        UseHttps: 2
    };
    a.authenticate = function(a, b, e, d, f, g, h, l, k, m) {
        this.call(13, {
            gameid: a,
            connectionid: b,
            authenticationarguments: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g,
            playcodes: h
        }, l, k, m)
    };
    a.createRoom = function(a, b, e, d, f, g, h, l) {
        this.call(21, {
            roomid: a,
            roomtype: b,
            visible: e,
            roomdata: d,
            isdevroom: f
        }, g, h, l)
    };
    a.joinRoom = function(a, b, e, d, f, g) {
        this.call(24, {
            roomid: a,
            joindata: b,
            isdevroom: e
        }, d, f, g)
    };
    a.createJoinRoom = function(a, b, e, d, f, g, h, l, k) {
        this.call(27, {
            roomid: a,
            roomtype: b,
            visible: e,
            roomdata: d,
            joindata: f,
            isdevroom: g
        }, h, l, k)
    };
    a.listRooms = function(a, b, e, d, f, g, h, l) {
        this.call(30, {
            roomtype: a,
            searchcriteria: b,
            resultlimit: e,
            resultoffset: d,
            onlydevrooms: f
        }, g, h, l)
    };
    a.userLeftRoom = function(a, b, e, d, f, g) {
        this.call(40, {
                extendedroomid: a,
                newplayercount: b,
                closed: e
            },
            d, f, g)
    };
    a.writeError = function(a, b, e, d, f, g, h, l) {
        this.call(50, {
            source: a,
            error: b,
            details: e,
            stacktrace: d,
            extradata: f
        }, g, h, l)
    };
    a.updateRoom = function(a, b, e, d, f, g) {
        this.call(53, {
            extendedroomid: a,
            visible: b,
            roomdata: e
        }, d, f, g)
    };
    _pio.ValueType = {
        String: 0,
        Int: 1,
        UInt: 2,
        Long: 3,
        Bool: 4,
        Float: 5,
        Double: 6,
        ByteArray: 7,
        DateTime: 8,
        Array: 9,
        Obj: 10
    };
    a.createObjects = function(a, b, e, d, f) {
        this.call(82, {
            objects: a,
            loadexisting: b
        }, e, d, f)
    };
    a.loadObjects = function(a, b, e, d) {
        this.call(85, {
            objectids: a
        }, b, e, d)
    };
    _pio.LockType = {
        NoLocks: 0,
        LockIndividual: 1,
        LockAll: 2
    };
    a.saveObjectChanges = function(a, b, e, d, f, g) {
        this.call(88, {
            locktype: a,
            changesets: b,
            createifmissing: e
        }, d, f, g)
    };
    a.deleteObjects = function(a, b, e, d) {
        this.call(91, {
            objectids: a
        }, b, e, d)
    };
    a.loadMatchingObjects = function(a, b, e, d, f, g, h) {
        this.call(94, {
            table: a,
            index: b,
            indexvalue: e,
            limit: d
        }, f, g, h)
    };
    a.loadIndexRange = function(a, b, e, d, f, g, h, l) {
        this.call(97, {
            table: a,
            index: b,
            startindexvalue: e,
            stopindexvalue: d,
            limit: f
        }, g, h, l)
    };
    a.deleteIndexRange = function(a, b, e, d, f, g, h) {
        this.call(100, {
            table: a,
            index: b,
            startindexvalue: e,
            stopindexvalue: d
        }, f, g, h)
    };
    a.loadMyPlayerObject = function(a, b, e) {
        this.call(103, {}, a, b, e)
    };
    a.payVaultReadHistory = function(a, b, e, d, f, g) {
        this.call(160, {
            page: a,
            pagesize: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultRefresh = function(a, b, e, d, f) {
        this.call(163, {
            lastversion: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultConsume = function(a, b, e, d, f) {
        this.call(166, {
            ids: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultCredit = function(a, b, e, d, f, g) {
        this.call(169, {
            amount: a,
            reason: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultDebit =
        function(a, b, e, d, f, g) {
            this.call(172, {
                amount: a,
                reason: b,
                targetuserid: e
            }, d, f, g)
        };
    a.payVaultBuy = function(a, b, e, d, f, g) {
        this.call(175, {
            items: a,
            storeitems: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultGive = function(a, b, e, d, f) {
        this.call(178, {
            items: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultPaymentInfo = function(a, b, e, d, f, g) {
        this.call(181, {
            provider: a,
            purchasearguments: b,
            items: e
        }, d, f, g)
    };
    a.payVaultUsePaymentInfo = function(a, b, e, d, f) {
        this.call(184, {
            provider: a,
            providerarguments: b
        }, e, d, f)
    };
    a.partnerPayTrigger = function(a, b, e, d,
        f) {
        this.call(200, {
            key: a,
            count: b
        }, e, d, f)
    };
    a.partnerPaySetTag = function(a, b, e, d) {
        this.call(203, {
            partnerid: a
        }, b, e, d)
    };
    a.notificationsRefresh = function(a, b, e, d) {
        this.call(213, {
            lastversion: a
        }, b, e, d)
    };
    a.notificationsRegisterEndpoints = function(a, b, e, d, f) {
        this.call(216, {
            lastversion: a,
            endpoints: b
        }, e, d, f)
    };
    a.notificationsSend = function(a, b, e, d) {
        this.call(219, {
            notifications: a
        }, b, e, d)
    };
    a.notificationsToggleEndpoints = function(a, b, e, d, f, g) {
        this.call(222, {
            lastversion: a,
            endpoints: b,
            enabled: e
        }, d, f, g)
    };
    a.notificationsDeleteEndpoints =
        function(a, b, e, d, f) {
            this.call(225, {
                lastversion: a,
                endpoints: b
            }, e, d, f)
        };
    a.gameRequestsSend = function(a, b, e, d, f, g) {
        this.call(241, {
            requesttype: a,
            requestdata: b,
            requestrecipients: e
        }, d, f, g)
    };
    a.gameRequestsRefresh = function(a, b, e, d) {
        this.call(244, {
            playcodes: a
        }, b, e, d)
    };
    a.gameRequestsDelete = function(a, b, e, d) {
        this.call(247, {
            requestids: a
        }, b, e, d)
    };
    a.achievementsRefresh = function(a, b, e, d) {
        this.call(271, {
            lastversion: a
        }, b, e, d)
    };
    a.achievementsLoad = function(a, b, e, d) {
        this.call(274, {
            userids: a
        }, b, e, d)
    };
    a.achievementsProgressSet =
        function(a, b, e, d, f) {
            this.call(277, {
                achievementid: a,
                progress: b
            }, e, d, f)
        };
    a.achievementsProgressAdd = function(a, b, e, d, f) {
        this.call(280, {
            achievementid: a,
            progressdelta: b
        }, e, d, f)
    };
    a.achievementsProgressMax = function(a, b, e, d, f) {
        this.call(283, {
            achievementid: a,
            progress: b
        }, e, d, f)
    };
    a.achievementsProgressComplete = function(a, b, e, d) {
        this.call(286, {
            achievementid: a
        }, b, e, d)
    };
    a.playerInsightRefresh = function(a, b, e) {
        this.call(301, {}, a, b, e)
    };
    a.playerInsightSetSegments = function(a, b, e, d) {
        this.call(304, {
            segments: a
        }, b, e, d)
    };
    a.playerInsightTrackInvitedBy = function(a, b, e, d, f) {
        this.call(307, {
            invitinguserid: a,
            invitationchannel: b
        }, e, d, f)
    };
    a.playerInsightTrackEvents = function(a, b, e, d) {
        this.call(311, {
            events: a
        }, b, e, d)
    };
    a.playerInsightTrackExternalPayment = function(a, b, e, d, f) {
        this.call(314, {
            currency: a,
            amount: b
        }, e, d, f)
    };
    a.playerInsightSessionKeepAlive = function(a, b, e) {
        this.call(317, {}, a, b, e)
    };
    a.playerInsightSessionStop = function(a, b, e) {
        this.call(320, {}, a, b, e)
    };
    a.oneScoreLoad = function(a, b, e, d) {
        this.call(351, {
            userids: a
        }, b, e, d)
    };
    a.oneScoreSet =
        function(a, b, e, d) {
            this.call(354, {
                score: a
            }, b, e, d)
        };
    a.oneScoreAdd = function(a, b, e, d) {
        this.call(357, {
            score: a
        }, b, e, d)
    };
    a.oneScoreRefresh = function(a, b, e) {
        this.call(360, {}, a, b, e)
    };
    a.simpleConnect = function(a, b, e, d, f, g, h, l, k) {
        this.call(400, {
            gameid: a,
            usernameoremail: b,
            password: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleRegister = function(a, b, e, d, f, g, h, l, k, m, n, q, t, y) {
        this.call(403, {
            gameid: a,
            username: b,
            password: e,
            email: d,
            captchakey: f,
            captchavalue: g,
            extradata: h,
            partnerid: l,
            playerinsightsegments: k,
            clientapi: m,
            clientinfo: n
        }, q, t, y)
    };
    a.simpleRecoverPassword = function(a, b, e, d, f) {
        this.call(406, {
            gameid: a,
            usernameoremail: b
        }, e, d, f)
    };
    a.kongregateConnect = function(a, b, e, d, f, g, h, l, k) {
        this.call(412, {
            gameid: a,
            userid: b,
            gameauthtoken: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleGetCaptcha = function(a, b, e, d, f, g) {
        this.call(415, {
            gameid: a,
            width: b,
            height: e
        }, d, f, g)
    };
    a.facebookOAuthConnect = function(a, b, e, d, f, g, h, l, k) {
        this.call(418, {
            gameid: a,
            accesstoken: b,
            partnerid: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.steamConnect = function(a, b, e, d, f, g, h, l, k) {
        this.call(421, {
            gameid: a,
            steamappid: b,
            steamsessionticket: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleUserGetSecureLoginInfo = function(a, b, e) {
        this.call(424, {}, a, b, e)
    };
    a.joinCluster = function(a, b, e, d, f, g, h, l, k, m, n, q, t, y, r, x, w) {
        this.call(504, {
            clusteraccesskey: a,
            isdevelopmentserver: b,
            ports: e,
            machinename: d,
            version: f,
            machineid: g,
            os: h,
            cpu: l,
            cpucores: k,
            cpulogicalcores: m,
            cpuaddresswidth: n,
            cpumaxclockspeed: q,
            rammegabytes: t,
            ramspeed: y
        }, r, x, w)
    };
    a.serverHeartbeat = function(a, b, e, d, f, g, h, l, k, m, n, q, t, y, r, x, w, z, C, D) {
        this.call(510, {
            serverid: a,
            appdomains: b,
            servertypes: e,
            machinecpu: d,
            processcpu: f,
            memoryusage: g,
            avaliablememory: h,
            freememory: l,
            runningrooms: k,
            usedresources: m,
            apirequests: n,
            apirequestserror: q,
            apirequestsfailed: t,
            apirequestsexecuting: y,
            apirequestsqueued: r,
            apirequeststime: x,
            serverunixtimeutc: w
        }, z, C, D)
    };
    a.getGameAssemblyUrl = function(a, b, e, d, f, g) {
        this.call(513, {
            clusteraccesskey: a,
            gamecodeid: b,
            machineid: e
        }, d, f, g)
    };
    a.devServerLogin =
        function(a, b, e, d, f) {
            this.call(524, {
                username: a,
                password: b
            }, e, d, f)
        };
    a.webserviceOnlineTest = function(a, b, e) {
        this.call(533, {}, a, b, e)
    };
    a.getServerInfo = function(a, b, e, d) {
        this.call(540, {
            machineid: a
        }, b, e, d)
    };
    a.socialRefresh = function(a, b, e) {
        this.call(601, {}, a, b, e)
    };
    a.socialLoadProfiles = function(a, b, e, d) {
        this.call(604, {
            userids: a
        }, b, e, d)
    }
})();
PlayerIOError = function(a, c, b) {
    this.code = a;
    this.message = c;
    this.stack = b;
    this.stack || (b = Error(), this.stack = b.stack || b.stacktrace || b.StackTrace);
    this.toString = function() {
        return "PlayerIOError[" + a + "]: " + c
    }
};
PlayerIOError.prototype = Error();
PlayerIOErrorCode = {
    UnsupportedMethod: "UnsupportedMethod",
    GeneralError: "GeneralError",
    InternalError: "InternalError",
    AccessDenied: "AccessDenied",
    InvalidMessageFormat: "InvalidMessageFormat",
    MissingValue: "MissingValue",
    GameRequired: "GameRequired",
    ExternalError: "ExternalError",
    ArgumentOutOfRange: "ArgumentOutOfRange",
    GameDisabled: "GameDisabled",
    UnknownGame: "UnknownGame",
    UnknownConnection: "UnknownConnection",
    InvalidAuth: "InvalidAuth",
    NoServersAvailable: "NoServersAvailable",
    RoomDataTooLarge: "RoomDataTooLarge",
    RoomAlreadyExists: "RoomAlreadyExists",
    UnknownRoomType: "UnknownRoomType",
    UnknownRoom: "UnknownRoom",
    MissingRoomId: "MissingRoomId",
    RoomIsFull: "RoomIsFull",
    NotASearchColumn: "NotASearchColumn",
    QuickConnectMethodNotEnabled: "QuickConnectMethodNotEnabled",
    UnknownUser: "UnknownUser",
    InvalidPassword: "InvalidPassword",
    InvalidRegistrationData: "InvalidRegistrationData",
    InvalidBigDBKey: "InvalidBigDBKey",
    BigDBObjectTooLarge: "BigDBObjectTooLarge",
    BigDBObjectDoesNotExist: "BigDBObjectDoesNotExist",
    UnknownTable: "UnknownTable",
    UnknownIndex: "UnknownIndex",
    InvalidIndexValue: "InvalidIndexValue",
    NotObjectCreator: "NotObjectCreator",
    KeyAlreadyUsed: "KeyAlreadyUsed",
    StaleVersion: "StaleVersion",
    CircularReference: "CircularReference",
    HeartbeatFailed: "HeartbeatFailed",
    InvalidGameCode: "InvalidGameCode",
    VaultNotLoaded: "VaultNotLoaded",
    UnknownPayVaultProvider: "UnknownPayVaultProvider",
    DirectPurchaseNotSupportedByProvider: "DirectPurchaseNotSupportedByProvider",
    BuyingCoinsNotSupportedByProvider: "BuyingCoinsNotSupportedByProvider",
    NotEnoughCoins: "NotEnoughCoins",
    ItemNotInVault: "ItemNotInVault",
    InvalidPurchaseArguments: "InvalidPurchaseArguments",
    InvalidPayVaultProviderSetup: "InvalidPayVaultProviderSetup",
    UnknownPartnerPayAction: "UnknownPartnerPayAction",
    InvalidType: "InvalidType",
    IndexOutOfBounds: "IndexOutOfBounds",
    InvalidIdentifier: "InvalidIdentifier",
    InvalidArgument: "InvalidArgument",
    LoggedOut: "LoggedOut",
    InvalidSegment: "InvalidSegment",
    GameRequestsNotLoaded: "GameRequestsNotLoaded",
    AchievementsNotLoaded: "AchievementsNotLoaded",
    UnknownAchievement: "UnknownAchievement",
    NotificationsNotLoaded: "NotificationsNotLoaded",
    InvalidNotificationsEndpoint: "InvalidNotificationsEndpoint",
    NetworkIssue: "NetworkIssue",
    OneScoreNotLoaded: "OneScoreNotLoaded",
    PublishingNetworkNotAvailable: "PublishingNetworkNotAvailable",
    PublishingNetworkNotLoaded: "PublishingNetworkNotLoaded",
    DialogClosed: "DialogClosed",
    AdTrackCheckCookie: "AdTrackCheckCookie",
    codes: {
        0: "UnsupportedMethod",
        1: "GeneralError",
        2: "InternalError",
        3: "AccessDenied",
        4: "InvalidMessageFormat",
        5: "MissingValue",
        6: "GameRequired",
        7: "ExternalError",
        8: "ArgumentOutOfRange",
        9: "GameDisabled",
        10: "UnknownGame",
        11: "UnknownConnection",
        12: "InvalidAuth",
        13: "NoServersAvailable",
        14: "RoomDataTooLarge",
        15: "RoomAlreadyExists",
        16: "UnknownRoomType",
        17: "UnknownRoom",
        18: "MissingRoomId",
        19: "RoomIsFull",
        20: "NotASearchColumn",
        21: "QuickConnectMethodNotEnabled",
        22: "UnknownUser",
        23: "InvalidPassword",
        24: "InvalidRegistrationData",
        25: "InvalidBigDBKey",
        26: "BigDBObjectTooLarge",
        27: "BigDBObjectDoesNotExist",
        28: "UnknownTable",
        29: "UnknownIndex",
        30: "InvalidIndexValue",
        31: "NotObjectCreator",
        32: "KeyAlreadyUsed",
        33: "StaleVersion",
        34: "CircularReference",
        40: "HeartbeatFailed",
        41: "InvalidGameCode",
        50: "VaultNotLoaded",
        51: "UnknownPayVaultProvider",
        52: "DirectPurchaseNotSupportedByProvider",
        54: "BuyingCoinsNotSupportedByProvider",
        55: "NotEnoughCoins",
        56: "ItemNotInVault",
        57: "InvalidPurchaseArguments",
        58: "InvalidPayVaultProviderSetup",
        70: "UnknownPartnerPayAction",
        80: "InvalidType",
        81: "IndexOutOfBounds",
        82: "InvalidIdentifier",
        83: "InvalidArgument",
        84: "LoggedOut",
        90: "InvalidSegment",
        100: "GameRequestsNotLoaded",
        110: "AchievementsNotLoaded",
        111: "UnknownAchievement",
        120: "NotificationsNotLoaded",
        121: "InvalidNotificationsEndpoint",
        130: "NetworkIssue",
        131: "OneScoreNotLoaded",
        200: "PublishingNetworkNotAvailable",
        201: "PublishingNetworkNotLoaded",
        301: "DialogClosed",
        302: "AdTrackCheckCookie"
    }
};
(function() {
    _pio.client = function(a, c, b, e) {
        this.connectUserId = e;
        this.gameId = c;
        this.gameFS = new _pio.gameFS(c, b);
        this.errorLog = new _pio.errorLog(a);
        this.payVault = new _pio.payVault(a);
        this.bigDB = new _pio.bigDB(a);
        this.multiplayer = new _pio.multiplayer(a);
        this.gameRequests = new _pio.gameRequests(a);
        this.achievements = new _pio.achievements(a);
        this.playerInsight = new _pio.playerInsight(a);
        this.oneScore = new _pio.oneScore(a);
        this.notifications = new _pio.notifications(a);
        this.publishingNetwork = new _pio.publishingNetwork(a,
            this.connectUserId)
    }
})();
(function() {
    var a = {};
    _pio.gameFS = function(c, b) {
        if ("string" == typeof b && 0 < b.length) {
            var e = (b || "").split("|");
            if (1 <= e.length)
                for (var d = a[c.toLowerCase()] = {}, f = 0; f != e.length; f++) {
                    var g = e[f];
                    "alltoredirect" == g || "cdnmap" == g ? d.baseUrl = e[f + 1] : "alltoredirectsecure" == g || "cdnmapsecure" == g ? d.secureBaseUrl = e[f + 1] : d["." + g] = e[f + 1]
                }
        }
        this.getUrl = function(b, d) {
            if ("/" == !b[0]) throw _pio.error("The path given to getUrl must start with a slash, like: '/myfile.swf' or '/folder/file.jpg'");
            var e = a[c];
            return e ? (d ? e.secureBaseUrl :
                e.baseUrl) + (e["." + b] || b) : (d ? "https" : "http") + "://r.playerio.com/r/" + c + b
        }
    }
})();
(function() {
    _pio.gameRequests = function(a) {
        function c(a) {
            if (null == a || 0 == a.length) return [];
            for (var b = [], d = 0; d != a.length; d++) {
                var e = a[d];
                b.push(new _pio.gameRequest(e.id, e.type, e.senderuserid, e.created, e.data))
            }
            return b
        }
        var b = [];
        this.waitingRequests = "[ERROR: You tried to access gameRequests.waitingRequests before loading waiting requests. You have to call the refresh method first.]";
        var e = this;
        this.send = function(b, e, c, h, l) {
            a.gameRequestsSend(b, _pio.convertToKVArray(e), c, h, l, function(a) {})
        };
        this.refresh =
            function(d, f) {
                a.gameRequestsRefresh(b, d, f, function(a) {
                    e._playCodes = a.newplaycodes;
                    e.waitingRequests = c(a.requests)
                })
            };
        this["delete"] = function(b, f, g) {
            if ("object" == typeof b || b.length) {
                for (var d = [], l = 0; l != b.length; l++) {
                    var k = b[l].id;
                    if (k) d.push(k);
                    else {
                        b = _pio.error("No GameRequest id found on item#" + l + ". You have to use requests from the gameRequests.waitingRequests array. For instance: client.gameRequests.delete(client.gameRequests.waitingRequests, ...)");
                        _pio.handleError(b, g, b.code, b.message);
                        return
                    }
                }
                a.gameRequestsDelete(d,
                    f, g,
                    function(a) {
                        e.waitingRequests = c(a.requests)
                    })
            } else b = _pio.error("The first argument to delete should be an array: client.gameRequests.delete([requests], ...)"), _pio.handleError(b, g, b.code, b.message)
        }
    };
    _pio.gameRequest = function(a, c, b, e, d) {
        this.id = a;
        this.type = c;
        this.senderUserId = b;
        this.created = new Date(e);
        this.data = _pio.convertFromKVArray(d)
    }
})();
(function() {
    _pio.errorLog = function(a) {
        this.writeError = function(c, b, e, d) {
            a.writeError("Javascript", c, b, e, _pio.convertToKVArray(d))
        }
    }
})();
(function() {
    _pio.quickConnect = function() {
        this.simpleGetCaptcha = function(a, c, b, e, d) {
            (new _pio.channel).simpleGetCaptcha(a, c, b, e, d, function(a) {
                return new _pio.simpleGetCaptchaOutput(a.captchakey, a.captchaimageurl)
            })
        };
        this.simpleRecoverPassword = function(a, c, b, e) {
            (new _pio.channel).simpleRecoverPassword(a, c, b, e, function(a) {})
        }
    };
    _pio.simpleGetCaptchaOutput = function(a, c) {
        this.captchaKey = a;
        this.captchaImageUrl = c
    };
    PlayerIO.quickConnect = new _pio.quickConnect
})();
(function() {
    _pio.payVault = function(a) {
        function c(a) {
            if (null != a && (b = a.version, e.coins = a.coins || 0, e.items = [], a.items && a.items.length))
                for (var d = 0; d != a.items.length; d++) {
                    var c = a.items[d],
                        h = e.items[d] = new _pio.vaultItem(c.id, c.itemkey, (new Date).setTime(c.purchasedate));
                    _pio.bigDBDeserialize(c.properties, h, !0)
                }
        }
        var b = null;
        this.coins = "[ERROR: you tried to access payVault.coins before the vault was loaded. You have to refresh the vault before the .coins property is set to the right value]";
        this.items = "[ERROR: you tried to access payVault.items before the vault was loaded. You have to refresh the vault before the .items property is set to the right value]";
        this.has = function(a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0; d != this.items.length; d++)
                if (this.items[d].itemKey == a) return !0;
            return !1
        };
        this.first = function(a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0; d != this.items.length; d++)
                if (this.items[d].itemKey == a) return this.items[d];
            return null
        };
        this.count = function(a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0, e = 0; e != this.items.length; e++) this.items[e].itemKey == a && d++;
            return d
        };
        this.refresh = function(d, e) {
            a.payVaultRefresh(b, null, d, e, function(a) {
                c(a.vaultcontents)
            })
        };
        this.readHistory = function(b, e, c, h) {
            a.payVaultReadHistory(b, e, null, c, h, function(a) {
                for (var b = [], d = 0; d != a.entries.length; d++) {
                    var e = a.entries[d];
                    b.push(new _pio.payVaultHistoryEntry(e.type, e.amount, e.timestamp, e.itemkeys || [], e.reason, e.providertransactionid, e.providerprice))
                }
                return b
            })
        };
        this.credit = function(b, e, g, h) {
            a.payVaultCredit(b, e, null, g, h, function(a) {
                c(a.vaultcontents)
            })
        };
        this.debit = function(b, e, g, h) {
            a.payVaultDebit(b, e, null, g, h, function(a) {
                c(a.vaultcontents)
            })
        };
        this.consume = function(b, e, g) {
            if ("object" == typeof b || b.length) {
                for (var d = [], f = 0; f != b.length; f++) {
                    var k = b[f].id;
                    if (k) d.push(k);
                    else {
                        b = _pio.error("No PayVault item id found on item#" +
                            f + ". You have to use items from the payVault.items array. For instance: client.payVault.consume([client.payVault.first('sportscar')], ...)");
                        _pio.handleError(b, g, b.code, b.message);
                        return
                    }
                }
                a.payVaultConsume(d, null, e, g, function(a) {
                    c(a.vaultcontents)
                })
            } else b = _pio.error("The first argument to consume should be an array: client.payVault.consume([item], ...)"), _pio.handleError(b, g, b.code, b.message)
        };
        this.buy = function(b, e, g, h) {
            a.payVaultBuy(_pio.convertBuyItems(b), e, null, g, h, function(a) {
                c(a.vaultcontents)
            })
        };
        this.give = function(b, e, g) {
            a.payVaultGive(_pio.convertBuyItems(b), null, e, g, function(a) {
                c(a.vaultcontents)
            })
        };
        this.getBuyCoinsInfo = function(b, e, c, h) {
            a.payVaultPaymentInfo(b, _pio.convertToKVArray(e), null, c, h, function(a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        this.getBuyDirectInfo = function(b, e, c, h, l) {
            a.payVaultPaymentInfo(b, _pio.convertToKVArray(e), _pio.convertBuyItems(c), h, l, function(a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        var e = this
    };
    _pio.convertBuyItems = function(a) {
        if (null ==
            a) return [];
        for (var c = [], b = 0; b != a.length; b++) {
            var e = a[b].itemkey;
            if (!e) throw _pio.error("You have to specify an itemkey for the payvault item. Example:  {itemkey:'car'}");
            c.push({
                itemkey: e,
                payload: _pio.compareForChanges({
                    itemkey: e
                }, a[b], !0, !0)
            })
        }
        return c
    };
    _pio.vaultItem = function(a, c, b) {
        this.id = a;
        this.itemKey = c;
        this.purchaseDate = b
    };
    _pio.payVaultHistoryEntry = function(a, c, b, e, d, f, g) {
        this.type = a;
        this.amount = c;
        this.timestamp = (new Date).setTime(b);
        this.itemKeys = e;
        this.reason = d;
        this.providerTransactionId =
            f;
        this.providerPrice = g
    }
})();
(function() {
    _pio.bigDB = function(a) {
        function c() {
            for (var a = 0; a < d.length; a++) {
                var b = d[a],
                    e = !0,
                    c;
                for (c in b.objects)
                    if (b.objects[c]._internal_("get-is-saving")) {
                        e = !1;
                        break
                    }
                if (e) {
                    for (c in b.objects)
                        for (e = a + 1; e < d.length; e++) {
                            futureSave = d[e];
                            for (var k = 0; k < futureSave.objects.length; k++) futureSave.objects[k] == b.objects[c] && futureSave.fullOverwrite == b.fullOverwrite && futureSave.useOptimisticLock == b.useOptimisticLock && (b.changesets[c] = futureSave.changesets[k], b.futureSaves.push(futureSave))
                        }
                    d.splice(a, 1);
                    a--;
                    b.execute()
                }
            }
        }

        function b(a, b) {
            null == a ? a = [] : a instanceof Array || (a = [a]);
            null != b && (a = a.concat([b]));
            for (var d = [], e = 0; e != a.length; e++) {
                var c = a[e];
                switch (typeof c) {
                    case "boolean":
                        d.push({
                            valuetype: _pio.ValueType.Bool,
                            bool: c
                        });
                        break;
                    case "string":
                        d.push({
                            valuetype: _pio.ValueType.String,
                            string: c
                        });
                        break;
                    case "number":
                        0 != c % 1 ? d.push({
                            valuetype: _pio.ValueType.Double,
                            "double": c
                        }) : -2147483648 < c && 2147483647 > c ? d.push({
                            valuetype: _pio.ValueType.Int,
                            "int": c
                        }) : 0 < c && 4294967295 > c ? d.push({
                            valuetype: _pio.ValueType.UInt,
                            uint: c
                        }) : d.push({
                            valuetype: _pio.ValueType.Long,
                            "long": c
                        });
                        break;
                    case "object":
                        if (c.getTime && c.getMilliseconds) d.push({
                            valuetype: _pio.ValueType.DateTime,
                            datetime: c.getTime()
                        });
                        else throw Error("Don't know how to serialize type '" + typeof c + "' for BigDB");
                        break;
                    default:
                        throw Error("Don't know how to serialize type '" + typeof c + "' for BigDB");
                }
            }
            return d
        }
        var e = this,
            d = [];
        this.createObject = function(b, d, c, l, k) {
            var f = _pio.compareForChanges({}, c || {}, !0, !0);
            a.createObjects([{
                    key: d,
                    table: b,
                    properties: f
                }], !1, l,
                k,
                function(a) {
                    if (1 == a.objects.length) return new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, f);
                    throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error creating object");
                })
        };
        this.loadMyPlayerObject = function(b, d) {
            a.loadMyPlayerObject(b, d, function(a) {
                return new _pio.databaseobject(e, "PlayerObjects", a.playerobject.key, a.playerobject.version, !0, a.playerobject.properties)
            })
        };
        this.load = function(b, d, c, l) {
            a.loadObjects([{
                table: b,
                keys: [d]
            }], c, l, function(a) {
                if (1 == a.objects.length) return null ==
                    a.objects[0] ? null : new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties);
                throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error loading object");
            })
        };
        this.loadKeys = function(b, d, c, l) {
            a.loadObjects([{
                table: b,
                keys: d
            }], c, l, function(a) {
                for (var d = [], c = 0; c != a.objects.length; c++) {
                    var f = a.objects[c];
                    d[c] = null == f ? null : new _pio.databaseobject(e, b, f.key, f.version, !1, f.properties)
                }
                return d
            })
        };
        this.loadOrCreate = function(b, d, c, l) {
            a.createObjects([{
                key: d,
                table: b,
                properties: []
            }], !0, c, l, function(a) {
                if (1 == a.objects.length) return new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties);
                throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error creating object");
            })
        };
        this.deleteKeys = function(b, d, e, c) {
            a.deleteObjects([{
                table: b,
                keys: d
            }], e, c, function(a) {
                return null
            })
        };
        this.loadKeysOrCreate = function(b, d, c, l) {
            for (var f = [], g = 0; g != d.length; g++) f.push({
                key: d[g],
                table: b,
                properties: []
            });
            a.createObjects(f, !0, c, l, function(a) {
                for (var d = [], c = 0; c != a.objects.length; c++) {
                    var f =
                        a.objects[c];
                    d[c] = new _pio.databaseobject(e, b, f.key, f.version, !1, f.properties)
                }
                return d
            })
        };
        this.loadSingle = function(d, c, h, l, k) {
            a.loadMatchingObjects(d, c, b(h), 1, l, k, function(a) {
                return 0 == a.objects.length ? null : new _pio.databaseobject(e, d, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties)
            })
        };
        this.loadRange = function(d, c, h, l, k, m, n, q) {
            a.loadIndexRange(d, c, b(h, l), b(h, k), m, n, q, function(a) {
                for (var b = [], c = 0; c != a.objects.length; c++) {
                    var f = a.objects[c];
                    b[c] = null == f ? null : new _pio.databaseobject(e,
                        d, f.key, f.version, !1, f.properties)
                }
                return b
            })
        };
        this.deleteRange = function(d, e, c, l, k, m, n) {
            a.deleteIndexRange(d, e, b(c, l), b(c, k), m, n, function() {})
        };
        this.saveChanges = function(b, e, h, l, k, m) {
            var f = 1 == m;
            m = [];
            for (var g in h) {
                var t = h[g];
                if (!(t.existsInDatabase && t.key && t.table && t._internal_ && t.save)) {
                    b = _pio.error("You can only save database objects that exist in the database");
                    _pio.handleError(b, k, b.code, b.message);
                    return
                }
                var y = _pio.compareForChanges(e ? {} : t._internal_("get-dbCurrent"), t, !0, !0);
                (e || 0 < y.length) &&
                m.push({
                    key: t._internal_("get-key"),
                    table: t._internal_("get-table"),
                    fulloverwrite: e,
                    onlyifversion: b ? t._internal_("get-version") : null,
                    changes: y
                })
            }
            d.push({
                objects: h,
                changesets: m,
                fullOverwrite: e,
                useOptimisticLock: b,
                futureSaves: [],
                setIsSavingOnAll: function(a) {
                    for (var b = 0; b != this.objects.length; b++) this.objects[b]._internal_("set-is-saving", a)
                },
                done: function() {
                    this.setIsSavingOnAll(!1);
                    c()
                },
                execute: function() {
                    var b = this;
                    b.setIsSavingOnAll(!0);
                    0 < b.changesets.length ? a.saveObjectChanges(_pio.LockType.LockAll,
                        b.changesets, f, l,
                        function(a) {
                            b.done();
                            _pio.handleError(a, k, a.code, a.message)
                        },
                        function(a) {
                            for (var d = 0; d != b.objects.length; d++) {
                                var e = b.objects[d];
                                e._internal_("set-version", a.versions[d]);
                                e._internal_("change-dbCurrent", b.changesets[d].changes);
                                for (var c = 0; c != b.futureSaves.length; c++)
                                    for (var f = b.futureSaves[c], g = 0; g < f.objects.length; g++) f.objects[g] == e && (f.changesets.splice(g, 1), f.objects.splice(g, 1), g--)
                            }
                            b.done()
                        }) : (b.done(), setTimeout(l, 1))
                }
            });
            c()
        }
    };
    _pio.databaseobject = function(a, c, b, e, d, f) {
        var g = {},
            h = !1;
        _pio.bigDBDeserialize(f, g, !0);
        this.table = c;
        this.key = b;
        this.existsInDatabase = !0;
        this.save = function(b, e, c, f) {
            a.saveChanges(b, e, [this], c, f, d)
        };
        this._internal_ = function(a, d) {
            switch (a) {
                case "get-table":
                    return c;
                case "get-key":
                    return b;
                case "set-is-saving":
                    h = d;
                case "get-is-saving":
                    return h;
                case "get-version":
                    return e;
                case "set-version":
                    e = d;
                case "get-dbCurrent":
                    return g;
                case "change-dbCurrent":
                    _pio.bigDBDeserialize(d, g, !0)
            }
        };
        _pio.bigDBDeserialize(f, this, !0)
    };
    _pio.compareForChanges = function(a, c, b,
        e) {
        var d = [],
            f;
        for (f in c) {
            var g = c[f],
                h = a ? a[f] : null;
            switch (f) {
                case "table":
                    if (e) continue;
                case "key":
                    if (e) continue;
                case "save":
                    if (e) continue;
                case "existsInDatabase":
                    if (e) continue;
                case "_internal_":
                    if (e) continue;
                case "_circular_reference_finder_":
                    continue
            }
            if (null != g) {
                var l = b ? {
                    name: f
                } : {
                    index: parseInt(f)
                };
                switch (typeof g) {
                    case "boolean":
                        g != h && (l.value = {
                            valuetype: _pio.ValueType.Bool,
                            bool: g
                        }, d.push(l));
                        break;
                    case "number":
                        g != h && (isFinite(g) && Math.floor(g) === g ? l.value = -2147483648 <= g && 2147483647 >= g ? {
                            valuetype: _pio.ValueType.Int,
                            "int": g
                        } : 0 < g && 4294967295 >= g ? {
                            valuetype: _pio.ValueType.UInt,
                            uint: g
                        } : -0x7ffffffffffffc00 <= g && 0x7ffffffffffffc00 >= g ? {
                            valuetype: _pio.ValueType.Long,
                            "long": g
                        } : 0 < g && 1.844674407370955E19 >= g ? {
                            valuetype: _pio.ValueType.ULong,
                            ulong: g
                        } : {
                            valuetype: _pio.ValueType.Double,
                            "double": g
                        } : l.value = {
                            valuetype: _pio.ValueType.Double,
                            "double": g
                        }, d.push(l));
                        break;
                    case "string":
                        g != h && (l.value = {
                            valuetype: _pio.ValueType.String,
                            string: g
                        }, d.push(l));
                        break;
                    case "object":
                        if (g.getTime && g.getMilliseconds) g + "" != h + "" && (l.value = {
                            valuetype: _pio.ValueType.DateTime,
                            datetime: g.getTime()
                        }, d.push(l));
                        else {
                            if (g._circular_reference_finder_) throw new PlayerIOError(PlayerIOErrorCode.CircularReference, "The object you're trying to save contains a circular reference for " + (b ? "a property named" : "the array entry") + "): " + f);
                            g._circular_reference_finder_ = !0;
                            var k = g instanceof Array;
                            if (k && g.bytearray) {
                                k = Array(g.length);
                                for (h = 0; h != k.length; h++) {
                                    var m = g[h];
                                    if (0 <= m && 255 >= m) k[h] = m;
                                    else throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "The bytearray property '" + f + "' was supposed to only contain byte (0-255) values, but contained the value: " +
                                        m);
                                }
                                l.value = {
                                    valuetype: _pio.ValueType.ByteArray,
                                    bytearray: k
                                }
                            } else h = _pio.compareForChanges(h, g, !k, !1), l.value = k ? {
                                valuetype: _pio.ValueType.Array,
                                arrayproperties: h
                            } : {
                                valuetype: _pio.ValueType.Obj,
                                objectproperties: h
                            };
                            d.push(l);
                            delete g._circular_reference_finder_
                        }
                        break;
                    case "undefined":
                        break;
                    case "function":
                        break;
                    default:
                        throw Error("Don't know how to serialize type '" + typeof g + "' for BigDB");
                }
            }
        }
        for (f in a) null != c[f] && "undefined" != typeof c[f] || d.push(b ? {
            name: f
        } : {
            index: parseInt(f)
        });
        return d
    };
    _pio.bigDBDeserialize =
        function(a, c, b) {
            for (var e in a) {
                var d = a[e],
                    f = b ? d.name : d.index || 0;
                if (d = d.value) switch (d.valuetype || 0) {
                    case _pio.ValueType.String:
                        c[f] = d.string || "";
                        break;
                    case _pio.ValueType.Int:
                        c[f] = d["int"] || 0;
                        break;
                    case _pio.ValueType.UInt:
                        c[f] = d.uint || 0;
                        break;
                    case _pio.ValueType.Long:
                        c[f] = d["long"] || 0;
                        break;
                    case _pio.ValueType.Bool:
                        c[f] = d.bool || 0;
                        break;
                    case _pio.ValueType.Float:
                        c[f] = d["float"] || 0;
                        break;
                    case _pio.ValueType.Double:
                        c[f] = d["double"] || 0;
                        break;
                    case _pio.ValueType.ByteArray:
                        c[f] = d.bytearray;
                        c[f].bytearray = !0;
                        break;
                    case _pio.ValueType.DateTime:
                        c[f] = new Date(d.datetime || 0);
                        break;
                    case _pio.ValueType.Array:
                        var g = c[f] instanceof Array ? c[f] : [];
                        _pio.bigDBDeserialize(d.arrayproperties, g, !1);
                        c[f] = g;
                        break;
                    case _pio.ValueType.Obj:
                        g = "object" == typeof c[f] ? c[f] : {}, _pio.bigDBDeserialize(d.objectproperties, g, !0), c[f] = g
                } else delete c[f]
            }
        }
})();
(function() {
    _pio.multiplayer = function(a) {
        var b = this;
        this.developmentServer = null;
        this.useSecureConnections = !1;
        this.createRoom = function(d, e, c, h, l, k) {
            a.createRoom(d, e, c, _pio.convertToKVArray(h), null != b.developmentServer, l, k, function(a) {
                return a.roomid
            })
        };
        this.joinRoom = function(d, e, c, h) {
            clearTimeout(setTimeout(function() {
                c(new _pio.connection)
            }, 1E4));
            var f = Error();
            a.joinRoom(d, _pio.convertToKVArray(e), null != b.developmentServer, function() {}, h, function(a) {
                return new _pio.connection(f, b.developmentServer,
                    b.useSecureConnections, a.endpoints, a.joinkey, e || {}, c, h)
            })
        };
        this.createJoinRoom = function(d, e, c, h, l, k, m) {
            clearTimeout(setTimeout(function() {
                k(new _pio.connection)
            }, 1E4));
            var f = Error();
            a.createJoinRoom(d, e, c, _pio.convertToKVArray(h), _pio.convertToKVArray(l), null != b.developmentServer, function() {}, m, function(a) {
                return new _pio.connection(f, b.developmentServer, b.useSecureConnections, a.endpoints, a.joinkey, l || {}, k, m)
            })
        };
        this.listRooms = function(d, e, c, h, l, k) {
            a.listRooms(d, _pio.convertToKVArray(e), c, h, null !=
                b.developmentServer, l, k,
                function(a) {
                    var b = [];
                    if (a.rooms && 0 < a.rooms.length)
                        for (var d = 0; d != a.rooms.length; d++) {
                            var e = a.rooms[d];
                            b.push(new _pio.roomInfo(e.id, e.roomtype, e.onlineusers, _pio.convertFromKVArray(e.roomdata)))
                        }
                    return b
                })
        }
    };
    _pio.websocketConnection = function(a, e, d, c, g, h, l) {
        var b = this,
            f = !1,
            n = new _pio.messageSerializer,
            q = !1,
            t = null;
        e = (e ? "wss://" : "ws://") + d + "/";
        try {
            t = "undefined" != typeof MozWebSocket ? new MozWebSocket(e) : new WebSocket(e)
        } catch (r) {
            g(!1, "" + r);
            return
        }
        var y = setTimeout(function() {
            f ||
                (f = !0, g(!1, "Connect attempt timed out"))
        }, c);
        t.onopen = function() {
            f || (clearTimeout(y), q = f = !0, g(q))
        };
        t.onclose = function(a) {
            b.disconnect()
        };
        t.onerror = function(a) {
            b.disconnect()
        };
        t.onmessage = function(b) {
            if (q)
                if (a) {
                    var d = new FileReader;
                    d.onloadend = function() {
                        for (var a = new Uint8Array(d.result), b = Array(a.length), e = 0; e != a.length; e++) b[e] = a[e];
                        l(n.deserializeMessage(b, 0, b.length))
                    };
                    d.readAsArrayBuffer(b.data)
                } else b = _pio.base64decode(b.data), l(n.deserializeMessage(b, 0, b.length))
        };
        this.disconnect = function() {
            if (q) {
                q = !1;
                h();
                try {
                    t.close()
                } catch (r) {
                    _pio.debugLog(r)
                }
            }
        };
        this.sendMessage = function(b) {
            b = n.serializeMessage(b);
            if (a) {
                for (var d = new Uint8Array(b.length), e = 0; e < b.length; e++) d[e] = b[e];
                t.send(d.buffer)
            } else b = _pio.base64encode(b), t.send(b)
        }
    };
    _pio.connection = function(a, e, d, c, g, h, l, k) {
        function b(b) {
            function n() {
                if (0 < z.length) {
                    var e = z[0];
                    z.splice(0, 1);
                    var c = b(d, e, 4E3, function(a, b) {
                        if (a) {
                            x = c;
                            f.connected = !0;
                            var d = f.createMessage("join");
                            d.addString(g);
                            if (null != h)
                                for (var l in h) d.addString(l), d.addString("" + h[l]);
                            f.sendMessage(d)
                        } else _pio.debugLog("Unable to connect to endpoint: " + e + '. reason: "' + b + (0 < z.length ? '". Trying next endpoint.' : '". No more endpoints to try.')), n()
                    }, function(a) {
                        f.connected && (f.connected = !1, setTimeout(function() {
                            for (var a = 0; a != t.length; a++) _pio.runCallback(t[a].callback, f, t[a].stackSource)
                        }, 100))
                    }, function(b) {
                        q ? "playerio.joinresult" == b.type ? (q = !1, b.getBoolean(0) ? _pio.runCallback(l, f, null) : _pio.handleError(a, k, b.getInt(1), b.getString(2))) : _pio.handleError(a, k, PlayerIOErrorCode.GeneralError,
                            "The expected inital messagetype is: playerio.joinresult, received: " + joinResult.getType()) : (m(b.type, b), m("*", b))
                    })
                } else _pio.handleError(a, k, PlayerIOErrorCode.GeneralError, "Could not establish a socket connection to any of the given endpoints for the room")
            }

            function m(a, b) {
                var d = y[a];
                if (d)
                    for (var e = 0; e < d.length; e++) _pio.runCallback(d[e].callback, b, d[e].stackSource)
            }
            var z = [];
            if (e) z.push(e);
            else
                for (var r = 0; r != c.length; r++) z.push(c[r].address + ":" + c[r].port);
            n()
        }
        var f = this,
            q = !0,
            t = [],
            y = {},
            r = [],
            x = null,
            w = /(WebKit|Firefox|Trident)\/([0-9]+)/gi.exec(navigator.userAgent),
            z = w && 3 <= w.length ? w[1] : null;
        w = w && 3 <= w.length ? parseInt(w[2]) : null;
        window.FileReader && "WebKit" == z && 535 <= w || "Firefox" == z && 11 <= w || "Trident" == z && 6 <= w ? b(function(a, b, d, e, c, f) {
            return new _pio.websocketConnection(!0, a, b, d, e, c, f)
        }) : _pio.isFlashFallbackEnabled(function(a) {
            a ? b(function(a, b, d, e, c, f) {
                return new _pio.flashSocketConnection(b, d, e, c, f)
            }) : b(function(a, b, d, e, c, f) {
                return new _pio.websocketConnection(!1, a, b, d, e, c, f)
            })
        });
        this.connected = !1;
        this.addDisconnectCallback = function(a) {
            t.push({
                callback: a,
                stackSourc: Error()
            })
        };
        this.addMessageCallback = function(a, b) {
            null == a && (a = "*");
            var d = y[a];
            d || (y[a] = d = []);
            d.push({
                callback: b,
                stackSource: Error()
            })
        };
        this.removeDisconnectCallback = function(a) {
            for (var b = 0; b < t.length; b++) t[b].callback == a && (t.splice(b, 1), b--)
        };
        this.removeMessageCallback = function(a) {
            for (var b in y)
                for (var d = y[b], e = 0; e < d.length; e++) d[e].callback == a && (d.splice(e, 1), e--)
        };
        this.createMessage = function(a) {
            for (var b = new _pio.message(a),
                    d = 1; d < arguments.length; d++) b.add(arguments[d]);
            return b
        };
        this.send = function(a) {
            var b = this.createMessage.apply(this, arguments);
            this.sendMessage(b)
        };
        this.sendMessage = function(a) {
            f.connected ? x.sendMessage(a) : r.push(a)
        };
        this.disconnect = function() {
            f.connected && x.disconnect()
        }
    };
    _pio.message = function(a) {
        function b(a, b, d, e) {
            if (a) k.push(b), l.push(d), h.length = k.length;
            else throw _pio.error("The given value (" + b + ") is not " + e);
        }

        function d(a, b) {
            if (a > k.length) throw _pio.error("this message (" + h.type + ") only has " +
                k.length + " entries");
            if (l[a] == b) return k[a];
            throw _pio.error("Value at index:" + a + " is a " + c(l[a]) + " and not a " + c(b) + " as requested. The value is: " + k[a]);
        }

        function c(a) {
            return {
                0: "Integer",
                1: "Unsigned Integer",
                2: "Long",
                3: "Unsigned Long",
                4: "Double",
                5: "Float",
                6: "String",
                7: "ByteArray",
                8: "Boolean"
            }[a]
        }

        function g(a) {
            var b = "object" == typeof a && "undefined" != typeof a.length;
            if (b)
                for (var d = 0; d != a.length; d++)
                    if (255 < a[d] || 0 > a[d]) {
                        b = !1;
                        break
                    }
            return b
        }
        var h = this,
            l = [],
            k = [];
        this.type = a;
        this.length = 0;
        this.add = function() {
            for (var a =
                    0; a < arguments.length; a++) {
                var b = arguments[a];
                switch (typeof b) {
                    case "string":
                        h.addString(b);
                        break;
                    case "boolean":
                        h.addBoolean(b);
                        break;
                    case "number":
                        if (isFinite(b) && Math.floor(b) === b)
                            if (-2147483648 <= b && 2147483647 >= b) {
                                h.addInt(b);
                                break
                            } else if (0 < b && 4294967295 >= b) {
                            h.addUInt(b);
                            break
                        } else if (-0x7ffffffffffffc00 <= b && 0x7ffffffffffffc00 >= b) {
                            h.addLong(b);
                            break
                        } else if (0 < b && 1.844674407370955E19 >= b) {
                            h.addULong(b);
                            break
                        }
                        h.addDouble(b);
                        break;
                    case "object":
                        if (g(b)) {
                            this.addByteArray(b);
                            break
                        }
                    default:
                        throw _pio.error("The type of the value (" +
                            b + ") cannot be inferred");
                }
            }
        };
        this.addInt = function(a) {
            b(-2147483648 <= a && 2147483647 >= a, Math.trunc(a), 0, "an integer (32bit)")
        };
        this.addUInt = function(a) {
            b(0 <= a && 4294967295 >= a, Math.trunc(a), 1, "an unsigned integer (32bit)")
        };
        this.addLong = function(a) {
            b(-0x7ffffffffffffc00 <= a && 0x7ffffffffffffc00 >= a, Math.trunc(a), 2, "a long (64bit)")
        };
        this.addULong = function(a) {
            b(0 <= a && 1.844674407370955E19 >= a, a, 3, "an unsigned long (64bit)")
        };
        this.addBoolean = function(a) {
            b(!0, a ? !0 : !1, 8, "a boolean value")
        };
        this.addFloat = function(a) {
            b(!0,
                Number(a), 5, "a floating point value (32bit)")
        };
        this.addDouble = function(a) {
            b(!0, Number(a), 4, "a double floating point value (64bit)")
        };
        this.addByteArray = function(a) {
            b(g(a), a, 7, "a bytearray")
        };
        this.addString = function(a) {
            b(!0, a + "", 6, "a string")
        };
        this.getInt = function(a) {
            return d(a, 0)
        };
        this.getUInt = function(a) {
            return d(a, 1)
        };
        this.getLong = function(a) {
            return d(a, 2)
        };
        this.getULong = function(a) {
            return d(a, 3)
        };
        this.getBoolean = function(a) {
            return d(a, 8)
        };
        this.getDouble = function(a) {
            return d(a, 4)
        };
        this.getFloat =
            function(a) {
                return d(a, 5)
            };
        this.getByteArray = function(a) {
            return d(a, 7)
        };
        this.getString = function(a) {
            return d(a, 6)
        };
        this.toString = function() {
            for (var a = "msg.Type = " + this.type, b = 0; b != this.length; b++) a += ", msg[" + b + "] = " + k[b] + " (" + c(l[b]) + ")";
            return a
        };
        this._internal_ = function(a, b) {
            switch (a) {
                case "get-objects":
                    return k;
                case "get-types":
                    return l
            }
        }
    };
    _pio.roomInfo = function(a, e, d, c) {
        this.id = a;
        this.roomType = e;
        this.onlineUsers = d;
        this.roomData = c
    };
    _pio.byteWriter = function() {
        this.bytes = [];
        this.writeByte = function(a) {
            if (0 <=
                a && 255 >= a) this.bytes.push(a);
            else throw Error("This is not a byte value: " + a);
        };
        this.writeBytes = function(a) {
            for (var b = 0; b != a.length; b++) this.writeByte(a[b])
        };
        this.writeTagWithLength = function(a, e, d) {
            63 < a || 0 > a ? this.writeBottomPatternAndBytes(d, _pio.binaryserializer.bytesFromInt(a)) : this.writeByte(e | a)
        };
        this.writeBottomPatternAndBytes = function(a, e) {
            var b = 0;
            0 != e[0] ? b = 3 : 0 != e[1] ? b = 2 : 0 != e[2] && (b = 1);
            this.writeByte(a | b);
            for (b = e.length - b - 1; b != e.length; b++) this.writeByte(e[b])
        };
        this.writeLongPattern = function(a,
            e, d) {
            for (var b = 0, c = 0; 7 != c; c++)
                if (0 != d[c]) {
                    b = 7 - c;
                    break
                }
            3 < b ? this.writeByte(e | b - 4) : this.writeByte(a | b);
            for (c = d.length - b - 1; c != d.length; c++) this.writeByte(d[c])
        }
    };
    _pio.messageSerializer = function() {
        this.serializeMessage = function(a) {
            var b = new _pio.byteWriter;
            b.writeTagWithLength(a.length, 128, 4);
            var d = _pio.binaryserializer.bytesFromString(a.type);
            b.writeTagWithLength(d.length, 192, 12);
            b.writeBytes(d);
            for (var c = 0; c != a.length; c++) switch (d = a._internal_("get-objects")[c], a._internal_("get-types")[c]) {
                case 6:
                    d =
                        _pio.binaryserializer.bytesFromString(d);
                    b.writeTagWithLength(d.length, 192, 12);
                    b.writeBytes(d);
                    break;
                case 0:
                    b.writeTagWithLength(d, 128, 4);
                    break;
                case 1:
                    b.writeBottomPatternAndBytes(8, _pio.binaryserializer.bytesFromUInt(d));
                    break;
                case 2:
                    b.writeLongPattern(48, 52, _pio.binaryserializer.bytesFromLong(d));
                    break;
                case 3:
                    b.writeLongPattern(56, 60, _pio.binaryserializer.bytesFromULong(d));
                    break;
                case 7:
                    b.writeTagWithLength(d.length, 64, 16);
                    b.writeBytes(d);
                    break;
                case 4:
                    b.writeByte(3);
                    b.writeBytes(_pio.binaryserializer.bytesFromDouble(d));
                    break;
                case 5:
                    b.writeByte(2);
                    d = _pio.binaryserializer.bytesFromFloat(d);
                    b.writeBytes(d);
                    break;
                case 8:
                    b.writeByte(d ? 1 : 0)
            }
            return b.bytes
        };
        this.deserializeMessage = function(a, e, d) {
            var b = e;
            e += d;
            d = null;
            for (var c = 0; b < e;) {
                var h = 0,
                    l = 0,
                    k = a[b];
                b++;
                var m = k & 192;
                0 == m && (m = k & 60, 0 == m && (m = k));
                switch (m) {
                    case 12:
                    case 16:
                        h = (k & 3) + 1;
                        if (b + h > e) throw Error("Unexpected: Unfinished message");
                        k = h;
                        h = _pio.binaryserializer.intFromBytes(a, b, h);
                        b += k;
                        break;
                    case 192:
                        h = k & 63;
                        break;
                    case 128:
                        l = k & 63;
                        break;
                    case 64:
                        h = k & 63;
                        break;
                    case 4:
                    case 8:
                    case 48:
                    case 56:
                        h =
                            (k & 3) + 1;
                        break;
                    case 52:
                    case 60:
                        h = (k & 3) + 5;
                        break;
                    case 3:
                        h = 8;
                        break;
                    case 2:
                        h = 4
                }
                if (b + h > e) throw Error("Unexpected: Unfinished message");
                switch (m) {
                    case 12:
                    case 192:
                        null == d ? (d = new _pio.message(_pio.binaryserializer.stringFromBytes(a, b, h)), c++) : d.addString(_pio.binaryserializer.stringFromBytes(a, b, h));
                        break;
                    case 4:
                        l = _pio.binaryserializer.intFromBytes(a, b, h);
                    case 128:
                        0 == c ? c = l : d.addInt(l);
                        break;
                    case 16:
                    case 64:
                        d.addByteArray(a.slice(b, b + h));
                        break;
                    case 8:
                        d.addUInt(_pio.binaryserializer.uintFromBytes(a, b, h));
                        break;
                    case 48:
                    case 52:
                        d.addLong(_pio.binaryserializer.longFromBytes(a, b, h));
                        break;
                    case 56:
                    case 60:
                        d.addULong(_pio.binaryserializer.ulongFromBytes(a, b, h));
                        break;
                    case 3:
                        d.addDouble(_pio.binaryserializer.doubleFromBytes(a, b, h));
                        break;
                    case 2:
                        d.addFloat(_pio.binaryserializer.floatFromBytes(a, b, h));
                        break;
                    case 1:
                        d.addBoolean(!0);
                        break;
                    case 0:
                        d.addBoolean(!1)
                }
                b += h;
                if (null != d && 0 == --c) return d
            }
            throw Error("Unexpected: Misaligned message");
        }
    };
    _pio.binaryserializer = {
        pow2: function(a) {
            return 0 <= a && 31 > a ? 1 << a : this.pow2[a] ||
                (this.pow2[a] = Math.pow(2, a))
        },
        _intEncode: function(a, e) {
            if (4 == e) var b = [a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255];
            else {
                if (0 <= a) {
                    b = Math.floor(a / this.pow2(32));
                    var c = a - b * this.pow2(32)
                } else b = Math.floor(a / this.pow2(32)), c = a - b * this.pow2(32), b += this.pow2(32);
                b = [b >>> 24 & 255, b >>> 16 & 255, b >>> 8 & 255, b & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255]
            }
            return b
        },
        _floatEncode: function(a, e, d) {
            var b = 0 > a ? 1 : 0,
                c, h = ~(-1 << d - 1),
                l = 1 - h;
            0 > a && (a = -a);
            0 === a ? a = c = 0 : isNaN(a) ? (c = 2 * h + 1, a = 1) : Infinity === a ? (c = 2 * h + 1, a = 0) : (c = Math.floor(Math.log(a) /
                Math.LN2), c >= l && c <= h ? (a = Math.floor((a * this.pow2(-c) - 1) * this.pow2(e)), c += h) : (a = Math.floor(a / this.pow2(l - e)), c = 0));
            for (h = []; 8 <= e;) h.push(a % 256), a = Math.floor(a / 256), e -= 8;
            c = c << e | a;
            for (d += e; 8 <= d;) h.push(c & 255), c >>>= 8, d -= 8;
            h.push(b << d | c);
            h.reverse();
            return h
        },
        bytesFromString: function(a) {
            for (var b = [], d = 0; d < a.length; d++)
                if (127 >= a.charCodeAt(d)) b.push(a.charCodeAt(d));
                else
                    for (var c = encodeURIComponent(a.charAt(d)).substr(1).split("%"), g = 0; g < c.length; g++) b.push(parseInt(c[g], 16));
            return b
        },
        bytesFromInt: function(a) {
            return this._intEncode(a,
                4)
        },
        bytesFromUInt: function(a) {
            return this._intEncode(a, 4)
        },
        bytesFromLong: function(a) {
            return this._intEncode(a, 8)
        },
        bytesFromULong: function(a) {
            return this._intEncode(a, 8)
        },
        bytesFromFloat: function(a) {
            return this._floatEncode(a, 23, 8)
        },
        bytesFromDouble: function(a) {
            return this._floatEncode(a, 52, 11)
        },
        _intDecode: function(a, c, d, f, g) {
            var b = c + d - 1;
            c = g && d == f && a[c] & 128;
            f = 0;
            g = 1;
            for (var e = 0; e < d; e++) {
                var k = a[b - e];
                c && (k = (k ^ 255) + g, g = k >> 8, k &= 255);
                f += k * this.pow2(8 * e)
            }
            return c ? -f : f
        },
        _float32Decode: function(a, c) {
            var b = a.slice(c,
                    c + 4).reverse(),
                e = 1 - 2 * (b[3] >> 7),
                g = (b[3] << 1 & 255 | b[2] >> 7) - 127;
            b = (b[2] & 127) << 16 | b[1] << 8 | b[0];
            return 128 === g ? 0 !== b ? NaN : Infinity * e : -127 === g ? e * b * this.pow2(-149) : e * (1 + b * this.pow2(-23)) * this.pow2(g)
        },
        _float64Decode: function(a, c) {
            var b = a.slice(c, c + 8).reverse(),
                e = 1 - 2 * (b[7] >> 7),
                g = ((b[7] << 1 & 255) << 3 | b[6] >> 4) - 1023;
            b = (b[6] & 15) * this.pow2(48) + b[5] * this.pow2(40) + b[4] * this.pow2(32) + b[3] * this.pow2(24) + b[2] * this.pow2(16) + b[1] * this.pow2(8) + b[0];
            return 1024 === g ? 0 !== b ? NaN : Infinity * e : -1023 === g ? e * b * this.pow2(-1074) : e * (1 + b *
                this.pow2(-52)) * this.pow2(g)
        },
        stringFromBytes: function(a, c, d) {
            for (var b = "", e = c; e < c + d; e++) b += 127 >= a[e] ? 37 === a[e] ? "%25" : String.fromCharCode(a[e]) : "%" + a[e].toString(16).toUpperCase();
            return decodeURIComponent(b)
        },
        intFromBytes: function(a, c, d) {
            return this._intDecode(a, c, d, 4, !0)
        },
        uintFromBytes: function(a, c, d) {
            return this._intDecode(a, c, d, 4, !1)
        },
        longFromBytes: function(a, c, d) {
            return this._intDecode(a, c, d, 8, !0)
        },
        ulongFromBytes: function(a, c, d) {
            return this._intDecode(a, c, d, 8, !1)
        },
        floatFromBytes: function(a, c,
            d) {
            return 4 == d ? this._float32Decode(a, c) : NaN
        },
        doubleFromBytes: function(a, c, d) {
            return 8 == d ? this._float64Decode(a, c) : NaN
        }
    };
    for (var a = [], c = 0; 65 != c; c++) a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charCodeAt(c)] = c;
    _pio.base64encode = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var f = a[c],
                g = ++c <= a.length ? a[c] : NaN,
                h = ++c <= a.length ? a[c] : NaN,
                l = f >> 2;
            f = (f & 3) << 4 | g >> 4;
            var k = (g & 15) << 2 | h >> 6,
                m = h & 63;
            isNaN(g) ? k = m = 64 : isNaN(h) && (m = 64);
            b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l));
            b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f));
            b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k));
            b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m))
        }
        return b.join("")
    };
    _pio.base64decode = function(b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var f = a[b.charCodeAt(d)],
                g = ++d < b.length ? a[b.charCodeAt(d)] : 64,
                h = ++d < b.length ? a[b.charCodeAt(d)] : 64,
                l = ++d < b.length ? a[b.charCodeAt(d)] : 64,
                k = (g & 15) << 4 | h >> 2,
                m = (h & 3) <<
                6 | l;
            c.push(f << 2 | g >> 4);
            64 != h && (c.push(k), 64 != l && c.push(m))
        }
        return c
    }
})();
(function() {
    _pio.achievements = function(a) {
        function c(a, b) {
            var c = new _pio.achievement(a.identifier, a.title, a.description, a.imageurl, a.progress, a.progressgoal, a.lastupdated);
            if ("string" !== typeof e.myAchievements)
                for (var d = 0; d < e.myAchievements.length; d++) e.myAchievements[d].id == c.id && (e.myAchievements[d] = c, e.currentVersion = null);
            if (b)
                for (d = 0; d < e.onCompleteHandlers.length; d++)(0, e.onCompleteHandlers[d])(c);
            return c
        }
        var b = null;
        this.myAchievements = "[ERROR: You tried to access achievements.myAchievements before loading them. You have to call the refresh method first.]";
        this.onCompleteHandlers = [];
        var e = this;
        this.addOnComplete = function(a) {
            if ("function" === typeof a && 1 == a.length) e.onCompleteHandlers.push(a);
            else throw new PlayerIOError(PlayerIOErrorCode.InvalidArgument, "Expects argument to be a function that takes an achievement as an argument.");
        };
        this.get = function(a) {
            if ("string" === typeof e.myAchievements) return null;
            for (var b = 0; b < e.myAchievements.length; b++)
                if (e.myAchievements[b].id == a) return e.myAchievements[b];
            return null
        };
        this.refresh = function(c, f) {
            a.achievementsRefresh(b,
                c, f,
                function(a) {
                    if (b != a.version)
                        if (b = a.version, null == a.achievements || 0 == a.achievements.length) e.myAchievements = [];
                        else {
                            for (var c = [], d = 0; d < a.achievements.length; d++) {
                                var f = a.achievements[d];
                                c.push(new _pio.achievement(f.identifier, f.title, f.description, f.imageurl, f.progress, f.progressgoal, f.lastupdated))
                            }
                            e.myAchievements = c
                        }
                })
        };
        this.load = function(b, c, e) {
            "object" == typeof b || requests.length ? a.achievementsLoad(b, c, e, function(a) {
                if (null == a || 0 == a.length) return {};
                for (var b = {}, c = 0; c < a.userachievements.length; c++) {
                    for (var d =
                            a.userachievements[c], e = [], f = 0; f < d.achievements.length; f++) {
                        var g = d.achievements[f];
                        e.push(new _pio.achievement(g.identifier, g.title, g.description, g.imageurl, g.progress, g.progressgoal, g.lastupdated))
                    }
                    b[d.userid] = e
                }
                return b
            }) : (b = _pio.error("The first argument to load should be an array: client.achievements.load(['user1', 'user2', ...], ...)"), _pio.handleError(b, e, b.code, b.message))
        };
        this.progressSet = function(b, e, g, h) {
            a.achievementsProgressSet(b, e, g, h, function(a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressAdd = function(b, e, g, h) {
            a.achievementsProgressAdd(b, e, g, h, function(a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressMax = function(b, e, g, h) {
            a.achievementsProgressMax(b, e, g, h, function(a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressComplete = function(b, e, g) {
            a.achievementsProgressComplete(b, e, g, function(a) {
                return c(a.achievement, a.completednow)
            })
        }
    };
    _pio.achievement = function(a, c, b, e, d, f, g) {
        this.id = a;
        this.title = c;
        this.description = b;
        this.imageUrl = e;
        this.progress = "undefined" ===
            typeof d ? 0 : d;
        this.progressGoal = f;
        this.lastUpdated = new Date(1E3 * g);
        this.progressRatio = this.progress / this.progressGoal;
        this.completed = this.progress == this.progressGoal
    }
})();
(function() {
    _pio.playerInsight = function(a) {
        function c(a) {
            b.playersOnline = -1 == a.playersonline ? "[ERROR: The current connection does not have the rights required to read the playersonline variable.]" : a.playersonline;
            b.segments = _pio.convertFromKVArray(a.segments)
        }
        this.playersOnline = "[ERROR: You tried to access playerInsight.playersOnline before loading it. You have to call the refresh method first.]";
        this.segments = {};
        var b = this;
        this.refresh = function(b, d) {
            a.playerInsightRefresh(b, d, function(a) {
                c(a.state)
            })
        };
        this.setSegments = function(b, d, f) {
            a.playerInsightSetSegments(_pio.convertToSegmentArray(b), d, f, function(a) {
                c(a.state)
            })
        };
        this.trackInvitedBy = function(b, c, f, g) {
            a.playerInsightTrackInvitedBy(b, c, f, g, function(a) {})
        };
        this.trackEvent = function(b, c, f, g) {
            a.playerInsightTrackEvents([{
                eventtype: b,
                value: c
            }], f, g, function(a) {})
        };
        this.trackExternalPayment = function(b, c, f, g) {
            a.playerInsightTrackExternalPayment(b, c, f, g, function(a) {})
        };
        this.sessionKeepAlive = function(b, c) {
            a.playerInsightSessionKeepAlive(b, c, function(a) {})
        }
    }
})();
(function() {
    _pio.oneScore = function(a) {
        this.percentile = "[ERROR: You tried to access oneScore.percentile before loading the OneScore. You have to call the refresh method first.]";
        this.score = "[ERROR: You tried to access oneScore.score before loading the OneScore. You have to call the refresh method first.]";
        this.topRank = "[ERROR: You tried to access oneScore.topRank before loading the OneScore. You have to call the refresh method first.]";
        var c = this;
        this.refresh = function(b, e) {
            a.oneScoreRefresh(b, e, function(a) {
                a =
                    new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank
            })
        };
        this.set = function(b, e, d) {
            a.oneScoreSet(b, e, d, function(a) {
                a = new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank;
                return a
            })
        };
        this.add = function(b, e, d) {
            a.oneScoreAdd(b, e, d, function(a) {
                a = new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank;
                return a
            })
        };
        this.load = function(b, c, d) {
            if ("object" == typeof b || requests.length) a.oneScoreLoad(b, c, d, function(a) {
                if (null == a || null == a.onescores || 0 == a.onescores.length) return [];
                for (var c = [], d = 0, e = 0; e < b.length; e++) {
                    var f = a.onescores[d];
                    f && b[e] == f.userid ? (c.push(new _pio.oneScoreValue(f.percentile, f.score, f.toprank)), d++) : c.push(null)
                }
                return c
            });
            else c = _pio.error("The first argument to load should be an array: client.oneScore.load(['user1', 'user2', ...], ...)"),
                _pio.handleError(c, d, c.code, c.message)
        }
    };
    _pio.oneScoreValue = function(a, c, b) {
        this.percentile = "undefined" === typeof a ? 0 : a;
        this.score = "undefined" === typeof c ? 0 : c;
        this.topRank = "undefined" === typeof b ? 0 : b
    }
})();
(function() {
    _pio.notifications = function(a) {
        function c(a) {
            if (a.version != d) {
                var b = [];
                if (a.endpoints)
                    for (var c = 0; c != a.endpoints.length; c++) {
                        var f = a.endpoints[c];
                        b[c] = new _pio.notificationEndpoint(f.type, f.identifier, _pio.convertFromKVArray(f.configuration), f.enabled ? !0 : !1)
                    }
                d = a.version;
                e.myEndpoints = b
            }
        }

        function b(a) {
            var b = [];
            if (a && 0 < a.length)
                for (var c = 0; c != a.length; c++) {
                    var d = a[c];
                    d.type && d.identifier && b.push({
                        type: d.type,
                        identifier: d.identifier
                    })
                }
            return b
        }
        this.myEndpoints = "[ERROR: You tried to access notifications.myEndpoints before calling refresh.]";
        var e = this,
            d = "";
        this.refresh = function(b, e) {
            a.notificationsRefresh(d, b, e, c)
        };
        this.registerEndpoint = function(b, g, h, l, k, m) {
            var f;
            a: {
                if ("" != d)
                    for (f = 0; f != e.myEndpoints.length; f++) {
                        var q = e.myEndpoints[f];
                        if (q.type == b && q.identifier == g) {
                            f = q;
                            break a
                        }
                    }
                f = null
            }(q = null == f || f.enabled != l) || (q = JSON.stringify(f.configuration) != JSON.stringify(h));
            q ? a.notificationsRegisterEndpoints(d, [{
                type: b,
                identifier: g,
                configuration: _pio.convertToKVArray(h),
                enabled: l
            }], k, m, c) : k && k()
        };
        this.toggleEndpoints = function(e, g, h, l) {
            e = b(e);
            0 < e.length ? a.notificationsToggleEndpoints(d, e, g ? !0 : !1, h, l, c) : h && h()
        };
        this.deleteEndpoints = function(e, g, h) {
            e = b(e);
            0 < e.length ? a.notificationsDeleteEndpoints(d, e, g, h, c) : g && g()
        };
        this.send = function(b, c, d) {
            for (var e = [], f = 0; f != b.length; f++) {
                var g = b[f],
                    h = {
                        recipient: g.recipientUserId,
                        endpointtype: g.endpointType,
                        data: {}
                    };
                0 != (h.recipient + "").length && 0 != (h.endpointtype + "").length || console.log("error");
                for (var q in g) "recipientUserId" != q && "endpointType" != q && (h.data[q] = g[q]);
                e[f] = h
            }
            0 < e.length ? a.notificationsSend(e,
                c, d, null) : c && c()
        }
    };
    _pio.notificationEndpoint = function(a, c, b, e) {
        this.type = a;
        this.identifier = c;
        this.configuration = b;
        this.enabled = e
    }
})();
(function() {
    _pio.publishingNetwork = function(a, c) {
        var b = this;
        this.profiles = new _pio.publishingNetworkProfiles(a);
        this.payments = new _pio.publishingNetworkPayments(a);
        this.relations = new _pio.publishingNetworkRelations(a, c, this);
        this.userToken = "[ERROR: you tried to access publishingNetwork.userToken before calling publishingNetwork.refresh(callback)]";
        this.refresh = function(c, d) {
            a.socialRefresh(c, d, function(a) {
                b.userToken = a.myprofile.usertoken;
                b.profiles.myProfile = new _pio.publishingNetworkProfile(a.myprofile);
                "undefined" == typeof _pio.friendLookup && (_pio.friendLookup = {}, _pio.blockedLookup = {});
                var c = _pio.friendLookup[b.profiles.myProfile.userId],
                    d = _pio.blockedLookup[b.profiles.myProfile.userId];
                c || d || (c = _pio.friendLookup[b.profiles.myProfile.userId] = {}, d = _pio.blockedLookup[b.profiles.myProfile.userId] = {});
                b.relations.friends = [];
                for (var e = 0; e != a.friends.length; e++) {
                    var f = new _pio.publishingNetworkProfile(a.friends[e]);
                    b.relations.friends.push(f);
                    c[f.userId] = !0
                }
                for (e = 0; e != a.blocked.length; e++) d[a.blocked[e]] = !0
            })
        }
    };
    _pio.showDialog = function(a, c, b, e) {
        if ("undefined" == typeof window.PublishingNetwork) throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotAvailable, "PublishingNetwork.js was not found on the current page. You have to include the 'piocdn.com/publishingnetwork.js' on the containing page to show dialogs. See http://playerio.com/documentation/ for more information.");
        b.__apitoken__ = c.token;
        window.PublishingNetwork.dialog(a, b, e)
    }
})();
(function() {
    _pio.publishingNetworkPayments = function(a) {
        this.showBuyCoinsDialog = function(c, b, e, d) {
            b || (b = {});
            b.coinamount = c;
            a.payVaultPaymentInfo("publishingnetwork", _pio.convertToKVArray(b), null, function(b) {
                _pio.showDialog("buy", a, b, function(a) {
                    a.error ? d(new PlayerIOError(PlayerIOErrorCode.GeneralError, a.error)) : e(a)
                })
            }, d, function(a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        this.showBuyItemsDialog = function(c, b, e, d) {
            a.payVaultPaymentInfo("publishingnetwork", _pio.convertToKVArray(b || {}),
                _pio.convertBuyItems(c),
                function(b) {
                    _pio.showDialog("buy", a, b, function(a) {
                        a.error ? d(new PlayerIOError(PlayerIOErrorCode.GeneralError, a.error)) : e(a)
                    })
                }, d,
                function(a) {
                    return _pio.convertFromKVArray(a.providerarguments)
                })
        }
    }
})();
(function() {
    _pio.publishingNetworkProfiles = function(a) {
        this.myProfile = "[ERROR: you tried to access publishingNetworkProfiles.myProfile before calling publishingNetwork.refresh(callback)]";
        this.showProfile = function(c, b) {
            _pio.showDialog("profile", a, {
                userId: c
            }, b)
        };
        this.loadProfiles = function(c, b, e) {
            a.socialLoadProfiles(c, b, e, function(a) {
                for (var b = [], d = 0; d != c.length; d++) {
                    var e = c[d];
                    b[d] = null;
                    for (var l = 0; l != a.profiles.length; l++) {
                        var k = a.profiles[l];
                        if (k && k.userid == e) {
                            b[d] = new _pio.publishingNetworkProfile(a.profiles[l]);
                            break
                        }
                    }
                }
                return b
            })
        }
    };
    _pio.publishingNetworkProfile = function(a) {
        this.userId = a.userid;
        this.displayName = a.displayname;
        this.avatarUrl = a.avatarurl;
        this.lastOnline = new Date(a.lastonline);
        this.countryCode = a.countrycode
    }
})();
(function() {
    _pio.publishingNetworkRelations = function(a, c, b) {
        this.friends = "[ERROR: you tried to access publishingNetworkRelations.friends before calling publishingNetwork.refresh(callback)]";
        this.isFriend = function(a) {
            if ("undefined" != typeof _pio.friendLookup && "undefined" != typeof _pio.friendLookup[c]) return _pio.friendLookup[c][a] || !1;
            throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotLoaded, "Cannot access profile, friends, ignored before Publishing Network has been loaded. Please refresh Publishing Network first");
        };
        this.isBlocked = function(a) {
            if ("undefined" != typeof _pio.blockedLookup && "undefined" != typeof _pio.blockedLookup[c]) return _pio.blockedLookup[c][a] || !1;
            throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotLoaded, "Cannot access profile, friends, ignored before Publishing Network has been loaded. Please refresh Publishing Network first");
        };
        this.showRequestFriendshipDialog = function(b, c) {
            _pio.showDialog("requestfriendship", a, {
                userId: b
            }, c)
        };
        this.showRequestBlockUserDialog = function(c, d) {
            _pio.showDialog("requestblockuser",
                a, {
                    userId: c
                },
                function() {
                    b.refresh(function() {
                        d && d()
                    }, function() {
                        d && d()
                    })
                })
        };
        this.showFriendsManager = function(c) {
            _pio.showDialog("friendsmanager", a, {}, function(a) {
                a.updated ? b.refresh(function() {
                    c && c()
                }, function() {
                    c && c()
                }) : c && c()
            })
        };
        this.showBlockedUsersManager = function(c) {
            _pio.showDialog("blockedusersmanager", a, {}, function(a) {
                a.updated ? b.refresh(function() {
                    c && c()
                }, function() {
                    c && c()
                }) : c && c()
            })
        }
    }
})();
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, e = c.length, f = {}; d < e; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) f[c[0][d]] =
                        b[d];
                    return f
                }
            return !1
        }(),
        d = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        f = {
            request: function(c) {
                var d = e.requestFullscreen;
                c = c || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[d]();
                else c[d](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[e.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(b, c) {
                var e = d[b];
                e && a.addEventListener(e, c, !1)
            },
            off: function(b,
                c) {
                var e = d[b];
                e && a.removeEventListener(e, c, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(f, {
        isFullscreen: {
            get: function() {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), c ? module.exports = f : window.screenfull = f) : c ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, b) {
        var c = -1,
            d = a ? a.length : 0;
        if ("number" == typeof d && -1 < d && d <= t)
            for (; ++c < d;) b(a[c], c, a);
        else e(a, b)
    }

    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function e(a, b) {
        for (var c in a) r.call(a, c) && b(a[c], c, a)
    }

    function d(b) {
        return null == b ? a(b) : x.call(b).slice(8, -1)
    }

    function f(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function g(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function h(a, b) {
        var d = null;
        c(a, function(c, e) {
            d = b(d, c, e, a)
        });
        return d
    }

    function l(a) {
        function c(c) {
            return h(c, function(c, d) {
                var e = d.pattern || g(d);
                !c && (c = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), d = d.label || d, c = b(c[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function k(b) {
            return h(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var n = m,
            q = a && "object" == typeof a && "String" != d(a);
        q && (n = a, a = null);
        var t = n.navigator || {},
            r = t.userAgent || "";
        a || (a = r);
        var w = q ? !!t.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(x.toString()),
            z = q ? "Object" : "ScriptBridgingProxyObject",
            M = q ? "Object" : "Environment",
            I = q && n.java ? "JavaPackage" : d(n.java),
            P = q ? "Object" : "RuntimeObject";
        M = (I = /\bJava/.test(I) && n.java) && d(n.environment) == M;
        var R = I ? "a" : "\u03b1",
            S = I ? "b" : "\u03b2",
            N = n.document || {},
            G = n.operamini || n.opera,
            J = y.test(J = q && G ? G["[[Class]]"] : d(G)) ? J : G = null,
            p, K = a;
        q = [];
        var L = null,
            H = a == r;
        r = H && G && "function" == typeof G.version && G.version();
        var A = function(b) {
                return h(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(b) {
                return h(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) && (c.label || c)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            B = c([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            E = function(b) {
                return h(b, function(b, c, d) {
                    return b || (c[B] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + g(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            v = function(c) {
                return h(c, function(c, d) {
                    var e = d.pattern || g(d);
                    if (!c && (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var f = c,
                            h = d.label || d,
                            n = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        e && h && /^Win/i.test(f) && !/^Windows Phone /i.test(f) && (n = n[/[\d.]+$/.exec(f)]) && (f = "Windows " + n);
                        f = String(f);
                        e && h && (f = f.replace(RegExp(e, "i"), h));
                        c = f = b(f.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        A && (A = [A]);
        E && !B && (B = c([E]));
        if (p = /\bGoogle TV\b/.exec(B)) B = p[0];
        /\bSimulator\b/i.test(a) && (B = (B ? B + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(a) && q.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(a) ? (p = l(a.replace(/like iPhone OS/, "")), E = p.manufacturer, B = p.product) : /^iP/.test(B) ? (u || (u = "Safari"), v = "iOS" + ((p = / OS ([\d_]+)/i.exec(a)) ? " " + p[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(v) ? E && "Google" != E && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (v = "Android", q.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && q.unshift("accelerated")) : "PaleMoon" == u && (p = /\bFirefox\/([\d.]+)\b/.exec(a)) ? q.push("identifying as Firefox " + p[1]) : "Firefox" == u && (p = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), B || (B = p[1])) : !u || (p = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !B && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(p + "/") + 8)) && (u = null), (p = B || E || v) && (B || E || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : p) + " Browser")) : "Electron" == u && (p = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && q.push("Chromium " + p) : v = "Kubuntu";
        r || (r = k(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(u), "(?:Firefox|Minefield|NetFront)"]));
        if (p = "iCab" == A && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(A) && "WebKit" || !A && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == A && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") A = [p];
        "IE" == u && (p = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", v = "Windows Phone " + (/\+$/.test(p) ? p : p + ".x"), q.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", v = "Windows Phone 8.x",
            q.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == A && (p = /\brv:([\d.]+)/.exec(a)) && (u && q.push("identifying as " + u + (r ? " " + r : "")), u = "IE", r = p[1]);
        if (H) {
            if (f(n, "global"))
                if (I && (p = I.lang.System, K = p.getProperty("os.arch"), v = v || p.getProperty("os.name") + " " + p.getProperty("os.version")), M) {
                    try {
                        r = n.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (Q) {
                        (p = n.system) && p.global.system == n.system && (u = "Narwhal", v || (v = p[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof n.process &&
                    !n.process.browser && (p = n.process) && ("object" == typeof p.versions && ("string" == typeof p.versions.electron ? (q.push("Node " + p.versions.node), u = "Electron", r = p.versions.electron) : "string" == typeof p.versions.nw && (q.push("Chromium " + r, "Node " + p.versions.node), u = "NW.js", r = p.versions.nw)), u || (u = "Node.js", K = p.arch, v = p.platform, r = (r = /[\d.]+/.exec(p.version)) ? r[0] : null));
            else d(p = n.runtime) == z ? (u = "Adobe AIR", v = p.flash.system.Capabilities.os) : d(p = n.phantom) == P ? (u = "PhantomJS", r = (p = p.version || null) && p.major + "." + p.minor +
                "." + p.patch) : "number" == typeof N.documentMode && (p = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, N.documentMode], (p = +p[1] + 4) != r[1] && (q.push("IE " + r[1] + " mode"), A && (A[1] = ""), r[1] = p), r = "IE" == u ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof N.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (q.push("masking as " + u + " " + r), u = "IE", r = "11.0", A = ["Trident"], v = "Windows");
            v = v && b(v)
        }
        r && (p = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (H && t.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (L = /b/i.test(p) ? "beta" : "alpha", r = r.replace(RegExp(p + "\\+?$"), "") + ("beta" == L ? S : R) + (/\d+\+?/.exec(p) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v)) u = "Firefox Mobile";
        else if ("Maxthon" == u && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(B)) "Xbox 360" == B && (v = null), "Xbox 360" == B && /\bIEMobile\b/.test(a) && q.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || B || /Browser|Mobi/.test(u)) || "Windows CE" != v && !/Mobi/i.test(a))
            if ("IE" == u && H) try {
                null === n.external &&
                    q.unshift("platform preview")
            } catch (Q) {
                q.unshift("embedded")
            } else(/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(a)) && (p = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (p = [p, /BB10/.test(a)], v = (p[1] ? (B = null, E = "BlackBerry") : "Device Software") + " " + p[0], r = null) : this != e && "Wii" != B && (H && G || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < r || /\bWindows XP\b/.test(v) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !y.test(p =
                l.call(e, a.replace(y, "") + ";")) && p.name && (p = "ing as " + p.name + ((p = p.version) ? " " + p : ""), y.test(u) ? (/\bIE\b/.test(p) && "Mac OS" == v && (v = null), p = "identify" + p) : (p = "mask" + p, u = J ? b(J.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(p) && (v = null), H || (r = null)), A = ["Presto"], q.push(p));
            else u += " Mobile";
        if (p = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            p = [parseFloat(p.replace(/\.(\d)$/, ".0$1")), p];
            if ("Safari" == u && "+" == p[1].slice(-1)) u = "WebKit Nightly", L = "alpha", r = p[1].slice(0, -1);
            else if (r == p[1] || r == (p[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
            p[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == p[0] && 537.36 == p[2] && 28 <= parseFloat(p[1]) && "WebKit" == A && (A = ["Blink"]);
            H && (w || p[1]) ? (A && (A[1] = "like Chrome"), p = p[1] || (p = p[0], 530 > p ? 1 : 532 > p ? 2 : 532.05 > p ? 3 : 533 > p ? 4 : 534.03 > p ? 5 : 534.07 > p ? 6 : 534.1 > p ? 7 : 534.13 > p ? 8 : 534.16 > p ? 9 : 534.24 > p ? 10 : 534.3 > p ? 11 : 535.01 > p ? 12 : 535.02 > p ? "13+" : 535.07 > p ? 15 : 535.11 > p ? 16 : 535.19 > p ? 17 : 536.05 > p ? 18 : 536.1 > p ? 19 : 537.01 > p ? 20 : 537.11 > p ? "21+" : 537.13 > p ? 23 : 537.18 > p ? 24 : 537.24 > p ? 25 : 537.36 > p ? 26 : "Blink" !=
                A ? "27" : "28")) : (A && (A[1] = "like Safari"), p = (p = p[0], 400 > p ? 1 : 500 > p ? 2 : 526 > p ? 3 : 533 > p ? 4 : 534 > p ? "4+" : 535 > p ? 5 : 537 > p ? 6 : 538 > p ? 7 : 601 > p ? 8 : "8"));
            A && (A[1] += " " + (p += "number" == typeof p ? ".x" : /[.+]/.test(p) ? "" : "+"));
            "Safari" == u && (!r || 45 < parseInt(r)) && (r = p)
        }
        "Opera" == u && (p = /\bzbov|zvav$/.exec(v)) ? (u += " ", q.unshift("desktop mode"), "zvav" == p ? (u += "Mini", r = null) : u += "Mobile", v = v.replace(RegExp(" *" + p + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(A && A[1]) && (q.unshift("desktop mode"), u = "Chrome Mobile", r = null, /\bOS X\b/.test(v) ? (E =
            "Apple", v = "iOS 4.3+") : v = null);
        r && 0 == r.indexOf(p = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + p + "-") && (v = String(v.replace(p, "")).replace(/^ +| +$/g, ""));
        A && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(A[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && A[1]) && (p = A[A.length - 1]) && q.push(p);
        q.length && (q = ["(" + q.join("; ") + ")"]);
        E && B && 0 > B.indexOf(E) && q.push("on " + E);
        B && q.push((/^on /.test(q[q.length -
            1]) ? "" : "on ") + B);
        if (v) {
            var O = (p = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - p[0].length - 1);
            v = {
                architecture: 32,
                family: p && !O ? v.replace(p[0], "") : v,
                version: p ? p[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !O ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(p = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(K)) && !/\bi686\b/i.test(K) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + p), "")), u && (/\bWOW64\b/i.test(a) || H && /\w(?:86|32)$/.test(t.cpuClass || t.platform) && !/\bWin64; x64\b/i.test(a)) &&
            q.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == u && 39 <= parseFloat(r) && (v.architecture = 64);
        a || (a = null);
        n = {};
        n.description = a;
        n.layout = A && A[0];
        n.manufacturer = E;
        n.name = u;
        n.prerelease = L;
        n.product = B;
        n.ua = a;
        n.version = u && r;
        n.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        n.parse = l;
        n.toString = function() {
            return this.description || ""
        };
        n.version && q.unshift(r);
        n.name && q.unshift(u);
        v && u && (v != String(v).split(" ")[0] || v != u.split(" ")[0] && !B) && q.push(B ? "(" + v + ")" : "on " +
            v);
        q.length && (n.description = q.join(" "));
        return n
    }
    var k = {
            "function": !0,
            object: !0
        },
        m = k[typeof window] && window || this,
        n = k[typeof exports] && exports;
    k = k[typeof module] && module && !module.nodeType && module;
    var q = n && k && "object" == typeof global && global;
    !q || q.global !== q && q.window !== q && q.self !== q || (m = q);
    var t = Math.pow(2, 53) - 1,
        y = /\bOpera/;
    q = Object.prototype;
    var r = q.hasOwnProperty,
        x = q.toString,
        w = l();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (m.platform = w, define(function() {
            return w
        })) : n &&
        k ? e(w, function(a, b) {
            n[b] = a
        }) : m.platform = w
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], c = 0; c < a.length; c++) {
        var b = document.createElement("meta");
        b.name = a[c].name;
        b.content = a[c].content;
        var e = window.document.head.querySelector('meta[name="' + b.name + '"]');
        e && e.parentNode.removeChild(e);
        window.document.head.appendChild(b)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && iosResize()
});
var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = !1,
    s_bIsRetina, pausedTweenObjs = [];
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        e = b.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var d = b.createElement("body");
        d.id = "vpw-test-b";
        d.style.cssText = "overflow:scroll";
        var f = b.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + c + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        d.appendChild(f);
        e.insertBefore(d, b.head);
        a = 7 == f["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(d)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getNearestNumber(a, c) {
    if (2 > (b = a.length)) return b - 1;
    for (var b, e = Math.abs(a[--b] - c); b-- && !(e < (e = Math.abs(a[b] - c))););
    return b + 1
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function isRetina() {
    s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? !0 : !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            e = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var d = a - b;
            b += d;
            e += CANVAS_WIDTH / CANVAS_HEIGHT * d
        } else e < c && (d = c - e, e += d, b += CANVAS_HEIGHT / CANVAS_WIDTH * d);
        d = a / 2 - b / 2;
        var f = c / 2 - e / 2,
            g = CANVAS_WIDTH / e;
        if (f * g < -EDGEBOARD_X || d * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, d = (a - b) / 2, f = (c - e) / 2, g = CANVAS_WIDTH / e;
        s_iOffsetX = -1 * f * g;
        s_iOffsetY = -1 * d * g;
        0 <= d && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height =
            2 * b, canvas.style.width = e + "px", canvas.style.height = b + "px", c = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_iScaleFactor = 2 * c, s_oStage.scaleX = s_oStage.scaleY = 2 * c) : s_bMobile || isChrome() ? ($("#canvas").css("width", e + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = e, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > d ? ($("#canvas").css("top", d + "px"), s_iCanvasOffsetHeight = d) : (d = (a - b) / 2, $("#canvas").css("top", d + "px"),
            s_iCanvasOffsetHeight = 0);
        $("#canvas").css("left", f + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}
createjs.Tween.pauseAllTweens = function() {
    for (var a = 0, c = createjs.Tween._tweens.slice().reverse(), b; b = c[a++];) pausedTweenObjs.push(b), !1 === b.ignoreGlobalPause && b.setPaused(!0)
};
createjs.Tween.resumeAllTweens = function() {
    for (var a = 0, c; c = pausedTweenObjs[a++];) c.setPaused(!1);
    pausedTweenObjs.length = 0
};

function setVolume(a, c) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = c
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(c)
}

function createBitmap(a, c, b) {
    var e = new createjs.Bitmap(a),
        d = new createjs.Shape;
    c && b ? d.graphics.beginFill("#fff").drawRect(0, 0, c, b) : d.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = d;
    return e
}

function createSprite(a, c, b, e, d, f) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -e, d, f);
    a.hitArea = c;
    return a
}

function pad(a, c, b) {
    a += "";
    return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a
}

function randomSign() {
    return .5 >= Math.random() ? 1 : -1
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function randomIntBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseInt(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        e = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, e)
}

function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a)
}

function shuffle(a) {
    for (var c = a.length, b, e; 0 !== c;) e = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[e], a[e] = b;
    return a
}

function centerBetweenPointsV2(a, c) {
    var b = new CVector2;
    b.set(.5 * (a.getX() + c.getX()), .5 * (a.getY() + c.getY()));
    return b
}

function bubbleSort(a) {
    do {
        var c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
    } while (c)
}

function compare(a, c) {
    return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, e) {
    return b * a / e + c
}

function easeInQuad(a, c, b, e) {
    return b * (a /= e) * a + c
}

function easeInSine(a, c, b, e) {
    return -b * Math.cos(a / e * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, e) {
    return b * (a /= e) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point,
        e = (1 - a) * (1 - a),
        d = a * a;
    b.x = e * c.start.x + 2 * (1 - a) * a * c.traj.x + d * c.end.x;
    b.y = e * c.start.y + 2 * (1 - a) * a * c.traj.y + d * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, c) {
    var b = getBounds(a, .9);
    var e = getBounds(c, .98);
    return calculateIntersection(b, e)
}

function calculateIntersection(a, c) {
    var b, e, d, f;
    var g = a.x + (b = a.width / 2);
    var h = a.y + (e = a.height / 2);
    var l = c.x + (d = c.width / 2);
    var k = c.y + (f = c.height / 2);
    g = Math.abs(g - l) - (b + d);
    h = Math.abs(h - k) - (e + f);
    return 0 > g && 0 > h ? (g = Math.min(Math.min(a.width, c.width), -g), h = Math.min(Math.min(a.height, c.height), -h), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: g,
        height: h,
        rect1: a,
        rect2: c
    }) : null
}

function getBounds(a, c) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var e = a.children,
            d = e.length,
            f;
        for (f = 0; f < d; f++) {
            var g = getBounds(e[f], 1);
            g.x < b.x && (b.x = g.x);
            g.y < b.y && (b.y = g.y);
            g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
            g.y + g.height > b.y2 && (b.y2 = g.y + g.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            d =
                a.sourceRect || a.image;
            f = d.width * c;
            var h = d.height * c
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                d = a.spriteSheet.getFrame(a.currentFrame);
                f = d.rect.width;
                h = d.rect.height;
                e = d.regX;
                var l = d.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        e = e || 0;
        f = f || 0;
        l = l || 0;
        h = h || 0;
        b.regX = e;
        b.regY = l;
        d = a.localToGlobal(0 - e, 0 - l);
        g = a.localToGlobal(f - e, h - l);
        f = a.localToGlobal(f - e, 0 - l);
        e = a.localToGlobal(0 - e, h - l);
        b.x =
            Math.min(Math.min(Math.min(d.x, g.x), f.x), e.x);
        b.y = Math.min(Math.min(Math.min(d.y, g.y), f.y), e.y);
        b.width = Math.max(Math.max(Math.max(d.x, g.x), f.x), e.x) - b.x;
        b.height = Math.max(Math.max(Math.max(d.y, g.y), f.y), e.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, b, e; 0 < c;) e = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[e], a[e] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var e = c[b].split("=");
        if (e[0] == a) return e[1]
    }
}
String.prototype.format = function() {
    for (var a = this, c = arguments.length; c--;) a = a.replace(new RegExp("\\{" + c + "\\}", "gm"), arguments[c]);
    return a
};

function radiansToDegree(a) {
    return 180 / Math.PI * a
}

function distance(a, c) {
    var b = a.getX() - c.getX(),
        e = a.getY() - c.getY();
    return Math.sqrt(b * b + e * e)
}

function fixEnemyTremble(a, c) {
    var b = !1;
    distanceBetween2Points(c.m_pCenter().getX(), a.getY(), c.m_pCenter().getX(), c.m_pCenter().getY()) <= c.getLength() && (b = !0);
    return b
}

function distanceBetween2Points(a, c, b, e) {
    return Math.sqrt(Math.pow(b - a, 2) + Math.pow(e - c, 2))
}

function collideEdgeWithCircle(a, c, b) {
    a = closestPointOnLine(a.getPointA(), a.getPointB(), c);
    c = distanceV2(c, a);
    return b < c ? null : {
        distance: c,
        closest_point: a
    }
}

function closestPointOnLine(a, c, b) {
    var e = new CVector2,
        d = new CVector2;
    e.setV(a);
    d.setV(c);
    var f = new CVector2;
    f.setV(b);
    f.subtract(a);
    b = new CVector2;
    b.setV(c);
    b.subtract(a);
    b.normalize();
    f = dotProductV2(b, f);
    if (0 >= f) return e;
    if (f >= distanceV2(a, c)) return d;
    b.scalarProduct(f);
    b.addV(a);
    return b
}

function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY()
}

function distanceV2(a, c) {
    return Math.sqrt((c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY()))
}

function reflectVectorV2(a, c) {
    var b = dotProductV2(a, c);
    a.set(a.getX() - 2 * b * c.getX(), a.getY() - 2 * b * c.getY());
    return a
}

function angleBetweenVectors(a, c) {
    var b = Math.acos(dotProductV2(a, c) / (a.length() * c.length()));
    return 1 == isNaN(b) ? 0 : b
}

function distanceV2WithoutSQRT(a, c) {
    return (c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY())
}

function classifySphere(a, c, b, e) {
    a = c.getX() * a.getX() + c.getY() * a.getY() + planeDistance(c, b);
    return Math.abs(a) < e ? 0 <= a ? "INTERSECT FRONT" : "INTERSECT BEHIND" : a >= e ? "FRONT" : "BEHIND"
}

function planeDistance(a, c) {
    return -(a.getX() * c.getX() + a.getY() * c.getY())
}

function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut()
});
var s_szGameID = "7e30875c404b442eb12597175bdb85dc";
window.GD_OPTIONS = {
    gameId: s_szGameID,
    onEvent: function(a) {
        switch (a.name) {
            case "SDK_GAME_START":
                s_oMain && s_oMain.startUpdate();
                break;
            case "SDK_GAME_PAUSE":
                s_oMain && s_oMain.stopUpdate()
        }
    }
};
(function(a, c, b) {
    var e = a.getElementsByTagName(c)[0];
    a.getElementById(b) || (a = a.createElement(c), a.id = b, a.src = "https://html5.api.gamedistribution.com/main.min.js", e.parentNode.insertBefore(a, e))
})(document, "script", "gamedistribution-jssdk");

function CSpriteLibrary() {
    var a, c, b, e, d, f;
    this.init = function(g, h, l) {
        b = c = 0;
        e = g;
        d = h;
        f = l;
        a = {}
    };
    this.addSprite = function(b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        d.call(f)
    };
    this._onSpriteLoaded = function() {
        e.call(f);
        ++b == c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return c
    }
}
var CCTLMultiplayerGui = function() {
    this._cssClassDomain = "ctl-multiplayer-";
    this._idCurDialog;
    this._idLoadingDialog;
    var a = localStorage.getItem("nickname");
    this._szNickName = null === a ? "" : a;
    jQuery(document).on("click", "." + this._cssClassDomain + "room-list li", function() {
        g_oCTLMultiplayer.closeCurrentDialog();
        var a = jQuery(this).text();
        "true" === jQuery(this).attr("data-private") ? g_oCTLMultiplayer.showTypeRoomPassword(a) : (g_oCTLMultiplayer.showLoading("connecting"), on_ctl_multiplayer_join_room(a))
    })
};
CCTLMultiplayerGui.prototype.refreshRoomList = function(a) {
    for (var c = "", b = 0; b < a.length; b++) c += '<li data-private="' + a[b]["private"] + '">', c += "<span>", c += a[b].name, c += "</span>", !0 === a[b]["private"] && (c += '<i class="' + this._cssClassDomain + 'icons-lock"></i>'), c += "</li>";
    jQuery("." + this._cssClassDomain + "room-list").html(c)
};
CCTLMultiplayerGui.prototype.showRoomList = function(a) {
    var c = '<ul class="' + this._cssClassDomain + 'room-list">';
    c = c + '</ul><button onclick="on_ctl_multiplayer_refresh_room_list()" type="button" class="' + (this._cssClassDomain + "update " + this._cssClassDomain + 'btn-gray">');
    c += '<i class="' + this._cssClassDomain + 'icons-arrows-cw"></i>';
    this._idCurDialog = this.showDialog("Match list", c + "<span>update</span></button>", [{
        txt: "quick match",
        cb: "on_ctl_multiplayer_join_quick_match",
        classes: ""
    }, {
        txt: "create match",
        cb: "on_ctl_multiplayer_show_create_match",
        classes: ""
    }, {
        txt: "back",
        cb: "g_oCTLMultiplayer.closeCurrentDialog",
        classes: ""
    }]);
    this.refreshRoomList(a)
};
CCTLMultiplayerGui.prototype.setNickName = function(a) {
    this._szNickName = a;
    localStorage.setItem("nickname", a)
};
CCTLMultiplayerGui.prototype.showTypeRoomPassword = function(a) {
    var c = '<div class="' + this._cssClassDomain + 'form-group">';
    this._idCurDialog = this.showDialog("Type Room Password", c + '<label>Type Room Password</label><input type="password" name="password" data-room-name="' + (a + '"></div>'), [{
        txt: "ok",
        cb: "on_ctl_multiplayer_send_password",
        classes: ""
    }, {
        txt: "back",
        cb: "on_ctl_multiplayer_close_type_room_password",
        classes: ""
    }])
};
CCTLMultiplayerGui.prototype.showCreateRoom = function() {
    var a = '<div class="' + this._cssClassDomain + 'form-group">';
    a = a + '<label>Name Room</label><input type="text" name="roomname" value="' + (this._szNickName + "'s room\">");
    a = a + '</div><div class="' + (this._cssClassDomain + 'form-group">');
    this._idCurDialog = this.showDialog("Create room", a + '<label>Password</label><input type="password" name="password"><p>If you don\'t set a password this room will be public.</p></div>', [{
        txt: "create",
        cb: "on_ctl_multiplayer_create_room",
        classes: ""
    }, {
        txt: "back",
        cb: "on_ctl_multiplayer_close_create_room",
        classes: ""
    }])
};
CCTLMultiplayerGui.prototype.showChooseNickName = function() {
    this._idCurDialog = this.showDialog("Choose nickname", '<input type="text" name="nickname" maxlength="20" value="' + this._szNickName + '">', [{
        txt: "ok",
        cb: "on_ctl_multiplayer_send_nickname",
        classes: ""
    }, {
        txt: "close",
        cb: "g_oCTLMultiplayer.closeCurrentDialog",
        classes: ""
    }])
};
CCTLMultiplayerGui.prototype.showGeneralDialog = function(a, c) {
    this._idCurDialog = this.showDialog(a, "", [{
        txt: "back",
        cb: c,
        classes: ""
    }])
};
CCTLMultiplayerGui.prototype.closeLoadingDialog = function() {
    this.closeDlg(this._idLoadingDialog)
};
CCTLMultiplayerGui.prototype.closeCurrentDialog = function() {
    this.closeDlg(this._idCurDialog)
};
CCTLMultiplayerGui.prototype.makeCode = function() {
    for (var a = "", c = 0; 32 > c; c++) a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
    return a
};
CCTLMultiplayerGui.prototype.showDialog = function(a, c, b, e) {
    var d = "";
    e || (e = this.makeCode());
    d += "<div id='" + e + "' class='" + this._cssClassDomain + "dlg-wrapper'>";
    d += "<div class='" + this._cssClassDomain + "dlg-block'></div>";
    d += "<div class='" + this._cssClassDomain + "dlg-content'>";
    d += "<div class='" + this._cssClassDomain + "dlg-header'>";
    d = d + ("<h1>" + a + "</h1></div><div class='") + (this._cssClassDomain + "dlg-content-body'>");
    d += c;
    d += "</div>";
    if (b && 0 < b.length) {
        d += "<div class='" + this._cssClassDomain + "dlg-footer'>";
        for (a =
            0; a < b.length; a++) d += "<button type='button' onclick='" + b[a].cb + '("' + e + "\");' class='" + this._cssClassDomain + "-mini " + b[a].classes + "'>" + b[a].txt + "</button>";
        d += this.buildExtraFooter();
        d += "</div>"
    }
    d += "</div>";
    d += "</div>";
    jQuery("body").append(d);
    return e
};
CCTLMultiplayerGui.prototype.buildExtraFooter = function() {
    return '<div class="' + this._cssClassDomain + 'copyright"><a href="http://www.codethislab.com" target="_blank">www.codethislab.com</a></div>'
};
CCTLMultiplayerGui.prototype.showLoading = function(a, c) {
    var b = "";
    this._idLoadingDialog = this.makeCode();
    a || (a = "Loading...");
    b += "<div id='" + this._idLoadingDialog + "' class='" + this._cssClassDomain + "dlg-wrapper " + this._cssClassDomain + "fixed'>";
    b += "<div class='" + this._cssClassDomain + "dlg-block'></div>";
    b += "<div class='" + this._cssClassDomain + "dlg-content'>";
    b += "<div class='" + this._cssClassDomain + "dlg-header'>";
    b = b + ("<h1>" + a + "</h1></div><div class='") + (this._cssClassDomain + "dlg-content-body " + this._cssClassDomain +
        "align-center'>");
    b += '<i class="' + this._cssClassDomain + 'icons-spin5 animate-spin"></i>';
    b += "</div>";
    c && (b += "<div class='" + this._cssClassDomain + "dlg-footer " + this._cssClassDomain + "center'>", b += "<button type='button' onclick='" + c + '("' + this._idLoadingDialog + "\");' class='" + this._cssClassDomain + "-mini '>back</button>", b += this.buildExtraFooter(), b += "</div>");
    b += "</div>";
    b += "</div>";
    jQuery("body").append(b)
};
CCTLMultiplayerGui.prototype.closeDlg = function(a) {
    jQuery("#" + a).remove()
};
CCTLMultiplayerGui.prototype.closeAllDialog = function() {
    g_oCTLMultiplayer.closeLoadingDialog();
    g_oCTLMultiplayer.closeCurrentDialog()
};
CCTLMultiplayerGui.prototype.getNickname = function() {
    return this._szNickName
};
var g_oCTLMultiplayer = new CCTLMultiplayerGui;

function CToggle(a, c, b, e, d) {
    var f, g, h, l, k, m, n;
    this._init = function(a, b, c, d, e) {
        k = [];
        m = [];
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = d;
        n = createSprite(g, "state_" + f, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        n.x = a;
        n.y = b;
        n.stop();
        e.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? n.off("mousedown", g) : (n.off("mousedown", g), n.off("mouseover", l));
        n.off("pressup", h);
        d.removeChild(n)
    };
    this._initListener = function() {
        s_bMobile ? g = n.on("mousedown", this.buttonDown) : (g = n.on("mousedown", this.buttonDown), l = n.on("mouseover", this.buttonOver));
        h = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        m[a] = c
    };
    this.setActive = function(a) {
        f = a;
        n.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function() {
        n.scaleX = 1;
        n.scaleY = 1;
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_button", 1, !1);
        f = !f;
        n.gotoAndStop("state_" + f);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(m[ON_MOUSE_UP],
            f)
    };
    this.buttonDown = function() {
        n.scaleX = .9;
        n.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this._init(a, c, b, e, d)
}

function CGfxButton(a, c, b, e) {
    var d, f, g, h, l, k, m, n, q;
    this._init = function(a, b, c, e) {
        q = d = !1;
        f = 1;
        k = [];
        m = [];
        n = createBitmap(c);
        n.x = a;
        n.y = b;
        n.scaleX = n.scaleY = f;
        n.regX = c.width / 2;
        n.regY = c.height / 2;
        e.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? n.off("mousedown", g) : (n.off("mousedown", g), n.off("mouseover", l));
        n.off("pressup", h);
        e.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this.setClickable = function(a) {
        d = !a
    };
    this._initListener = function() {
        s_bMobile ? g = n.on("mousedown", this.buttonDown) :
            (g = n.on("mousedown", this.buttonDown), l = n.on("mouseover", this.buttonOver));
        h = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        m[a] = c
    };
    this.buttonRelease = function() {
        d || (n.scaleX = f, n.scaleY = f, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(m[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        d || (n.scaleX = .9 * f, n.scaleY = .9 * f, q || playSound("press_button", 1, !1), k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(a) {
        s_bMobile || d || (a.target.cursor = "pointer")
    };
    this.pulseAnimation =
        function() {
            createjs.Tween.get(n).to({
                scaleX: .9 * f,
                scaleY: .9 * f
            }, 850, createjs.Ease.quadOut).to({
                scaleX: f,
                scaleY: f
            }, 650, createjs.Ease.quadIn).call(function() {
                t.pulseAnimation()
            })
        };
    this.trembleAnimation = function() {
        createjs.Tween.get(n).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            t.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y =
            a
    };
    this.getButtonImage = function() {
        return n
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this.setMuted = function(a) {
        q = a
    };
    var t = this;
    this._init(a, c, b, e);
    return this
}

function CTextButton(a, c, b, e, d, f, g, h) {
    var l, k, m, n, q;
    this._init = function(a, b, c, d, e, f, g, h) {
        l = [];
        k = [];
        var n = createBitmap(c),
            q = Math.ceil(g / 20),
            r = new createjs.Text(d, "bold " + g + "px " + e, "#000000");
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        var t = r.getBounds();
        r.x = c.width / 2 + q;
        r.y = Math.floor(c.height / 2) + t.height / 3 + q;
        d = new createjs.Text(d, "bold " + g + "px " + e, f);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        t = d.getBounds();
        d.x = c.width / 2;
        d.y = Math.floor(c.height / 2) + t.height / 3;
        m = new createjs.Container;
        m.x =
            a;
        m.y = b;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        m.addChild(n, d);
        s_bMobile || (m.cursor = "pointer");
        h.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", n);
        m.off("pressup", q);
        h.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this._initListener = function() {
        n = m.on("mousedown", this.buttonDown);
        q = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        k[a] = c
    };
    this.buttonRelease = function() {
        m.scaleX = 1;
        m.scaleY = 1;
        playSound("press_button", 1, !1);
        l[ON_MOUSE_UP] &&
            l[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        m.scaleX = .9;
        m.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY = function(a) {
        m.y = a
    };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    this._init(a, c, b, e, d, f, g, h);
    return this
}
var ON_CONNECTION_ERROR = 0,
    ON_DISCONNECTION = 1,
    ON_LOGIN_SUCCESS = 2,
    ON_MATCHMAKING_CONNECTION_SUCCESS = 3,
    ON_GAMEROOM_CONNECTION_SUCCESS = 4,
    ON_USEROWNERROOM_CREATE_SUCCESS = 5,
    ON_USEROWNERROOM_JOIN_SUCCESS = 6,
    ON_ROOM_INFO_RETURNED = 7,
    ON_BACK_FROM_A_ROOM = 8,
    ERROR_CODE_UNKNOWNROOM = "UnknownRoom",
    ROOM_TYPE_MATCHMAKING = "MatchmakingRoom",
    ROOM_TYPE_USEROWNER = "UserOwnerRoom",
    ROOM_TYPE_GAME = "GameRoom";

function CNetworkManager() {
    var a, c, b, e, d, f, g, h, l, k, m;
    this._init = function() {
        a = [];
        c = [];
        d = new CNetworkMessageForwarder
    };
    this.unload = function() {
        s_oNetworkManager = null
    };
    this.connectToSystem = function() {
        s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, s_oNetworkManager.gotoLobby);
        g_oCTLMultiplayer.showChooseNickName()
    };
    this.login = function(b) {
        g = b;
        b = this._setValidNick(b);
        PlayerIO.useSecureApiRequests = !MULTIPLAYER_TEST_LOCAL;
        PlayerIO.authenticate(GAME_PLAYERIO_ID, "public", {
            userId: b
        }, {}, function(b) {
            e = b;
            e.multiplayer.useSecureConnections = !MULTIPLAYER_TEST_LOCAL;
            MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184", e.multiplayer.createJoinRoom("fakeroom" + Math.random(), "fakeroom", !1, null, null, function(a) {
                a.addMessageCallback("*", d.messageHandler);
                a.addDisconnectCallback(s_oNetworkManager.callbackDisconnect)
            }, s_oNetworkManager.callbackError));
            a[ON_LOGIN_SUCCESS] && a[ON_LOGIN_SUCCESS].call(c[ON_LOGIN_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this._setValidNick = function(a) {
        var b = s_oNetworkManager._getRandomCodeNumber();
        "" === a ? g = a = "guest-" + b : a = a + "-" + b;
        return a
    };
    this._getRandomCodeNumber = function() {
        return Math.floor(1E3 * Math.random())
    };
    this.generateRandomName = function() {
        var a = "xmariox alex max mahuro biajus rob idah fabrix seth ikillyou commander admiral general seasalt emperorofthesea Aspect Kraken Dragon Shiver Dracula Doom Scar Roadkill Cobra Psycho Ranger Ripley Clink Bruise Bowser Creep Cannon Daemon Steel Tempest Hurricane Titanium Tito Lightning IronHeart Sabotage Rex Hydra Terminator Agrippa Gash Blade Katana Gladius Angon Claymore Pike Hammer Club Heart Gauntlet Montante Longbow bow Dagger".split(" "),
            b = Math.floor(Math.random() * a.length);
        a = a[b];
        if (.5 < Math.random()) {
            var c = Math.floor(100 * Math.random());
            if (.5 < Math.random()) {
                var d = ["-", "_"];
                b = Math.floor(Math.random() * d.length);
                a += d[b]
            }
            a += c
        }
        return m = a
    };
    this.getBotName = function() {
        return m
    };
    this.addEventListener = function(b, d, e) {
        a[b] = d;
        c[b] = e
    };
    this.callbackError = function(b) {
        a[ON_CONNECTION_ERROR] && a[ON_CONNECTION_ERROR].call(c[ON_CONNECTION_ERROR], b)
    };
    this.callbackDisconnect = function(b) {
        a[ON_DISCONNECTION] && a[ON_DISCONNECTION].call(c[ON_DISCONNECTION],
            b)
    };
    this.sendMsg = function(a, c) {
        b && b.send(a, c)
    };
    this.disconnect = function() {
        b && (b.disconnect(), b = null)
    };
    this.isUserA = function() {
        return 0 === parseInt(f) ? !0 : !1
    };
    this.getPlayerOrderID = function() {
        return f
    };
    this.getPlayerNickname = function() {
        return g
    };
    this.getEnemyNickname = function() {
        return h
    };
    this.createRoom = function(f, h) {
        s_oNetworkManager.addEventListener(ON_USEROWNERROOM_CREATE_SUCCESS, this._onRoomCreated);
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.createJoinRoom(f,
            ROOM_TYPE_USEROWNER, !0, {
                id: f,
                pass: h
            }, {
                nickname: g
            },
            function(e) {
                b = e;
                e.addMessageCallback("*", d.messageHandler);
                e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
                a[ON_USEROWNERROOM_CREATE_SUCCESS] && a[ON_USEROWNERROOM_CREATE_SUCCESS].call(c[ON_USEROWNERROOM_CREATE_SUCCESS])
            }, s_oNetworkManager.callbackError)
    };
    this.joinRoom = function(f) {
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR, this._onRoomJoinedFailed);
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.joinRoom(f, {
            nickname: g
        }, function(e) {
            b = e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            a[ON_USEROWNERROOM_JOIN_SUCCESS] && a[ON_USEROWNERROOM_JOIN_SUCCESS].call(c[ON_USEROWNERROOM_JOIN_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.gotoGameRoom = function(g) {
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        var l = g.getString(0);
        f = g.getInt(1);
        h = g.getString(2);
        e.multiplayer.createJoinRoom(l, ROOM_TYPE_GAME, !1, null, null, function(e) {
            b =
                e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            g_oCTLMultiplayer.closeAllDialog();
            a[ON_GAMEROOM_CONNECTION_SUCCESS] && a[ON_GAMEROOM_CONNECTION_SUCCESS].call(c[ON_GAMEROOM_CONNECTION_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.gotoMatchMakingRoom = function() {
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.createJoinRoom("matchmakingroom1", ROOM_TYPE_MATCHMAKING, !0, null, {
            nickname: g
        }, function(e) {
            b =
                e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            a[ON_MATCHMAKING_CONNECTION_SUCCESS] && a[ON_MATCHMAKING_CONNECTION_SUCCESS].call(c[ON_MATCHMAKING_CONNECTION_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.tryCreateUniqueRoom = function(a, b) {
        l = a;
        k = b;
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {
            id: a
        }, 0, 0, s_oNetworkManager._onUniqueListRoomSearch, s_oNetworkManager.callbackError)
    };
    this._onUniqueListRoomSearch = function(a) {
        0 < a.length && (l += "-" + s_oNetworkManager._getRandomCodeNumber());
        s_oNetworkManager.createRoom(l, k)
    };
    this._onRoomCreated = function() {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_WAITING_FOR_OPPONENT_IN_ROOM + l, "s_oNetworkManager._onDisconnectFromARoom")
    };
    this._onDisconnectFromARoom = function() {
        a[ON_BACK_FROM_A_ROOM] && a[ON_BACK_FROM_A_ROOM].call(c[ON_BACK_FROM_A_ROOM]);
        s_oNetworkManager.disconnect();
        setTimeout(function() {
            s_oNetworkManager.gotoLobby()
        }, 250)
    };
    this._onRoomJoined = function() {};
    this._onRoomJoinedFailed = function(a) {
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR,
            function() {});
        switch (a.code) {
            case ERROR_CODE_UNKNOWNROOM:
                g_oCTLMultiplayer.closeAllDialog(), g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_DOESNT_EXIST, "s_oNetworkManager.gotoLobby")
        }
    };
    this.gotoLobby = function() {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_CONNECT_TO_LOBBY);
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, null, 0, 0, s_oNetworkManager._onListRoom, s_oNetworkManager.callbackError)
    };
    this._onListRoom = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b[c] = {
            name: a[c].id,
            "private": 0 ===
                a[c].roomData.pass.length ? !1 : !0
        };
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showRoomList(b)
    };
    this.joinQuickMatch = function() {
        g_oCTLMultiplayer.showLoading(TEXT_FIND_OPPONENT, "s_oNetworkManager._onDisconnectFromARoom");
        s_oNetworkManager.gotoMatchMakingRoom()
    };
    this.tryJoinRoomWithPass = function(a, b) {
        l = a;
        k = b;
        s_oNetworkManager.addEventListener(ON_ROOM_INFO_RETURNED, s_oNetworkManager._checkUserPermissionToJoin);
        s_oNetworkManager.getRoomInfo(a, b)
    };
    this._checkUserPermissionToJoin = function(a) {
        0 < a.length ?
            s_oNetworkManager.joinRoom(a[0].roomData.id, a[0].roomData.pass) : (g_oCTLMultiplayer.closeAllDialog(), g_oCTLMultiplayer.showGeneralDialog(TEXT_WRONG_PASSWORD, "s_oNetworkManager._onPasswordFailed"))
    };
    this._onPasswordFailed = function() {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showTypeRoomPassword(l)
    };
    this.getRoomInfo = function(a, b) {
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {
            id: a,
            pass: b
        }, 0, 0, s_oNetworkManager._onRoomInfoReturned, s_oNetworkManager.callbackError)
    };
    this._onRoomInfoReturned = function(b) {
        a[ON_ROOM_INFO_RETURNED] &&
            a[ON_ROOM_INFO_RETURNED].call(c[ON_ROOM_INFO_RETURNED], b)
    };
    this._init()
}
var MSG_ROOM_IS_FULL = "room_is_full",
    MSG_GAME_FOUND = "game_found",
    MSG_SET_WINNER = "set_winner",
    MSG_REMATCH_PANEL = "rematch_panel",
    MSG_REMATCH_ANSWER_RESULTS = "rematch_answer_results",
    MSG_ENEMY_MOVES = "enemy_moves",
    MSG_OPPONENT_DICE_RESULTS = "opponent_dice_results",
    MSG_END_MATCH = "end_match",
    MSG_ACCEPT_REMATCH = "accept_rematch",
    MSG_DISCONNECTION = "disconnection",
    MSG_MOVE = "move",
    MSG_ROLL_DICE = "roll_dice";

function CNetworkMessageForwarder() {
    this._init = function() {};
    this.messageHandler = function(c) {
        switch (c.type) {
            case MSG_ROOM_IS_FULL:
                a._onFullRoom(c);
                break;
            case MSG_GAME_FOUND:
                a._onGameFound(c);
                break;
            case MSG_SET_WINNER:
                a._onSetWinner(c);
                break;
            case MSG_REMATCH_PANEL:
                a._onRematchPanel(c);
                break;
            case MSG_REMATCH_ANSWER_RESULTS:
                a._onRematchResults(c);
                break;
            case MSG_ENEMY_MOVES:
                a._onEnemyMoves(c);
                break;
            case MSG_OPPONENT_DICE_RESULTS:
                a._onOpponentDiceRolled(c)
        }
    };
    this._onFullRoom = function() {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_IS_FULL, "s_oNetworkManager.gotoLobby")
    };
    this._onGameFound = function(a) {
        s_oNetworkManager.gotoGameRoom(a)
    };
    this._onSetWinner = function(a) {
        s_oGame.opponentLeftTheGame()
    };
    this._onRematchPanel = function() {
        s_oGame.showRematchQuestion()
    };
    this._onRematchResults = function(a) {
        if (a.getBoolean(0)) s_oGame.onOpponentAcceptRematch();
        else s_oGame.onOpponentRefuseRematch()
    };
    this._onEnemyMoves = function(a) {
        a = a.getString(0);
        a = JSON.parse(a);
        s_oGame.remoteMovePiece(a[MSG_MOVE])
    };
    this._onOpponentDiceRolled = function(a) {
        a = a.getString(0);
        a = JSON.parse(a);
        s_oGame.remoteDiceRoll(a[MSG_ROLL_DICE])
    };
    var a = this;
    this._init()
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 840,
    EDGEBOARD_X = 120,
    EDGEBOARD_Y = 122,
    PRIMARY_FONT = "flashrogersstraight",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    GAME_PLAYERIO_ID = "backgammon-edrzmezujusfgjtbnpqwyw",
    GAME_NAME = "backgammon_multiplayer",
    MULTIPLAYER_TEST_LOCAL = !1,
    s_b2Players, NUM_PIECES = 15,
    BLACK_PIECE = 0,
    WHITE_PIECE = 1,
    TRIANGLE_UP = 1,
    TRIANGLE_DOWN = -1,
    BAR_UP = 0,
    BAR_DOWN = 1,
    NUM_TRIANGLES = 24,
    FINAL_CELL_WHITE = 24,
    FINAL_CELL_BLACK = -1,
    WHITE_DICES = 0,
    RED_DICES = 1,
    X_TRIANGLE_LEFT = 290,
    X_TRIANGLE_RIGHT = 759,
    Y_TRIANGLE_UP =
    128,
    Y_TRIANGLE_DOWN = 712,
    X_OFFBOARD = 1155,
    Y_OFFBOARD_DOWN = 458,
    Y_OFFBOARD_UP = 143,
    X_INTERFACE_PLAYER = 180,
    Y_INTERFACE_PLAYER_1 = 133,
    Y_INTERFACE_PLAYER_2 = 449,
    X_INTERFACE_PLAYER_END = CANVAS_WIDTH - 230,
    TIME_LOOP_WAIT = 1E3,
    MIN_TIME_THINK = 700,
    MAX_TIME_THINK = 2300,
    MS_DISTRIBUTION, CELL_0 = 0,
    CELL_1 = 1,
    CELL_2 = 2,
    CELL_3 = 3,
    CELL_4 = 4,
    CELL_5 = 5,
    CELL_6 = 6,
    CELL_7 = 7,
    CELL_8 = 8,
    CELL_9 = 9,
    CELL_10 = 10,
    CELL_11 = 11,
    CELL_12 = 12,
    CELL_13 = 13,
    CELL_14 = 14,
    CELL_15 = 15,
    CELL_16 = 16,
    CELL_17 = 17,
    CELL_18 = 18,
    CELL_19 = 19,
    CELL_20 = 20,
    CELL_21 = 21,
    CELL_22 = 22,
    CELL_23 =
    23,
    MULTIPLIER_SCORE, STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_LEVEL_SELECTION = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_BACK_MENU = 6,
    ON_RESTART = 7,
    NUM_TURNS_PER_ADS = 20,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_PRELOADER_CONTINUE = "START",
    TEXT_SCORE = "SCORE",
    TEXT_ARE_SURE = "ARE YOU SURE?",
    TEXT_GAMEOVER = "CONGRATULATION! YOU WON THIS MATCH!",
    TEXT_LOSE = "PLAYER ",
    TEXT_LOSE2 = " WON THIS MATCH",
    TEXT_WIN_2PLAYERS = "PLAYER ",
    TEXT_WIN_2PLAYERS_2 =
    " WON THIS MATCH",
    TEXT_SELECT_PLAYERS_MENU = "SELECT MODE",
    TEXT_NO_MOVES_AVAILABLE = "NO MOVES AVAILABLE, NEXT PLAYER WILL PLAY",
    TEXT_DOUBLE_DICES = "GOT A DOUBLE, DICES REDOUBLED",
    TEXT_THINKING = "THINKING",
    TEXT_WAITING_MOVES = "WAITING OPPONENT",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better",
    TEXT_NETWORK_CONNECTING = "CONNECTING...",
    TEXT_WAIT_OPPONENT = "WAITING OPPONENT...",
    TEXT_OPPONENT_LEFT = "OPPONENT LEFT!",
    TEXT_PLAYER_DISCONNECTED = "YOU LEFT!",
    TEXT_REMATCH = "do you want the re-match?",
    TEXT_WRONG_PASSWORD = "Wrong Password!",
    TEXT_ROOM_IS_FULL = "Room is full!",
    TEXT_FIND_OPPONENT = "finding opponent...",
    TEXT_CONNECT_TO_LOBBY = "Connect to lobby...",
    TEXT_ROOM_DOESNT_EXIST = "Room doesn't exist!",
    TEXT_WAITING_FOR_OPPONENT_IN_ROOM = "waiting for opponent in room: ";

function CPreloader() {
    var a, c, b, e, d, f, g, h, l, k;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k)
    };
    this.unload = function() {
        k.removeAllChildren();
        l.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(m);
        m = s_oSpriteLibrary.getSprite("200x200");
        g = createBitmap(m);
        g.regX = .5 * m.width;
        g.regY = .5 * m.height;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 180;
        k.addChild(g);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
        k.addChild(h);
        g.mask = h;
        m = s_oSpriteLibrary.getSprite("progress_bar");
        e = createBitmap(m);
        e.x = CANVAS_WIDTH / 2 - m.width / 2;
        e.y = CANVAS_HEIGHT / 2 + 50;
        k.addChild(e);
        a = m.width;
        c = m.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, 1, c);
        k.addChild(d);
        e.mask = d;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 100;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        k.addChild(b);
        m = s_oSpriteLibrary.getSprite("but_start");
        l = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, m, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 50, k);
        l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        l.setVisible(!1);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            k.removeChild(f)
        })
    };
    this._onButStartRelease = function() {
        $(s_oMain).trigger("show_preroll_ad");
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(f) {
        b.text = f + "%";
        100 === f && (l.setVisible(!0),
            b.visible = !1, e.visible = !1);
        d.graphics.clear();
        f = Math.floor(f * a / 100);
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, f, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0,
        e = 0,
        d = STATE_LOADING,
        f;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !0;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oNetworkManager = new CNetworkManager;
        f = new CPreloader
    };
    this.preloaderReady = function() {
        c = !0;
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
    };
    this.soundLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "press_button"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: "./sounds/",
            filename: "click_cell",
            loop: !1,
            volume: 1,
            ingamename: "click_cell"
        });
        a.push({
            path: "./sounds/",
            filename: "dices",
            loop: !1,
            volume: 1,
            ingamename: "dices"
        });
        a.push({
            path: "./sounds/",
            filename: "positive_beep",
            loop: !1,
            volume: 1,
            ingamename: "positive_beep"
        });
        a.push({
            path: "./sounds/",
            filename: "negative_beep",
            loop: !1,
            volume: 1,
            ingamename: "negative_beep"
        });
        e += a.length;
        s_aSounds = [];
        for (var b = 0; b <
            a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("local_but", "./sprites/local_but.png");
        s_oSpriteLibrary.addSprite("multiplayer_but", "./sprites/multiplayer_but.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("alert_box",
            "./sprites/alert_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen",
            "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_p1", "./sprites/but_p1.png");
        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_speed", "./sprites/but_speed.png");
        s_oSpriteLibrary.addSprite("white_piece", "./sprites/white_piece.png");
        s_oSpriteLibrary.addSprite("red_piece", "./sprites/red_piece.png");
        s_oSpriteLibrary.addSprite("highlight",
            "./sprites/highlight.png");
        s_oSpriteLibrary.addSprite("triangle_white", "./sprites/triangle_white.png");
        s_oSpriteLibrary.addSprite("triangle_red", "./sprites/triangle_red.png");
        s_oSpriteLibrary.addSprite("but_dice", "./sprites/but_dice.png");
        s_oSpriteLibrary.addSprite("launch_dices_white", "./sprites/launch_dices_white.png");
        s_oSpriteLibrary.addSprite("launch_dices_red", "./sprites/launch_dices_red.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("turn_p1", "./sprites/turn_p1.png");
        s_oSpriteLibrary.addSprite("turn_p2", "./sprites/turn_p2.png");
        s_oSpriteLibrary.addSprite("turn_cpu", "./sprites/turn_cpu.png");
        s_oSpriteLibrary.addSprite("light_turn", "./sprites/turn_selection.png");
        s_oSpriteLibrary.addSprite("bg_select_mode", "./sprites/bg_select_mode.jpg");
        s_oSpriteLibrary.addSprite("dice_white_a_1", "./sprites/dice_white_a_1.png");
        s_oSpriteLibrary.addSprite("dice_white_a_2", "./sprites/dice_white_a_2.png");
        s_oSpriteLibrary.addSprite("dice_white_a_3", "./sprites/dice_white_a_3.png");
        s_oSpriteLibrary.addSprite("dice_white_a_4", "./sprites/dice_white_a_4.png");
        s_oSpriteLibrary.addSprite("dice_white_a_5", "./sprites/dice_white_a_5.png");
        s_oSpriteLibrary.addSprite("dice_white_a_6", "./sprites/dice_white_a_6.png");
        s_oSpriteLibrary.addSprite("dice_white_b_1", "./sprites/dice_white_b_1.png");
        s_oSpriteLibrary.addSprite("dice_white_b_2", "./sprites/dice_white_b_2.png");
        s_oSpriteLibrary.addSprite("dice_white_b_3", "./sprites/dice_white_b_3.png");
        s_oSpriteLibrary.addSprite("dice_white_b_4", "./sprites/dice_white_b_4.png");
        s_oSpriteLibrary.addSprite("dice_white_b_5", "./sprites/dice_white_b_5.png");
        s_oSpriteLibrary.addSprite("dice_white_b_6", "./sprites/dice_white_b_6.png");
        s_oSpriteLibrary.addSprite("dice_red_a_1", "./sprites/dice_red_a_1.png");
        s_oSpriteLibrary.addSprite("dice_red_a_2", "./sprites/dice_red_a_2.png");
        s_oSpriteLibrary.addSprite("dice_red_a_3", "./sprites/dice_red_a_3.png");
        s_oSpriteLibrary.addSprite("dice_red_a_4", "./sprites/dice_red_a_4.png");
        s_oSpriteLibrary.addSprite("dice_red_a_5", "./sprites/dice_red_a_5.png");
        s_oSpriteLibrary.addSprite("dice_red_a_6", "./sprites/dice_red_a_6.png");
        s_oSpriteLibrary.addSprite("dice_red_b_1", "./sprites/dice_red_b_1.png");
        s_oSpriteLibrary.addSprite("dice_red_b_2", "./sprites/dice_red_b_2.png");
        s_oSpriteLibrary.addSprite("dice_red_b_3", "./sprites/dice_red_b_3.png");
        s_oSpriteLibrary.addSprite("dice_red_b_4", "./sprites/dice_red_b_4.png");
        s_oSpriteLibrary.addSprite("dice_red_b_5", "./sprites/dice_red_b_5.png");
        s_oSpriteLibrary.addSprite("dice_red_b_6", "./sprites/dice_red_b_6.png");
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        f.unload();
        try {
            checkMoreGames(s_szGameID, "bottom-left", ["multiplayer", "board"], [], -1, "light_brown")
        } catch (h) {}
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        try {
            showMoreGames()
        } catch (h) {}
        new CMenu;
        d = STATE_MENU
    };
    this.gotoGame = function() {
        s_oGame =
            new CGameSingle(g);
        d = STATE_GAME
    };
    this.gotoGameMulti = function() {
        s_b2Players = !0;
        s_oGame = new CGameMulti(g);
        d = STATE_GAME
    };
    this.gotoGameWithBot = function() {
        s_b2Players = !1;
        s_oGame = new CGameSingleWithBot(g);
        d = STATE_GAME
    };
    this.gotoSelectPlayers = function() {
        new CSelectPlayers
    };
    this.gotoSelectMode = function() {
        new CSelectMode
    };
    this.gotoHelp = function() {
        new CHelp;
        d = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile ||
            Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            d === STATE_GAME && s_oGame.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    MULTIPLIER_SCORE = 100;
    var g = a;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iLastLevel = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oCanvas, s_aSounds, s_oNetworkManager;

function CMenu() {
    var a, c, b, e, d, f, g, h, l, k, m, n, q, t, y, r, x, w, z = null,
        C = null;
    this._init = function() {
        s_b2Players = !1;
        n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(n);
        b = CANVAS_WIDTH / 2 - 200;
        e = CANVAS_HEIGHT - 100;
        var m = s_oSpriteLibrary.getSprite("local_but");
        q = new CGfxButton(b, e, m, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onButLocalRelease, this);
        a = CANVAS_WIDTH / 2 + 200;
        c = CANVAS_HEIGHT - 100;
        m = s_oSpriteLibrary.getSprite("multiplayer_but");
        t = new CGfxButton(a, c, m, s_oStage);
        t.addEventListener(ON_MOUSE_UP,
            this._onButMultiplayerRelease, this);
        m = s_oSpriteLibrary.getSprite("but_info");
        l = m.width / 2 + 10;
        k = m.height / 2 + 10;
        x = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, m, s_oStage);
        x.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m = s_oSpriteLibrary.getSprite("audio_icon"), g = CANVAS_WIDTH - m.width / 4 - 10, h = m.height / 2 + 10, r = new CToggle(g, h, m, s_bAudioActive, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        m = window.document;
        var F = m.documentElement;
        z = F.requestFullscreen || F.mozRequestFullScreen || F.webkitRequestFullScreen || F.msRequestFullscreen;
        C = m.exitFullscreen || m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (z = !1);
        z && screenfull.enabled && (m = s_oSpriteLibrary.getSprite("but_fullscreen"), d = l + m.width / 2 + 5, f = m.height / 2 + 10, w = new CToggle(d, f, m, s_bFullscreen, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        y = new createjs.Shape;
        y.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(y);
        createjs.Tween.get(y).to({
            alpha: 0
        }, 1E3).call(function() {
            y.visible = !1
        });
        s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.pulseTitle = function() {
        var a = this;
        (new createjs.Tween.get(void 0)).to({
            scaleX: .9,
            scaleY: .9
        }, 850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        }, 650, createjs.Ease.quadIn).call(function() {
            a.pulseTitle()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(void 0);
        q.unload();
        q = null;
        t.unload();
        t = null;
        y.visible = !1;
        x.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        z && screenfull.enabled && w.unload();
        s_oStage.removeChild(n);
        s_oMenu = n = null
    };
    this.refreshButtonPos = function(n, m) {
        q.setPosition(b, e - m);
        t.setPosition(a, c - m);
        x.setPosition(l + n, m + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(g - n, m + h);
        z && screenfull.enabled && w.setPosition(d + n, f + m)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut =
        function() {
            w.setActive(s_bFullscreen)
        };
    this._onFullscreen = function() {
        s_bFullscreen ? C.call(window.document) : z.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButLocalRelease = function() {
        this.unload();
        s_bPlayWithBot = s_bMultiplayer = !1;
        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers();
        try {
            hideMoreGames()
        } catch (D) {}
    };
    this._onButMultiplayerRelease = function() {
        $(s_oMain).trigger("start_session");
        s_bMultiplayer = !0;
        s_bPlayWithBot = !1;
        s_oNetworkManager.addEventListener(ON_GAMEROOM_CONNECTION_SUCCESS,
            this._onGameStart);
        s_oNetworkManager.addEventListener(ON_MATCHMAKING_CONNECTION_SUCCESS, this._checkMatchWithBot);
        s_oNetworkManager.addEventListener(ON_BACK_FROM_A_ROOM, this.clearBotCheck);
        s_oNetworkManager.connectToSystem();
        try {
            hideMoreGames()
        } catch (D) {}
    };
    this._onGameStart = function() {
        s_oMenu.clearBotCheck();
        s_bMultiplayer = !0;
        s_bPlayWithBot = !1;
        s_oMenu.unload();
        s_oMain.gotoGameMulti()
    };
    this._checkMatchWithBot = function() {
        var a = randomFloatBetween(18E3, 26E3);
        m = setTimeout(function() {
            s_bPlayWithBot = s_bMultiplayer = !0;
            g_oCTLMultiplayer.closeAllDialog();
            s_oNetworkManager.disconnect();
            s_oNetworkManager.generateRandomName();
            s_oMenu.unload();
            s_oMain.gotoGameWithBot()
        }, a)
    };
    this.clearBotCheck = function() {
        clearTimeout(m)
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null,
    CGameBase = function(a) {
        this._bStartGame;
        this._bPieceMoving;
        this._iNumTurns;
        this._iScore;
        this._oInterface;
        this._oEndPanel;
        this._bPieceClicked;
        this._oTriangleContainer;
        this._aTriangle;
        this._oPieceContainer;
        this._iCounterDistribution;
        this._aPosDistribution;
        this._bTurnPlayer1;
        this._iDice1;
        this._iDice2;
        this._bDice1;
        this._bDice2;
        this._bDoubleDice;
        this._iPlayerDice;
        this._aTmpPieces;
        this._oCurrentPiece;
        this._oContainerBar;
        this._aBar;
        this._oEndRectWhite;
        this._oEndRectBlack;
        this._oWhiteDices;
        this._oRedDices;
        this._bCpuTurned;
        this._iBearOffWhite;
        this._iBearOffBlack;
        this._oAlertBox;
        this._oThinking;
        this._bFastDistribution;
        this._oFastDistributionBut
    };
CGameBase.prototype._init = function() {
    MS_DISTRIBUTION = 300;
    this._aTmpPieces = [];
    this.reset();
    var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(a);
    this._oTriangleContainer = new createjs.Container;
    s_oStage.addChild(this._oTriangleContainer);
    this._aBar = [];
    this._oContainerBar = new createjs.Container;
    s_oStage.addChild(this._oContainerBar);
    this._aBar.push(new CBar(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 265, BAR_UP, this._oContainerBar));
    this._aBar.push(new CBar(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 +
        265, BAR_DOWN, this._oContainerBar));
    this._aTriangle = [];
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 310, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_0));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 248, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_1));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 186, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_2));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 124, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_3));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT +
        62, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_4));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_5));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 310, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_6));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 248, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_7));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 186, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_8));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT +
        124, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_9));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 62, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_10));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT, Y_TRIANGLE_UP, this._oTriangleContainer, CELL_11));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_12));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 62, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_13));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT +
        124, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_14));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 186, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_15));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 248, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_16));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_LEFT + 310, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_17));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_18));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT +
        62, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_19));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 124, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_20));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 186, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_21));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 248, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_22));
    this._aTriangle.push(new CTriangle(X_TRIANGLE_RIGHT + 310, Y_TRIANGLE_DOWN, this._oTriangleContainer, CELL_23));
    this._oPieceContainer =
        new createjs.Container;
    s_oStage.addChild(this._oPieceContainer);
    this._aPosDistribution = [0, 0, 11, 11, 11, 11, 11, 16, 16, 16, 18, 18, 18, 18, 18, 23, 23, 12, 12, 12, 12, 12, 7, 7, 7, 5, 5, 5, 5, 5];
    for (a = 0; a < NUM_PIECES; a++) this._aTmpPieces.push(new CPiece(X_OFFBOARD, Y_OFFBOARD_DOWN + 17 * a, WHITE_PIECE, this._oPieceContainer, a));
    for (a = 0; a < NUM_PIECES; a++) this._aTmpPieces.push(new CPiece(X_OFFBOARD, Y_OFFBOARD_UP + 17 * a, BLACK_PIECE, this._oPieceContainer, a + NUM_PIECES));
    this._oWhiteDices = new CDices(0);
    this._oRedDices = new CDices(1);
    this._oAlertBox =
        new CAlertBox(s_oStage);
    a = s_oSpriteLibrary.getSprite("but_speed");
    this._oFastDistributionBut = new CGfxButton(CANVAS_WIDTH - 200, CANVAS_HEIGHT / 2, a, s_oStage);
    this._oFastDistributionBut.addEventListener(ON_MOUSE_DOWN, function() {
        s_oGame.onFastDistribution()
    });
    this._oInterface = new CInterface
};
CGameBase.prototype.reset = function() {
    this._bPieceMoving = this._bFastDistribution = !1;
    this._iBearOffBlack = this._iBearOffWhite = 0;
    this._bPieceClicked = !1;
    this._bStartGame = !0;
    this._iPlayerDice = this._iCounterDistribution = this._iScore = 0;
    this._bCpuTurned = !1;
    this._iDice2 = this._iDice1 = 0;
    this._bDoubleDice = this._bDice2 = this._bDice1 = !1;
    this._iNumTurns = 0
};
CGameBase.prototype.initDistribution = function() {
    this._bFastDistribution && (MS_DISTRIBUTION = 0);
    if (this._iCounterDistribution < 2 * NUM_PIECES) {
        var a = this._aTmpPieces[this._iCounterDistribution];
        var c = this._aPosDistribution[this._iCounterDistribution];
        this._oPieceContainer.addChildAt(a.getPiece(), this._oPieceContainer.numChildren);
        a.movePieceDistribution(this._aTriangle[c].getX(), this._aTriangle[c].getY());
        a.setTriangle(c);
        this._aTriangle[c].addPiece(a);
        this._iCounterDistribution++
    } else s_oGame._onAfterDistribution()
};
CGameBase.prototype.onFastDistribution = function() {
    this._bFastDistribution = !0;
    (new createjs.Tween.get(s_oGame._oFastDistributionBut.getButtonImage())).to({
        x: CANVAS_WIDTH + 200
    }, 300).call(function() {
        s_oGame._oFastDistributionBut.unload()
    })
};
CGameBase.prototype.onClickedPiece = function(a) {
    if (!this._bPieceMoving) {
        playSound("click_cell", 1, !1); - 1 !== a.getTriangle() && 24 !== a.getTriangle() ? this._oCurrentPiece = this._aTriangle[a.getTriangle()].getLastPiece() : a.getColor() === WHITE_PIECE ? this._oCurrentPiece = this._aBar[BAR_UP].getLastPiece() : this._oCurrentPiece = this._aBar[BAR_DOWN].getLastPiece();
        var c = this._oCurrentPiece.getColor() === WHITE_PIECE ? BAR_UP : BAR_DOWN;
        if (0 < this._iPlayerDice)
            if (this._oCurrentPiece.setOnTop(), !1 === this._bPieceClicked) {
                if (this.isPossibleMove(this._oCurrentPiece)) {
                    this._oCurrentPiece.setClicked(!0);
                    this._bPieceClicked = !0;
                    var b = this.isPossibleMove(this._oCurrentPiece);
                    if (this._bDoubleDice) {
                        if (0 < b[0].length) this._aTriangle[b[0][0].iFocusTriangle].onFocus(b[0][0]);
                        if (1 < b[0].length && 2 > this._aBar[c].getNumPieces()) this._aTriangle[b[0][1].iFocusTriangle].onFocus(b[0][1]);
                        if (2 < b[0].length && 2 > this._aBar[c].getNumPieces()) this._aTriangle[b[0][2].iFocusTriangle].onFocus(b[0][2]);
                        if (3 < b[0].length && 2 > this._aBar[c].getNumPieces()) this._aTriangle[b[0][3].iFocusTriangle].onFocus(b[0][3])
                    } else {
                        if (0 < b[0].length) this._aTriangle[b[0][0].iFocusTriangle].onFocus(b[0][0]);
                        if (0 < b[1].length) this._aTriangle[b[1][0].iFocusTriangle].onFocus(b[1][0]);
                        if (0 < b[2].length && 2 > this._aBar[c].getNumPieces()) this._aTriangle[b[2][0].iFocusTriangle].onFocus(b[2][0])
                    }
                    0 < b[3].length && (b[3][0].iFocusTriangle === FINAL_CELL_WHITE ? (a = s_oSpriteLibrary.getSprite("light_turn"), this._oEndRectWhite = createBitmap(a, a.width, a.height), this._oEndRectWhite.regX = 11, this._oEndRectWhite.regY = 12, this._oEndRectWhite.x = X_INTERFACE_PLAYER_END, this._oEndRectWhite.y = Y_INTERFACE_PLAYER_2, this._oEndRectWhite.on("mousedown",
                        function() {
                            s_oGame.onClickedTriangle(b[3][0])
                        }), this._oEndRectWhite.on("rollover", function(a) {
                        s_bMobile || (a.target.cursor = "pointer")
                    }), this._oEndRectWhite.on("rollout", function(a) {
                        s_bMobile || (a.target.cursor = "default")
                    }), s_oStage.addChild(this._oEndRectWhite)) : (a = s_oSpriteLibrary.getSprite("light_turn"), this._oEndRectBlack = createBitmap(a, a.width, a.height), this._oEndRectBlack.regX = 11, this._oEndRectBlack.regY = 12, this._oEndRectBlack.x = X_INTERFACE_PLAYER_END, this._oEndRectBlack.y = Y_INTERFACE_PLAYER_1,
                        this._oEndRectBlack.on("mousedown", function() {
                            s_oGame.onClickedTriangle(b[3][0])
                        }), this._oEndRectBlack.on("rollover", function(a) {
                            s_bMobile || (a.target.cursor = "pointer")
                        }), this._oEndRectBlack.on("rollout", function(a) {
                            s_bMobile || (a.target.cursor = "default")
                        }), s_oStage.addChild(this._oEndRectBlack)))
                }
            } else if (!0 === this._oCurrentPiece.getStateClick()) {
            this._oCurrentPiece.setClicked(!1);
            this._bPieceClicked = !1;
            s_oStage.removeChild(this._oEndRectWhite);
            s_oStage.removeChild(this._oEndRectBlack);
            for (var e = 0; e <
                this._aTriangle.length; e++) this._aTriangle[e].onIdle()
        } else {
            s_oStage.removeChild(this._oEndRectWhite);
            s_oStage.removeChild(this._oEndRectBlack);
            for (e = 0; e < this._aTriangle.length; e++)
                if (this._aTriangle[e].onIdle(), 0 < this._aTriangle[e].getNumPieces()) {
                    c = this._aTriangle[e].getArrayPieces();
                    for (var d = 0; d < c.length; d++) c[d].setClicked(!1)
                }
            this._bPieceClicked = !1;
            this.onClickedPiece(a)
        }
    }
};
CGameBase.prototype.isPossibleMove = function(a) {
    var c = a.getColor();
    a = a.getTriangle();
    if (c === WHITE_PIECE) {
        var b = 1;
        var e = FINAL_CELL_WHITE
    } else b = -1, e = FINAL_CELL_BLACK;
    var d = [
            [],
            [],
            [],
            []
        ],
        f;
    if (this._bDoubleDice)(f = this._aTriangle[a + this._iDice1 * b]) ? (1 >= f.getNumPieces() || f.getColor() === c) && d[0].push({
            iFocusTriangle: a + this._iDice1 * b,
            cost: 1,
            aMoveTriangle: [a + this._iDice1 * b]
        }) : this.checkBearOff() && (a + this._iDice1 * b === e || this.checkPieceBefore(c, a)) && d[3].push({
            iFocusTriangle: e,
            cost: 1,
            aMoveTriangle: [e]
        }), 0 <
        d[0].length && 1 < this._iPlayerDice && ((f = this._aTriangle[a + 2 * this._iDice1 * b]) ? (1 >= f.getNumPieces() || f.getColor() === c) && d[0].push({
            iFocusTriangle: a + 2 * this._iDice1 * b,
            cost: 2,
            aMoveTriangle: [a + this._iDice1 * b, a + 2 * this._iDice1 * b]
        }) : this.checkBearOff() && (a + 2 * this._iDice1 * b === e || this.checkPieceBefore(c, a + this._iDice1 * b)) && d[3].push({
            iFocusTriangle: e,
            cost: 2,
            aMoveTriangle: [a + this._iDice1 * b, e]
        })), 1 < d[0].length && 2 < this._iPlayerDice && ((f = this._aTriangle[a + 3 * this._iDice1 * b]) ? (1 >= f.getNumPieces() || f.getColor() === c) &&
            d[0].push({
                iFocusTriangle: a + 3 * this._iDice1 * b,
                cost: 3,
                aMoveTriangle: [a + this._iDice1 * b, a + 2 * this._iDice1 * b, a + 3 * this._iDice1 * b]
            }) : this.checkBearOff() && (a + 3 * this._iDice1 * b === e || this.checkPieceBefore(c, a + 2 * this._iDice1 * b)) && d[3].push({
                iFocusTriangle: e,
                cost: 3,
                aMoveTriangle: [a + this._iDice1 * b, a + 2 * this._iDice1 * b, e]
            })), 2 < d[0].length && 3 < this._iPlayerDice && ((f = this._aTriangle[a + 4 * this._iDice1 * b]) ? (1 >= f.getNumPieces() || f.getColor() === c) && d[0].push({
            iFocusTriangle: a + 4 * this._iDice1 * b,
            cost: 4,
            aMoveTriangle: [a + this._iDice1 *
                b, a + 2 * this._iDice1 * b, a + 3 * this._iDice1 * b, a + 4 * this._iDice1 * b
            ]
        }) : this.checkBearOff() && (a + 4 * this._iDice1 * b === e || this.checkPieceBefore(c, a + 3 * this._iDice1 * b)) && d[3].push({
            iFocusTriangle: e,
            cost: 4,
            aMoveTriangle: [a + this._iDice1 * b, a + 2 * this._iDice1 * b, a + 2 * this._iDice1 * b, e]
        }));
    else if ((f = this._aTriangle[a + this._iDice1 * b]) ? this._bDice1 && (1 >= f.getNumPieces() || f.getColor() === c) && d[0].push({
            iFocusTriangle: a + this._iDice1 * b,
            cost: 1,
            aMoveTriangle: [a + this._iDice1 * b],
            iDiceDisable: 0
        }) : this._bDice1 && this.checkBearOff() &&
        (a + this._iDice1 * b === e || this.checkPieceBefore(c, a)) && d[3].push({
            iFocusTriangle: e,
            cost: 1,
            iDiceDisable: 0,
            aMoveTriangle: [e]
        }), (f = this._aTriangle[a + this._iDice2 * b]) ? this._bDice2 && (1 >= f.getNumPieces() || f.getColor() === c) && d[1].push({
            iFocusTriangle: a + this._iDice2 * b,
            cost: 1,
            aMoveTriangle: [a + this._iDice2 * b],
            iDiceDisable: 1
        }) : this._bDice2 && this.checkBearOff() && (a + this._iDice2 * b === e || this.checkPieceBefore(c, a)) && d[3].push({
            iFocusTriangle: e,
            cost: 1,
            iDiceDisable: 1,
            aMoveTriangle: [e]
        }), 0 < d[0].length || 0 < d[1].length) {
        var g =
            0 < d[0].length ? d[0][0].iFocusTriangle : d[1][0].iFocusTriangle;
        0 < d[0].length && 1 === this._aTriangle[d[0][0].iFocusTriangle].getNumPieces() && (g = d[0][0].iFocusTriangle);
        0 < d[1].length && 1 === this._aTriangle[d[1][0].iFocusTriangle].getNumPieces() && (g = d[1][0].iFocusTriangle);
        (f = this._aTriangle[a + (this._iDice1 + this._iDice2) * b]) ? this._bDice1 && this._bDice2 && (1 >= f.getNumPieces() || f.getColor() === c) && d[2].push({
            iFocusTriangle: a + (this._iDice1 + this._iDice2) * b,
            cost: 2,
            aMoveTriangle: [g, a + (this._iDice1 + this._iDice2) * b],
            iDiceDisable: 2
        }): this._bDice1 && this._bDice2 && this.checkBearOff() && (a + (this._iDice1 + this._iDice2) * b === e || this.checkPieceBefore(c, g)) && d[3].push({
            iFocusTriangle: e,
            cost: 2,
            iDiceDisable: 2,
            aMoveTriangle: [g, e]
        })
    }
    return 0 < d[0].length || 0 < d[1].length || 0 < d[3].length ? d : null
};
CGameBase.prototype.checkPieceBefore = function(a, c) {
    var b = !0;
    if (a === WHITE_PIECE)
        for (var e = 0; e < c; e++)
            for (var d = 0; d < this._aTriangle[e].getArrayPieces().length; d++) {
                var f = this._aTriangle[e].getArrayPieces();
                if (f[d].getColor() === WHITE_PIECE) {
                    b = !1;
                    break
                }
            } else
                for (e = 23; e > c; e--)
                    for (d = 0; d < this._aTriangle[e].getArrayPieces().length; d++)
                        if (f = this._aTriangle[e].getArrayPieces(), f[d].getColor() === BLACK_PIECE) {
                            b = !1;
                            break
                        }
    return b
};
CGameBase.prototype.checkBearOff = function() {
    var a = !0;
    if (this._bTurnPlayer1)
        for (var c = 0; c < this._aTriangle.length; c++) {
            var b = this._aTriangle[c].getArrayPieces();
            for (var e = 0; e < b.length; e++)
                if (b[e].getColor() === WHITE_PIECE && (!0 === b[e].isOnBar() || 18 > b[e].getTriangle())) {
                    a = !1;
                    break
                }
        } else
            for (c = 0; c < this._aTriangle.length; c++)
                for (b = this._aTriangle[c].getArrayPieces(), e = 0; e < b.length; e++)
                    if (b[e].getColor() === BLACK_PIECE && (!0 === b[e].isOnBar() || 5 < b[e].getTriangle())) {
                        a = !1;
                        break
                    }
    return a
};
CGameBase.prototype.checkAvaiableMove = function() {
    var a = !1;
    if (this._bTurnPlayer1) {
        var c = WHITE_PIECE;
        var b = BAR_UP
    } else c = BLACK_PIECE, b = BAR_DOWN;
    for (var e = 0; e < this._aTriangle.length; e++) {
        var d = this._aTriangle[e].getArrayPieces();
        for (var f = 0; f < d.length; f++)
            if (d[f].getColor() === c && !0 === d[f].getStateListener() && this.isPossibleMove(d[f])) {
                a = !0;
                break
            }
    }
    d = this._aBar[b].getArrayPieces();
    for (e = 0; e < this._aBar[b].getNumPieces(); e++)
        if (this.isPossibleMove(d[e])) {
            a = !0;
            break
        }
    return a
};
CGameBase.prototype.updateInput = function() {
    for (var a, c = 0; c < this._aTriangle.length; c++)
        if (0 < this._aTriangle[c].getNumPieces()) {
            a = this._aTriangle[c].getArrayPieces();
            for (var b = 0; b < a.length; b++) a[b].unloadListeners()
        }
    for (c = 0; c < this._aBar.length; c++)
        if (0 < this._aBar[c].getNumPieces())
            for (a = this._aBar[c].getArrayPieces(), b = 0; b < a.length; b++) a[b].unloadListeners();
    if (s_b2Players)
        if (this._bTurnPlayer1)
            if (0 === this._aBar[BAR_UP].getNumPieces())
                for (c = 0; c < this._aTriangle.length; c++) {
                    if (0 < this._aTriangle[c].getNumPieces() &&
                        (a = this._aTriangle[c].getArrayPieces(), this._aTriangle[c].getColor() === WHITE_PIECE))
                        for (b = 0; b < a.length; b++) a[b].initListeners()
                } else
                    for (c = 0; c < this._aBar[0].getArrayPieces().length; c++) this._aBar[BAR_UP].getArrayPieces()[c].initListeners();
            else if (0 === this._aBar[BAR_DOWN].getNumPieces())
        for (c = 0; c < this._aTriangle.length; c++) {
            if (0 < this._aTriangle[c].getNumPieces() && (a = this._aTriangle[c].getArrayPieces(), this._aTriangle[c].getColor() === BLACK_PIECE))
                for (b = 0; b < a.length; b++) a[b].initListeners()
        } else
            for (c =
                0; c < this._aBar[1].getArrayPieces().length; c++) this._aBar[BAR_DOWN].getArrayPieces()[c].initListeners();
    else if (this._bTurnPlayer1)
        if (0 === this._aBar[BAR_UP].getNumPieces())
            for (c = 0; c < this._aTriangle.length; c++) {
                if (0 < this._aTriangle[c].getNumPieces() && (a = this._aTriangle[c].getArrayPieces(), this._aTriangle[c].getColor() === WHITE_PIECE))
                    for (b = 0; b < a.length; b++) a[b].initListeners()
            } else
                for (c = 0; c < this._aBar[0].getArrayPieces().length; c++) this._aBar[BAR_UP].getArrayPieces()[c].initListeners();
        else {
            if (0 ===
                this._aBar[BAR_DOWN].getNumPieces())
                for (c = 0; c < this._aTriangle.length; c++) {
                    if (0 < this._aTriangle[c].getNumPieces() && (a = this._aTriangle[c].getArrayPieces(), this._aTriangle[c].getColor() === BLACK_PIECE))
                        for (b = 0; b < a.length; b++) a[b].cpuInit()
                } else
                    for (c = 0; c < this._aBar[1].getArrayPieces().length; c++) this._aBar[BAR_DOWN].getArrayPieces()[c].cpuInit();
            !1 === this._bCpuTurned && (this._bCpuTurned = !0, this.rollDice())
        }
};
CGameBase.prototype.afterMove = function() {
    this._bPieceMoving = !1;
    s_oGame.checkGameOver();
    0 < this._iPlayerDice ? !0 === s_oGame.checkAvaiableMove() ? (s_oGame.updateInput(), s_b2Players || this._bTurnPlayer1 || s_oGame.cpuThinkBeforeChoice()) : (this._oAlertBox.show(TEXT_NO_MOVES_AVAILABLE), playSound("negative_beep", 1, !1), this._oWhiteDices.fadeOutTween(), this._oRedDices.fadeOutTween(), this._iPlayerDice = 0, this._bDice2 = this._bDice1 = this._bDoubleDice = !1, s_oGame.changeTurn(), s_oGame.updateInput()) : (this._bDoubleDice = !1, this._oWhiteDices.fadeOutTween(), s_oGame.checkGameOver(), s_oGame.changeTurn(), s_oGame.updateInput())
};
CGameBase.prototype.afterRollDice = function() {
    this._bTurnPlayer1 ? (this._iDice1 = this._oWhiteDices.returnDiceResult1(), this._iDice2 = this._oWhiteDices.returnDiceResult2()) : (this._iDice1 = this._oRedDices.returnDiceResult1(), this._iDice2 = this._oRedDices.returnDiceResult2());
    this._bDice2 = this._bDice1 = !0;
    this._iDice1 !== this._iDice2 ? this._iPlayerDice = 2 : (this._iPlayerDice = 4, this._oAlertBox.show(TEXT_DOUBLE_DICES), playSound("positive_beep", 1, !1), this._bDoubleDice = !0);
    !1 === s_oGame.checkAvaiableMove() ? (this._bDoubleDice =
        this._bDice2 = this._bDice1 = !1, this._iPlayerDice = 0, s_oGame.changeTurn(), s_oGame.updateInput(), !s_b2Players && this._bTurnPlayer1 && this._oInterface.setVisibleButDice(!0), s_b2Players || this._bTurnPlayer1 || (this._oInterface.setVisibleButDice(!1), setTimeout(s_oGame.rollDice, 1E3)), s_b2Players && this._oInterface.setVisibleButDice(!0), this._oAlertBox.show(TEXT_NO_MOVES_AVAILABLE), playSound("negative_beep", 1, !1)) : (this._oInterface.setVisibleButDice(!1), s_b2Players || !1 !== this._bTurnPlayer1 || (new createjs.Tween.get(s_oGame)).to({},
        1500).call(s_oGame.cpuThinkBeforeChoice))
};
CGameBase.prototype.debug = function() {
    for (var a = 0; a < this._aTriangle.length; a++) 0 < this._aTriangle[a].getNumPieces() && this._aTriangle[a].getLastPiece().unloadListeners()
};
CGameBase.prototype.unload = function() {
    this._bStartGame = !1;
    s_oGame._oInterface.unload();
    s_oGame._oEndPanel && s_oGame._oEndPanel.unload();
    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren()
};
CGameBase.prototype.onRestart = function() {
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", this._iScore);
    $(s_oMain).trigger("show_interlevel_ad");
    this._oEndPanel.hide();
    s_oGame.reset();
    for (var a = 0; a < this._aTriangle.length; a++) this._aTriangle[a].reset();
    s_oGame.initDistribution()
};
CGameBase.prototype.onConfirmExit = function() {
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", this._iScore);
    $(s_oMain).trigger("show_interlevel_ad");
    s_oGame.unload();
    s_oMain.gotoMenu()
};
CGameBase.prototype.checkGameOver = function() {
    for (var a, c = 0, b = 0, e = 0; e < this._aTriangle.length; e++) {
        a = this._aTriangle[e].getArrayPieces();
        for (var d = 0; d < a.length; d++) a[d].getColor() === WHITE_PIECE ? c++ : b++;
        c += this._aBar[BAR_UP].getNumPieces();
        b += this._aBar[BAR_DOWN].getNumPieces()
    }
    0 === c ? (this._bStartGame = !1, this.gameOver(0)) : 0 === b && (this._bStartGame = !1, this.gameOver(1))
};
CGameBase.prototype.cpuThinkBeforeChoice = function() {
    this._oThinking.show();
    var a = randomIntBetween(MIN_TIME_THINK, MAX_TIME_THINK);
    setTimeout(function() {
        s_oGame.cpuChoicePiece()
    }, a)
};
CGameBase.prototype.cpuChoicePiece = function() {
    var a, c = [],
        b = 0;
    if (0 < this._aBar[BAR_DOWN].getNumPieces()) {
        var e = this._aBar[BAR_DOWN].getLastPiece();
        if (a = s_oGame.isPossibleMove(e))
            for (var d = 0; d < a.length - 1; d++)
                for (var f = 0; f < a[d].length; f++) b = 0, 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[d][f].iFocusTriangle].getColor() === BLACK_PIECE && b++, 13 > a[d][f].iFocusTriangle && b++, 13 < a[d][f].iFocusTriangle && 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && b++, 13 > a[d][f].iFocusTriangle &&
                    1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && b--, 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && 13 > a[d][f].iFocusTriangle && b++, c.push({
                        oMove: a[d][f],
                        iPoints: b,
                        oCurrentPiece: e
                    })
    } else
        for (d = 0; d < this._aTriangle.length; d++)
            if (0 < this._aTriangle[d].getNumPieces() && (e = this._aTriangle[d].getLastPiece(), e.getColor() === BLACK_PIECE && e.getStateListener() && (a = s_oGame.isPossibleMove(e)))) {
                for (var g = 0; g < a.length - 1; g++)
                    for (f = 0; f < a[g].length; f++) b = 0, 3 > this._aTriangle[e.getTriangle()].getNumPieces() &&
                        (b -= 3), 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() === BLACK_PIECE && (b += 3), 13 > a[g][f].iFocusTriangle && b++, 13 < a[g][f].iFocusTriangle && b--, 11 < a[g][f].iFocusTriangle && 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() === WHITE_PIECE && (b += 4), 11 > a[g][f].iFocusTriangle && 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() ===
                        WHITE_PIECE && b--, 1 === this._aTriangle[e.getTriangle()].getNumPieces() && b++, 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && 13 > a[g][f].iFocusTriangle && b++, 5 < e.getTriangle() && 5 >= a[g][f].iFocusTriangle && (b += 5), 5 >= e.getTriangle() && 3 > this._aTriangle[e.getTriangle()].getNumPieces() && (b -= 10), 6 > a[g][f].iFocusTriangle && 0 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && (b -= 5), 5 >= e.getTriangle() && (b -= 4), c.push({
                            oMove: a[g][f],
                            iPoints: b,
                            oCurrentPiece: e
                        });
                for (f = 0; f < a[3].length; f++) c.push({
                    oMove: a[3][f],
                    iPoints: 50,
                    oCurrentPiece: e
                })
            }
    c.sort(function(a, b) {
        return parseFloat(b.iPoints) - parseFloat(a.iPoints)
    });
    this._oCurrentPiece = c[0].oCurrentPiece;
    this._oCurrentPiece.setOnTop();
    s_oGame.onClickedTriangle(c[0].oMove)
};
CGameBase.prototype.update = function() {
    s_oGame._oThinking && s_oGame._oThinking.update()
};
CGameBase.prototype.getPieceByIndex = function(a) {
    for (var c = 0; c < this._aTmpPieces.length; c++)
        if (this._aTmpPieces[c].getIndex() === a) return this._aTmpPieces[c]
};
var CGameSingle = function(a) {
    CGameBase.call(this, a);
    this._init()
};
CGameSingle.prototype = Object.create(CGameBase.prototype);
CGameSingle.prototype._init = function() {
    CGameBase.prototype._init();
    this._startGame()
};
CGameSingle.prototype._startGame = function() {
    50 < randomFloatBetween(1, 100) ? this._bTurnPlayer1 = !0 : this._bTurnPlayer1 = !1;
    this.initDistribution();
    this._oThinking = new CThinking;
    this._oThinking.hide();
    this._oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
    this._oEndPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
    this._oEndPanel.addEventListener(ON_RESTART, this.onRestart, this)
};
CGameSingle.prototype._onAfterDistribution = function() {
    if (!this._bFastDistribution) s_oGame.onFastDistribution();
    (s_b2Players || this._bTurnPlayer1) && s_oInterface.setVisibleButDice(!0);
    s_oInterface.onFocusTurn(this._bTurnPlayer1);
    s_oGame.updateInput()
};
CGameSingle.prototype.changeTurn = function() {
    this._iNumTurns++;
    0 === this._iTotThrows % NUM_TURNS_PER_ADS && $(s_oMain).trigger("show_interlevel_ad");
    this._bTurnPlayer1 = !this._bTurnPlayer1;
    this._oInterface.onFocusTurn(this._bTurnPlayer1);
    s_b2Players || this._bTurnPlayer1 ? (this._oInterface.setVisibleButDice(!0), this._oThinking.hide()) : this._bCpuTurned = !1;
    s_b2Players || this._bTurnPlayer1 || this._oThinking.show()
};
CGameSingle.prototype.rollDice = function() {
    s_oGame._oWhiteDices.fadeOutTween();
    s_oGame._oRedDices.fadeOutTween();
    s_oGame._bTurnPlayer1 ? s_oGame._oWhiteDices.show() : s_oGame._bStartGame && s_oGame._oRedDices.show();
    s_oGame._oInterface.setVisibleButDice(!1)
};
CGameSingle.prototype.onClickedTriangle = function(a) {
    playSound("click_cell", 1, !1);
    var c, b = !1;
    var e = this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite : this._iBearOffBlack;
    for (var d = 0; d < this._aTriangle.length; d++) this._aTriangle[d].onIdle();
    s_oStage.removeChild(this._oEndRectWhite);
    s_oStage.removeChild(this._oEndRectBlack);
    if (s_b2Players || this._bTurnPlayer1) this._oCurrentPiece.setClicked(!1), this._bPieceClicked = !1; - 1 === a.iFocusTriangle || 24 === a.iFocusTriangle ? (b = !0, 1 < a.aMoveTriangle.length &&
        (c = a.aMoveTriangle[0])) : c = a.aMoveTriangle[0];
    if (this._aTriangle[c]) this._bPieceMoving = !0, this._aTriangle[c].getColor() !== this._oCurrentPiece.getColor() && 1 === this._aTriangle[c].getNumPieces() && (this._aTriangle[c].getLastPiece().getColor() === WHITE_PIECE ? (this._aTriangle[c].getLastPiece().movePiece(this._aBar[BAR_UP].getX(), this._aBar[BAR_UP].getY()), this._aTriangle[c].getLastPiece().setTriangle(-1), this._aTriangle[c].getLastPiece().setBar(!0), this._aBar[BAR_UP].addPiece(this._aTriangle[c].removePiece())) :
        (this._aTriangle[c].getLastPiece().movePiece(this._aBar[BAR_DOWN].getX(), this._aBar[BAR_DOWN].getY()), this._aTriangle[c].getLastPiece().setTriangle(24), this._aTriangle[c].getLastPiece().setBar(!0), this._aBar[BAR_DOWN].addPiece(this._aTriangle[c].removePiece())));
    else if (-1 === a.iFocusTriangle || 24 === a.iFocusTriangle) this._oCurrentPiece.takeOutAnimation(), (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
            x: this._oCurrentPiece.getXOut(),
            y: this._oCurrentPiece.getYOut(e)
        }, 300, createjs.Ease.cubicOut),
        this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite++ : this._iBearOffBlack++, this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece(), this._oCurrentPiece.setTriangle(null), this._oCurrentPiece.unloadListeners();
    a.aMoveTriangle.shift();
    0 < a.aMoveTriangle.length ? (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
        x: this._aTriangle[c].getX(),
        y: this._aTriangle[c].getY()
    }, 700, createjs.Ease.cubicOut).call(function() {
        s_oGame.onClickedTriangle(a)
    }) : (this._bTurnPlayer1 || s_b2Players ||
        (this._bCpuTurned = !0), this._iPlayerDice -= a.cost, this._bDoubleDice || (0 === a.iDiceDisable ? this._bDice1 = !1 : (1 !== a.iDiceDisable && (this._bDice1 = !1), this._bDice2 = !1)), b ? this.afterMove() : this._oCurrentPiece.movePieceOnBoard(this._aTriangle[c].getX(), this._aTriangle[c].getY()));
    this._oCurrentPiece.isOnBar() ? this._oCurrentPiece.getColor() === WHITE_PIECE ? (this._aBar[BAR_UP].getLastPiece().setBar(!1), this._aTriangle[c].addPiece(this._aBar[BAR_UP].removePiece())) : (this._aBar[BAR_DOWN].getLastPiece().setBar(!1),
        this._aTriangle[c].addPiece(this._aBar[BAR_DOWN].removePiece())) : b || this._aTriangle[c].addPiece(this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece());
    b || this._oCurrentPiece.setTriangle(c)
};
CGameSingle.prototype.gameOver = function(a) {
    for (var c = 0, b = 0; b < this._aTriangle.length; b++) c += this._aTriangle[b].getNumPieces();
    for (b = 0; b < this._aBar.length; b++) c += this._aBar[b].getNumPieces();
    this._iScore = c * MULTIPLIER_SCORE;
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons()
};
var CGameMulti = function(a) {
    CGameBase.call(this, a);
    this._init()
};
CGameMulti.prototype = Object.create(CGameBase.prototype);
CGameMulti.prototype._init = function() {
    CGameBase.prototype._init();
    this._startGame()
};
CGameMulti.prototype._startGame = function() {
    this._bTurnPlayer1 = !0;
    this._oFastDistributionBut.setVisible(!1);
    this._bFastDistribution = !0;
    this.initDistribution();
    this._oThinking = new CThinking;
    this._oThinking.hide();
    this._oThinking.setMessage(TEXT_WAITING_MOVES);
    s_oNetworkManager.isUserA() ? (this._oThinking.hide(), s_oInterface.setPlayersInfo(s_oNetworkManager.getPlayerNickname(), s_oNetworkManager.getEnemyNickname())) : (this._oThinking.show(), s_oInterface.setPlayersInfo(s_oNetworkManager.getEnemyNickname(),
        s_oNetworkManager.getPlayerNickname()));
    this._oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
    this._oEndPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
    this._oEndPanel.addEventListener(ON_RESTART, this._onConfirmRematch, this);
    s_oNetworkManager.addEventListener(ON_DISCONNECTION, this.playerDisconnectedFromGame)
};
CGameMulti.prototype._onAfterDistribution = function() {
    if (!this._bFastDistribution) s_oGame.onFastDistribution();
    s_oNetworkManager.isUserA() && s_oInterface.setVisibleButDice(!0);
    s_oInterface.onFocusTurn(this._bTurnPlayer1);
    s_oGame.updateInput()
};
CGameMulti.prototype.changeTurn = function() {
    this._iNumTurns++;
    0 === this._iTotThrows % NUM_TURNS_PER_ADS && $(s_oMain).trigger("show_interlevel_ad");
    this._bTurnPlayer1 = !this._bTurnPlayer1;
    this._oWhiteDices.fadeOutTween();
    this._oRedDices.fadeOutTween();
    s_oNetworkManager.isUserA() ? this._bTurnPlayer1 ? (this._oThinking.hide(), s_oInterface.setVisibleButDice(!0)) : (this._oThinking.show(), s_oInterface.setVisibleButDice(!1)) : this._bTurnPlayer1 ? (this._oThinking.show(), s_oInterface.setVisibleButDice(!1)) : (this._oThinking.hide(),
        s_oInterface.setVisibleButDice(!0));
    this._oInterface.onFocusTurn(this._bTurnPlayer1)
};
CGameMulti.prototype.rollDice = function() {
    s_oGame._oWhiteDices.fadeOutTween();
    s_oGame._oRedDices.fadeOutTween();
    if (s_oGame._bTurnPlayer1) {
        s_oGame._oWhiteDices.show();
        var a = this._oWhiteDices.returnDiceResult1();
        var c = this._oWhiteDices.returnDiceResult2()
    } else s_oGame._bStartGame && (s_oGame._oRedDices.show(), a = this._oRedDices.returnDiceResult1(), c = this._oRedDices.returnDiceResult2());
    s_oGame._oInterface.setVisibleButDice(!1);
    var b = {};
    b[MSG_ROLL_DICE] = {
        first: a,
        second: c
    };
    s_oNetworkManager.sendMsg(MSG_ROLL_DICE,
        JSON.stringify(b))
};
CGameMulti.prototype.remoteDiceRoll = function(a) {
    s_oGame._bTurnPlayer1 ? s_oGame._oWhiteDices.showAResult(a.first, a.second) : s_oGame._bStartGame && s_oGame._oRedDices.showAResult(a.first, a.second)
};
CGameMulti.prototype.onClickedTriangle = function(a, c) {
    if (!c) {
        var b = {
                aPossibleMove: a,
                iCurrentPieceIndex: this._oCurrentPiece.getIndex()
            },
            e = {};
        e[MSG_MOVE] = b;
        s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(e))
    }
    playSound("click_cell", 1, !1);
    var d;
    b = !1;
    e = this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite : this._iBearOffBlack;
    for (var f = 0; f < this._aTriangle.length; f++) this._aTriangle[f].onIdle();
    s_oStage.removeChild(this._oEndRectWhite);
    s_oStage.removeChild(this._oEndRectBlack);
    if (s_b2Players ||
        this._bTurnPlayer1) this._oCurrentPiece.setClicked(!1), this._bPieceClicked = !1; - 1 === a.iFocusTriangle || 24 === a.iFocusTriangle ? (b = !0, 1 < a.aMoveTriangle.length && (d = a.aMoveTriangle[0])) : d = a.aMoveTriangle[0];
    if (this._aTriangle[d]) this._aTriangle[d].getColor() !== this._oCurrentPiece.getColor() && 1 === this._aTriangle[d].getNumPieces() && (this._aTriangle[d].getLastPiece().getColor() === WHITE_PIECE ? (this._aTriangle[d].getLastPiece().movePiece(this._aBar[BAR_UP].getX(), this._aBar[BAR_UP].getY()), this._aTriangle[d].getLastPiece().setTriangle(-1),
        this._aTriangle[d].getLastPiece().setBar(!0), this._aBar[BAR_UP].addPiece(this._aTriangle[d].removePiece())) : (this._aTriangle[d].getLastPiece().movePiece(this._aBar[BAR_DOWN].getX(), this._aBar[BAR_DOWN].getY()), this._aTriangle[d].getLastPiece().setTriangle(24), this._aTriangle[d].getLastPiece().setBar(!0), this._aBar[BAR_DOWN].addPiece(this._aTriangle[d].removePiece())));
    else if (-1 === a.iFocusTriangle || 24 === a.iFocusTriangle) this._oCurrentPiece.takeOutAnimation(), (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
        x: this._oCurrentPiece.getXOut(),
        y: this._oCurrentPiece.getYOut(e)
    }, 300, createjs.Ease.cubicOut), this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite++ : this._iBearOffBlack++, this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece(), this._oCurrentPiece.setTriangle(null), this._oCurrentPiece.unloadListeners();
    a.aMoveTriangle.shift();
    0 < a.aMoveTriangle.length ? (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
        x: this._aTriangle[d].getX(),
        y: this._aTriangle[d].getY()
    }, 700, createjs.Ease.cubicOut).call(function() {
        s_oGame.onClickedTriangle(a, !0)
    }) : (this._bTurnPlayer1 || s_b2Players || (this._bCpuTurned = !0), this._iPlayerDice -= a.cost, this._bDoubleDice || (0 === a.iDiceDisable ? this._bDice1 = !1 : (1 !== a.iDiceDisable && (this._bDice1 = !1), this._bDice2 = !1)), b ? this.afterMove() : this._oCurrentPiece.movePieceOnBoard(this._aTriangle[d].getX(), this._aTriangle[d].getY()));
    this._oCurrentPiece.isOnBar() ? this._oCurrentPiece.getColor() === WHITE_PIECE ? (this._aBar[BAR_UP].getLastPiece().setBar(!1), this._aTriangle[d].addPiece(this._aBar[BAR_UP].removePiece())) : (this._aBar[BAR_DOWN].getLastPiece().setBar(!1),
        this._aTriangle[d].addPiece(this._aBar[BAR_DOWN].removePiece())) : b || this._aTriangle[d].addPiece(this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece());
    b || this._oCurrentPiece.setTriangle(d)
};
CGameMulti.prototype.remoteMovePiece = function(a) {
    var c = this.getPieceByIndex(a.iCurrentPieceIndex);
    this.onClickedPiece(c);
    this.onClickedTriangle(a.aPossibleMove, !0)
};
CGameMulti.prototype.gameOver = function(a) {
    this._oThinking.hide();
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons();
    var c = !1;
    0 === a ? s_oNetworkManager.isUserA() && (c = !0) : s_oNetworkManager.isUserA() || (c = !0);
    s_oNetworkManager.sendMsg(MSG_END_MATCH, c)
};
CGameMulti.prototype.showRematchQuestion = function() {};
CGameMulti.prototype.unload = function() {
    this._bStartGame = !1;
    s_oGame._oInterface.unload();
    s_oGame._oEndPanel && s_oGame._oEndPanel.unload();
    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren();
    s_oNetworkManager.addEventListener(ON_DISCONNECTION, function() {})
};
CGameMulti.prototype.onConfirmExit = function() {
    s_oGame.unload();
    $(s_oMain).trigger("show_interlevel_ad");
    $(s_oMain).trigger("end_session");
    s_oMain.gotoMenu();
    s_oNetworkManager.disconnect()
};
CGameMulti.prototype._onConfirmRematch = function() {
    this._oEndPanel.changeMessage(TEXT_WAIT_OPPONENT);
    this._oEndPanel.hideButtons();
    s_oNetworkManager.sendMsg(MSG_ACCEPT_REMATCH, "")
};
CGameMulti.prototype.onOpponentRefuseRematch = function() {
    this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
    this._oEndPanel.hideRestartButton();
    this._oEndPanel.centerHomeButton()
};
CGameMulti.prototype.onOpponentAcceptRematch = function() {
    this._oEndPanel.hide();
    s_oNetworkManager.isUserA() || this._oThinking.show();
    s_oGame.onRestart();
    this._bTurnPlayer1 = !0
};
CGameMulti.prototype.playerDisconnectedFromGame = function() {
    if (this._oEndPanel) {
        var a = s_oNetworkManager.isUserA() ? 0 : 1;
        this._oThinking.hide();
        this._oEndPanel.show(this._iScore, a);
        this._oEndPanel.showButtons();
        this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
        this._oEndPanel.hideRestartButton();
        this._oEndPanel.centerHomeButton()
    }
    s_oNetworkManager.sendMsg(MSG_DISCONNECTION, "")
};
CGameMulti.prototype.opponentLeftTheGame = function() {
    if (this._oEndPanel) {
        var a = s_oNetworkManager.isUserA() ? 0 : 1;
        this._oThinking.hide();
        this._oEndPanel.show(this._iScore, a);
        this._oEndPanel.showButtons();
        this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
        this._oEndPanel.hideRestartButton();
        this._oEndPanel.centerHomeButton()
    }
    s_oNetworkManager.isUserA()
};
var CGameSingleWithBot = function(a) {
    CGameSingle.call(this, a)
};
CGameSingleWithBot.prototype = Object.create(CGameSingle.prototype);
CGameSingleWithBot.prototype._startGame = function() {
    this._oFastDistributionBut.setVisible(!1);
    this._bFastDistribution = !0;
    this.initDistribution();
    this._oThinking = new CThinking;
    this._oThinking.setMessage(TEXT_WAITING_MOVES);
    this._oThinking.hide();
    this._bTurnPlayer1 = !0;
    this._oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
    this._oEndPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
    this._oEndPanel.addEventListener(ON_RESTART, this._onConfirmRematch, this);
    s_oInterface.setPlayersInfo(s_oNetworkManager.getPlayerNickname(),
        s_oNetworkManager.getBotName());
    s_oInterface.setP2ImageHuman()
};
CGameSingleWithBot.prototype.gameOver = function(a) {
    for (var c = 0, b = 0; b < this._aTriangle.length; b++) c += this._aTriangle[b].getNumPieces();
    for (b = 0; b < this._aBar.length; b++) c += this._aBar[b].getNumPieces();
    this._iScore = c * MULTIPLIER_SCORE;
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons()
};
CGameSingleWithBot.prototype._onConfirmRematch = function() {
    this._oEndPanel.changeMessage(TEXT_WAIT_OPPONENT);
    this._oEndPanel.hideButtons();
    var a = randomFloatBetween(200, 2E3);
    if (.33 < Math.random()).4 < Math.random() ? setTimeout(function() {
        s_oGame._rematch()
    }, a) : s_oGame._rematch();
    else if (.4 < Math.random()) setTimeout(function() {
        s_oGame.onBotRefuseRematch()
    }, a);
    else s_oGame.onBotRefuseRematch()
};
CGameSingleWithBot.prototype.onBotRefuseRematch = function() {
    this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
    this._oEndPanel.hideRestartButton();
    this._oEndPanel.centerHomeButton()
};
CGameSingleWithBot.prototype._rematch = function() {
    this._oEndPanel.hide();
    this._oThinking.hide();
    s_oGame.onRestart();
    this._bTurnPlayer1 = !0
};

function CInterface() {
    var a, c, b, e, d, f, g, h, l, k, m, n, q = null,
        t, y = null,
        r = null,
        x, w, z, C, D, F = this;
    this._init = function() {
        D = !0;
        m = new createjs.Container;
        t = !1;
        s_oStage.addChild(m);
        var q = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - q.width / 2 - 10;
        h = q.height / 2 + 10;
        k = new CGfxButton(g, h, q, m);
        k.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = g - q.width - 5;
        f = q.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), l = new CToggle(d, f, q, s_bAudioActive, m), l.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        q = window.document;
        var F = q.documentElement;
        y = F.requestFullscreen || F.mozRequestFullScreen || F.webkitRequestFullScreen || F.msRequestFullscreen;
        r = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (y = !1);
        y && screenfull.enabled && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), b = q.width / 4 + 10, e = q.height / 2 + 10, n = new CToggle(b, e, q, s_bFullscreen, m), n.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        q = s_oSpriteLibrary.getSprite("light_turn");
        C = createBitmap(q, q.width, q.height);
        C.regX = 11;
        C.regY = 12;
        C.x = X_INTERFACE_PLAYER + 3;
        C.y = Y_INTERFACE_PLAYER_1;
        C.alpha = 0;
        m.addChild(C);
        q = s_oSpriteLibrary.getSprite("turn_p1");
        w = createBitmap(q, q.width, q.height);
        w.x = X_INTERFACE_PLAYER;
        w.y = Y_INTERFACE_PLAYER_1;
        m.addChild(w);
        q = s_b2Players ? s_oSpriteLibrary.getSprite("turn_p2") : s_oSpriteLibrary.getSprite("turn_cpu");
        z = createBitmap(q, q.width, q.height);
        z.x = X_INTERFACE_PLAYER;
        z.y = Y_INTERFACE_PLAYER_2;
        m.addChild(z);
        a = CANVAS_WIDTH - 200;
        c = CANVAS_HEIGHT / 2;
        q = s_oSpriteLibrary.getSprite("but_dice");
        x = new CGfxButton(CANVAS_WIDTH + 200, c, q, m);
        x.addEventListener(ON_MOUSE_UP, this._onRollDice, this);
        x.pulseAnimation();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
        k.unload();
        s_oStage.removeChild(m);
        y && screenfull.enabled && n.unload();
        s_oInterface = null
    };
    this.refreshPlayersScore = function(a, b) {};
    this.setP2ImageHuman = function() {
        var a = s_oSpriteLibrary.getSprite("turn_p2");
        z.image = a
    };
    this.refreshButtonPos = function(a, c) {
        k.setPosition(g -
            a, c + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(d - a, c + f);
        y && screenfull.enabled && n.setPosition(b + a, e + c);
        s_bMobile && t && (s_b2Players ? ((void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x - a, (void 0).y - c), (void 0).setPosition((void 0).x - a, (void 0).y - c)) : ((void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x + a, (void 0).y - c)))
    };
    this.onFocusTurn = function(a) {
        D && (D = !1, F.tweenFocusTurn());
        C.y =
            a ? Y_INTERFACE_PLAYER_1 : Y_INTERFACE_PLAYER_2
    };
    this.setPlayersInfo = function(a, b) {
        var c = s_oSpriteLibrary.getSprite("turn_p1");
        new CVerticalText(w.x + c.width / 2, w.y + c.height, a, m);
        new CVerticalText(z.x + c.width / 2, z.y + c.height, b, m)
    };
    this.tweenFocusTurn = function() {
        (new createjs.Tween.get(C)).to({
            alpha: 1
        }, 700).to({
            alpha: 0
        }, 700).call(F.tweenFocusTurn)
    };
    this.setOnTop = function() {
        s_oStage.addChildAt(m, s_oStage.numChildren)
    };
    this.setVisibleButDice = function(b) {
        !1 === b ? (new createjs.Tween.get(x.getButtonImage())).to({
            x: CANVAS_WIDTH +
                200
        }, 300, createjs.Ease.cubicIn) : !0 === b && (new createjs.Tween.get(x.getButtonImage())).to({
            x: a
        }, 300, createjs.Ease.cubicOut)
    };
    this.refreshScore = function(a) {};
    this._onRollDice = function() {
        s_oGame.rollDice()
    };
    this._onButHelpRelease = function() {
        q = new CHelpPanel
    };
    this.onExitFromHelp = function() {
        q.unload()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onConfirmExit)
    };
    this.resetFullscreenBut = function() {
        n.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? r.call(window.document) : y.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, c, b, e, d, f, g;
    this._init = function() {
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        s_oStage.addChild(c);
        (new createjs.Tween.get(c)).to({
            alpha: .7
        }, 500);
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .01;
        g = f.on("click", this._onLogoButRelease);
        s_oStage.addChild(f);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var h = s_oSpriteLibrary.getSprite("msg_box"),
            l = createBitmap(h);
        l.regX = h.width / 2;
        l.regY = h.height / 2;
        b.addChild(l);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + h.height / 2;
        a = b.y;
        (new createjs.Tween.get(b)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        l = new createjs.Text("DEVELOPED BY", " 40px " + PRIMARY_FONT, "#3c2200");
        l.y = -h.height / 2 + 90;
        l.textAlign = "center";
        l.textBaseline = "middle";
        l.lineWidth = 300;
        b.addChild(l);
        h = new createjs.Text("www.codethislab.com", " 40px " + PRIMARY_FONT, "#3c2200");
        h.y = 100;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 300;
        b.addChild(h);
        h = s_oSpriteLibrary.getSprite("ctl_logo");
        d = createBitmap(h);
        d.regX = h.width / 2;
        d.regY = h.height / 2;
        b.addChild(d);
        h = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(217, -145, h, b);
        e.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.changePointer = function(a) {
        !1 === s_bMobile && (a.target.cursor = "pointer")
    };
    this.unload = function() {
        e.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(c);
            s_oStage.removeChild(b);
            e.unload()
        });
        f.off("click", g);
        s_oStage.removeChild(f)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._onMoreGamesReleased = function() {
        window.open("http://codecanyon.net/collections/5409142-games")
    };
    this._init()
}

function CAreYouSurePanel(a) {
    var c, b, e, d, f, g;
    this._init = function(a) {
        createjs.Tween.pauseAllTweens();
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        g = d.on("mousedown", function() {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
        }, 500);
        f = new createjs.Container;
        s_oStage.addChild(f);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var h = createBitmap(a);
        h.regX = a.width / 2;
        h.regY = a.height / 2;
        f.addChild(h);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT + a.height /
            2;
        c = f.y;
        (new createjs.Tween.get(f)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        h = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, "#000000");
        h.y = -a.height / 2 + 120;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 400;
        h.outline = 5;
        f.addChild(h);
        a = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, "#FFFFFF");
        a.y = h.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 400;
        f.addChild(a);
        b = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes_big"), f);
        b.addEventListener(ON_MOUSE_UP,
            this._onButYes, this);
        e = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_no"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        e.pulseAnimation()
    };
    this._onButYes = function() {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            a()
        })
    };
    this._onButNo = function() {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
                y: c
            },
            400, createjs.Ease.backIn).call(function() {
            h.unload()
        })
    };
    this.unload = function() {
        e.unload();
        b.unload();
        s_oStage.removeChild(d);
        s_oStage.removeChild(f);
        d.off("mousedown", g);
        createjs.Tween.resumeAllTweens()
    };
    var h = this;
    this._init(a)
}

function CEndPanel(a) {
    var c, b, e, d, f, g, h, l, k, m, n;
    this._init = function(a) {
        m = [];
        n = [];
        var f = new createjs.Shape;
        f.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .5;
        f.on("mousedown", this.onMouseDown, this);
        c = createBitmap(a);
        a = c.getBounds();
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        e = new createjs.Text("", " 48px " + PRIMARY_FONT, "#3c2200");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 108;
        e.lineHeight = 50;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth =
            530;
        d = new createjs.Text("", " 37px " + PRIMARY_FONT, "#3c2200");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 + 15;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.lineWidth = 530;
        d.lineHeight = 50;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        b.addChild(f, c, d, e);
        s_oStage.addChild(b);
        f = s_oSpriteLibrary.getSprite("but_restart");
        h = new CGfxButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT / 2 + 110, f, b);
        f = s_oSpriteLibrary.getSprite("but_home");
        l = new CGfxButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT / 2 + 110, f, b);
        this.hide()
    };
    this.unload =
        function() {
            s_oStage.removeChild(b);
            h.unload();
            l.unload()
        };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        n[a] = c
    };
    this.onMouseDown = function() {};
    this._initListener = function() {
        l.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        h.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function(a, c) {
        k = 0 === c || s_b2Players ? playSound("win", 1, !1) : playSound("game_over", 1, !1);
        g = a;
        var f = c + 1;
        0 === c ? e.text = TEXT_GAMEOVER : (g = 0, e.text = TEXT_LOSE + f + TEXT_LOSE2);
        !0 === s_b2Players ? e.text = TEXT_WIN_2PLAYERS + f + TEXT_WIN_2PLAYERS_2 :
            d.text = TEXT_SCORE + ": " + a;
        b.visible = !0;
        var h = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            h._initListener()
        });
        $(s_oMain).trigger("save_score", g);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this.hide = function() {
        b.visible = !1
    };
    this.hideRestartButton = function() {
        h.setVisible(!1)
    };
    this.hideButtons = function() {
        l.setVisible(!1);
        h.setVisible(!1)
    };
    this.showButtons = function() {
        l.setVisible(!0);
        h.setVisible(!0)
    };
    this.changeMessage = function(a) {
        e.text = a
    };
    this.centerHomeButton =
        function() {
            s_oSpriteLibrary.getSprite("msg_box");
            l.setX(CANVAS_WIDTH / 2);
            l.setVisible(!0)
        };
    this._onExit = function() {
        k.stop();
        f = ON_BACK_MENU;
        m[f] && m[f].call(n[f])
    };
    this._onRestart = function() {
        k.stop();
        f = ON_RESTART;
        m[f] && m[f].call(n[f])
    };
    this._init(a);
    return this
}

function CSelectPlayers() {
    var a, c, b, e, d, f, g, h, l, k, m, n, q, t = null,
        y = null;
    this.init = function() {
        s_oSelectPlayers = this;
        g = new createjs.Container;
        s_oStage.addChild(g);
        var r = s_oSpriteLibrary.getSprite("bg_select_mode");
        r = new createBitmap(r, r.width, r.height);
        g.addChild(r);
        r = s_oSpriteLibrary.getSprite("but_p1");
        h = new CGfxButton(CANVAS_WIDTH / 2 - 225, CANVAS_HEIGHT / 2 + 50, r, g);
        h.addEventListener(ON_MOUSE_DOWN, function() {
            this.onSelectPlayer(!1)
        }, this);
        r = s_oSpriteLibrary.getSprite("but_p2");
        l = new CGfxButton(CANVAS_WIDTH /
            2 + 225, CANVAS_HEIGHT / 2 + 50, r, g);
        l.addEventListener(ON_MOUSE_DOWN, function() {
            this.onSelectPlayer(!0)
        }, this);
        k = new createjs.Text(TEXT_SELECT_PLAYERS_MENU, "72px " + PRIMARY_FONT, "#FFFFFF");
        k.y = CANVAS_HEIGHT / 2 - 300;
        k.x = CANVAS_WIDTH / 2;
        k.textAlign = "center";
        g.addChild(k);
        r = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - r.width / 2 - 10;
        f = r.height / 2 + 10;
        m = new CGfxButton(d, f, r, g);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = m.getX() - r.width - 10, e = r.height / 2 +
            10, n = new CToggle(b, e, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, g), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = window.document;
        var x = r.documentElement;
        t = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        y = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), a = r.width / 4 + 10, c = r.height / 2 + 10, q = new CToggle(a,
            c, r, s_bFullscreen, g), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(g, h) {
        m.setPosition(d - g, f + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(b - g, h + e);
        t && screenfull.enabled && q.setPosition(a + g, c + h)
    };
    this.onSelectPlayer = function(a) {
        s_b2Players = a;
        this.unload();
        s_oMain.gotoGame()
    };
    this.unload = function() {
        s_oStage.removeChild(g);
        s_oSelectPlayers
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? y.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayers = null;

function CAlertBox(a) {
    var c, b, e, d, f, g = this,
        h;
    this.init = function(a) {
        h = !0;
        b = a;
        c = new createjs.Container;
        b.addChild(c);
        a = s_oSpriteLibrary.getSprite("alert_box");
        e = createBitmap(a, a.width, a.height);
        e.regX = a.width / 2 - 3;
        e.regY = a.height / 2 - 8;
        d = new createjs.Text(" ", "38px " + PRIMARY_FONT, "#3c2200");
        d.lineHeight = 50;
        d.textAlign = "center";
        d.lineWidth = 450;
        d.textBaseline = "alphabetic";
        c.addChild(e, d);
        c.on("mousedown", this.onMouseDown);
        c.x = CANVAS_WIDTH / 2;
        f = -a.height / 2 - 10;
        c.y = f
    };
    this.show = function(a) {
        h = !1;
        d.text = a;
        (new createjs.Tween.get(c)).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.cubicOut).wait(1600).call(function() {
            h || g.hide()
        })
    };
    this.hide = function() {
        h = !0;
        createjs.Tween.removeTweens(c);
        (new createjs.Tween.get(c)).to({
            y: f
        }, 500, createjs.Ease.cubicIn)
    };
    this.onMouseDown = function() {
        h || g.hide()
    };
    this.init(a)
}

function CThinking() {
    var a, c, b, e, d, f, g;
    this._init = function() {
        a = !0;
        c = 0;
        b = new createjs.Container;
        var h = (new createjs.Graphics).beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f = new createjs.Shape(h);
        g = f.on("click", function() {});
        e = new createjs.Text(TEXT_THINKING, "60px " + PRIMARY_FONT, "#ffffff");
        e.x = .5 * CANVAS_WIDTH;
        e.y = .5 * CANVAS_HEIGHT - 100;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth = 800;
        d = new createjs.Text("", "180px " + PRIMARY_FONT, "#ffffff");
        d.x = .5 * CANVAS_WIDTH - 76;
        d.y = .5 * CANVAS_HEIGHT - 50;
        d.textAlign = "left";
        d.textBaseline = "alphabetic";
        d.lineWidth = 800;
        b.addChild(f, e, d);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        a = !1;
        f.off("click", g);
        s_oStage.removeChild(b)
    };
    this.isShown = function() {
        return b.visible
    };
    this.show = function() {
        b.visible = !0
    };
    this.hide = function() {
        b.visible = !1
    };
    this.setMessage = function(a) {
        e.text = a
    };
    this.update = function() {
        a && (c += s_iTimeElaps, 0 <= c && c < TIME_LOOP_WAIT / 4 ? d.text = "" : c >= TIME_LOOP_WAIT / 4 && c < 2 * TIME_LOOP_WAIT / 4 ? d.text = "." : c >= 2 * TIME_LOOP_WAIT / 4 &&
            c < 3 * TIME_LOOP_WAIT / 4 ? d.text = ".." : c >= 3 * TIME_LOOP_WAIT / 4 && c < TIME_LOOP_WAIT ? d.text = "..." : c = 0)
    };
    this._init()
}

function CPiece(a, c, b, e, d) {
    var f, g, h, l, k, m, n, q, t, y, r, x, w, z, C, D;
    this.init = function(a, b, c, d, e) {
        l = new createjs.Container;
        f = a;
        g = b;
        h = c;
        t = d;
        t.addChild(l);
        l.x = f;
        l.y = g;
        n = this;
        y = e;
        z = null;
        D = C = !1;
        a = h === BLACK_PIECE ? s_oSpriteLibrary.getSprite("red_piece") : s_oSpriteLibrary.getSprite("white_piece");
        a = new createjs.SpriteSheet({
            images: [a],
            framerate: 30,
            frames: {
                width: 66,
                height: 58,
                regX: 31,
                regY: 29
            },
            animations: {
                out: {
                    frames: [4],
                    next: "out"
                },
                idle: {
                    frames: [0],
                    next: "idle"
                },
                takeIn: {
                    frames: [4, 3, 2, 1],
                    next: "idle"
                },
                takeOut: {
                    frames: [1,
                        2, 3, 4
                    ],
                    next: "out"
                }
            }
        });
        k = createSprite(a, "out", 31, 29, 66, 58);
        a = s_oSpriteLibrary.getSprite("highlight");
        m = createBitmap(a, a.width, a.height);
        m.regX = a.width / 2;
        m.regY = a.height / 2;
        m.alpha = 0;
        q = !1;
        l.addChild(k, m)
    };
    this.onOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setClicked = function(a) {
        !0 === a ? (m.alpha = 1, q = !0) : (m.alpha = 0, q = !1)
    };
    this.getStateClick = function() {
        return q
    };
    this.getColor = function() {
        return h
    };
    this.getInstance = function() {
        return n
    };
    this.getPiece = function() {
        return l
    };
    this.getIndex = function() {
        return y
    };
    this.getXOut = function() {
        return f - 2
    };
    this.getYOut = function(a) {
        return h === WHITE_PIECE ? Y_OFFBOARD_DOWN + 238 - 17 * a : Y_OFFBOARD_UP + 17 * a
    };
    this.takeInAnimation = function() {
        k.gotoAndPlay("takeIn")
    };
    this.takeOutAnimation = function() {
        k.gotoAndPlay("takeOut")
    };
    this.setTriangle = function(a) {
        z = a
    };
    this.getTriangle = function() {
        return z
    };
    this.setOnTop = function() {
        t.addChild(l)
    };
    this.setBar = function(a) {
        C = a
    };
    this.isOnBar = function() {
        return C
    };
    this.movePieceDistribution = function(a, b) {
        this.takeInAnimation();
        playSound("click_cell",
            1, !1);
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, MS_DISTRIBUTION, createjs.Ease.cubicOut).call(function() {
            s_oGame.initDistribution()
        })
    };
    this.movePieceOnBoard = function(a, b) {
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, 700, createjs.Ease.cubicOut).call(function() {
            s_oGame.updateInput();
            s_oGame.afterMove()
        })
    };
    this.movePiece = function(a, b) {
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, 700, createjs.Ease.cubicOut)
    };
    this.initListeners = function() {
        r = l.on("mousedown", function() {
            s_oGame.onClickedPiece(n)
        });
        x = l.on("rollover",
            this.onOver);
        w = l.on("rollout", this.onMouseOut);
        D = !0
    };
    this.unloadListeners = function() {
        l.off("mousedown", r);
        l.off("rollover", x);
        l.off("rollout", w);
        D = !1
    };
    this.cpuInit = function() {
        D = !0
    };
    this.cpuUnload = function() {
        D = !1
    };
    this.getStateListener = function() {
        return D
    };
    this.onMouseOut = function(a) {
        s_bMobile || (a.target.cursor = "default")
    };
    this.init(a, c, b, e, d)
}

function CTriangle(a, c, b, e) {
    var d, f, g, h, l, k, m, n, q, t;
    this.init = function(a, b, c, e) {
        h = new createjs.Container;
        g = c;
        g.addChild(h);
        d = a;
        f = b;
        m = e;
        q = null;
        l = f === Y_TRIANGLE_UP ? TRIANGLE_UP : TRIANGLE_DOWN;
        n = [];
        a = 0 === m % 2 ? s_oSpriteLibrary.getSprite("triangle_red") : s_oSpriteLibrary.getSprite("triangle_white");
        a = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: 69,
                height: 256,
                regX: 34.5,
                regY: 0
            },
            animations: {
                idle: [0, 0, "idle"],
                focus: [1, 1, "focus"]
            }
        });
        k = new createSprite(a, "idle", 34.5, 0, 69, 256);
        l === TRIANGLE_DOWN && (k.scaleY *=
            -1);
        k.x = d;
        k.y = f;
        h.addChild(k)
    };
    this.reset = function() {
        n = []
    };
    this.getX = function() {
        return d
    };
    this.getY = function() {
        if (l === TRIANGLE_UP) {
            if (5 > n.length) return f + 28 + 53 * n.length;
            if (9 > n.length) return f + 28 + 30 + 54 * (n.length - 5);
            if (12 > n.length) return f + 28 + 60 + 53 * (n.length - 9);
            if (14 > n.length) return f + 28 + 90 + 53 * (n.length - 12);
            if (14 === n.length) return f + 28 + 60 + 53
        } else {
            if (5 > n.length) return f - 35 - 53 * n.length;
            if (9 > n.length) return f - 35 - 30 - 53 * (n.length - 5);
            if (12 > n.length) return f - 28 - 60 - 53 * (n.length - 9);
            if (14 > n.length) return f - 28 -
                90 - 53 * (n.length - 12);
            if (14 === n.length) return f - 28 - 60 - 53
        }
    };
    this.getNumPieces = function() {
        return n.length
    };
    this.addPiece = function(a) {
        n.push(a);
        q = a.getColor()
    };
    this.isHerePiece = function(a) {
        for (var b = !1, c = 0; c < n.length; c++) a === n[c] && (b = !0);
        return b
    };
    this.getColor = function() {
        return q
    };
    this.getPieceByIndex = function(a) {
        return n[a]
    };
    this.onFocus = function(a) {
        k.gotoAndStop("focus");
        this.initShape(a)
    };
    this.onOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.onIdle = function() {
        k.gotoAndStop("idle");
        s_oStage.removeChild(t)
    };
    this.getLastPiece = function() {
        return n[n.length - 1]
    };
    this.getArrayPieces = function() {
        return n
    };
    this.removePiece = function() {
        return n.pop()
    };
    this.initShape = function(b) {
        t = new createjs.Shape;
        l === TRIANGLE_UP ? t.graphics.beginFill("#000000").drawRect(a - 31, c, 62, 283) : t.graphics.beginFill("#000000").drawRect(a - 31, c, 62, -283);
        t.alpha = .01;
        t.on("mousedown", function() {
            s_oGame.onClickedTriangle(b)
        });
        t.on("mouseover", this.onOver);
        s_oStage.addChild(t)
    };
    this.init(a, c, b, e)
}

function CBar(a, c, b, e) {
    var d, f, g, h, l, k, m, n;
    this.init = function(a, b, c, e) {
        h = new createjs.Container;
        g = e;
        g.addChild(h);
        d = a;
        f = b;
        m = null;
        k = [];
        l = c;
        n = new createjs.Shape;
        n.graphics.beginFill("#000000").drawRect(a, b, 62, 253);
        n.regX = 31;
        l === BAR_DOWN && (n.regY = 253);
        n.alpha = .01;
        h.addChild(n)
    };
    this.getX = function() {
        return d
    };
    this.getY = function() {
        if (l === BAR_UP) {
            if (5 > k.length) return f + 28 + 56 * k.length;
            if (9 > k.length) return f + 28 + 30 + 56 * (k.length - 5);
            if (12 > k.length) return f + 28 + 60 + 56 * (k.length - 9);
            if (14 > k.length) return f + 28 + 90 +
                56 * (k.length - 12);
            if (14 === k.length) return f + 28 + 60 + 56
        } else {
            if (5 > k.length) return f - 35 - 56 * k.length;
            if (9 > k.length) return f - 35 - 30 - 56 * (k.length - 5);
            if (12 > k.length) return f - 28 - 60 - 56 * (k.length - 9);
            if (14 > k.length) return f - 28 - 90 - 56 * (k.length - 12);
            if (14 === k.length) return f - 28 - 60 - 56
        }
    };
    this.getNumPieces = function() {
        return k.length
    };
    this.addPiece = function(a) {
        k.push(a);
        m = a.getColor()
    };
    this.isHerePiece = function(a) {
        for (var b = !1, c = 0; c < k.length; c++) a === k[c] && (b = !0);
        return b
    };
    this.getColor = function() {
        return m
    };
    this.getPieceByIndex =
        function(a) {
            return k[a]
        };
    this.onOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.getLastPiece = function() {
        return k[k.length - 1]
    };
    this.getArrayPieces = function() {
        return k
    };
    this.removePiece = function() {
        return k.pop()
    };
    this.init(a, c, b, e)
}

function CDices(a) {
    var c, b, e, d, f, g, h = !1,
        l, k, m = this;
    this._init = function(a) {
        l = !0;
        c = new createjs.Container;
        c.x = 0;
        c.y = 0;
        k = a;
        s_oStage.addChild(c);
        k === WHITE_DICES ? (a = {
            images: [s_oSpriteLibrary.getSprite("launch_dices_white")],
            framerate: 30,
            frames: {
                width: 398,
                height: 230,
                regX: 0,
                regY: 0
            },
            animations: {
                stop: [12, 12],
                idle: [0, 12, "stop"]
            }
        }, a = new createjs.SpriteSheet(a), g = createSprite(a, 0, 0, 0, 398, 230), g.x = CANVAS_WIDTH - 398, g.y = CANVAS_HEIGHT - 230, g.visible = !1, c.addChild(g), a = {
            images: [s_oSpriteLibrary.getSprite("dice_white_a_1"),
                s_oSpriteLibrary.getSprite("dice_white_a_2"), s_oSpriteLibrary.getSprite("dice_white_a_3"), s_oSpriteLibrary.getSprite("dice_white_a_4"), s_oSpriteLibrary.getSprite("dice_white_a_5"), s_oSpriteLibrary.getSprite("dice_white_a_6")
            ],
            framerate: 30,
            frames: {
                width: 240,
                height: 302,
                regX: 0,
                regY: 0
            },
            animations: {
                stop1: [10, 10],
                idle1: [0, 10, "stop1"],
                stop2: [22, 22],
                idle2: [12, 22, "stop2"],
                stop3: [34, 34],
                idle3: [24, 34, "stop3"],
                stop4: [46, 46],
                idle4: [36, 46, "stop4"],
                stop5: [58, 58],
                idle5: [48, 58, "stop5"],
                stop6: [70, 70],
                idle6: [60, 70,
                    "stop6"
                ]
            }
        }, a = new createjs.SpriteSheet(a), d = createSprite(a, 0, 0, 0, 240, 302), d.x = 798, d.y = 383, d.visible = !1, c.addChild(d), a = {
            images: [s_oSpriteLibrary.getSprite("dice_white_b_1"), s_oSpriteLibrary.getSprite("dice_white_b_2"), s_oSpriteLibrary.getSprite("dice_white_b_3"), s_oSpriteLibrary.getSprite("dice_white_b_4"), s_oSpriteLibrary.getSprite("dice_white_b_5"), s_oSpriteLibrary.getSprite("dice_white_b_6")],
            framerate: 30,
            frames: {
                width: 246,
                height: 394,
                regX: 0,
                regY: 0
            },
            animations: {
                stop1: [15, 15],
                idle1: [0, 15, "stop1"],
                stop2: [31, 31],
                idle2: [16, 31, "stop2"],
                stop3: [47, 47],
                idle3: [32, 47, "stop3"],
                stop4: [63, 63],
                idle4: [48, 63, "stop4"],
                stop5: [79, 79],
                idle5: [64, 79, "stop5"],
                stop6: [95, 95],
                idle6: [80, 95, "stop6"]
            }
        }, a = new createjs.SpriteSheet(a), f = createSprite(a, 0, 0, 0, 246, 394), f.x = 975, f.y = 369) : (a = {
                images: [s_oSpriteLibrary.getSprite("launch_dices_red")],
                framerate: 24,
                frames: {
                    width: 332,
                    height: 370
                },
                animations: {
                    stop: [10, 10],
                    idle: [0, 10, "stop"]
                }
            }, a = new createjs.SpriteSheet(a), g = createSprite(a, 0, 0, 0, 332, 370), g.x = 0, g.y = 0, g.visible = !1, c.addChild(g),
            a = {
                images: [s_oSpriteLibrary.getSprite("dice_red_a_1"), s_oSpriteLibrary.getSprite("dice_red_a_2"), s_oSpriteLibrary.getSprite("dice_red_a_3"), s_oSpriteLibrary.getSprite("dice_red_a_4"), s_oSpriteLibrary.getSprite("dice_red_a_5"), s_oSpriteLibrary.getSprite("dice_red_a_6")],
                framerate: 24,
                frames: {
                    width: 242,
                    height: 208
                },
                animations: {
                    stop1: [8, 8],
                    idle1: [0, 8, "stop1"],
                    stop2: [17, 17],
                    idle2: [9, 17, "stop2"],
                    stop3: [26, 26],
                    idle3: [18, 26, "stop3"],
                    stop4: [35, 35],
                    idle4: [27, 35, "stop4"],
                    stop5: [44, 44],
                    idle5: [36, 44, "stop5"],
                    stop6: [53,
                        53
                    ],
                    idle6: [45, 53, "stop6"]
                }
            }, a = new createjs.SpriteSheet(a), d = createSprite(a, 0, 0, 0, 242, 208), d.x = 187, d.y = 274, d.visible = !1, c.addChild(d), a = {
                images: [s_oSpriteLibrary.getSprite("dice_red_b_1"), s_oSpriteLibrary.getSprite("dice_red_b_2"), s_oSpriteLibrary.getSprite("dice_red_b_3"), s_oSpriteLibrary.getSprite("dice_red_b_4"), s_oSpriteLibrary.getSprite("dice_red_b_5"), s_oSpriteLibrary.getSprite("dice_red_b_6")],
                framerate: 30,
                frames: {
                    width: 324,
                    height: 228,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    stop1: [13, 13],
                    idle1: [0, 13, "stop1"],
                    stop2: [27, 27],
                    idle2: [14, 27, "stop2"],
                    stop3: [41, 41],
                    idle3: [28, 41, "stop3"],
                    stop4: [55, 55],
                    idle4: [42, 55, "stop4"],
                    stop5: [69, 69],
                    idle5: [56, 69, "stop5"],
                    stop6: [83, 83],
                    idle6: [70, 83, "stop6"]
                }
            }, a = new createjs.SpriteSheet(a), f = createSprite(a, 0, 0, 0, 324, 228), f.x = 258, f.y = 242);
        f.visible = !1;
        c.addChild(f)
    };
    this.isAnimationOn = function() {
        return h
    };
    this.checkToRetry = function() {
        s_oGame.checkForFirstTurn();
        9 === b + e && Math.floor(100 * Math.random() + 1) > DICE_RETRY_VAR && (b = Math.floor(6 * Math.random() + 1), e = Math.floor(6 * Math.random() +
            1))
    };
    this.show = function() {
        d.visible = f.visible = !1;
        b = Math.floor(6 * Math.random() + 1);
        e = Math.floor(6 * Math.random() + 1);
        h = !0;
        playSound("dices", 1, !1);
        g.visible = !0;
        g.gotoAndPlay("idle");
        g.on("animationend", function() {
            g.visible && m.secondAnimation()
        })
    };
    this.showAResult = function(a, c) {
        b = a;
        e = c;
        h = !0;
        playSound("dices", 1, !1);
        g.visible = !0;
        g.gotoAndPlay("idle");
        g.on("animationend", function() {
            g.visible && m.secondAnimation()
        })
    };
    this.secondAnimation = function() {
        g.visible = !1;
        d.alpha = f.alpha = 1;
        d.visible = f.visible = !0;
        d.gotoAndPlay("idle" +
            b);
        f.gotoAndPlay("idle" + e);
        h = !1;
        s_oGame.afterRollDice(b, e)
    };
    this.movePlayer = function() {
        !1 === h && (h = !0, s_oGame.movePlayer(b + e))
    };
    this.fadeOutTween = function() {
        createjs.Tween.get(d, {
            loop: !1
        }).to({
            alpha: 0
        }, 200);
        createjs.Tween.get(f, {
            loop: !1
        }).to({
            alpha: 0
        }, 200).call(this.hide)
    };
    this.returnDiceResult1 = function() {
        return b
    };
    this.returnDiceResult2 = function() {
        return e
    };
    this.hide = function() {
        d.visible = f.visible = !1
    };
    this.unload = function() {
        s_oDices = null
    };
    this.isFirstLaunch = function() {
        return l
    };
    this.setFirstLaunch =
        function(a) {
            l = a
        };
    s_oDices = this;
    this._init(a)
}

function CVerticalText(a, c, b, e) {
    var d, f;
    this._init = function(a, b, c, e) {
        d = new createjs.Container;
        d.x = a;
        d.y = b;
        e.addChild(d);
        this._buildText()
    };
    this.unload = function() {};
    this._buildText = function() {
        for (var a = 0; a < b.length; a++) f = new createjs.Text(b[a], "60px " + PRIMARY_FONT, "#3d1f00"), f.y += 50 * a, f.textBaseline = "top", f.textAlign = "center", f.lineWidth = 100, d.addChild(f);
        a = d.getBounds().height;
        146 < a && (d.scaleX = d.scaleY = 146 / a)
    };
    this._init(a, c, b, e)
};