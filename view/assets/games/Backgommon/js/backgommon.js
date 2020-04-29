console.log(JSON)
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */ ! function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function (a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function (a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
            return f.call(this)
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function (a) {
            return r.each(this, a)
        },
        map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () { },
        isFunction: function (a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            p(a)
        },
        camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++ , e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function (a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function () {
                m()
            },
            ea = ta(function (a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) { } finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) { }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(_, aa),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return X.test(a.nodeName)
                },
                input: function (a) {
                    return W.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function () {
                    return [0]
                }),
                last: pa(function (a, b) {
                    return [b - 1]
                }),
                eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function ra() { }
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r-- , f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;
                d.push(a)
            }
        return d
    },
        z = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function (a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function (a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function (a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function (a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return y(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function (a) {
            return J(a, "nextSibling")
        },
        prev: function (a) {
            return J(a, "previousSibling")
        },
        nextAll: function (a) {
            return y(a, "nextSibling")
        },
        prevAll: function (a) {
            return y(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return z(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function (b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return r.each(arguments, function (a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function (a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function (b) {
            var c = [
                ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
            ],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return r.Deferred(function (b) {
                            r.each(c, function (c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function () {
                                var h = this,
                                    i = arguments,
                                    j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++ , j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function () {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function (a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function (a) {
                    return function (c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function (a) {
        return Q.then(a)["catch"](function (a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c) S(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(r(a), c)
        })), b))
            for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
        T = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) { }
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function (a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function (a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function (a, b) {
            W.remove(a, b)
        },
        _data: function (a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function (a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                W.set(this, a)
            }) : S(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function () {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function () {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function (a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function () {
            return ha(this, !0)
        },
        hide: function () {
            return ha(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
                    g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
                    while (k--) g = g.lastChild;
                    r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
                k = 0;
                while (f = g[k++]) ka.test(f.type || "") && c.push(f)
            }
        return l
    } ! function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) { }
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount-- , l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== wa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === wa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ja(this, a, !0)
        },
        remove: function (a) {
            return Ja(this, a)
        },
        text: function (a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b)
            })
        },
        html: function (a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) { }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ia(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return b(), e
            },
            pixelMarginRight: function () {
                return b(), f
            },
            reliableMarginLeft: function () {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
                    return Xa(a, b, d)
                })
            },
            set: function (a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function (a, b) {
            return S(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function () {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++ , m.always(function () {
            m.always(function () {
                g.unqueued-- , r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return ea(c.elem, a, aa.exec(b), c), c
            }]
        },
        tweener: function (a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
        },
        prefilters: [fb],
        prefilter: function (a, b) {
            b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
        }
    }), r.speed = function (a, b, c) {
        var e = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
        }, e
    }, r.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(ca).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function () {
                    var b = hb(this, r.extend({}, a), f);
                    (e || V.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];
        r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
        }
    }), r.each({
        slideDown: db("show"),
        slideUp: db("hide"),
        slideToggle: db("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), r.timers = [], r.fx.tick = function () {
        var a, b = 0,
            c = r.timers;
        for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), Za = void 0
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
    }, r.fx.interval = 13, r.fx.start = function () {
        $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
    }, r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    },
        function () {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                        name: b.name,
                        value: c.replace(ub, "\r\n")
                    }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function (a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) { }
    };
    var Ob = {
        0: 200,
        1223: 204
    },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function (a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                    top: 0,
                    left: 0
                }
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                        top: b.top - d.top - r.css(c, "marginTop", !0),
                        left: b.left - d.left - r.css(c, "marginLeft", !0)
                    }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});

/*!
 * @license createjs
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
    "use strict";

    function c() {
        this.constructor = a
    }
    return c.prototype = b.prototype, a.prototype = new c
}, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
    "use strict";
    var c = a.prototype,
        d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
    if (d) {
        c[(b += "_") + "constructor"] = d.constructor;
        for (var e in d) c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e])
    }
    return a
}, this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
    "use strict";
    for (var c = 0, d = a.length; d > c; c++)
        if (b === a[c]) return c;
    return -1
}, this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "UID cannot be instantiated"
        }
        a._nextID = 0, a.get = function () {
            return a._nextID++
        }, createjs.UID = a
    }(), this.createjs = this.createjs || {}, createjs.deprecate = function (a, b) {
        "use strict";
        return function () {
            var c = "Deprecated property or method '" + b + "'. See docs for info.";
            return console && (console.warn ? console.warn(c) : console.log(c)), a && a.apply(this, arguments)
        }
    }, this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var b = a.prototype;
        b.preventDefault = function () {
            this.defaultPrevented = this.cancelable && !0
        }, b.stopPropagation = function () {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function () {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function () {
            this.removed = !0
        }, b.clone = function () {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.set = function (a) {
            for (var b in a) this[b] = a[b];
            return this
        }, b.toString = function () {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this._listeners = null, this._captureListeners = null
        }
        var b = a.prototype;
        a.initialize = function (a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b.addEventListener = function (a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function (a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function (a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function (a, b, c) {
            if ("string" == typeof a) {
                var d = this._listeners;
                if (!(b || d && d[a])) return !0;
                a = new createjs.Event(a, b, c)
            } else a.target && a.clone && (a = a.clone());
            try {
                a.target = this
            } catch (e) { }
            if (a.bubbles && this.parent) {
                for (var f = this, g = [f]; f.parent;) g.push(f = f.parent);
                var h, i = g.length;
                for (h = i - 1; h >= 0 && !a.propagationStopped; h--) g[h]._dispatchEvent(a, 1 + (0 == h));
                for (h = 1; i > h && !a.propagationStopped; h++) g[h]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return !a.defaultPrevented
        }, b.hasEventListener = function (a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function (a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function () {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function (a, b) {
            var c, d, e = 2 >= b ? this._captureListeners : this._listeners;
            if (a && e && (d = e[a.type]) && (c = d.length)) {
                try {
                    a.currentTarget = this
                } catch (f) { }
                try {
                    a.eventPhase = 0 | b
                } catch (f) { }
                a.removed = !1, d = d.slice();
                for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
                    var h = d[g];
                    h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1)
                }
            }
            2 === b && this._dispatchEvent(a, 2.1)
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "Ticker cannot be instantiated."
        }
        a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.timingMode = null, a.maxDelta = 0, a.paused = !1, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function () {
            return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
        }, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a._setInterval = function (b) {
            a._interval = b, a._inited && a._setupTick()
        }, a.setInterval = createjs.deprecate(a._setInterval, "Ticker.setInterval"), a._getInterval = function () {
            return a._interval
        }, a.getInterval = createjs.deprecate(a._getInterval, "Ticker.getInterval"), a._setFPS = function (b) {
            a._setInterval(1e3 / b)
        }, a.setFPS = createjs.deprecate(a._setFPS, "Ticker.setFPS"), a._getFPS = function () {
            return 1e3 / a._interval
        }, a.getFPS = createjs.deprecate(a._getFPS, "Ticker.getFPS");
        try {
            Object.defineProperties(a, {
                interval: {
                    get: a._getInterval,
                    set: a._setInterval
                },
                framerate: {
                    get: a._getFPS,
                    set: a._setFPS
                }
            })
        } catch (b) {
            console.log(b)
        }
        a.init = function () {
            a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.interval = a._interval)
        }, a.reset = function () {
            if (a._raf) {
                var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                b && b(a._timerId)
            } else clearTimeout(a._timerId);
            a.removeAllEventListeners("tick"), a._timerId = a._times = a._tickTimes = null, a._startTime = a._lastTime = a._ticks = a._pausedTime = 0, a._inited = !1
        }, a.getMeasuredTickTime = function (b) {
            var c = 0,
                d = a._tickTimes;
            if (!d || d.length < 1) return -1;
            b = Math.min(d.length, b || 0 | a._getFPS());
            for (var e = 0; b > e; e++) c += d[e];
            return c / b
        }, a.getMeasuredFPS = function (b) {
            var c = a._times;
            return !c || c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a._getFPS()), 1e3 / ((c[0] - c[b]) / b))
        }, a.getTime = function (b) {
            return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1
        }, a.getEventTime = function (b) {
            return a._startTime ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0) : -1
        }, a.getTicks = function (b) {
            return a._ticks - (b ? a._pausedTicks : 0)
        }, a._handleSynch = function () {
            a._timerId = null, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
        }, a._handleRAF = function () {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._handleTimeout = function () {
            a._timerId = null, a._setupTick(), a._tick()
        }, a._setupTick = function () {
            if (null == a._timerId) {
                var b = a.timingMode;
                if (b == a.RAF_SYNCHED || b == a.RAF) {
                    var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), void (a._raf = !0)
                }
                a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
            }
        }, a._tick = function () {
            var b = a.paused,
                c = a._getTime(),
                d = c - a._lastTime;
            if (a._lastTime = c, a._ticks++ , b && (a._pausedTicks++ , a._pausedTime += d), a.hasEventListener("tick")) {
                var e = new createjs.Event("tick"),
                    f = a.maxDelta;
                e.delta = f && d > f ? f : d, e.paused = b, e.time = c, e.runTime = c - a._pausedTime, a.dispatchEvent(e)
            }
            for (a._tickTimes.unshift(a._getTime() - c); a._tickTimes.length > 100;) a._tickTimes.pop();
            for (a._times.unshift(c); a._times.length > 100;) a._times.pop()
        };
        var c = window,
            d = c.performance.now || c.performance.mozNow || c.performance.msNow || c.performance.oNow || c.performance.webkitNow;
        a._getTime = function () {
            return (d && d.call(c.performance) || (new Date).getTime()) - a._startTime
        }, createjs.Ticker = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.readyState = a.readyState, this._video = a, this._canvas = null, this._lastTime = -1, this.readyState < 2 && a.addEventListener("canplaythrough", this._videoReady.bind(this))
        }
        var b = a.prototype;
        b.getImage = function () {
            if (!(this.readyState < 2)) {
                var a = this._canvas,
                    b = this._video;
                if (a || (a = this._canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), a.width = b.videoWidth, a.height = b.videoHeight), b.readyState >= 2 && b.currentTime !== this._lastTime) {
                    var c = a.getContext("2d");
                    c.clearRect(0, 0, a.width, a.height), c.drawImage(b, 0, 0, a.width, a.height), this._lastTime = b.currentTime
                }
                return a
            }
        }, b._videoReady = function () {
            this.readyState = 2
        }, createjs.VideoBuffer = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d, e, f, g, h, i, j, k) {
            this.Event_constructor(a, b, c), this.stageX = d, this.stageY = e, this.rawX = null == i ? d : i, this.rawY = null == j ? e : j, this.nativeEvent = f, this.pointerID = g, this.primary = !!h, this.relatedTarget = k
        }
        var b = createjs.extend(a, createjs.Event);
        b._get_localX = function () {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, b._get_localY = function () {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        }, b._get_isTouch = function () {
            return -1 !== this.pointerID
        };
        try {
            Object.defineProperties(b, {
                localX: {
                    get: b._get_localX
                },
                localY: {
                    get: b._get_localY
                },
                isTouch: {
                    get: b._get_isTouch
                }
            })
        } catch (c) { }
        b.clone = function () {
            return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, b.toString = function () {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = createjs.promote(a, "Event")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d, e, f) {
            this.setValues(a, b, c, d, e, f)
        }
        var b = a.prototype;
        a.DEG_TO_RAD = Math.PI / 180, a.identity = null, b.setValues = function (a, b, c, d, e, f) {
            return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = e || 0, this.ty = f || 0, this
        }, b.append = function (a, b, c, d, e, f) {
            var g = this.a,
                h = this.b,
                i = this.c,
                j = this.d;
            return (1 != a || 0 != b || 0 != c || 1 != d) && (this.a = g * a + i * b, this.b = h * a + j * b, this.c = g * c + i * d, this.d = h * c + j * d), this.tx = g * e + i * f + this.tx, this.ty = h * e + j * f + this.ty, this
        }, b.prepend = function (a, b, c, d, e, f) {
            var g = this.a,
                h = this.c,
                i = this.tx;
            return this.a = a * g + c * this.b, this.b = b * g + d * this.b, this.c = a * h + c * this.d, this.d = b * h + d * this.d, this.tx = a * i + c * this.ty + e, this.ty = b * i + d * this.ty + f, this
        }, b.appendMatrix = function (a) {
            return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.prependMatrix = function (a) {
            return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.appendTransform = function (b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
        }, b.prependTransform = function (b, c, d, e, f, g, h, i, j) {
            if (f % 360) var k = f * a.DEG_TO_RAD,
                l = Math.cos(k),
                m = Math.sin(k);
            else l = 1, m = 0;
            return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(l * d, m * d, -m * e, l * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c), this
        }, b.rotate = function (b) {
            b *= a.DEG_TO_RAD;
            var c = Math.cos(b),
                d = Math.sin(b),
                e = this.a,
                f = this.b;
            return this.a = e * c + this.c * d, this.b = f * c + this.d * d, this.c = -e * d + this.c * c, this.d = -f * d + this.d * c, this
        }, b.skew = function (b, c) {
            return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
        }, b.scale = function (a, b) {
            return this.a *= a, this.b *= a, this.c *= b, this.d *= b, this
        }, b.translate = function (a, b) {
            return this.tx += this.a * a + this.c * b, this.ty += this.b * a + this.d * b, this
        }, b.identity = function () {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
        }, b.invert = function () {
            var a = this.a,
                b = this.b,
                c = this.c,
                d = this.d,
                e = this.tx,
                f = a * d - b * c;
            return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
        }, b.isIdentity = function () {
            return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
        }, b.equals = function (a) {
            return this.tx === a.tx && this.ty === a.ty && this.a === a.a && this.b === a.b && this.c === a.c && this.d === a.d
        }, b.transformPoint = function (a, b, c) {
            return c = c || {}, c.x = a * this.a + b * this.c + this.tx, c.y = a * this.b + b * this.d + this.ty, c
        }, b.decompose = function (b) {
            null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var c = Math.atan2(-this.c, this.d),
                d = Math.atan2(this.b, this.a),
                e = Math.abs(1 - c / d);
            return 1e-5 > e ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b
        }, b.copy = function (a) {
            return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty)
        }, b.clone = function () {
            return new a(this.a, this.b, this.c, this.d, this.tx, this.ty)
        }, b.toString = function () {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, a.identity = new a, createjs.Matrix2D = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d, e) {
            this.setValues(a, b, c, d, e)
        }
        var b = a.prototype;
        b.setValues = function (a, b, c, d, e) {
            return this.visible = null == a ? !0 : !!a, this.alpha = null == b ? 1 : b, this.shadow = c, this.compositeOperation = d, this.matrix = e || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
        }, b.append = function (a, b, c, d, e) {
            return this.alpha *= b, this.shadow = c || this.shadow, this.compositeOperation = d || this.compositeOperation, this.visible = this.visible && a, e && this.matrix.appendMatrix(e), this
        }, b.prepend = function (a, b, c, d, e) {
            return this.alpha *= b, this.shadow = this.shadow || c, this.compositeOperation = this.compositeOperation || d, this.visible = this.visible && a, e && this.matrix.prependMatrix(e), this
        }, b.identity = function () {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
        }, b.clone = function () {
            return new a(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
        }, createjs.DisplayProps = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.setValues(a, b)
        }
        var b = a.prototype;
        b.setValues = function (a, b) {
            return this.x = a || 0, this.y = b || 0, this
        }, b.copy = function (a) {
            return this.x = a.x, this.y = a.y, this
        }, b.clone = function () {
            return new a(this.x, this.y)
        }, b.toString = function () {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d) {
            this.setValues(a, b, c, d)
        }
        var b = a.prototype;
        b.setValues = function (a, b, c, d) {
            return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this
        }, b.extend = function (a, b, c, d) {
            return c = c || 0, d = d || 0, a + c > this.x + this.width && (this.width = a + c - this.x), b + d > this.y + this.height && (this.height = b + d - this.y), a < this.x && (this.width += this.x - a, this.x = a), b < this.y && (this.height += this.y - b, this.y = b), this
        }, b.pad = function (a, b, c, d) {
            return this.x -= b, this.y -= a, this.width += b + d, this.height += a + c, this
        }, b.copy = function (a) {
            return this.setValues(a.x, a.y, a.width, a.height)
        }, b.contains = function (a, b, c, d) {
            return c = c || 0, d = d || 0, a >= this.x && a + c <= this.x + this.width && b >= this.y && b + d <= this.y + this.height
        }, b.union = function (a) {
            return this.clone().extend(a.x, a.y, a.width, a.height)
        }, b.intersection = function (b) {
            var c = b.x,
                d = b.y,
                e = c + b.width,
                f = d + b.height;
            return this.x > c && (c = this.x), this.y > d && (d = this.y), this.x + this.width < e && (e = this.x + this.width), this.y + this.height < f && (f = this.y + this.height), c >= e || d >= f ? null : new a(c, d, e - c, f - d)
        }, b.intersects = function (a) {
            return a.x <= this.x + this.width && this.x <= a.x + a.width && a.y <= this.y + this.height && this.y <= a.y + a.height
        }, b.isEmpty = function () {
            return this.width <= 0 || this.height <= 0
        }, b.clone = function () {
            return new a(this.x, this.y, this.width, this.height)
        }, b.toString = function () {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            a.addEventListener && (this.target = a, this.overLabel = null == c ? "over" : c, this.outLabel = null == b ? "out" : b, this.downLabel = null == d ? "down" : d, this.play = e, this._isPressed = !1, this._isOver = !1, this._enabled = !1, a.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f))
        }
        var b = a.prototype;
        b._setEnabled = function (a) {
            if (a != this._enabled) {
                var b = this.target;
                this._enabled = a, a ? (b.cursor = "pointer", b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this), b._reset && (b.__reset = b._reset, b._reset = this._reset)) : (b.cursor = null, b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this), b.__reset && (b._reset = b.__reset, delete b.__reset))
            }
        }, b.setEnabled = createjs.deprecate(b._setEnabled, "ButtonHelper.setEnabled"), b._getEnabled = function () {
            return this._enabled
        }, b.getEnabled = createjs.deprecate(b._getEnabled, "ButtonHelper.getEnabled");
        try {
            Object.defineProperties(b, {
                enabled: {
                    get: b._getEnabled,
                    set: b._setEnabled
                }
            })
        } catch (c) { }
        b.toString = function () {
            return "[ButtonHelper]"
        }, b.handleEvent = function (a) {
            var b, c = this.target,
                d = a.type;
            "mousedown" == d ? (this._isPressed = !0, b = this.downLabel) : "pressup" == d ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : "rollover" == d ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
        }, b._reset = function () {
            var a = this.paused;
            this.__reset(), this.paused = a
        }, createjs.ButtonHelper = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d) {
            this.color = a || "black", this.offsetX = b || 0, this.offsetY = c || 0, this.blur = d || 0
        }
        var b = a.prototype;
        a.identity = new a("transparent", 0, 0, 0), b.toString = function () {
            return "[Shadow]"
        }, b.clone = function () {
            return new a(this.color, this.offsetX, this.offsetY, this.blur)
        }, createjs.Shadow = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(a)
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        b._getAnimations = function () {
            return this._animations.slice()
        }, b.getAnimations = createjs.deprecate(b._getAnimations, "SpriteSheet.getAnimations");
        try {
            Object.defineProperties(b, {
                animations: {
                    get: b._getAnimations
                }
            })
        } catch (c) { }
        b.getNumFrames = function (a) {
            if (null == a) return this._frames ? this._frames.length : this._numFrames || 0;
            var b = this._data[a];
            return null == b ? 0 : b.frames.length
        }, b.getAnimation = function (a) {
            return this._data[a]
        }, b.getFrame = function (a) {
            var b;
            return this._frames && (b = this._frames[a]) ? b : null
        }, b.getFrameBounds = function (a, b) {
            var c = this.getFrame(a);
            return c ? (b || new createjs.Rectangle).setValues(-c.regX, -c.regY, c.rect.width, c.rect.height) : null
        }, b.toString = function () {
            return "[SpriteSheet]"
        }, b.clone = function () {
            throw "SpriteSheet cannot be cloned."
        }, b._parseData = function (a) {
            var b, c, d, e;
            if (null != a) {
                if (this.framerate = a.framerate || 0, a.images && (c = a.images.length) > 0)
                    for (e = this._images = [], b = 0; c > b; b++) {
                        var f = a.images[b];
                        if ("string" == typeof f) {
                            var g = f;
                            f = document.createElement("img"), f.src = g
                        }
                        e.push(f), f.getContext || f.naturalWidth || (this._loadCount++ , this.complete = !1, function (a, b) {
                            f.onload = function () {
                                a._handleImageLoad(b)
                            }
                        }(this, g), function (a, b) {
                            f.onerror = function () {
                                a._handleImageError(b)
                            }
                        }(this, g))
                    }
                if (null == a.frames);
                else if (Array.isArray(a.frames))
                    for (this._frames = [], e = a.frames, b = 0, c = e.length; c > b; b++) {
                        var h = e[b];
                        this._frames.push({
                            image: this._images[h[4] ? h[4] : 0],
                            rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
                            regX: h[5] || 0,
                            regY: h[6] || 0
                        })
                    } else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._spacing = d.spacing || 0, this._margin = d.margin || 0, this._numFrames = d.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (d = a.animations)) {
                    this._data = {};
                    var i;
                    for (i in d) {
                        var j = {
                            name: i
                        },
                            k = d[i];
                        if ("number" == typeof k) e = j.frames = [k];
                        else if (Array.isArray(k))
                            if (1 == k.length) j.frames = [k[0]];
                            else
                                for (j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0]; b <= k[1]; b++) e.push(b);
                        else {
                            j.speed = k.speed, j.next = k.next;
                            var l = k.frames;
                            e = j.frames = "number" == typeof l ? [l] : l.slice(0)
                        } (j.next === !0 || void 0 === j.next) && (j.next = i), (j.next === !1 || e.length < 2 && j.next == i) && (j.next = null), j.speed || (j.speed = 1), this._animations.push(i), this._data[i] = j
                    }
                }
            }
        }, b._handleImageLoad = function (a) {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, b._handleImageError = function (a) {
            var b = new createjs.Event("error");
            b.src = a, this.dispatchEvent(b), 0 == --this._loadCount && this.dispatchEvent("complete")
        }, b._calculateFrames = function () {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                var a = this._numFrames || 1e5,
                    b = 0,
                    c = this._frameWidth,
                    d = this._frameHeight,
                    e = this._spacing,
                    f = this._margin;
                a: for (var g = 0, h = this._images; g < h.length; g++)
                    for (var i = h[g], j = i.width || i.naturalWidth, k = i.height || i.naturalHeight, l = f; k - f - d >= l;) {
                        for (var m = f; j - f - c >= m;) {
                            if (b >= a) break a;
                            b++ , this._frames.push({
                                image: i,
                                rect: new createjs.Rectangle(m, l, c, d),
                                regX: this._regX,
                                regY: this._regY
                            }), m += c + e
                        }
                        l += d + e
                    }
                this._numFrames = b
            }
        }, createjs.SpriteSheet = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
        }
        var b = a.prototype,
            c = a;
        a.getRGB = function (a, b, c, d) {
            return null != a && null == c && (d = b, c = 255 & a, b = a >> 8 & 255, a = a >> 16 & 255), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
        }, a.getHSL = function (a, b, c, d) {
            return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
        }, a.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, a.STROKE_CAPS_MAP = ["butt", "round", "square"], a.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var d = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        d.getContext && (a._ctx = d.getContext("2d"), d.width = d.height = 1), b._getInstructions = function () {
            return this._updateInstructions(), this._instructions
        }, b.getInstructions = createjs.deprecate(b._getInstructions, "Graphics.getInstructions");
        try {
            Object.defineProperties(b, {
                instructions: {
                    get: b._getInstructions
                }
            })
        } catch (e) { }
        b.isEmpty = function () {
            return !(this._instructions.length || this._activeInstructions.length)
        }, b.draw = function (a, b) {
            this._updateInstructions();
            for (var c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++) c[d].exec(a, b)
        }, b.drawAsPath = function (a) {
            this._updateInstructions();
            for (var b, c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++)(b = c[d]).path !== !1 && b.exec(a)
        }, b.moveTo = function (a, b) {
            return this.append(new c.MoveTo(a, b), !0)
        }, b.lineTo = function (a, b) {
            return this.append(new c.LineTo(a, b))
        }, b.arcTo = function (a, b, d, e, f) {
            return this.append(new c.ArcTo(a, b, d, e, f))
        }, b.arc = function (a, b, d, e, f, g) {
            return this.append(new c.Arc(a, b, d, e, f, g))
        }, b.quadraticCurveTo = function (a, b, d, e) {
            return this.append(new c.QuadraticCurveTo(a, b, d, e))
        }, b.bezierCurveTo = function (a, b, d, e, f, g) {
            return this.append(new c.BezierCurveTo(a, b, d, e, f, g))
        }, b.rect = function (a, b, d, e) {
            return this.append(new c.Rect(a, b, d, e))
        }, b.closePath = function () {
            return this._activeInstructions.length ? this.append(new c.ClosePath) : this
        }, b.clear = function () {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
        }, b.beginFill = function (a) {
            return this._setFill(a ? new c.Fill(a) : null)
        }, b.beginLinearGradientFill = function (a, b, d, e, f, g) {
            return this._setFill((new c.Fill).linearGradient(a, b, d, e, f, g))
        }, b.beginRadialGradientFill = function (a, b, d, e, f, g, h, i) {
            return this._setFill((new c.Fill).radialGradient(a, b, d, e, f, g, h, i))
        }, b.beginBitmapFill = function (a, b, d) {
            return this._setFill(new c.Fill(null, d).bitmap(a, b))
        }, b.endFill = function () {
            return this.beginFill()
        }, b.setStrokeStyle = function (a, b, d, e, f) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new c.StrokeStyle(a, b, d, e, f), this._stroke && (this._stroke.ignoreScale = f), this._strokeIgnoreScale = f, this
        }, b.setStrokeDash = function (a, b) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new c.StrokeDash(a, b), this
        }, b.beginStroke = function (a) {
            return this._setStroke(a ? new c.Stroke(a) : null)
        }, b.beginLinearGradientStroke = function (a, b, d, e, f, g) {
            return this._setStroke((new c.Stroke).linearGradient(a, b, d, e, f, g))
        }, b.beginRadialGradientStroke = function (a, b, d, e, f, g, h, i) {
            return this._setStroke((new c.Stroke).radialGradient(a, b, d, e, f, g, h, i))
        }, b.beginBitmapStroke = function (a, b) {
            return this._setStroke((new c.Stroke).bitmap(a, b))
        }, b.endStroke = function () {
            return this.beginStroke()
        }, b.curveTo = b.quadraticCurveTo, b.drawRect = b.rect, b.drawRoundRect = function (a, b, c, d, e) {
            return this.drawRoundRectComplex(a, b, c, d, e, e, e, e)
        }, b.drawRoundRectComplex = function (a, b, d, e, f, g, h, i) {
            return this.append(new c.RoundRect(a, b, d, e, f, g, h, i))
        }, b.drawCircle = function (a, b, d) {
            return this.append(new c.Circle(a, b, d))
        }, b.drawEllipse = function (a, b, d, e) {
            return this.append(new c.Ellipse(a, b, d, e))
        }, b.drawPolyStar = function (a, b, d, e, f, g) {
            return this.append(new c.PolyStar(a, b, d, e, f, g))
        }, b.append = function (a, b) {
            return this._activeInstructions.push(a), this.command = a, b || (this._dirty = !0), this
        }, b.decodePath = function (b) {
            for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = b.length, g = [], h = 0, i = 0, j = a.BASE_64; f > e;) {
                var k = b.charAt(e),
                    l = j[k],
                    m = l >> 3,
                    n = c[m];
                if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
                var o = d[m];
                m || (h = i = 0), g.length = 0, e++;
                for (var p = (l >> 2 & 1) + 2, q = 0; o > q; q++) {
                    var r = j[b.charAt(e)],
                        s = r >> 5 ? -1 : 1;
                    r = (31 & r) << 6 | j[b.charAt(e + 1)], 3 == p && (r = r << 6 | j[b.charAt(e + 2)]), r = s * r / 10, q % 2 ? h = r += h : i = r += i, g[q] = r, e += p
                }
                n.apply(this, g)
            }
            return this
        }, b.store = function () {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
        }, b.unstore = function () {
            return this._storeIndex = 0, this
        }, b.clone = function () {
            var b = new a;
            return b.command = this.command, b._stroke = this._stroke, b._strokeStyle = this._strokeStyle, b._strokeDash = this._strokeDash, b._strokeIgnoreScale = this._strokeIgnoreScale, b._fill = this._fill, b._instructions = this._instructions.slice(), b._commitIndex = this._commitIndex, b._activeInstructions = this._activeInstructions.slice(), b._dirty = this._dirty, b._storeIndex = this._storeIndex, b
        }, b.toString = function () {
            return "[Graphics]"
        }, b.mt = b.moveTo, b.lt = b.lineTo, b.at = b.arcTo, b.bt = b.bezierCurveTo, b.qt = b.quadraticCurveTo, b.a = b.arc, b.r = b.rect, b.cp = b.closePath, b.c = b.clear, b.f = b.beginFill, b.lf = b.beginLinearGradientFill, b.rf = b.beginRadialGradientFill, b.bf = b.beginBitmapFill, b.ef = b.endFill, b.ss = b.setStrokeStyle, b.sd = b.setStrokeDash, b.s = b.beginStroke, b.ls = b.beginLinearGradientStroke, b.rs = b.beginRadialGradientStroke, b.bs = b.beginBitmapStroke, b.es = b.endStroke, b.dr = b.drawRect, b.rr = b.drawRoundRect, b.rc = b.drawRoundRectComplex, b.dc = b.drawCircle, b.de = b.drawEllipse, b.dp = b.drawPolyStar, b.p = b.decodePath, b._updateInstructions = function (b) {
            var c = this._instructions,
                d = this._activeInstructions,
                e = this._commitIndex;
            if (this._dirty && d.length) {
                c.length = e, c.push(a.beginCmd);
                var f = d.length,
                    g = c.length;
                c.length = g + f;
                for (var h = 0; f > h; h++) c[h + g] = d[h];
                this._fill && c.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && c.push(this._strokeDash), this._strokeStyle !== this._oldStrokeStyle && c.push(this._strokeStyle), b && (this._oldStrokeStyle = this._strokeStyle, this._oldStrokeDash = this._strokeDash), c.push(this._stroke)), this._dirty = !1
            }
            b && (d.length = 0, this._commitIndex = c.length)
        }, b._setFill = function (a) {
            return this._updateInstructions(!0), this.command = this._fill = a, this
        }, b._setStroke = function (a) {
            return this._updateInstructions(!0), (this.command = this._stroke = a) && (a.ignoreScale = this._strokeIgnoreScale), this
        }, (c.LineTo = function (a, b) {
            this.x = a, this.y = b
        }).prototype.exec = function (a) {
            a.lineTo(this.x, this.y)
        }, (c.MoveTo = function (a, b) {
            this.x = a, this.y = b
        }).prototype.exec = function (a) {
            a.moveTo(this.x, this.y)
        }, (c.ArcTo = function (a, b, c, d, e) {
            this.x1 = a, this.y1 = b, this.x2 = c, this.y2 = d, this.radius = e
        }).prototype.exec = function (a) {
            a.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
        }, (c.Arc = function (a, b, c, d, e, f) {
            this.x = a, this.y = b, this.radius = c, this.startAngle = d, this.endAngle = e, this.anticlockwise = !!f
        }).prototype.exec = function (a) {
            a.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
        }, (c.QuadraticCurveTo = function (a, b, c, d) {
            this.cpx = a, this.cpy = b, this.x = c, this.y = d
        }).prototype.exec = function (a) {
            a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
        }, (c.BezierCurveTo = function (a, b, c, d, e, f) {
            this.cp1x = a, this.cp1y = b, this.cp2x = c, this.cp2y = d, this.x = e, this.y = f
        }).prototype.exec = function (a) {
            a.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
        }, (c.Rect = function (a, b, c, d) {
            this.x = a, this.y = b, this.w = c, this.h = d
        }).prototype.exec = function (a) {
            a.rect(this.x, this.y, this.w, this.h)
        }, (c.ClosePath = function () { }).prototype.exec = function (a) {
            a.closePath()
        }, (c.BeginPath = function () { }).prototype.exec = function (a) {
            a.beginPath()
        }, b = (c.Fill = function (a, b) {
            this.style = a, this.matrix = b
        }).prototype, b.exec = function (a) {
            if (this.style) {
                a.fillStyle = this.style;
                var b = this.matrix;
                b && (a.save(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), a.fill(), b && a.restore()
            }
        }, b.linearGradient = function (b, c, d, e, f, g) {
            for (var h = this.style = a._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) h.addColorStop(c[i], b[i]);
            return h.props = {
                colors: b,
                ratios: c,
                x0: d,
                y0: e,
                x1: f,
                y1: g,
                type: "linear"
            }, this
        }, b.radialGradient = function (b, c, d, e, f, g, h, i) {
            for (var j = this.style = a._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) j.addColorStop(c[k], b[k]);
            return j.props = {
                colors: b,
                ratios: c,
                x0: d,
                y0: e,
                r0: f,
                x1: g,
                y1: h,
                r1: i,
                type: "radial"
            }, this
        }, b.bitmap = function (b, c) {
            if (b.naturalWidth || b.getContext || b.readyState >= 2) {
                var d = this.style = a._ctx.createPattern(b, c || "");
                d.props = {
                    image: b,
                    repetition: c,
                    type: "bitmap"
                }
            }
            return this
        }, b.path = !1, b = (c.Stroke = function (a, b) {
            this.style = a, this.ignoreScale = b
        }).prototype, b.exec = function (a) {
            this.style && (a.strokeStyle = this.style, this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)), a.stroke(), this.ignoreScale && a.restore())
        }, b.linearGradient = c.Fill.prototype.linearGradient, b.radialGradient = c.Fill.prototype.radialGradient, b.bitmap = c.Fill.prototype.bitmap, b.path = !1, b = (c.StrokeStyle = function (a, b, c, d, e) {
            this.width = a, this.caps = b, this.joints = c, this.miterLimit = d, this.ignoreScale = e
        }).prototype, b.exec = function (b) {
            b.lineWidth = null == this.width ? "1" : this.width, b.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : a.STROKE_CAPS_MAP[this.caps], b.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : a.STROKE_JOINTS_MAP[this.joints], b.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, b.ignoreScale = null == this.ignoreScale ? !1 : this.ignoreScale
        }, b.path = !1, (c.StrokeDash = function (a, b) {
            this.segments = a, this.offset = b || 0
        }).prototype.exec = function (a) {
            a.setLineDash && (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS), a.lineDashOffset = this.offset || 0)
        }, c.StrokeDash.EMPTY_SEGMENTS = [], (c.RoundRect = function (a, b, c, d, e, f, g, h) {
            this.x = a, this.y = b, this.w = c, this.h = d, this.radiusTL = e, this.radiusTR = f, this.radiusBR = g, this.radiusBL = h
        }).prototype.exec = function (a) {
            var b = (j > i ? i : j) / 2,
                c = 0,
                d = 0,
                e = 0,
                f = 0,
                g = this.x,
                h = this.y,
                i = this.w,
                j = this.h,
                k = this.radiusTL,
                l = this.radiusTR,
                m = this.radiusBR,
                n = this.radiusBL;
            0 > k && (k *= c = -1), k > b && (k = b), 0 > l && (l *= d = -1), l > b && (l = b), 0 > m && (m *= e = -1), m > b && (m = b), 0 > n && (n *= f = -1), n > b && (n = b), a.moveTo(g + i - l, h), a.arcTo(g + i + l * d, h - l * d, g + i, h + l, l), a.lineTo(g + i, h + j - m), a.arcTo(g + i + m * e, h + j + m * e, g + i - m, h + j, m), a.lineTo(g + n, h + j), a.arcTo(g - n * f, h + j + n * f, g, h + j - n, n),
                a.lineTo(g, h + k), a.arcTo(g - k * c, h - k * c, g + k, h, k), a.closePath()
        }, (c.Circle = function (a, b, c) {
            this.x = a, this.y = b, this.radius = c
        }).prototype.exec = function (a) {
            a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        }, (c.Ellipse = function (a, b, c, d) {
            this.x = a, this.y = b, this.w = c, this.h = d
        }).prototype.exec = function (a) {
            var b = this.x,
                c = this.y,
                d = this.w,
                e = this.h,
                f = .5522848,
                g = d / 2 * f,
                h = e / 2 * f,
                i = b + d,
                j = c + e,
                k = b + d / 2,
                l = c + e / 2;
            a.moveTo(b, l), a.bezierCurveTo(b, l - h, k - g, c, k, c), a.bezierCurveTo(k + g, c, i, l - h, i, l), a.bezierCurveTo(i, l + h, k + g, j, k, j), a.bezierCurveTo(k - g, j, b, l + h, b, l)
        }, (c.PolyStar = function (a, b, c, d, e, f) {
            this.x = a, this.y = b, this.radius = c, this.sides = d, this.pointSize = e, this.angle = f
        }).prototype.exec = function (a) {
            var b = this.x,
                c = this.y,
                d = this.radius,
                e = (this.angle || 0) / 180 * Math.PI,
                f = this.sides,
                g = 1 - (this.pointSize || 0),
                h = Math.PI / f;
            a.moveTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
            for (var i = 0; f > i; i++) e += h, 1 != g && a.lineTo(b + Math.cos(e) * d * g, c + Math.sin(e) * d * g), e += h, a.lineTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
            a.closePath()
        }, a.beginCmd = new c.BeginPath, createjs.Graphics = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.bitmapCache = null, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null, this._webGLRenderStyle = a._StageGL_NONE
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1, a._snapToPixelEnabled = !1, a._StageGL_NONE = 0, a._StageGL_SPRITE = 1, a._StageGL_BITMAP = 2;
        var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), b._getStage = function () {
            for (var a = this, b = createjs.Stage; a.parent;) a = a.parent;
            return a instanceof b ? a : null
        }, b.getStage = createjs.deprecate(b._getStage, "DisplayObject.getStage");
        try {
            Object.defineProperties(b, {
                stage: {
                    get: b._getStage
                },
                cacheID: {
                    get: function () {
                        return this.bitmapCache && this.bitmapCache.cacheID
                    },
                    set: function (a) {
                        this.bitmapCache && (this.bitmapCache.cacheID = a)
                    }
                },
                scale: {
                    get: function () {
                        return this.scaleX
                    },
                    set: function (a) {
                        this.scaleX = this.scaleY = a
                    }
                }
            })
        } catch (d) { }
        b.isVisible = function () {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, b.draw = function (a, b) {
            var c = this.bitmapCache;
            return c && !b ? c.draw(a) : !1
        }, b.updateContext = function (b) {
            var c = this,
                d = c.mask,
                e = c._props.matrix;
            d && d.graphics && !d.graphics.isEmpty() && (d.getMatrix(e), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), d.graphics.drawAsPath(b), b.clip(), e.invert(), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), this.getMatrix(e);
            var f = e.tx,
                g = e.ty;
            a._snapToPixelEnabled && c.snapToPixel && (f = f + (0 > f ? -.5 : .5) | 0, g = g + (0 > g ? -.5 : .5) | 0), b.transform(e.a, e.b, e.c, e.d, f, g), b.globalAlpha *= c.alpha, c.compositeOperation && (b.globalCompositeOperation = c.compositeOperation), c.shadow && this._applyShadow(b, c.shadow)
        }, b.cache = function (a, b, c, d, e, f) {
            this.bitmapCache || (this.bitmapCache = new createjs.BitmapCache), this.bitmapCache.define(this, a, b, c, d, e, f)
        }, b.updateCache = function (a) {
            if (!this.bitmapCache) throw "cache() must be called before updateCache()";
            this.bitmapCache.update(a)
        }, b.uncache = function () {
            this.bitmapCache && (this.bitmapCache.release(), this.bitmapCache = void 0)
        }, b.getCacheDataURL = function () {
            return this.bitmapCache ? this.bitmapCache.getDataURL() : null
        }, b.localToGlobal = function (a, b, c) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a, b, c || new createjs.Point)
        }, b.globalToLocal = function (a, b, c) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a, b, c || new createjs.Point)
        }, b.localToLocal = function (a, b, c, d) {
            return d = this.localToGlobal(a, b, d), c.globalToLocal(d.x, d.y, d)
        }, b.setTransform = function (a, b, c, d, e, f, g, h, i) {
            return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
        }, b.getMatrix = function (a) {
            var b = this,
                c = a && a.identity() || new createjs.Matrix2D;
            return b.transformMatrix ? c.copy(b.transformMatrix) : c.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY)
        }, b.getConcatenatedMatrix = function (a) {
            for (var b = this, c = this.getMatrix(a); b = b.parent;) c.prependMatrix(b.getMatrix(b._props.matrix));
            return c
        }, b.getConcatenatedDisplayProps = function (a) {
            a = a ? a.identity() : new createjs.DisplayProps;
            var b = this,
                c = b.getMatrix(a.matrix);
            do a.prepend(b.visible, b.alpha, b.shadow, b.compositeOperation), b != this && c.prependMatrix(b.getMatrix(b._props.matrix)); while (b = b.parent);
            return a
        }, b.hitTest = function (b, c) {
            var d = a._hitTestContext;
            d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);
            var e = this._testHit(d);
            return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e
        }, b.set = function (a) {
            for (var b in a) this[b] = a[b];
            return this
        }, b.getBounds = function () {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var a = this.cacheCanvas;
            if (a) {
                var b = this._cacheScale;
                return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, a.width / b, a.height / b)
            }
            return null
        }, b.getTransformedBounds = function () {
            return this._getBounds()
        }, b.setBounds = function (a, b, c, d) {
            return null == a ? void (this._bounds = a) : void (this._bounds = (this._bounds || new createjs.Rectangle).setValues(a, b, c, d))
        }, b.clone = function () {
            return this._cloneProps(new a)
        }, b.toString = function () {
            return "[DisplayObject (name=" + this.name + ")]"
        }, b._updateState = null, b._cloneProps = function (a) {
            return a.alpha = this.alpha, a.mouseEnabled = this.mouseEnabled, a.tickEnabled = this.tickEnabled, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a.compositeOperation = this.compositeOperation, a.snapToPixel = this.snapToPixel, a.filters = null == this.filters ? null : this.filters.slice(0), a.mask = this.mask, a.hitArea = this.hitArea, a.cursor = this.cursor, a._bounds = this._bounds, a
        }, b._applyShadow = function (a, b) {
            b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
        }, b._tick = function (a) {
            var b = this._listeners;
            b && b.tick && (a.target = null, a.propagationStopped = a.immediatePropagationStopped = !1, this.dispatchEvent(a))
        }, b._testHit = function (b) {
            try {
                var c = b.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (d) {
                if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return c
        }, b._getBounds = function (a, b) {
            return this._transformBounds(this.getBounds(), a, b)
        }, b._transformBounds = function (a, b, c) {
            if (!a) return a;
            var d = a.x,
                e = a.y,
                f = a.width,
                g = a.height,
                h = this._props.matrix;
            h = c ? h.identity() : this.getMatrix(h), (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b);
            var i = f * h.a,
                j = f * h.b,
                k = g * h.c,
                l = g * h.d,
                m = h.tx,
                n = h.ty,
                o = m,
                p = m,
                q = n,
                r = n;
            return (d = i + m) < o ? o = d : d > p && (p = d), (d = i + k + m) < o ? o = d : d > p && (p = d), (d = k + m) < o ? o = d : d > p && (p = d), (e = j + n) < q ? q = e : e > r && (r = e), (e = j + l + n) < q ? q = e : e > r && (r = e), (e = l + n) < q ? q = e : e > r && (r = e), a.setValues(o, q, p - o, r - q)
        }, b._hasMouseEventListener = function () {
            for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++)
                if (this.hasEventListener(b[c])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b._getNumChildren = function () {
            return this.children.length
        }, b.getNumChildren = createjs.deprecate(b._getNumChildren, "Container.getNumChildren");
        try {
            Object.defineProperties(b, {
                numChildren: {
                    get: b._getNumChildren
                }
            })
        } catch (c) { }
        b.initialize = a, b.isVisible = function () {
            var a = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function (a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            for (var c = this.children.slice(), d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore())
            }
            return !0
        }, b.addChild = function (a) {
            if (null == a) return a;
            var b = arguments.length;
            if (b > 1) {
                for (var c = 0; b > c; c++) this.addChild(arguments[c]);
                return arguments[b - 1]
            }
            var d = a.parent,
                e = d === this;
            return d && d._removeChildAt(createjs.indexOf(d.children, a), e), a.parent = this, this.children.push(a), e || a.dispatchEvent("added"), a
        }, b.addChildAt = function (a, b) {
            var c = arguments.length,
                d = arguments[c - 1];
            if (0 > d || d > this.children.length) return arguments[c - 2];
            if (c > 2) {
                for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
                return arguments[c - 2]
            }
            var f = a.parent,
                g = f === this;
            return f && f._removeChildAt(createjs.indexOf(f.children, a), g), a.parent = this, this.children.splice(b, 0, a), g || a.dispatchEvent("added"), a
        }, b.removeChild = function (a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = 0; b > d; d++) c = c && this.removeChild(arguments[d]);
                return c
            }
            return this._removeChildAt(createjs.indexOf(this.children, a))
        }, b.removeChildAt = function (a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
                c.sort(function (a, b) {
                    return b - a
                });
                for (var e = !0, d = 0; b > d; d++) e = e && this._removeChildAt(c[d]);
                return e
            }
            return this._removeChildAt(a)
        }, b.removeAllChildren = function () {
            for (var a = this.children; a.length;) this._removeChildAt(0)
        }, b.getChildAt = function (a) {
            return this.children[a]
        }, b.getChildByName = function (a) {
            for (var b = this.children, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        }, b.sortChildren = function (a) {
            this.children.sort(a)
        }, b.getChildIndex = function (a) {
            return createjs.indexOf(this.children, a)
        }, b.swapChildrenAt = function (a, b) {
            var c = this.children,
                d = c[a],
                e = c[b];
            d && e && (c[a] = e, c[b] = d)
        }, b.swapChildren = function (a, b) {
            for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++);
            f != g && (e[c] = b, e[d] = a)
        }, b.setChildIndex = function (a, b) {
            var c = this.children,
                d = c.length;
            if (!(a.parent != this || 0 > b || b >= d)) {
                for (var e = 0; d > e && c[e] != a; e++);
                e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a))
            }
        }, b.contains = function (a) {
            for (; a;) {
                if (a == this) return !0;
                a = a.parent
            }
            return !1
        }, b.hitTest = function (a, b) {
            return null != this.getObjectUnderPoint(a, b)
        }, b.getObjectsUnderPoint = function (a, b, c) {
            var d = [],
                e = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(e.x, e.y, d, c > 0, 1 == c), d
        }, b.getObjectUnderPoint = function (a, b, c) {
            var d = this.localToGlobal(a, b);
            return this._getObjectsUnderPoint(d.x, d.y, null, c > 0, 1 == c)
        }, b.getBounds = function () {
            return this._getBounds(null, !0)
        }, b.getTransformedBounds = function () {
            return this._getBounds()
        }, b.clone = function (b) {
            var c = this._cloneProps(new a);
            return b && this._cloneChildren(c), c
        }, b.toString = function () {
            return "[Container (name=" + this.name + ")]"
        }, b._tick = function (a) {
            if (this.tickChildren)
                for (var b = this.children.length - 1; b >= 0; b--) {
                    var c = this.children[b];
                    c.tickEnabled && c._tick && c._tick(a)
                }
            this.DisplayObject__tick(a)
        }, b._cloneChildren = function (a) {
            a.children.length && a.removeAllChildren();
            for (var b = a.children, c = 0, d = this.children.length; d > c; c++) {
                var e = this.children[c].clone(!0);
                e.parent = a, b.push(e)
            }
        }, b._removeChildAt = function (a, b) {
            if (0 > a || a > this.children.length - 1) return !1;
            var c = this.children[a];
            return c && (c.parent = null), this.children.splice(a, 1), b || c.dispatchEvent("removed"), !0
        }, b._getObjectsUnderPoint = function (b, c, d, e, f, g) {
            if (g = g || 0, !g && !this._testMask(this, b, c)) return null;
            var h, i = createjs.DisplayObject._hitTestContext;
            f = f || e && this._hasMouseEventListener();
            for (var j = this.children, k = j.length, l = k - 1; l >= 0; l--) {
                var m = j[l],
                    n = m.hitArea;
                if (m.visible && (n || m.isVisible()) && (!e || m.mouseEnabled) && (n || this._testMask(m, b, c)))
                    if (!n && m instanceof a) {
                        var o = m._getObjectsUnderPoint(b, c, d, e, f, g + 1);
                        if (!d && o) return e && !this.mouseChildren ? this : o
                    } else {
                        if (e && !f && !m._hasMouseEventListener()) continue;
                        var p = m.getConcatenatedDisplayProps(m._props);
                        if (h = p.matrix, n && (h.appendMatrix(n.getMatrix(n._props.matrix)), p.alpha = n.alpha), i.globalAlpha = p.alpha, i.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (n || m).draw(i), !this._testHit(i)) continue;
                        if (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : m;
                        d.push(m)
                    }
            }
            return null
        }, b._testMask = function (a, b, c) {
            var d = a.mask;
            if (!d || !d.graphics || d.graphics.isEmpty()) return !0;
            var e = this._props.matrix,
                f = a.parent;
            e = f ? f.getConcatenatedMatrix(e) : e.identity(), e = d.getMatrix(d._props.matrix).prependMatrix(e);
            var g = createjs.DisplayObject._hitTestContext;
            return g.setTransform(e.a, e.b, e.c, e.d, e.tx - b, e.ty - c), d.graphics.drawAsPath(g), g.fillStyle = "#000", g.fill(), this._testHit(g) ? (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !0) : !1
        }, b._getBounds = function (a, b) {
            var c = this.DisplayObject_getBounds();
            if (c) return this._transformBounds(c, a, b);
            var d = this._props.matrix;
            d = b ? d.identity() : this.getMatrix(d), a && d.prependMatrix(a);
            for (var e = this.children.length, f = null, g = 0; e > g; g++) {
                var h = this.children[g];
                h.visible && (c = h._getBounds(d)) && (f ? f.extend(c.x, c.y, c.width, c.height) : f = c.clone())
            }
            return f
        }, createjs.Container = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof a ? document.getElementById(a) : a, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
        }
        var b = createjs.extend(a, createjs.Container);
        b._get_nextStage = function () {
            return this._nextStage
        }, b._set_nextStage = function (a) {
            this._nextStage && (this._nextStage._prevStage = null), a && (a._prevStage = this), this._nextStage = a
        };
        try {
            Object.defineProperties(b, {
                nextStage: {
                    get: b._get_nextStage,
                    set: b._set_nextStage
                }
            })
        } catch (c) { }
        b.update = function (a) {
            if (this.canvas && (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
                createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
                var b = this.drawRect,
                    c = this.canvas.getContext("2d");
                c.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (b ? c.clearRect(b.x, b.y, b.width, b.height) : c.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), c.save(), this.drawRect && (c.beginPath(), c.rect(b.x, b.y, b.width, b.height), c.clip()), this.updateContext(c), this.draw(c, !1), c.restore(), this.dispatchEvent("drawend")
            }
        }, b.tick = function (a) {
            if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
                var b = new createjs.Event("tick");
                if (a)
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                this._tick(b), this.dispatchEvent("tickend")
            }
        }, b.handleEvent = function (a) {
            "tick" == a.type && this.update(a)
        }, b.clear = function () {
            if (this.canvas) {
                var a = this.canvas.getContext("2d");
                a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, b.toDataURL = function (a, b) {
            var c, d = this.canvas.getContext("2d"),
                e = this.canvas.width,
                f = this.canvas.height;
            if (a) {
                c = d.getImageData(0, 0, e, f);
                var g = d.globalCompositeOperation;
                d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)
            }
            var h = this.canvas.toDataURL(b || "image/png");
            return a && (d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
        }, b.enableMouseOver = function (a) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20;
            else if (0 >= a) return;
            var b = this;
            this._mouseOverIntervalID = setInterval(function () {
                b._testMouseOver()
            }, 1e3 / Math.min(50, a))
        }, b.enableDOMEvents = function (a) {
            null == a && (a = !0);
            var b, c, d = this._eventListeners;
            if (!a && d) {
                for (b in d) c = d[b], c.t.removeEventListener(b, c.f, !1);
                this._eventListeners = null
            } else if (a && !d && this.canvas) {
                var e = window.addEventListener ? window : document,
                    f = this;
                d = this._eventListeners = {}, d.mouseup = {
                    t: e,
                    f: function (a) {
                        f._handleMouseUp(a)
                    }
                }, d.mousemove = {
                    t: e,
                    f: function (a) {
                        f._handleMouseMove(a)
                    }
                }, d.dblclick = {
                    t: this.canvas,
                    f: function (a) {
                        f._handleDoubleClick(a)
                    }
                }, d.mousedown = {
                    t: this.canvas,
                    f: function (a) {
                        f._handleMouseDown(a)
                    }
                };
                for (b in d) c = d[b], c.t.addEventListener(b, c.f, !1)
            }
        }, b.clone = function () {
            throw "Stage cannot be cloned."
        }, b.toString = function () {
            return "[Stage (name=" + this.name + ")]"
        }, b._getElementRect = function (a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                b = {
                    top: a.offsetTop,
                    left: a.offsetLeft,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }
            var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                f = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle,
                g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
                h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
                i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
                j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
            return {
                left: b.left + d + g,
                right: b.right + d - i,
                top: b.top + e + h,
                bottom: b.bottom + e - j
            }
        }, b._getPointerData = function (a) {
            var b = this._pointerData[a];
            return b || (b = this._pointerData[a] = {
                x: 0,
                y: 0
            }), b
        }, b._handleMouseMove = function (a) {
            a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY)
        }, b._handlePointerMove = function (a, b, c, d, e) {
            if ((!this._prevStage || void 0 !== e) && this.canvas) {
                var f = this._nextStage,
                    g = this._getPointerData(a),
                    h = g.inBounds;
                this._updatePointerPosition(a, b, c, d), (h || g.inBounds || this.mouseMoveOutside) && (-1 === a && g.inBounds == !h && this._dispatchMouseEvent(this, h ? "mouseleave" : "mouseenter", !1, a, g, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, g, b), this._dispatchMouseEvent(g.target, "pressmove", !0, a, g, b)), f && f._handlePointerMove(a, b, c, d, null)
            }
        }, b._updatePointerPosition = function (a, b, c, d) {
            var e = this._getElementRect(this.canvas);
            c -= e.left, d -= e.top;
            var f = this.canvas.width,
                g = this.canvas.height;
            c /= (e.right - e.left) / f, d /= (e.bottom - e.top) / g;
            var h = this._getPointerData(a);
            (h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c, h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, (a === this._primaryPointerID || -1 === a) && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds)
        }, b._handleMouseUp = function (a) {
            this._handlePointerUp(-1, a, !1)
        }, b._handlePointerUp = function (a, b, c, d) {
            var e = this._nextStage,
                f = this._getPointerData(a);
            if (!this._prevStage || void 0 !== d) {
                var g = null,
                    h = f.target;
                d || !h && !e || (g = this._getObjectsUnderPoint(f.x, f.y, null, !0)), f.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, a, f, b, g), f.down = !1), g == h && this._dispatchMouseEvent(h, "click", !0, a, f, b), this._dispatchMouseEvent(h, "pressup", !0, a, f, b), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : f.target = null, e && e._handlePointerUp(a, b, c, d || g && this)
            }
        }, b._handleMouseDown = function (a) {
            this._handlePointerDown(-1, a, a.pageX, a.pageY)
        }, b._handlePointerDown = function (a, b, c, d, e) {
            this.preventSelection && b.preventDefault(), (null == this._primaryPointerID || -1 === a) && (this._primaryPointerID = a), null != d && this._updatePointerPosition(a, b, c, d);
            var f = null,
                g = this._nextStage,
                h = this._getPointerData(a);
            e || (f = h.target = this._getObjectsUnderPoint(h.x, h.y, null, !0)), h.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, a, h, b, f), h.down = !0), this._dispatchMouseEvent(f, "mousedown", !0, a, h, b), g && g._handlePointerDown(a, b, c, d, e || f && this)
        }, b._testMouseOver = function (a, b, c) {
            if (!this._prevStage || void 0 !== b) {
                var d = this._nextStage;
                if (!this._mouseOverIntervalID) return void (d && d._testMouseOver(a, b, c));
                var e = this._getPointerData(-1);
                if (e && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                    var f, g, h, i = e.posEvtObj,
                        j = c || i && i.target == this.canvas,
                        k = null,
                        l = -1,
                        m = "";
                    !b && (a || this.mouseInBounds && j) && (k = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                    var n = this._mouseOverTarget || [],
                        o = n[n.length - 1],
                        p = this._mouseOverTarget = [];
                    for (f = k; f;) p.unshift(f), m || (m = f.cursor), f = f.parent;
                    for (this.canvas.style.cursor = m, !b && c && (c.canvas.style.cursor = m), g = 0, h = p.length; h > g && p[g] == n[g]; g++) l = g;
                    for (o != k && this._dispatchMouseEvent(o, "mouseout", !0, -1, e, i, k), g = n.length - 1; g > l; g--) this._dispatchMouseEvent(n[g], "rollout", !1, -1, e, i, k);
                    for (g = p.length - 1; g > l; g--) this._dispatchMouseEvent(p[g], "rollover", !1, -1, e, i, o);
                    o != k && this._dispatchMouseEvent(k, "mouseover", !0, -1, e, i, o), d && d._testMouseOver(a, b || k && this, c || j && this)
                }
            }
        }, b._handleDoubleClick = function (a, b) {
            var c = null,
                d = this._nextStage,
                e = this._getPointerData(-1);
            b || (c = this._getObjectsUnderPoint(e.x, e.y, null, !0), this._dispatchMouseEvent(c, "dblclick", !0, -1, e, a)), d && d._handleDoubleClick(a, b || c && this)
        }, b._dispatchMouseEvent = function (a, b, c, d, e, f, g) {
            if (a && (c || a.hasEventListener(b))) {
                var h = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, d === this._primaryPointerID || -1 === d, e.rawX, e.rawY, g);
                a.dispatchEvent(h)
            }
        }, createjs.Stage = createjs.promote(a, "Container")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(b, c) {
            if (this.Stage_constructor(b), void 0 !== c) {
                if ("object" != typeof c) throw "Invalid options object";
                var d = c.premultiply,
                    e = c.transparent,
                    f = c.antialias,
                    g = c.preserveBuffer,
                    h = c.autoPurge
            }
            this.vocalDebug = !1, this._preserveBuffer = g || !1, this._antialias = f || !1, this._transparent = e || !1, this._premultiply = d || !1, this._autoPurge = void 0, this.autoPurge = h, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._clearColor = {
                r: .5,
                g: .5,
                b: .5,
                a: 0
            }, this._maxCardsPerBatch = a.DEFAULT_MAX_BATCH_SIZE, this._activeShader = null, this._vertices = null, this._vertexPositionBuffer = null, this._uvs = null, this._uvPositionBuffer = null, this._indices = null, this._textureIndexBuffer = null, this._alphas = null, this._alphaBuffer = null, this._textureDictionary = [], this._textureIDs = {}, this._batchTextures = [], this._baseTextures = [], this._batchTextureCount = 8, this._lastTextureInsert = -1, this._batchID = 0, this._drawID = 0, this._slotBlacklist = [], this._isDrawing = 0, this._lastTrackedCanvas = 0, this.isCacheControlled = !1, this._cacheContainer = new createjs.Container, this._initializeWebGL()
        }
        var b = createjs.extend(a, createjs.Stage);
        a.buildUVRects = function (a, b, c) {
            if (!a || !a._frames) return null;
            void 0 === b && (b = -1), void 0 === c && (c = !1);
            for (var d = -1 != b && c ? b : 0, e = -1 != b && c ? b + 1 : a._frames.length, f = d; e > f; f++) {
                var g = a._frames[f];
                if (!(g.uvRect || g.image.width <= 0 || g.image.height <= 0)) {
                    var h = g.rect;
                    g.uvRect = {
                        t: h.y / g.image.height,
                        l: h.x / g.image.width,
                        b: (h.y + h.height) / g.image.height,
                        r: (h.x + h.width) / g.image.width
                    }
                }
            }
            return a._frames[-1 != b ? b : 0].uvRect || {
                t: 0,
                l: 0,
                b: 1,
                r: 1
            }
        }, a.isWebGLActive = function (a) {
            return a && a instanceof WebGLRenderingContext && "undefined" != typeof WebGLRenderingContext
        }, a.VERTEX_PROPERTY_COUNT = 6, a.INDICIES_PER_CARD = 6, a.DEFAULT_MAX_BATCH_SIZE = 1e4, a.WEBGL_MAX_INDEX_NUM = Math.pow(2, 16), a.UV_RECT = {
            t: 0,
            l: 0,
            b: 1,
            r: 1
        };
        try {
            a.COVER_VERT = new Float32Array([-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1]), a.COVER_UV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), a.COVER_UV_FLIP = new Float32Array([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0])
        } catch (c) { }
        a.REGULAR_VARYING_HEADER = "precision mediump float;varying vec2 vTextureCoord;varying lowp float indexPicker;varying lowp float alphaValue;", a.REGULAR_VERTEX_HEADER = a.REGULAR_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;attribute lowp float textureIndex;attribute lowp float objectAlpha;uniform mat4 pMatrix;", a.REGULAR_FRAGMENT_HEADER = a.REGULAR_VARYING_HEADER + "uniform sampler2D uSampler[{{count}}];", a.REGULAR_VERTEX_BODY = "void main(void) {gl_Position = vec4((vertexPosition.x * pMatrix[0][0]) + pMatrix[3][0],(vertexPosition.y * pMatrix[1][1]) + pMatrix[3][1],pMatrix[3][2],1.0);alphaValue = objectAlpha;indexPicker = textureIndex;vTextureCoord = uvPosition;}", a.REGULAR_FRAGMENT_BODY = "void main(void) {vec4 color = vec4(1.0, 0.0, 0.0, 1.0);if (indexPicker <= 0.5) {color = texture2D(uSampler[0], vTextureCoord);{{alternates}}}{{fragColor}}}", a.REGULAR_FRAG_COLOR_NORMAL = "gl_FragColor = vec4(color.rgb, color.a * alphaValue);", a.REGULAR_FRAG_COLOR_PREMULTIPLY = "if(color.a > 0.0035) {gl_FragColor = vec4(color.rgb/color.a, color.a * alphaValue);} else {gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);}", a.PARTICLE_VERTEX_BODY = a.REGULAR_VERTEX_BODY, a.PARTICLE_FRAGMENT_BODY = a.REGULAR_FRAGMENT_BODY, a.COVER_VARYING_HEADER = "precision mediump float;varying highp vec2 vRenderCoord;varying highp vec2 vTextureCoord;", a.COVER_VERTEX_HEADER = a.COVER_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;uniform float uUpright;", a.COVER_FRAGMENT_HEADER = a.COVER_VARYING_HEADER + "uniform sampler2D uSampler;", a.COVER_VERTEX_BODY = "void main(void) {gl_Position = vec4(vertexPosition.x, vertexPosition.y, 0.0, 1.0);vRenderCoord = uvPosition;vTextureCoord = vec2(uvPosition.x, abs(uUpright - uvPosition.y));}", a.COVER_FRAGMENT_BODY = "void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = color;}", b._get_isWebGL = function () {
            return !!this._webGLContext
        }, b._set_autoPurge = function (a) {
            a = isNaN(a) ? 1200 : a, -1 != a && (a = 10 > a ? 10 : a), this._autoPurge = a
        }, b._get_autoPurge = function () {
            return Number(this._autoPurge)
        };
        try {
            Object.defineProperties(b, {
                isWebGL: {
                    get: b._get_isWebGL
                },
                autoPurge: {
                    get: b._get_autoPurge,
                    set: b._set_autoPurge
                }
            })
        } catch (c) { }
        b._initializeWebGL = function () {
            if (this.canvas) {
                if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
                    var a = {
                        depth: !1,
                        alpha: this._transparent,
                        stencil: !0,
                        antialias: this._antialias,
                        premultipliedAlpha: this._premultiply,
                        preserveDrawingBuffer: this._preserveBuffer
                    },
                        b = this._webGLContext = this._fetchWebGLContext(this.canvas, a);
                    if (!b) return null;
                    this.updateSimultaneousTextureCount(b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS)), this._maxTextureSlots = b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this._createBuffers(b), this._initTextures(b), b.disable(b.DEPTH_TEST), b.enable(b.BLEND), b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE, b.ONE_MINUS_SRC_ALPHA), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply), this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height)
                }
            } else this._webGLContext = null;
            return this._webGLContext
        }, b.update = function (a) {
            if (this.canvas) {
                if (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), this._webGLContext) this._batchDraw(this, this._webGLContext), -1 == this._autoPurge || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge);
                else {
                    var b = this.canvas.getContext("2d");
                    b.save(), this.updateContext(b), this.draw(b, !1), b.restore()
                }
                this.dispatchEvent("drawend")
            }
        }, b.clear = function () {
            if (this.canvas)
                if (a.isWebGLActive(this._webGLContext)) {
                    var b = this._webGLContext,
                        c = this._clearColor,
                        d = this._transparent ? c.a : 1;
                    this._webGLContext.clearColor(c.r * d, c.g * d, c.b * d, d), b.clear(b.COLOR_BUFFER_BIT), this._webGLContext.clearColor(c.r, c.g, c.b, c.a)
                } else this.Stage_clear()
        }, b.draw = function (b, c) {
            if (b === this._webGLContext && a.isWebGLActive(this._webGLContext)) {
                var d = this._webGLContext;
                return this._batchDraw(this, d, c), !0
            }
            return this.Stage_draw(b, c)
        }, b.cacheDraw = function (b, c, d) {
            if (a.isWebGLActive(this._webGLContext)) {
                var e = this._webGLContext;
                return this._cacheDraw(e, b, c, d), !0
            }
            return !1
        }, b.protectTextureSlot = function (a, b) {
            if (a > this._maxTextureSlots || 0 > a) throw "Slot outside of acceptable range";
            this._slotBlacklist[a] = !!b
        }, b.getTargetRenderTexture = function (a, b, c) {
            var d, e = !1,
                f = this._webGLContext;
            if (void 0 !== a.__lastRT && a.__lastRT === a.__rtA && (e = !0), e ? (void 0 === a.__rtB ? a.__rtB = this.getRenderBufferTexture(b, c) : ((b != a.__rtB._width || c != a.__rtB._height) && this.resizeTexture(a.__rtB, b, c), this.setTextureParams(f)), d = a.__rtB) : (void 0 === a.__rtA ? a.__rtA = this.getRenderBufferTexture(b, c) : ((b != a.__rtA._width || c != a.__rtA._height) && this.resizeTexture(a.__rtA, b, c), this.setTextureParams(f)), d = a.__rtA), !d) throw "Problems creating render textures, known causes include using too much VRAM by not releasing WebGL texture instances";
            return a.__lastRT = d, d
        }, b.releaseTexture = function (a) {
            var b, c;
            if (a) {
                if (a.children)
                    for (b = 0, c = a.children.length; c > b; b++) this.releaseTexture(a.children[b]);
                a.cacheCanvas && a.uncache();
                var d = void 0;
                if (void 0 !== a._storeID) {
                    if (a === this._textureDictionary[a._storeID]) return this._killTextureObject(a), void (a._storeID = void 0);
                    d = a
                } else if (2 === a._webGLRenderStyle) d = a.image;
                else if (1 === a._webGLRenderStyle) {
                    for (b = 0, c = a.spriteSheet._images.length; c > b; b++) this.releaseTexture(a.spriteSheet._images[b]);
                    return
                }
                if (void 0 === d) return void (this.vocalDebug && console.log("No associated texture found on release"));
                this._killTextureObject(this._textureDictionary[d._storeID]), d._storeID = void 0
            }
        }, b.purgeTextures = function (a) {
            void 0 == a && (a = 100);
            for (var b = this._textureDictionary, c = b.length, d = 0; c > d; d++) {
                var e = b[d];
                e && e._drawID + a <= this._drawID && this._killTextureObject(e)
            }
        }, b.updateSimultaneousTextureCount = function (a) {
            var b = this._webGLContext,
                c = !1;
            for ((1 > a || isNaN(a)) && (a = 1), this._batchTextureCount = a; !c;) try {
                this._activeShader = this._fetchShaderProgram(b), c = !0
            } catch (d) {
                if (1 == this._batchTextureCount) throw "Cannot compile shader " + d;
                this._batchTextureCount -= 4, this._batchTextureCount < 1 && (this._batchTextureCount = 1), this.vocalDebug && console.log("Reducing desired texture count due to errors: " + this._batchTextureCount)
            }
        }, b.updateViewport = function (a, b) {
            this._viewportWidth = 0 | a, this._viewportHeight = 0 | b;
            var c = this._webGLContext;
            c && (c.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix = new Float32Array([2 / this._viewportWidth, 0, 0, 0, 0, -2 / this._viewportHeight, 1, 0, 0, 0, 1, 0, -1, 1, .1, 0]), this._projectionMatrixFlip = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this._projectionMatrixFlip.set(this._projectionMatrix), this._projectionMatrixFlip[5] *= -1, this._projectionMatrixFlip[13] *= -1)
        }, b.getFilterShader = function (a) {
            a || (a = this);
            var b = this._webGLContext,
                c = this._activeShader;
            if (a._builtShader) c = a._builtShader, a.shaderParamSetup && (b.useProgram(c), a.shaderParamSetup(b, this, c));
            else try {
                c = this._fetchShaderProgram(b, "filter", a.VTX_SHADER_BODY, a.FRAG_SHADER_BODY, a.shaderParamSetup && a.shaderParamSetup.bind(a)), a._builtShader = c, c._name = a.toString()
            } catch (d) {
                console && console.log("SHADER SWITCH FAILURE", d)
            }
            return c
        }, b.getBaseTexture = function (a, b) {
            var c = Math.ceil(a > 0 ? a : 1) || 1,
                d = Math.ceil(b > 0 ? b : 1) || 1,
                e = this._webGLContext,
                f = e.createTexture();
            return this.resizeTexture(f, c, d), this.setTextureParams(e, !1), f
        }, b.resizeTexture = function (a, b, c) {
            var d = this._webGLContext;
            d.bindTexture(d.TEXTURE_2D, a), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, b, c, 0, d.RGBA, d.UNSIGNED_BYTE, null), a.width = b, a.height = c
        }, b.getRenderBufferTexture = function (a, b) {
            var c = this._webGLContext,
                d = this.getBaseTexture(a, b);
            if (!d) return null;
            var e = c.createFramebuffer();
            return e ? (d.width = a, d.height = b, c.bindFramebuffer(c.FRAMEBUFFER, e), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, d, 0), e._renderTexture = d, d._frameBuffer = e, d._storeID = this._textureDictionary.length, this._textureDictionary[d._storeID] = d, c.bindFramebuffer(c.FRAMEBUFFER, null), d) : null
        }, b.setTextureParams = function (a, b) {
            b && this._antialias ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)
        }, b.setClearColor = function (a) {
            var b, c, d, e, f;
            "string" == typeof a ? 0 == a.indexOf("#") ? (4 == a.length && (a = "#" + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2) + a.charAt(3) + a.charAt(3)), b = Number("0x" + a.slice(1, 3)) / 255, c = Number("0x" + a.slice(3, 5)) / 255, d = Number("0x" + a.slice(5, 7)) / 255, e = Number("0x" + a.slice(7, 9)) / 255) : 0 == a.indexOf("rgba(") && (f = a.slice(5, -1).split(","), b = Number(f[0]) / 255, c = Number(f[1]) / 255, d = Number(f[2]) / 255, e = Number(f[3])) : (b = ((4278190080 & a) >>> 24) / 255, c = ((16711680 & a) >>> 16) / 255, d = ((65280 & a) >>> 8) / 255, e = (255 & a) / 255), this._clearColor.r = b || 0, this._clearColor.g = c || 0, this._clearColor.b = d || 0, this._clearColor.a = e || 0, this._webGLContext && this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a);
        }, b.toString = function () {
            return "[StageGL (name=" + this.name + ")]"
        }, b._fetchWebGLContext = function (a, b) {
            var c;
            try {
                c = a.getContext("webgl", b) || a.getContext("experimental-webgl", b)
            } catch (d) { }
            if (c) c.viewportWidth = a.width, c.viewportHeight = a.height;
            else {
                var e = "Could not initialize WebGL";
                console.error ? console.error(e) : console.log(e)
            }
            return c
        }, b._fetchShaderProgram = function (b, c, d, e, f) {
            b.useProgram(null);
            var g, h;
            switch (c) {
                case "filter":
                    h = a.COVER_VERTEX_HEADER + (d || a.COVER_VERTEX_BODY), g = a.COVER_FRAGMENT_HEADER + (e || a.COVER_FRAGMENT_BODY);
                    break;
                case "particle":
                    h = a.REGULAR_VERTEX_HEADER + a.PARTICLE_VERTEX_BODY, g = a.REGULAR_FRAGMENT_HEADER + a.PARTICLE_FRAGMENT_BODY;
                    break;
                case "override":
                    h = a.REGULAR_VERTEX_HEADER + (d || a.REGULAR_VERTEX_BODY), g = a.REGULAR_FRAGMENT_HEADER + (e || a.REGULAR_FRAGMENT_BODY);
                    break;
                case "regular":
                default:
                    h = a.REGULAR_VERTEX_HEADER + a.REGULAR_VERTEX_BODY, g = a.REGULAR_FRAGMENT_HEADER + a.REGULAR_FRAGMENT_BODY
            }
            var i = this._createShader(b, b.VERTEX_SHADER, h),
                j = this._createShader(b, b.FRAGMENT_SHADER, g),
                k = b.createProgram();
            if (b.attachShader(k, i), b.attachShader(k, j), b.linkProgram(k), k._type = c, !b.getProgramParameter(k, b.LINK_STATUS)) throw b.useProgram(this._activeShader), b.getProgramInfoLog(k);
            switch (b.useProgram(k), c) {
                case "filter":
                    k.vertexPositionAttribute = b.getAttribLocation(k, "vertexPosition"), b.enableVertexAttribArray(k.vertexPositionAttribute), k.uvPositionAttribute = b.getAttribLocation(k, "uvPosition"), b.enableVertexAttribArray(k.uvPositionAttribute), k.samplerUniform = b.getUniformLocation(k, "uSampler"), b.uniform1i(k.samplerUniform, 0), k.uprightUniform = b.getUniformLocation(k, "uUpright"), b.uniform1f(k.uprightUniform, 0), f && f(b, this, k);
                    break;
                case "override":
                case "particle":
                case "regular":
                default:
                    k.vertexPositionAttribute = b.getAttribLocation(k, "vertexPosition"), b.enableVertexAttribArray(k.vertexPositionAttribute), k.uvPositionAttribute = b.getAttribLocation(k, "uvPosition"), b.enableVertexAttribArray(k.uvPositionAttribute), k.textureIndexAttribute = b.getAttribLocation(k, "textureIndex"), b.enableVertexAttribArray(k.textureIndexAttribute), k.alphaAttribute = b.getAttribLocation(k, "objectAlpha"), b.enableVertexAttribArray(k.alphaAttribute);
                    for (var l = [], m = 0; m < this._batchTextureCount; m++) l[m] = m;
                    k.samplerData = l, k.samplerUniform = b.getUniformLocation(k, "uSampler"), b.uniform1iv(k.samplerUniform, l), k.pMatrixUniform = b.getUniformLocation(k, "pMatrix")
            }
            return b.useProgram(this._activeShader), k
        }, b._createShader = function (b, c, d) {
            d = d.replace(/{{count}}/g, this._batchTextureCount);
            for (var e = "", f = 1; f < this._batchTextureCount; f++) e += "} else if (indexPicker <= " + f + ".5) { color = texture2D(uSampler[" + f + "], vTextureCoord);";
            d = d.replace(/{{alternates}}/g, e), d = d.replace(/{{fragColor}}/g, this._premultiply ? a.REGULAR_FRAG_COLOR_PREMULTIPLY : a.REGULAR_FRAG_COLOR_NORMAL);
            var g = b.createShader(c);
            if (b.shaderSource(g, d), b.compileShader(g), !b.getShaderParameter(g, b.COMPILE_STATUS)) throw b.getShaderInfoLog(g);
            return g
        }, b._createBuffers = function (b) {
            var c, d, e, f = this._maxCardsPerBatch * a.INDICIES_PER_CARD,
                g = this._vertexPositionBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, g), c = 2;
            var h = this._vertices = new Float32Array(f * c);
            for (d = 0, e = h.length; e > d; d += c) h[d] = h[d + 1] = 0;
            b.bufferData(b.ARRAY_BUFFER, h, b.DYNAMIC_DRAW), g.itemSize = c, g.numItems = f;
            var i = this._uvPositionBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, i), c = 2;
            var j = this._uvs = new Float32Array(f * c);
            for (d = 0, e = j.length; e > d; d += c) j[d] = j[d + 1] = 0;
            b.bufferData(b.ARRAY_BUFFER, j, b.DYNAMIC_DRAW), i.itemSize = c, i.numItems = f;
            var k = this._textureIndexBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, k), c = 1;
            var l = this._indices = new Float32Array(f * c);
            for (d = 0, e = l.length; e > d; d++) l[d] = 0;
            b.bufferData(b.ARRAY_BUFFER, l, b.DYNAMIC_DRAW), k.itemSize = c, k.numItems = f;
            var m = this._alphaBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, m), c = 1;
            var n = this._alphas = new Float32Array(f * c);
            for (d = 0, e = n.length; e > d; d++) n[d] = 1;
            b.bufferData(b.ARRAY_BUFFER, n, b.DYNAMIC_DRAW), m.itemSize = c, m.numItems = f
        }, b._initTextures = function () {
            this._lastTextureInsert = -1, this._textureDictionary = [], this._textureIDs = {}, this._baseTextures = [], this._batchTextures = [];
            for (var a = 0; a < this._batchTextureCount; a++) {
                var b = this.getBaseTexture();
                if (this._baseTextures[a] = this._batchTextures[a] = b, !b) throw "Problems creating basic textures, known causes include using too much VRAM by not releasing WebGL texture instances"
            }
        }, b._loadTextureImage = function (a, b) {
            var c = b.src;
            c || (b._isCanvas = !0, c = b.src = "canvas_" + this._lastTrackedCanvas++);
            var d = this._textureIDs[c];
            void 0 === d && (d = this._textureIDs[c] = this._textureDictionary.length), void 0 === this._textureDictionary[d] && (this._textureDictionary[d] = this.getBaseTexture());
            var e = this._textureDictionary[d];
            if (e) e._batchID = this._batchID, e._storeID = d, e._imageData = b, this._insertTextureInBatch(a, e), b._storeID = d, b.complete || b.naturalWidth || b._isCanvas ? this._updateTextureImageData(a, b) : b.addEventListener("load", this._updateTextureImageData.bind(this, a, b));
            else {
                var f = "Problem creating desired texture, known causes include using too much VRAM by not releasing WebGL texture instances";
                console.error && console.error(f) || console.log(f), e = this._baseTextures[0], e._batchID = this._batchID, e._storeID = -1, e._imageData = e, this._insertTextureInBatch(a, e)
            }
            return e
        }, b._updateTextureImageData = function (a, b) {
            var c = b.width & b.width - 1 || b.height & b.height - 1,
                d = this._textureDictionary[b._storeID];
            a.activeTexture(a.TEXTURE0 + d._activeIndex), a.bindTexture(a.TEXTURE_2D, d), d.isPOT = !c, this.setTextureParams(a, d.isPOT);
            try {
                a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b)
            } catch (e) {
                var f = "\nAn error has occurred. This is most likely due to security restrictions on WebGL images with local or cross-domain origins";
                console.error ? (console.error(f), console.error(e)) : console && (console.log(f), console.log(e))
            }
            b._invalid = !1, d._w = b.width, d._h = b.height, this.vocalDebug && (c && console.warn("NPOT(Non Power of Two) Texture: " + b.src), (b.width > a.MAX_TEXTURE_SIZE || b.height > a.MAX_TEXTURE_SIZE) && console && console.error("Oversized Texture: " + b.width + "x" + b.height + " vs " + a.MAX_TEXTURE_SIZE + "max"))
        }, b._insertTextureInBatch = function (a, b) {
            if (this._batchTextures[b._activeIndex] !== b) {
                var c = -1,
                    d = (this._lastTextureInsert + 1) % this._batchTextureCount,
                    e = d;
                do {
                    if (this._batchTextures[e]._batchID != this._batchID && !this._slotBlacklist[e]) {
                        c = e;
                        break
                    }
                    e = (e + 1) % this._batchTextureCount
                } while (e !== d); - 1 === c && (this.batchReason = "textureOverflow", this._drawBuffers(a), this.batchCardCount = 0, c = d), this._batchTextures[c] = b, b._activeIndex = c;
                var f = b._imageData;
                f && f._invalid && void 0 !== b._drawID ? this._updateTextureImageData(a, f) : (a.activeTexture(a.TEXTURE0 + c), a.bindTexture(a.TEXTURE_2D, b), this.setTextureParams(a)), this._lastTextureInsert = c
            } else {
                var f = b._imageData;
                void 0 != b._storeID && f && f._invalid && this._updateTextureImageData(a, f)
            }
            b._drawID = this._drawID, b._batchID = this._batchID
        }, b._killTextureObject = function (a) {
            if (a) {
                var b = this._webGLContext;
                if (void 0 !== a._storeID && a._storeID >= 0) {
                    this._textureDictionary[a._storeID] = void 0;
                    for (var c in this._textureIDs) this._textureIDs[c] == a._storeID && delete this._textureIDs[c];
                    a._imageData && (a._imageData._storeID = void 0), a._imageData = a._storeID = void 0
                }
                void 0 !== a._activeIndex && this._batchTextures[a._activeIndex] === a && (this._batchTextures[a._activeIndex] = this._baseTextures[a._activeIndex]);
                try {
                    a._frameBuffer && b.deleteFramebuffer(a._frameBuffer), a._frameBuffer = void 0
                } catch (d) {
                    this.vocalDebug && console.log(d)
                }
                try {
                    b.deleteTexture(a)
                } catch (d) {
                    this.vocalDebug && console.log(d)
                }
            }
        }, b._backupBatchTextures = function (a, b) {
            var c = this._webGLContext;
            this._backupTextures || (this._backupTextures = []), void 0 === b && (b = this._backupTextures);
            for (var d = 0; d < this._batchTextureCount; d++) c.activeTexture(c.TEXTURE0 + d), a ? this._batchTextures[d] = b[d] : (b[d] = this._batchTextures[d], this._batchTextures[d] = this._baseTextures[d]), c.bindTexture(c.TEXTURE_2D, this._batchTextures[d]), this.setTextureParams(c, this._batchTextures[d].isPOT);
            a && b === this._backupTextures && (this._backupTextures = [])
        }, b._batchDraw = function (a, b, c) {
            this._isDrawing > 0 && this._drawBuffers(b), this._isDrawing++ , this._drawID++ , this.batchCardCount = 0, this.depth = 0, this._appendToBatchGroup(a, b, new createjs.Matrix2D, this.alpha, c), this.batchReason = "drawFinish", this._drawBuffers(b), this._isDrawing--
        }, b._cacheDraw = function (a, b, c, d) {
            var e, f = this._activeShader,
                g = this._slotBlacklist,
                h = this._maxTextureSlots - 1,
                i = this._viewportWidth,
                j = this._viewportHeight;
            this.protectTextureSlot(h, !0);
            var k = b.getMatrix();
            k = k.clone(), k.scale(1 / d.scale, 1 / d.scale), k = k.invert(), k.translate(-d.offX / d.scale * b.scaleX, -d.offY / d.scale * b.scaleY);
            var l = this._cacheContainer;
            l.children = [b], l.transformMatrix = k, this._backupBatchTextures(!1), c && c.length ? this._drawFilters(b, c, d) : this.isCacheControlled ? (a.clear(a.COLOR_BUFFER_BIT), this._batchDraw(l, a, !0)) : (a.activeTexture(a.TEXTURE0 + h), b.cacheCanvas = this.getTargetRenderTexture(b, d._drawWidth, d._drawHeight), e = b.cacheCanvas, a.bindFramebuffer(a.FRAMEBUFFER, e._frameBuffer), this.updateViewport(d._drawWidth, d._drawHeight), this._projectionMatrix = this._projectionMatrixFlip, a.clear(a.COLOR_BUFFER_BIT), this._batchDraw(l, a, !0), a.bindFramebuffer(a.FRAMEBUFFER, null), this.updateViewport(i, j)), this._backupBatchTextures(!0), this.protectTextureSlot(h, !1), this._activeShader = f, this._slotBlacklist = g
        }, b._drawFilters = function (a, b, c) {
            var d, e = this._webGLContext,
                f = this._maxTextureSlots - 1,
                g = this._viewportWidth,
                h = this._viewportHeight,
                i = this._cacheContainer,
                j = b.length;
            e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), this.updateViewport(c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._batchDraw(i, e, !0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, d), this.setTextureParams(e);
            var k = !1,
                l = 0,
                m = b[l];
            do this._activeShader = this.getFilterShader(m), this._activeShader && (e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), e.viewport(0, 0, c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, k), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, d), this.setTextureParams(e), (j > 1 || b[0]._multiPass) && (k = !k), m = null !== m._multiPass ? m._multiPass : b[++l]); while (m);
            this.isCacheControlled ? (e.bindFramebuffer(e.FRAMEBUFFER, null), this.updateViewport(g, h), this._activeShader = this.getFilterShader(this), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, k)) : (k && (e.activeTexture(e.TEXTURE0 + f), d = this.getTargetRenderTexture(a, c._drawWidth, c._drawHeight), e.bindFramebuffer(e.FRAMEBUFFER, d._frameBuffer), this._activeShader = this.getFilterShader(this), e.viewport(0, 0, c._drawWidth, c._drawHeight), e.clear(e.COLOR_BUFFER_BIT), this._drawCover(e, !k)), e.bindFramebuffer(e.FRAMEBUFFER, null), this.updateViewport(g, h), a.cacheCanvas = d)
        }, b._appendToBatchGroup = function (b, c, d, e, f) {
            b._glMtx || (b._glMtx = new createjs.Matrix2D);
            var g = b._glMtx;
            g.copy(d), b.transformMatrix ? g.appendMatrix(b.transformMatrix) : g.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY);
            for (var h, i, j, k, l = b.children.length, m = 0; l > m; m++) {
                var n = b.children[m];
                if (n.visible && e)
                    if (n.cacheCanvas && !f || (n._updateState && n._updateState(), !n.children)) {
                        this.batchCardCount + 1 > this._maxCardsPerBatch && (this.batchReason = "vertexOverflow", this._drawBuffers(c), this.batchCardCount = 0), n._glMtx || (n._glMtx = new createjs.Matrix2D);
                        var o = n._glMtx;
                        o.copy(g), n.transformMatrix ? o.appendMatrix(n.transformMatrix) : o.appendTransform(n.x, n.y, n.scaleX, n.scaleY, n.rotation, n.skewX, n.skewY, n.regX, n.regY);
                        var p, q, r, s, t, u, v = n.cacheCanvas && !f;
                        if (2 === n._webGLRenderStyle || v) r = (f ? !1 : n.cacheCanvas) || n.image;
                        else {
                            if (1 !== n._webGLRenderStyle) continue;
                            if (s = n.spriteSheet.getFrame(n.currentFrame), null === s) continue;
                            r = s.image
                        }
                        var w = this._uvs,
                            x = this._vertices,
                            y = this._indices,
                            z = this._alphas;
                        if (r) {
                            if (void 0 === r._storeID) t = this._loadTextureImage(c, r), this._insertTextureInBatch(c, t);
                            else {
                                if (t = this._textureDictionary[r._storeID], !t) {
                                    this.vocalDebug && console.log("Texture should not be looked up while not being stored.");
                                    continue
                                }
                                t._batchID !== this._batchID && this._insertTextureInBatch(c, t)
                            }
                            if (q = t._activeIndex, 2 === n._webGLRenderStyle || v) !v && n.sourceRect ? (n._uvRect || (n._uvRect = {}), u = n.sourceRect, p = n._uvRect, p.t = u.y / r.height, p.l = u.x / r.width, p.b = (u.y + u.height) / r.height, p.r = (u.x + u.width) / r.width, h = 0, i = 0, j = u.width + h, k = u.height + i) : (p = a.UV_RECT, v ? (u = n.bitmapCache, h = u.x + u._filterOffX / u.scale, i = u.y + u._filterOffY / u.scale, j = u._drawWidth / u.scale + h, k = u._drawHeight / u.scale + i) : (h = 0, i = 0, j = r.width + h, k = r.height + i));
                            else if (1 === n._webGLRenderStyle) {
                                var A = s.rect;
                                p = s.uvRect, p || (p = a.buildUVRects(n.spriteSheet, n.currentFrame, !1)), h = -s.regX, i = -s.regY, j = A.width - s.regX, k = A.height - s.regY
                            }
                            var B = this.batchCardCount * a.INDICIES_PER_CARD,
                                C = 2 * B;
                            x[C] = h * o.a + i * o.c + o.tx, x[C + 1] = h * o.b + i * o.d + o.ty, x[C + 2] = h * o.a + k * o.c + o.tx, x[C + 3] = h * o.b + k * o.d + o.ty, x[C + 4] = j * o.a + i * o.c + o.tx, x[C + 5] = j * o.b + i * o.d + o.ty, x[C + 6] = x[C + 2], x[C + 7] = x[C + 3], x[C + 8] = x[C + 4], x[C + 9] = x[C + 5], x[C + 10] = j * o.a + k * o.c + o.tx, x[C + 11] = j * o.b + k * o.d + o.ty, w[C] = p.l, w[C + 1] = p.t, w[C + 2] = p.l, w[C + 3] = p.b, w[C + 4] = p.r, w[C + 5] = p.t, w[C + 6] = p.l, w[C + 7] = p.b, w[C + 8] = p.r, w[C + 9] = p.t, w[C + 10] = p.r, w[C + 11] = p.b, y[B] = y[B + 1] = y[B + 2] = y[B + 3] = y[B + 4] = y[B + 5] = q, z[B] = z[B + 1] = z[B + 2] = z[B + 3] = z[B + 4] = z[B + 5] = n.alpha * e, this.batchCardCount++
                        }
                    } else this._appendToBatchGroup(n, c, g, n.alpha * e)
            }
        }, b._drawBuffers = function (b) {
            if (!(this.batchCardCount <= 0)) {
                this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
                var c = this._activeShader,
                    d = this._vertexPositionBuffer,
                    e = this._textureIndexBuffer,
                    f = this._uvPositionBuffer,
                    g = this._alphaBuffer;
                b.useProgram(c), b.bindBuffer(b.ARRAY_BUFFER, d), b.vertexAttribPointer(c.vertexPositionAttribute, d.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._vertices), b.bindBuffer(b.ARRAY_BUFFER, e), b.vertexAttribPointer(c.textureIndexAttribute, e.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._indices), b.bindBuffer(b.ARRAY_BUFFER, f), b.vertexAttribPointer(c.uvPositionAttribute, f.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._uvs), b.bindBuffer(b.ARRAY_BUFFER, g), b.vertexAttribPointer(c.alphaAttribute, g.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, this._alphas), b.uniformMatrix4fv(c.pMatrixUniform, b.FALSE, this._projectionMatrix);
                for (var h = 0; h < this._batchTextureCount; h++) {
                    var i = this._batchTextures[h];
                    b.activeTexture(b.TEXTURE0 + h), b.bindTexture(b.TEXTURE_2D, i), this.setTextureParams(b, i.isPOT)
                }
                b.drawArrays(b.TRIANGLES, 0, this.batchCardCount * a.INDICIES_PER_CARD), this._batchID++
            }
        }, b._drawCover = function (b, c) {
            this._isDrawing > 0 && this._drawBuffers(b), this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : Cover");
            var d = this._activeShader,
                e = this._vertexPositionBuffer,
                f = this._uvPositionBuffer;
            b.clear(b.COLOR_BUFFER_BIT), b.useProgram(d), b.bindBuffer(b.ARRAY_BUFFER, e), b.vertexAttribPointer(d.vertexPositionAttribute, e.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, a.COVER_VERT), b.bindBuffer(b.ARRAY_BUFFER, f), b.vertexAttribPointer(d.uvPositionAttribute, f.itemSize, b.FLOAT, !1, 0, 0), b.bufferSubData(b.ARRAY_BUFFER, 0, c ? a.COVER_UV_FLIP : a.COVER_UV), b.uniform1i(d.samplerUniform, 0), b.uniform1f(d.uprightUniform, c ? 0 : 1), b.drawArrays(b.TRIANGLES, 0, a.INDICIES_PER_CARD)
        }, createjs.StageGL = createjs.promote(a, "Stage")
    }(), this.createjs = this.createjs || {},
    function () {
        function a(a) {
            this.DisplayObject_constructor(), "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a, this.sourceRect = null, this._webGLRenderStyle = createjs.DisplayObject._StageGL_BITMAP
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.initialize = a, b.isVisible = function () {
            var a = this.image,
                b = this.cacheCanvas || a && (a.naturalWidth || a.getContext || a.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && b)
        }, b.draw = function (a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.image,
                d = this.sourceRect;
            if (c.getImage && (c = c.getImage()), !c) return !0;
            if (d) {
                var e = d.x,
                    f = d.y,
                    g = e + d.width,
                    h = f + d.height,
                    i = 0,
                    j = 0,
                    k = c.width,
                    l = c.height;
                0 > e && (i -= e, e = 0), g > k && (g = k), 0 > f && (j -= f, f = 0), h > l && (h = l), a.drawImage(c, e, f, g - e, h - f, i, j, g - e, h - f)
            } else a.drawImage(c, 0, 0);
            return !0
        }, b.getBounds = function () {
            var a = this.DisplayObject_getBounds();
            if (a) return a;
            var b = this.image,
                c = this.sourceRect || b,
                d = b && (b.naturalWidth || b.getContext || b.readyState >= 2);
            return d ? this._rectangle.setValues(0, 0, c.width, c.height) : null
        }, b.clone = function (b) {
            var c = this.image;
            c && b && (c = c.cloneNode());
            var d = new a(c);
            return this.sourceRect && (d.sourceRect = this.sourceRect.clone()), this._cloneProps(d), d
        }, b.toString = function () {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = a, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, this._webGLRenderStyle = createjs.DisplayObject._StageGL_SPRITE, null != b && this.gotoAndPlay(b)
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.initialize = a, b.isVisible = function () {
            var a = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function (a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            this._normalizeFrame();
            var c = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!c) return !1;
            var d = c.rect;
            return d.width && d.height && a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0
        }, b.play = function () {
            this.paused = !1
        }, b.stop = function () {
            this.paused = !0
        }, b.gotoAndPlay = function (a) {
            this.paused = !1, this._skipAdvance = !0, this._goto(a)
        }, b.gotoAndStop = function (a) {
            this.paused = !0, this._goto(a)
        }, b.advance = function (a) {
            var b = this.framerate || this.spriteSheet.framerate,
                c = b && null != a ? a / (1e3 / b) : 1;
            this._normalizeFrame(c)
        }, b.getBounds = function () {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, b.clone = function () {
            return this._cloneProps(new a(this.spriteSheet))
        }, b.toString = function () {
            return "[Sprite (name=" + this.name + ")]"
        }, b._cloneProps = function (a) {
            return this.DisplayObject__cloneProps(a), a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate, a._animation = this._animation, a._currentFrame = this._currentFrame, a._skipAdvance = this._skipAdvance, a
        }, b._tick = function (a) {
            this.paused || (this._skipAdvance || this.advance(a && a.delta), this._skipAdvance = !1), this.DisplayObject__tick(a)
        }, b._normalizeFrame = function (a) {
            a = a || 0;
            var b, c = this._animation,
                d = this.paused,
                e = this._currentFrame;
            if (c) {
                var f = c.speed || 1,
                    g = this.currentAnimationFrame;
                if (b = c.frames.length, g + a * f >= b) {
                    var h = c.next;
                    if (this._dispatchAnimationEnd(c, e, d, h, b - 1)) return;
                    if (h) return this._goto(h, a - (b - g) / f);
                    this.paused = !0, g = c.frames.length - 1
                } else g += a * f;
                this.currentAnimationFrame = g, this._currentFrame = c.frames[0 | g]
            } else if (e = this._currentFrame += a, b = this.spriteSheet.getNumFrames(), e >= b && b > 0 && !this._dispatchAnimationEnd(c, e, d, b - 1) && (this._currentFrame -= b) >= b) return this._normalizeFrame();
            e = 0 | this._currentFrame, this.currentFrame != e && (this.currentFrame = e, this.dispatchEvent("change"))
        }, b._dispatchAnimationEnd = function (a, b, c, d, e) {
            var f = a ? a.name : null;
            if (this.hasEventListener("animationend")) {
                var g = new createjs.Event("animationend");
                g.name = f, g.next = d, this.dispatchEvent(g)
            }
            var h = this._animation != a || this._currentFrame != b;
            return h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h
        }, b._goto = function (a, b) {
            if (this.currentAnimationFrame = 0, isNaN(a)) {
                var c = this.spriteSheet.getAnimation(a);
                c && (this._animation = c, this.currentAnimation = a, this._normalizeFrame(b))
            } else this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
        }, createjs.Sprite = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.DisplayObject_constructor(), this.graphics = a ? a : new createjs.Graphics
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.isVisible = function () {
            var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function (a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a, this), !0)
        }, b.clone = function (b) {
            var c = b && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new a(c))
        }, b.toString = function () {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.DisplayObject_constructor(), this.text = a, this.font = b, this.color = c, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
        }
        var b = createjs.extend(a, createjs.DisplayObject),
            c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, a.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, b.isVisible = function () {
            var a = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
        }, b.draw = function (a, b) {
            if (this.DisplayObject_draw(a, b)) return !0;
            var c = this.color || "#000";
            return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
        }, b.getMeasuredWidth = function () {
            return this._getMeasuredWidth(this.text)
        }, b.getMeasuredLineHeight = function () {
            return 1.2 * this._getMeasuredWidth("M")
        }, b.getMeasuredHeight = function () {
            return this._drawText(null, {}).height
        }, b.getBounds = function () {
            var b = this.DisplayObject_getBounds();
            if (b) return b;
            if (null == this.text || "" === this.text) return null;
            var c = this._drawText(null, {}),
                d = this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
                e = d * a.H_OFFSETS[this.textAlign || "left"],
                f = this.lineHeight || this.getMeasuredLineHeight(),
                g = f * a.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(e, g, d, c.height)
        }, b.getMetrics = function () {
            var b = {
                lines: []
            };
            return b.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), b.vOffset = b.lineHeight * a.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, b, b.lines)
        }, b.clone = function () {
            return this._cloneProps(new a(this.text, this.font, this.color))
        }, b.toString = function () {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, b._cloneProps = function (a) {
            return this.DisplayObject__cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth, a
        }, b._prepContext = function (a) {
            return a.font = this.font || "10px sans-serif", a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a.lineJoin = "miter", a.miterLimit = 2.5, a
        }, b._drawText = function (b, c, d) {
            var e = !!b;
            e || (b = a._workingContext, b.save(), this._prepContext(b));
            for (var f = this.lineHeight || this.getMeasuredLineHeight(), g = 0, h = 0, i = String(this.text).split(/(?:\r\n|\r|\n)/), j = 0, k = i.length; k > j; j++) {
                var l = i[j],
                    m = null;
                if (null != this.lineWidth && (m = b.measureText(l).width) > this.lineWidth) {
                    var n = l.split(/(\s)/);
                    l = n[0], m = b.measureText(l).width;
                    for (var o = 1, p = n.length; p > o; o += 2) {
                        var q = b.measureText(n[o] + n[o + 1]).width;
                        m + q > this.lineWidth ? (e && this._drawTextLine(b, l, h * f), d && d.push(l), m > g && (g = m), l = n[o + 1], m = b.measureText(l).width, h++) : (l += n[o] + n[o + 1], m += q)
                    }
                }
                e && this._drawTextLine(b, l, h * f), d && d.push(l), c && null == m && (m = b.measureText(l).width), m > g && (g = m), h++
            }
            return c && (c.width = g, c.height = h * f), e || b.restore(), c
        }, b._drawTextLine = function (a, b, c) {
            this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
        }, b._getMeasuredWidth = function (b) {
            var c = a._workingContext;
            c.save();
            var d = this._prepContext(c).measureText(b).width;
            return c.restore(), d
        }, createjs.Text = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.Container_constructor(), this.text = a || "", this.spriteSheet = b, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
                text: 0,
                spriteSheet: 0,
                lineHeight: 0,
                letterSpacing: 0,
                spaceWidth: 0
            }, this._oldStage = null, this._drawAction = null
        }
        var b = createjs.extend(a, createjs.Container);
        a.maxPoolSize = 100, a._spritePool = [], b.draw = function (a, b) {
            this.DisplayObject_draw(a, b) || (this._updateState(), this.Container_draw(a, b))
        }, b.getBounds = function () {
            return this._updateText(), this.Container_getBounds()
        }, b.isVisible = function () {
            var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && a)
        }, b.clone = function () {
            return this._cloneProps(new a(this.text, this.spriteSheet))
        }, b.addChild = b.addChildAt = b.removeChild = b.removeChildAt = b.removeAllChildren = function () { }, b._updateState = function () {
            this._updateText()
        }, b._cloneProps = function (a) {
            return this.Container__cloneProps(a), a.lineHeight = this.lineHeight, a.letterSpacing = this.letterSpacing, a.spaceWidth = this.spaceWidth, a
        }, b._getFrameIndex = function (a, b) {
            var c, d = b.getAnimation(a);
            return d || (a != (c = a.toUpperCase()) || a != (c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && d.frames[0]
        }, b._getFrame = function (a, b) {
            var c = this._getFrameIndex(a, b);
            return null == c ? c : b.getFrame(c)
        }, b._getLineHeight = function (a) {
            var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);
            return b ? b.rect.height : 1
        }, b._getSpaceWidth = function (a) {
            var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);
            return b ? b.rect.width : 1
        }, b._updateText = function () {
            var b, c = 0,
                d = 0,
                e = this._oldProps,
                f = !1,
                g = this.spaceWidth,
                h = this.lineHeight,
                i = this.spriteSheet,
                j = a._spritePool,
                k = this.children,
                l = 0,
                m = k.length;
            for (var n in e) e[n] != this[n] && (e[n] = this[n], f = !0);
            if (f) {
                var o = !!this._getFrame(" ", i);
                o || g || (g = this._getSpaceWidth(i)), h || (h = this._getLineHeight(i));
                for (var p = 0, q = this.text.length; q > p; p++) {
                    var r = this.text.charAt(p);
                    if (" " != r || o)
                        if ("\n" != r && "\r" != r) {
                            var s = this._getFrameIndex(r, i);
                            null != s && (m > l ? b = k[l] : (k.push(b = j.length ? j.pop() : new createjs.Sprite), b.parent = this, m++), b.spriteSheet = i, b.gotoAndStop(s), b.x = c, b.y = d, l++ , c += b.getBounds().width + this.letterSpacing)
                        } else "\r" == r && "\n" == this.text.charAt(p + 1) && p++ , c = 0, d += h;
                    else c += g
                }
                for (; m > l;) j.push(b = k.pop()), b.parent = null, m--;
                j.length > a.maxPoolSize && (j.length = a.maxPoolSize)
            }
        }, createjs.BitmapText = createjs.promote(a, "Container")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(b) {
            this.Container_constructor(), !a.inited && a.init();
            var c, d, e, f;
            b instanceof String || arguments.length > 1 ? (c = b, d = arguments[1], e = arguments[2], f = arguments[3], null == e && (e = -1), b = null) : b && (c = b.mode, d = b.startPosition, e = b.loop, f = b.labels), b || (b = {
                labels: f
            }), this.mode = c || a.INDEPENDENT, this.startPosition = d || 0, this.loop = e === !0 ? -1 : e || 0, this.currentFrame = 0, this.paused = b.paused || !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || b.frameBounds, this.framerate = null, b.useTicks = b.paused = !0, this.timeline = new createjs.Timeline(b), this._synchOffset = 0, this._rawPosition = -1, this._bound_resolveState = this._resolveState.bind(this), this._t = 0, this._managed = {}
        }

        function b() {
            throw "MovieClipPlugin cannot be instantiated."
        }
        var c = createjs.extend(a, createjs.Container);
        a.INDEPENDENT = "independent", a.SINGLE_FRAME = "single", a.SYNCHED = "synched", a.inited = !1, a.init = function () {
            a.inited || (b.install(), a.inited = !0)
        }, c._getLabels = function () {
            return this.timeline.getLabels()
        }, c.getLabels = createjs.deprecate(c._getLabels, "MovieClip.getLabels"), c._getCurrentLabel = function () {
            return this.timeline.currentLabel
        }, c.getCurrentLabel = createjs.deprecate(c._getCurrentLabel, "MovieClip.getCurrentLabel"), c._getDuration = function () {
            return this.timeline.duration
        }, c.getDuration = createjs.deprecate(c._getDuration, "MovieClip.getDuration");
        try {
            Object.defineProperties(c, {
                labels: {
                    get: c._getLabels
                },
                currentLabel: {
                    get: c._getCurrentLabel
                },
                totalFrames: {
                    get: c._getDuration
                },
                duration: {
                    get: c._getDuration
                }
            })
        } catch (d) { }
        c.initialize = a, c.isVisible = function () {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, c.draw = function (a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this._updateState(), this.Container_draw(a, b), !0)
        }, c.play = function () {
            this.paused = !1
        }, c.stop = function () {
            this.paused = !0
        }, c.gotoAndPlay = function (a) {
            this.paused = !1, this._goto(a)
        }, c.gotoAndStop = function (a) {
            this.paused = !0, this._goto(a)
        }, c.advance = function (b) {
            var c = a.INDEPENDENT;
            if (this.mode === c) {
                for (var d = this, e = d.framerate;
                    (d = d.parent) && null === e;) d.mode === c && (e = d._framerate);
                if (this._framerate = e, !this.paused) {
                    var f = null !== e && -1 !== e && null !== b ? b / (1e3 / e) + this._t : 1,
                        g = 0 | f;
                    for (this._t = f - g; g--;) this._updateTimeline(this._rawPosition + 1, !1)
                }
            }
        }, c.clone = function () {
            throw "MovieClip cannot be cloned."
        }, c.toString = function () {
            return "[MovieClip (name=" + this.name + ")]"
        }, c._updateState = function () {
            (-1 === this._rawPosition || this.mode !== a.INDEPENDENT) && this._updateTimeline(-1)
        }, c._tick = function (a) {
            this.advance(a && a.delta), this.Container__tick(a)
        }, c._goto = function (a) {
            var b = this.timeline.resolve(a);
            null != b && (this._t = 0, this._updateTimeline(b, !0))
        }, c._reset = function () {
            this._rawPosition = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, c._updateTimeline = function (b, c) {
            var d = this.mode !== a.INDEPENDENT,
                e = this.timeline;
            d && (b = this.startPosition + (this.mode === a.SINGLE_FRAME ? 0 : this._synchOffset)), 0 > b && (b = 0), (this._rawPosition !== b || d) && (this._rawPosition = b, e.loop = this.loop, e.setPosition(b, d || !this.actionsEnabled, c, this._bound_resolveState))
        }, c._renderFirstFrame = function () {
            var a = this.timeline,
                b = a.rawPosition;
            a.setPosition(0, !0, !0, this._bound_resolveState), a.rawPosition = b
        }, c._resolveState = function () {
            var a = this.timeline;
            this.currentFrame = a.position;
            for (var b in this._managed) this._managed[b] = 1;
            for (var c = a.tweens, d = 0, e = c.length; e > d; d++) {
                var f = c[d],
                    g = f.target;
                if (g !== this && !f.passive) {
                    var h = f._stepPosition;
                    g instanceof createjs.DisplayObject ? this._addManagedChild(g, h) : this._setState(g.state, h)
                }
            }
            var i = this.children;
            for (d = i.length - 1; d >= 0; d--) {
                var j = i[d].id;
                1 === this._managed[j] && (this.removeChildAt(d), delete this._managed[j])
            }
        }, c._setState = function (a, b) {
            if (a)
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c],
                        e = d.t,
                        f = d.p;
                    for (var g in f) e[g] = f[g];
                    this._addManagedChild(e, b)
                }
        }, c._addManagedChild = function (b, c) {
            b._off || (this.addChildAt(b, 0), b instanceof a && (b._synchOffset = c, b.mode === a.INDEPENDENT && b.autoReset && !this._managed[b.id] && b._reset()), this._managed[b.id] = 2)
        }, c._getBounds = function (a, b) {
            var c = this.DisplayObject_getBounds();
            return c || this.frameBounds && (c = this._rectangle.copy(this.frameBounds[this.currentFrame])), c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
        }, createjs.MovieClip = createjs.promote(a, "Container"), b.priority = 100, b.ID = "MovieClip", b.install = function () {
            createjs.Tween._installPlugin(b)
        }, b.init = function (c, d, e) {
            "startPosition" === d && c.target instanceof a && c._addPlugin(b)
        }, b.step = function (a, b, c) { }, b.change = function (a, b, c, d, e, f) {
            return "startPosition" === c ? 1 === e ? b.props[c] : b.prev.props[c] : void 0
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "SpriteSheetUtils cannot be instantiated"
        }
        var b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.extractFrame = function (b, c) {
            isNaN(c) && (c = b.getAnimation(c).frames[0]);
            var d = b.getFrame(c);
            if (!d) return null;
            var e = d.rect,
                f = a._workingCanvas;
            f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
            var g = document.createElement("img");
            return g.src = f.toDataURL("image/png"), g
        }, a.addFlippedFrames = createjs.deprecate(null, "SpriteSheetUtils.addFlippedFrames"), a.mergeAlpha = createjs.deprecate(null, "SpriteSheetUtils.mergeAlpha"), a._flip = function (b, c, d, e) {
            for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
                var k = f[j];
                k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
                var l = document.createElement("img");
                l.src = g.toDataURL("image/png"), l.width = k.width || k.naturalWidth, l.height = k.height || k.naturalHeight,
                    f.push(l)
            }
            var m = b._frames,
                n = m.length / c;
            for (j = 0; n > j; j++) {
                k = m[j];
                var o = k.rect.clone();
                l = f[k.image.__tmp + i * c];
                var p = {
                    image: l,
                    rect: o,
                    regX: k.regX,
                    regY: k.regY
                };
                d && (o.x = (l.width || l.naturalWidth) - o.x - o.width, p.regX = o.width - k.regX), e && (o.y = (l.height || l.naturalHeight) - o.y - o.height, p.regY = o.height - k.regY), m.push(p)
            }
            var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
                r = b._animations,
                s = b._data,
                t = r.length / c;
            for (j = 0; t > j; j++) {
                var u = r[j];
                k = s[u];
                var v = {
                    name: u + q,
                    speed: k.speed,
                    next: k.next,
                    frames: []
                };
                k.next && (v.next += q), m = k.frames;
                for (var w = 0, x = m.length; x > w; w++) v.frames.push(m[w] + n * c);
                s[v.name] = v, r.push(v.name)
            }
        }, createjs.SpriteSheetUtils = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = a || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.addFrame = function (b, c, d, e, f) {
            if (this._data) throw a.ERR_RUNNING;
            var g = c || b.bounds || b.nominalBounds;
            return !g && b.getBounds && (g = b.getBounds()), g ? (d = d || 1, this._frames.push({
                source: b,
                sourceRect: g,
                scale: d,
                funct: e,
                data: f,
                index: this._frames.length,
                height: g.height * d
            }) - 1) : null
        }, b.addAnimation = function (b, c, d, e) {
            if (this._data) throw a.ERR_RUNNING;
            this._animations[b] = {
                frames: c,
                next: d,
                speed: e
            }
        }, b.addMovieClip = function (b, c, d, e, f, g) {
            if (this._data) throw a.ERR_RUNNING;
            var h = b.frameBounds,
                i = c || b.bounds || b.nominalBounds;
            if (!i && b.getBounds && (i = b.getBounds()), i || h) {
                var j, k, l = this._frames.length,
                    m = b.timeline.duration;
                for (j = 0; m > j; j++) {
                    var n = h && h[j] ? h[j] : i;
                    this.addFrame(b, n, d, this._setupMovieClipFrame, {
                        i: j,
                        f: e,
                        d: f
                    })
                }
                var o = b.timeline._labels,
                    p = [];
                for (var q in o) p.push({
                    index: o[q],
                    label: q
                });
                if (p.length)
                    for (p.sort(function (a, b) {
                        return a.index - b.index
                    }), j = 0, k = p.length; k > j; j++) {
                        for (var r = p[j].label, s = l + p[j].index, t = l + (j == k - 1 ? m : p[j + 1].index), u = [], v = s; t > v; v++) u.push(v);
                        (!g || (r = g(r, b, s, t))) && this.addAnimation(r, u, !0)
                    }
            }
        }, b.build = function () {
            if (this._data) throw a.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, b.buildAsync = function (b) {
            if (this._data) throw a.ERR_RUNNING;
            this.timeSlice = b, this._startBuild();
            var c = this;
            this._timerID = setTimeout(function () {
                c._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, b.stopAsync = function () {
            clearTimeout(this._timerID), this._data = null
        }, b.clone = function () {
            throw "SpriteSheetBuilder cannot be cloned."
        }, b.toString = function () {
            return "[SpriteSheetBuilder]"
        }, b._startBuild = function () {
            var b = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var c = [];
            this._data = {
                images: [],
                frames: c,
                framerate: this.framerate,
                animations: this._animations
            };
            var d = this._frames.slice();
            if (d.sort(function (a, b) {
                return a.height <= b.height ? -1 : 1
            }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;
            for (var e = 0, f = 0, g = 0; d.length;) {
                var h = this._fillRow(d, e, g, c, b);
                if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
                    var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++)
                }
            }
        }, b._setupMovieClipFrame = function (a, b) {
            var c = a.actionsEnabled;
            a.actionsEnabled = !1, a.gotoAndStop(b.i), a.actionsEnabled = c, b.f && b.f(a, b.d, b.i)
        }, b._getSize = function (a, b) {
            for (var c = 4; Math.pow(2, ++c) < a;);
            return Math.min(b, Math.pow(2, c))
        }, b._fillRow = function (b, c, d, e, f) {
            var g = this.maxWidth,
                h = this.maxHeight;
            c += f;
            for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
                var m = b[l],
                    n = this._scale * m.scale,
                    o = m.sourceRect,
                    p = m.source,
                    q = Math.floor(n * o.x - f),
                    r = Math.floor(n * o.y - f),
                    s = Math.ceil(n * o.height + 2 * f),
                    t = Math.ceil(n * o.width + 2 * f);
                if (t > g) throw a.ERR_DIMENSIONS;
                s > i || j + t > g || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t)
            }
            return {
                w: j,
                h: k
            }
        }, b._endBuild = function () {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, b._run = function () {
            for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = (new Date).getTime() + a, c = !1; b > (new Date).getTime();)
                if (!this._drawNext()) {
                    c = !0;
                    break
                }
            if (c) this._endBuild();
            else {
                var d = this;
                this._timerID = setTimeout(function () {
                    d._run()
                }, 50 - a)
            }
            var e = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var f = new createjs.Event("progress");
                f.progress = e, this.dispatchEvent(f)
            }
        }, b._drawNext = function () {
            var a = this._frames[this._index],
                b = a.scale * this._scale,
                c = a.rect,
                d = a.sourceRect,
                e = this._data.images[a.img],
                f = e.getContext("2d");
            return a.funct && a.funct(a.source, a.data), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.DisplayObject_constructor(), "string" == typeof a && (a = document.getElementById(a)), this.mouseEnabled = !1;
            var b = a.style;
            b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%", this.htmlElement = a, this._oldProps = null, this._oldStage = null, this._drawAction = null
        }
        var b = createjs.extend(a, createjs.DisplayObject);
        b.isVisible = function () {
            return null != this.htmlElement
        }, b.draw = function (a, b) {
            return !0
        }, b.cache = function () { }, b.uncache = function () { }, b.updateCache = function () { }, b.hitTest = function () { }, b.localToGlobal = function () { }, b.globalToLocal = function () { }, b.localToLocal = function () { }, b.clone = function () {
            throw "DOMElement cannot be cloned."
        }, b.toString = function () {
            return "[DOMElement (name=" + this.name + ")]"
        }, b._tick = function (a) {
            var b = this.stage;
            b && b !== this._oldStage && (this._drawAction && b.off("drawend", this._drawAction), this._drawAction = b.on("drawend", this._handleDrawEnd, this), this._oldStage = b), this.DisplayObject__tick(a)
        }, b._handleDrawEnd = function (a) {
            var b = this.htmlElement;
            if (b) {
                var c = b.style,
                    d = this.getConcatenatedDisplayProps(this._props),
                    e = d.matrix,
                    f = d.visible ? "visible" : "hidden";
                if (f != c.visibility && (c.visibility = f), d.visible) {
                    var g = this._oldProps,
                        h = g && g.matrix,
                        i = 1e4;
                    if (!h || !h.equals(e)) {
                        var j = "matrix(" + (e.a * i | 0) / i + "," + (e.b * i | 0) / i + "," + (e.c * i | 0) / i + "," + (e.d * i | 0) / i + "," + (e.tx + .5 | 0);
                        c.transform = c.WebkitTransform = c.OTransform = c.msTransform = j + "," + (e.ty + .5 | 0) + ")", c.MozTransform = j + "px," + (e.ty + .5 | 0) + "px)", g || (g = this._oldProps = new createjs.DisplayProps(!0, null)), g.matrix.copy(e)
                    }
                    g.alpha != d.alpha && (c.opacity = "" + (d.alpha * i | 0) / i, g.alpha = d.alpha)
                }
            }
        }, createjs.DOMElement = createjs.promote(a, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.usesContext = !1, this._multiPass = null, this.VTX_SHADER_BODY = null, this.FRAG_SHADER_BODY = null
        }
        var b = a.prototype;
        b.getBounds = function (a) {
            return a
        }, b.shaderParamSetup = function (a, b, c) { }, b.applyFilter = function (a, b, c, d, e, f, g, h) {
            f = f || a, null == g && (g = b), null == h && (h = c);
            try {
                var i = a.getImageData(b, c, d, e)
            } catch (j) {
                return !1
            }
            return this._applyFilter(i) ? (f.putImageData(i, g, h), !0) : !1
        }, b.toString = function () {
            return "[Filter]"
        }, b.clone = function () {
            return new a
        }, b._applyFilter = function (a) {
            return !0
        }, createjs.Filter = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.width = void 0, this.height = void 0, this.x = void 0, this.y = void 0, this.scale = 1, this.offX = 0, this.offY = 0, this.cacheID = 0, this._filterOffX = 0, this._filterOffY = 0, this._cacheDataURLID = 0, this._cacheDataURL = null, this._drawWidth = 0, this._drawHeight = 0
        }
        var b = a.prototype;
        a.getFilterBounds = function (a, b) {
            b || (b = new createjs.Rectangle);
            var c = a.filters,
                d = c && c.length;
            if (0 >= !!d) return b;
            for (var e = 0; d > e; e++) {
                var f = c[e];
                if (f && f.getBounds) {
                    var g = f.getBounds();
                    g && (0 == e ? b.setValues(g.x, g.y, g.width, g.height) : b.extend(g.x, g.y, g.width, g.height))
                }
            }
            return b
        }, b.toString = function () {
            return "[BitmapCache]"
        }, b.define = function (a, b, c, d, e, f, g) {
            if (!a) throw "No symbol to cache";
            this._options = g, this.target = a, this.width = d >= 1 ? d : 1, this.height = e >= 1 ? e : 1, this.x = b || 0, this.y = c || 0, this.scale = f || 1, this.update()
        }, b.update = function (b) {
            if (!this.target) throw "define() must be called before update()";
            var c = a.getFilterBounds(this.target),
                d = this.target.cacheCanvas;
            this._drawWidth = Math.ceil(this.width * this.scale) + c.width, this._drawHeight = Math.ceil(this.height * this.scale) + c.height, d && this._drawWidth == d.width && this._drawHeight == d.height || this._updateSurface(), this._filterOffX = c.x, this._filterOffY = c.y, this.offX = this.x * this.scale + this._filterOffX, this.offY = this.y * this.scale + this._filterOffY, this._drawToCache(b), this.cacheID = this.cacheID ? this.cacheID + 1 : 1
        }, b.release = function () {
            if (this._webGLCache) this._webGLCache.isCacheControlled || (this.__lastRT && (this.__lastRT = void 0), this.__rtA && this._webGLCache._killTextureObject(this.__rtA), this.__rtB && this._webGLCache._killTextureObject(this.__rtB), this.target && this.target.cacheCanvas && this._webGLCache._killTextureObject(this.target.cacheCanvas)), this._webGLCache = !1;
            else {
                var a = this.target.stage;
                a instanceof createjs.StageGL && a.releaseTexture(this.target.cacheCanvas)
            }
            this.target = this.target.cacheCanvas = null, this.cacheID = this._cacheDataURLID = this._cacheDataURL = void 0, this.width = this.height = this.x = this.y = this.offX = this.offY = 0, this.scale = 1
        }, b.getCacheDataURL = function () {
            var a = this.target && this.target.cacheCanvas;
            return a ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURLID = this.cacheID, this._cacheDataURL = a.toDataURL ? a.toDataURL() : null), this._cacheDataURL) : null
        }, b.draw = function (a) {
            return this.target ? (a.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale), !0) : !1
        }, b._updateSurface = function () {
            if (!this._options || !this._options.useGL) {
                var a = this.target.cacheCanvas;
                return a || (a = this.target.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), a.width = this._drawWidth, void (a.height = this._drawHeight)
            }
            if (!this._webGLCache)
                if ("stage" === this._options.useGL) {
                    if (!this.target.stage || !this.target.stage.isWebGL) {
                        var b = "Cannot use 'stage' for cache because the object's parent stage is ";
                        throw b += this.target.stage ? "non WebGL." : "not set, please addChild to the correct stage."
                    }
                    this.target.cacheCanvas = !0, this._webGLCache = this.target.stage
                } else if ("new" === this._options.useGL) this.target.cacheCanvas = document.createElement("canvas"), this._webGLCache = new createjs.StageGL(this.target.cacheCanvas, {
                    antialias: !0,
                    transparent: !0,
                    autoPurge: -1
                }), this._webGLCache.isCacheControlled = !0;
                else {
                    if (!(this._options.useGL instanceof createjs.StageGL)) throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
                    this.target.cacheCanvas = !0, this._webGLCache = this._options.useGL, this._webGLCache.isCacheControlled = !0
                }
            var a = this.target.cacheCanvas,
                c = this._webGLCache;
            c.isCacheControlled && (a.width = this._drawWidth, a.height = this._drawHeight, c.updateViewport(this._drawWidth, this._drawHeight)), this.target.filters ? (c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight), c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)) : c.isCacheControlled || c.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)
        }, b._drawToCache = function (a) {
            var b = this.target.cacheCanvas,
                c = this.target,
                d = this._webGLCache;
            if (d) d.cacheDraw(c, c.filters, this), b = this.target.cacheCanvas, b.width = this._drawWidth, b.height = this._drawHeight;
            else {
                var e = b.getContext("2d");
                a || e.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1), e.save(), e.globalCompositeOperation = a, e.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY), e.translate(-this.x, -this.y), c.draw(e, !0), e.restore(), c.filters && c.filters.length && this._applyFilters(e)
            }
            b._invalid = !0
        }, b._applyFilters = function (a) {
            var b, c = this.target.filters,
                d = this._drawWidth,
                e = this._drawHeight,
                f = 0,
                g = c[f];
            do g.usesContext ? (b && (a.putImageData(b, 0, 0), b = null), g.applyFilter(a, 0, 0, d, e)) : (b || (b = a.getImageData(0, 0, d, e)), g._applyFilter(b)), g = null !== g._multiPass ? g._multiPass : c[++f]; while (g);
            b && a.putImageData(b, 0, 0)
        }, createjs.BitmapCache = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.Filter_constructor(), this._blurX = a, this._blurXTable = [], this._lastBlurX = null, this._blurY = b, this._blurYTable = [], this._lastBlurY = null, this._quality, this._lastQuality = null, this.FRAG_SHADER_TEMPLATE = "uniform float xWeight[{{blurX}}];uniform float yWeight[{{blurY}}];uniform vec2 textureOffset;void main(void) {vec4 color = vec4(0.0);float xAdj = ({{blurX}}.0-1.0)/2.0;float yAdj = ({{blurY}}.0-1.0)/2.0;vec2 sampleOffset;for(int i=0; i<{{blurX}}; i++) {for(int j=0; j<{{blurY}}; j++) {sampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));color += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);}}gl_FragColor = color.rgba;}", (isNaN(c) || 1 > c) && (c = 1), this.setQuality(0 | c)
        }
        var b = createjs.extend(a, createjs.Filter);
        b.getBlurX = function () {
            return this._blurX
        }, b.getBlurY = function () {
            return this._blurY
        }, b.setBlurX = function (a) {
            (isNaN(a) || 0 > a) && (a = 0), this._blurX = a
        }, b.setBlurY = function (a) {
            (isNaN(a) || 0 > a) && (a = 0), this._blurY = a
        }, b.getQuality = function () {
            return this._quality
        }, b.setQuality = function (a) {
            (isNaN(a) || 0 > a) && (a = 0), this._quality = 0 | a
        }, b._getShader = function () {
            var a = this._lastBlurX !== this._blurX,
                b = this._lastBlurY !== this._blurY,
                c = this._lastQuality !== this._quality;
            return a || b || c ? ((a || c) && (this._blurXTable = this._getTable(this._blurX * this._quality)), (b || c) && (this._blurYTable = this._getTable(this._blurY * this._quality)), this._updateShader(), this._lastBlurX = this._blurX, this._lastBlurY = this._blurY, void (this._lastQuality = this._quality)) : this._compiledShader
        }, b._setShader = function () {
            this._compiledShader
        };
        try {
            Object.defineProperties(b, {
                blurX: {
                    get: b.getBlurX,
                    set: b.setBlurX
                },
                blurY: {
                    get: b.getBlurY,
                    set: b.setBlurY
                },
                quality: {
                    get: b.getQuality,
                    set: b.setQuality
                },
                _builtShader: {
                    get: b._getShader,
                    set: b._setShader
                }
            })
        } catch (c) {
            console.log(c)
        }
        b._getTable = function (a) {
            var b = 4.2;
            if (1 >= a) return [1];
            var c = [],
                d = Math.ceil(2 * a);
            d += d % 2 ? 0 : 1;
            for (var e = d / 2 | 0, f = -e; e >= f; f++) {
                var g = f / e * b;
                c.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -(Math.pow(g, 2) / 4)))
            }
            var h = c.reduce(function (a, b) {
                return a + b
            });
            return c.map(function (a, b, c) {
                return a / h
            })
        }, b._updateShader = function () {
            if (void 0 !== this._blurX && void 0 !== this._blurY) {
                var a = this.FRAG_SHADER_TEMPLATE;
                a = a.replace(/\{\{blurX\}\}/g, this._blurXTable.length.toFixed(0)), a = a.replace(/\{\{blurY\}\}/g, this._blurYTable.length.toFixed(0)), this.FRAG_SHADER_BODY = a
            }
        }, b.shaderParamSetup = function (a, b, c) {
            a.uniform1fv(a.getUniformLocation(c, "xWeight"), this._blurXTable), a.uniform1fv(a.getUniformLocation(c, "yWeight"), this._blurYTable), a.uniform2f(a.getUniformLocation(c, "textureOffset"), 2 / (b._viewportWidth * this._quality), 2 / (b._viewportHeight * this._quality))
        }, a.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], a.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function (a) {
            var b = 0 | this.blurX,
                c = 0 | this.blurY;
            if (0 >= b && 0 >= c) return a;
            var d = Math.pow(this.quality, .2);
            return (a || new createjs.Rectangle).pad(c * d + 1, b * d + 1, c * d + 1, b * d + 1)
        }, b.clone = function () {
            return new a(this.blurX, this.blurY, this.quality)
        }, b.toString = function () {
            return "[BlurFilter]"
        }, b._applyFilter = function (b) {
            var c = this._blurX >> 1;
            if (isNaN(c) || 0 > c) return !1;
            var d = this._blurY >> 1;
            if (isNaN(d) || 0 > d) return !1;
            if (0 == c && 0 == d) return !1;
            var e = this.quality;
            (isNaN(e) || 1 > e) && (e = 1), e |= 0, e > 3 && (e = 3), 1 > e && (e = 1);
            var f = b.data,
                g = 0,
                h = 0,
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0,
                t = 0,
                u = 0,
                v = c + c + 1 | 0,
                w = d + d + 1 | 0,
                x = 0 | b.width,
                y = 0 | b.height,
                z = x - 1 | 0,
                A = y - 1 | 0,
                B = c + 1 | 0,
                C = d + 1 | 0,
                D = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                E = D;
            for (i = 1; v > i; i++) E = E.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            E.n = D;
            var F = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            },
                G = F;
            for (i = 1; w > i; i++) G = G.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            G.n = F;
            for (var H = null, I = 0 | a.MUL_TABLE[c], J = 0 | a.SHG_TABLE[c], K = 0 | a.MUL_TABLE[d], L = 0 | a.SHG_TABLE[d]; e-- > 0;) {
                m = l = 0;
                var M = I,
                    N = J;
                for (h = y; --h > -1;) {
                    for (n = B * (r = f[0 | l]), o = B * (s = f[l + 1 | 0]), p = B * (t = f[l + 2 | 0]), q = B * (u = f[l + 3 | 0]), E = D, i = B; --i > -1;) E.r = r, E.g = s, E.b = t, E.a = u, E = E.n;
                    for (i = 1; B > i; i++) j = l + ((i > z ? z : i) << 2) | 0, n += E.r = f[j], o += E.g = f[j + 1], p += E.b = f[j + 2], q += E.a = f[j + 3], E = E.n;
                    for (H = D, g = 0; x > g; g++) f[l++] = n * M >>> N, f[l++] = o * M >>> N, f[l++] = p * M >>> N, f[l++] = q * M >>> N, j = m + ((j = g + c + 1) < z ? j : z) << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n;
                    m += x
                }
                for (M = K, N = L, g = 0; x > g; g++) {
                    for (l = g << 2 | 0, n = C * (r = f[l]) | 0, o = C * (s = f[l + 1 | 0]) | 0, p = C * (t = f[l + 2 | 0]) | 0, q = C * (u = f[l + 3 | 0]) | 0, G = F, i = 0; C > i; i++) G.r = r, G.g = s, G.b = t, G.a = u, G = G.n;
                    for (k = x, i = 1; d >= i; i++) l = k + g << 2, n += G.r = f[l], o += G.g = f[l + 1], p += G.b = f[l + 2], q += G.a = f[l + 3], G = G.n, A > i && (k += x);
                    if (l = g, H = F, e > 0)
                        for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (f[j] = n * M >>> N, f[j + 1] = o * M >>> N, f[j + 2] = p * M >>> N) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x;
                    else
                        for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (u = 255 / u, f[j] = (n * M >>> N) * u, f[j + 1] = (o * M >>> N) * u, f[j + 2] = (p * M >>> N) * u) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x
                }
            }
            return !0
        }, createjs.BlurFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.alphaMap = a, this._alphaMap = null, this._mapData = null, this._mapTexture = null, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function (a, b, c) {
            this._mapTexture || (this._mapTexture = a.createTexture()), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this._mapTexture), b.setTextureParams(a), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.alphaMap), a.uniform1i(a.getUniformLocation(c, "uAlphaSampler"), 1)
        }, b.clone = function () {
            var b = new a(this.alphaMap);
            return b._alphaMap = this._alphaMap, b._mapData = this._mapData, b
        }, b.toString = function () {
            return "[AlphaMapFilter]"
        }, b._applyFilter = function (a) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var b = a.data, c = this._mapData, d = 0, e = b.length; e > d; d += 4) b[d + 3] = c[d] || 0;
            return !0
        }, b._prepAlphaMap = function () {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var a, b = this._alphaMap = this.alphaMap,
                c = b;
            b instanceof HTMLCanvasElement ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));
            try {
                var d = a.getImageData(0, 0, b.width, b.height)
            } catch (e) {
                return !1
            }
            return this._mapData = d.data, !0
        }, createjs.AlphaMapFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.mask = a, this.usesContext = !0, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * alphaMap.a);}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function (a, b, c) {
            this._mapTexture || (this._mapTexture = a.createTexture()), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this._mapTexture), b.setTextureParams(a), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.mask), a.uniform1i(a.getUniformLocation(c, "uAlphaSampler"), 1)
        }, b.applyFilter = function (a, b, c, d, e, f, g, h) {
            return this.mask ? (f = f || a, null == g && (g = b), null == h && (h = c), f.save(), a != f ? !1 : (f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0)) : !0
        }, b.clone = function () {
            return new a(this.mask)
        }, b.toString = function () {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d, e, f, g, h) {
            this.Filter_constructor(), this.redMultiplier = null != a ? a : 1, this.greenMultiplier = null != b ? b : 1, this.blueMultiplier = null != c ? c : 1, this.alphaMultiplier = null != d ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0, this.FRAG_SHADER_BODY = "uniform vec4 uColorMultiplier;uniform vec4 uColorOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = (color * uColorMultiplier) + uColorOffset;}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function (a, b, c) {
            a.uniform4f(a.getUniformLocation(c, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier), a.uniform4f(a.getUniformLocation(c, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255)
        }, b.toString = function () {
            return "[ColorFilter]"
        }, b.clone = function () {
            return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, b._applyFilter = function (a) {
            for (var b = a.data, c = b.length, d = 0; c > d; d += 4) b[d] = b[d] * this.redMultiplier + this.redOffset, b[d + 1] = b[d + 1] * this.greenMultiplier + this.greenOffset, b[d + 2] = b[d + 2] * this.blueMultiplier + this.blueOffset, b[d + 3] = b[d + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0
        }, createjs.ColorFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d) {
            this.setColor(a, b, c, d)
        }
        var b = a.prototype;
        a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.setColor = function (a, b, c, d) {
            return this.reset().adjustColor(a, b, c, d)
        }, b.reset = function () {
            return this.copy(a.IDENTITY_MATRIX)
        }, b.adjustColor = function (a, b, c, d) {
            return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c)
        }, b.adjustBrightness = function (a) {
            return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, b.adjustContrast = function (b) {
            if (0 == b || isNaN(b)) return this;
            b = this._cleanValue(b, 100);
            var c;
            return 0 > b ? c = 127 + b / 100 * 127 : (c = b % 1, c = 0 == c ? a.DELTA_INDEX[b] : a.DELTA_INDEX[b << 0] * (1 - c) + a.DELTA_INDEX[(b << 0) + 1] * c, c = 127 * c + 127), this._multiplyMatrix([c / 127, 0, 0, 0, .5 * (127 - c), 0, c / 127, 0, 0, .5 * (127 - c), 0, 0, c / 127, 0, .5 * (127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustSaturation = function (a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 100);
            var b = 1 + (a > 0 ? 3 * a / 100 : a / 100),
                c = .3086,
                d = .6094,
                e = .082;
            return this._multiplyMatrix([c * (1 - b) + b, d * (1 - b), e * (1 - b), 0, 0, c * (1 - b), d * (1 - b) + b, e * (1 - b), 0, 0, c * (1 - b), d * (1 - b), e * (1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.adjustHue = function (a) {
            if (0 == a || isNaN(a)) return this;
            a = this._cleanValue(a, 180) / 180 * Math.PI;
            var b = Math.cos(a),
                c = Math.sin(a),
                d = .213,
                e = .715,
                f = .072;
            return this._multiplyMatrix([d + b * (1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * (1 - f), 0, 0, d + b * -d + .143 * c, e + b * (1 - e) + .14 * c, f + b * -f + c * -.283, 0, 0, d + b * -d + c * -(1 - d), e + b * -e + c * e, f + b * (1 - f) + c * f, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, b.concat = function (b) {
            return b = this._fixMatrix(b), b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this)
        }, b.clone = function () {
            return (new a).copy(this)
        }, b.toArray = function () {
            for (var b = [], c = 0, d = a.LENGTH; d > c; c++) b[c] = this[c];
            return b
        }, b.copy = function (b) {
            for (var c = a.LENGTH, d = 0; c > d; d++) this[d] = b[d];
            return this
        }, b.toString = function () {
            return "[ColorMatrix]"
        }, b._multiplyMatrix = function (a) {
            var b, c, d, e = [];
            for (b = 0; 5 > b; b++) {
                for (c = 0; 5 > c; c++) e[c] = this[c + 5 * b];
                for (c = 0; 5 > c; c++) {
                    var f = 0;
                    for (d = 0; 5 > d; d++) f += a[c + 5 * d] * e[d];
                    this[c + 5 * b] = f
                }
            }
        }, b._cleanValue = function (a, b) {
            return Math.min(b, Math.max(-b, a))
        }, b._fixMatrix = function (b) {
            return b instanceof a && (b = b.toArray()), b.length < a.LENGTH ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)), b
        }, createjs.ColorMatrix = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.Filter_constructor(), this.matrix = a, this.FRAG_SHADER_BODY = "uniform mat4 uColorMatrix;uniform vec4 uColorMatrixOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);mat4 m = uColorMatrix;vec4 newColor = vec4(0,0,0,0);newColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];newColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];newColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];newColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];gl_FragColor = newColor + uColorMatrixOffset;}"
        }
        var b = createjs.extend(a, createjs.Filter);
        b.shaderParamSetup = function (a, b, c) {
            var d = this.matrix,
                e = new Float32Array([d[0], d[1], d[2], d[3], d[5], d[6], d[7], d[8], d[10], d[11], d[12], d[13], d[15], d[16], d[17], d[18]]);
            a.uniformMatrix4fv(a.getUniformLocation(c, "uColorMatrix"), !1, e), a.uniform4f(a.getUniformLocation(c, "uColorMatrixOffset"), d[4] / 255, d[9] / 255, d[14] / 255, d[19] / 255)
        }, b.toString = function () {
            return "[ColorMatrixFilter]"
        }, b.clone = function () {
            return new a(this.matrix)
        }, b._applyFilter = function (a) {
            for (var b, c, d, e, f = a.data, g = f.length, h = this.matrix, i = h[0], j = h[1], k = h[2], l = h[3], m = h[4], n = h[5], o = h[6], p = h[7], q = h[8], r = h[9], s = h[10], t = h[11], u = h[12], v = h[13], w = h[14], x = h[15], y = h[16], z = h[17], A = h[18], B = h[19], C = 0; g > C; C += 4) b = f[C], c = f[C + 1], d = f[C + 2], e = f[C + 3], f[C] = b * i + c * j + d * k + e * l + m, f[C + 1] = b * n + c * o + d * p + e * q + r, f[C + 2] = b * s + c * t + d * u + e * v + w, f[C + 3] = b * x + c * y + d * z + e * A + B;
            return !0
        }, createjs.ColorMatrixFilter = createjs.promote(a, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "Touch cannot be instantiated"
        }
        a.isSupported = function () {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
        }, a.enable = function (b, c, d) {
            return b && b.canvas && a.isSupported() ? b.__touch ? !0 : (b.__touch = {
                pointers: {},
                multitouch: !c,
                preventDefault: !d,
                count: 0
            }, "ontouchstart" in window ? a._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_enable(b), !0) : !1
        }, a.disable = function (b) {
            b && ("ontouchstart" in window ? a._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_disable(b), delete b.__touch)
        }, a._IOS_enable = function (b) {
            var c = b.canvas,
                d = b.__touch.f = function (c) {
                    a._IOS_handleEvent(b, c)
                };
            c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
        }, a._IOS_disable = function (a) {
            var b = a.canvas;
            if (b) {
                var c = a.__touch.f;
                b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1)
            }
        }, a._IOS_handleEvent = function (a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
                    var g = c[e],
                        h = g.identifier;
                    g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
                }
            }
        }, a._IE_enable = function (b) {
            var c = b.canvas,
                d = b.__touch.f = function (c) {
                    a._IE_handleEvent(b, c)
                };
            void 0 === window.navigator.pointerEnabled ? (c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none")) : (c.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup", d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (c.style.touchAction = "none")), b.__touch.activeIDs = {}
        }, a._IE_disable = function (a) {
            var b = a.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)) : (window.removeEventListener("pointermove", b, !1), window.removeEventListener("pointerup", b, !1), window.removeEventListener("pointercancel", b, !1), a.canvas && a.canvas.removeEventListener("pointerdown", b, !1))
        }, a._IE_handleEvent = function (a, b) {
            if (a) {
                a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                var c = b.type,
                    d = b.pointerId,
                    e = a.__touch.activeIDs;
                if ("MSPointerDown" == c || "pointerdown" == c) {
                    if (b.srcElement != a.canvas) return;
                    e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)
                } else e[d] && ("MSPointerMove" == c || "pointermove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c || "pointerup" == c || "pointercancel" == c) && (delete e[d], this._handleEnd(a, d, b)))
            }
        }, a._handleStart = function (a, b, c, d, e) {
            var f = a.__touch;
            if (f.multitouch || !f.count) {
                var g = f.pointers;
                g[b] || (g[b] = !0, f.count++ , a._handlePointerDown(b, c, d, e))
            }
        }, a._handleMove = function (a, b, c, d, e) {
            a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
        }, a._handleEnd = function (a, b, c) {
            var d = a.__touch,
                e = d.pointers;
            e[b] && (d.count-- , a._handlePointerUp(b, c, !0), delete e[b])
        }, createjs.Touch = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = createjs.EaselJS = createjs.EaselJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:10 GMT"
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = createjs.PreloadJS = createjs.PreloadJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        createjs.proxy = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function () {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.Event_constructor("error"), this.title = a, this.message = b, this.data = c
        }
        var b = createjs.extend(a, createjs.Event);
        b.clone = function () {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(a, "Event")
    }(), this.createjs = this.createjs || {},
    function (a) {
        "use strict";

        function b(a, b) {
            this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
        }
        var c = createjs.extend(b, createjs.Event);
        c.clone = function () {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(b, "Event")
    }(window),
    function () {
        function a(b, d) {
            function f(a) {
                if (f[a] !== q) return f[a];
                var b;
                if ("bug-string-char-index" == a) b = "a" != "a"[0];
                else if ("json" == a) b = f("json-stringify") && f("json-parse");
                else {
                    var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == a) {
                        var i = d.stringify,
                            k = "function" == typeof i && t;
                        if (k) {
                            (c = function () {
                                return 1
                            }).toJSON = c;
                            try {
                                k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                                    a: [c, !0, !1, null, "\x00\b\n\f\r	"]
                                }) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
                            } catch (l) {
                                k = !1
                            }
                        }
                        b = k
                    }
                    if ("json-parse" == a) {
                        var m = d.parse;
                        if ("function" == typeof m) try {
                            if (0 === m("0") && !m(!1)) {
                                c = m(e);
                                var n = 5 == c.a.length && 1 === c.a[0];
                                if (n) {
                                    try {
                                        n = !m('"	"')
                                    } catch (l) { }
                                    if (n) try {
                                        n = 1 !== m("01")
                                    } catch (l) { }
                                    if (n) try {
                                        n = 1 !== m("1.")
                                    } catch (l) { }
                                }
                            }
                        } catch (l) {
                            n = !1
                        }
                        b = n
                    }
                }
                return f[a] = !!b
            }
            b || (b = e.Object()), d || (d = e.Object());
            var g = b.Number || e.Number,
                h = b.String || e.String,
                i = b.Object || e.Object,
                j = b.Date || e.Date,
                k = b.SyntaxError || e.SyntaxError,
                l = b.TypeError || e.TypeError,
                m = b.Math || e.Math,
                n = b.JSON || e.JSON;
            "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
            var o, p, q, r = i.prototype,
                s = r.toString,
                t = new j(-0xc782b5b800cec);
            try {
                t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
            } catch (u) { }
            if (!f("json")) {
                var v = "[object Function]",
                    w = "[object Date]",
                    x = "[object Number]",
                    y = "[object String]",
                    z = "[object Array]",
                    A = "[object Boolean]",
                    B = f("bug-string-char-index");
                if (!t) var C = m.floor,
                    D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    E = function (a, b) {
                        return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
                    };
                if ((o = r.hasOwnProperty) || (o = function (a) {
                    var b, c = {};
                    return (c.__proto__ = null, c.__proto__ = {
                        toString: 1
                    }, c).toString != s ? o = function (a) {
                        var b = this.__proto__,
                            c = a in (this.__proto__ = null, this);
                        return this.__proto__ = b, c
                    } : (b = c.constructor, o = function (a) {
                        var c = (this.constructor || b).prototype;
                        return a in this && !(a in c && this[a] === c[a])
                    }), c = null, o.call(this, a)
                }), p = function (a, b) {
                    var d, e, f, g = 0;
                    (d = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, e = new d;
                    for (f in e) o.call(e, f) && g++;
                    return d = e = null, g ? p = 2 == g ? function (a, b) {
                        var c, d = {},
                            e = s.call(a) == v;
                        for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                    } : function (a, b) {
                        var c, d, e = s.call(a) == v;
                        for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                        (d || o.call(a, c = "constructor")) && b(c)
                    } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function (a, b) {
                        var d, f, g = s.call(a) == v,
                            h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                        for (d in a) g && "prototype" == d || !h.call(a, d) || b(d);
                        for (f = e.length; d = e[--f]; h.call(a, d) && b(d));
                    }), p(a, b)
                }, !f("json-stringify")) {
                    var F = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                        G = "000000",
                        H = function (a, b) {
                            return (G + (b || 0)).slice(-a)
                        },
                        I = "\\u00",
                        J = function (a) {
                            for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                                var g = a.charCodeAt(c);
                                switch (g) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        b += F[g];
                                        break;
                                    default:
                                        if (32 > g) {
                                            b += I + H(2, g.toString(16));
                                            break
                                        }
                                        b += e ? f[c] : a.charAt(c)
                                }
                            }
                            return b + '"'
                        },
                        K = function (a, b, c, d, e, f, g) {
                            var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
                            try {
                                h = b[a]
                            } catch (M) { }
                            if ("object" == typeof h && h)
                                if (i = s.call(h), i != w || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
                                else if (h > -1 / 0 && 1 / 0 > h) {
                                    if (E) {
                                        for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                                        for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                                        m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                                    } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                                    h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
                                } else h = null;
                            if (c && (h = c.call(b, a, h)), null === h) return "null";
                            if (i = s.call(h), i == A) return "" + h;
                            if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                            if (i == y) return J("" + h);
                            if ("object" == typeof h) {
                                for (G = g.length; G--;)
                                    if (g[G] === h) throw l();
                                if (g.push(h), B = [], I = f, f += e, i == z) {
                                    for (F = 0, G = h.length; G > F; F++) D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                                    L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                                } else p(d || h, function (a) {
                                    var b = K(a, h, c, d, e, f, g);
                                    b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                                }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                                return g.pop(), L
                            }
                        };
                    d.stringify = function (a, b, d) {
                        var e, f, g, h;
                        if (c[typeof b] && b)
                            if ((h = s.call(b)) == v) f = b;
                            else if (h == z) {
                                g = {};
                                for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1));
                            }
                        if (d)
                            if ((h = s.call(d)) == x) {
                                if ((d -= d % 1) > 0)
                                    for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                            } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
                        return K("", (i = {}, i[""] = a, i), f, g, e, "", [])
                    }
                }
                if (!f("json-parse")) {
                    var L, M, N = h.fromCharCode,
                        O = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        P = function () {
                            throw L = M = null, k()
                        },
                        Q = function () {
                            for (var a, b, c, d, e, f = M, g = f.length; g > L;) switch (e = f.charCodeAt(L)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    L++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = B ? f.charAt(L) : f[L], L++ , a;
                                case 34:
                                    for (a = "@", L++; g > L;)
                                        if (e = f.charCodeAt(L), 32 > e) P();
                                        else if (92 == e) switch (e = f.charCodeAt(++L)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                a += O[e], L++;
                                                break;
                                            case 117:
                                                for (b = ++L, c = L + 4; c > L; L++) e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                                                a += N("0x" + f.slice(b, L));
                                                break;
                                            default:
                                                P()
                                        } else {
                                            if (34 == e) break;
                                            for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++L);
                                            a += f.slice(b, L)
                                        }
                                    if (34 == f.charCodeAt(L)) return L++ , a;
                                    P();
                                default:
                                    if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                                        for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                                        if (46 == f.charCodeAt(L)) {
                                            for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == L && P(), L = c
                                        }
                                        if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                                            for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++ , c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == L && P(), L = c
                                        }
                                        return +f.slice(b, L)
                                    }
                                    if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;
                                    if ("false" == f.slice(L, L + 5)) return L += 5, !1;
                                    if ("null" == f.slice(L, L + 4)) return L += 4, null;
                                    P()
                            }
                            return "$"
                        },
                        R = function (a) {
                            var b, c;
                            if ("$" == a && P(), "string" == typeof a) {
                                if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; a = Q(), "]" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; a = Q(), "}" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                                    return b
                                }
                                P()
                            }
                            return a
                        },
                        S = function (a, b, c) {
                            var d = T(a, b, c);
                            d === q ? delete a[b] : a[b] = d
                        },
                        T = function (a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e)
                                if (s.call(e) == z)
                                    for (d = e.length; d--;) S(e, d, c);
                                else p(e, function (a) {
                                    S(e, a, c)
                                });
                            return c.call(a, b, e)
                        };
                    d.parse = function (a, b) {
                        var c, d;
                        return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
                    }
                }
            }
            return d.runInContext = a, d
        }
        var b = "function" == typeof define && define.amd,
            c = {
                "function": !0,
                object: !0
            },
            d = c[typeof exports] && exports && !exports.nodeType && exports,
            e = c[typeof window] && window || this,
            f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);
        else {
            var g = e.JSON,
                h = e.JSON3,
                i = !1,
                j = a(e, e.JSON3 = {
                    noConflict: function () {
                        return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
                    }
                });
            e.JSON = {
                parse: j.parse,
                stringify: j.stringify
            }
        }
        b && define(function () {
            return j
        })
    }.call(this),
    function () {
        var a = {};
        a.a = function () {
            return a.el("a")
        }, a.svg = function () {
            return a.el("svg")
        }, a.object = function () {
            return a.el("object")
        }, a.image = function () {
            return a.el("image")
        }, a.img = function () {
            return a.el("img")
        }, a.style = function () {
            return a.el("style")
        }, a.link = function () {
            return a.el("link")
        }, a.script = function () {
            return a.el("script")
        }, a.audio = function () {
            return a.el("audio")
        }, a.video = function () {
            return a.el("video")
        }, a.text = function (a) {
            return document.createTextNode(a)
        }, a.el = function (a) {
            return document.createElement(a)
        }, createjs.Elements = a
    }(),
    function () {
        var a = {};
        a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function (b) {
            var c = {
                absolute: !1,
                relative: !1,
                protocol: null,
                hostname: null,
                port: null,
                pathname: null,
                search: null,
                hash: null,
                host: null
            };
            if (null == b) return c;
            var d = createjs.Elements.a();
            d.href = b;
            for (var e in c) e in d && (c[e] = d[e]);
            var f = b.indexOf("?");
            f > -1 && (b = b.substr(0, f));
            var g;
            return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (g = b.match(a.EXTENSION_PATT)) && (c.extension = g[1].toLowerCase()), c
        }, a.formatQueryString = function (a, b) {
            if (null == a) throw new Error("You must specify data.");
            var c = [];
            for (var d in a) c.push(d + "=" + escape(a[d]));
            return b && (c = c.concat(b)), c.join("&")
        }, a.buildURI = function (a, b) {
            if (null == b) return a;
            var c = [],
                d = a.indexOf("?");
            if (-1 != d) {
                var e = a.slice(d + 1);
                c = c.concat(e.split("&"))
            }
            return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c)
        }, a.isCrossDomain = function (a) {
            var b = createjs.Elements.a();
            b.href = a.src;
            var c = createjs.Elements.a();
            c.href = location.href;
            var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
            return d
        }, a.isLocal = function (a) {
            var b = createjs.Elements.a();
            return b.href = a.src, "" == b.hostname && "file:" == b.protocol
        }, createjs.URLUtils = a
    }(),
    function () {
        var a = {
            container: null
        };
        a.appendToHead = function (b) {
            a.getHead().appendChild(b)
        }, a.appendToBody = function (b) {
            if (null == a.container) {
                a.container = document.createElement("div"), a.container.id = "preloadjs-container";
                var c = a.container.style;
                c.visibility = "hidden", c.position = "absolute", c.width = a.container.style.height = "10px", c.overflow = "hidden", c.transform = c.msTransform = c.webkitTransform = c.oTransform = "translate(-10px, -10px)", a.getBody().appendChild(a.container)
            }
            a.container.appendChild(b)
        }, a.getHead = function () {
            return document.head || document.getElementsByTagName("head")[0]
        }, a.getBody = function () {
            return document.body || document.getElementsByTagName("body")[0]
        }, a.removeChild = function (a) {
            a.parent && a.parent.removeChild(a)
        }, a.isImageTag = function (a) {
            return a instanceof HTMLImageElement
        }, a.isAudioTag = function (a) {
            return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1
        }, a.isVideoTag = function (a) {
            return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1
        }, createjs.DomUtils = a
    }(),
    function () {
        var a = {};
        a.parseXML = function (a) {
            var b = null;
            try {
                if (window.DOMParser) {
                    var c = new DOMParser;
                    b = c.parseFromString(a, "text/xml")
                }
            } catch (d) { }
            if (!b) try {
                b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a)
            } catch (d) {
                b = null
            }
            return b
        }, a.parseJSON = function (a) {
            if (null == a) return null;
            try {
                return JSON.parse(a)
            } catch (b) {
                throw b
            }
        }, createjs.DataUtils = a
    }(), this.createjs = this.createjs || {},
    function () {
        var a = {};
        a.BINARY = "binary", a.CSS = "css", a.FONT = "font", a.FONTCSS = "fontcss", a.IMAGE = "image", a.JAVASCRIPT = "javascript", a.JSON = "json", a.JSONP = "jsonp", a.MANIFEST = "manifest", a.SOUND = "sound", a.VIDEO = "video", a.SPRITESHEET = "spritesheet", a.SVG = "svg", a.TEXT = "text", a.XML = "xml", createjs.Types = a
    }(), this.createjs = this.createjs || {},
    function () {
        var a = {};
        a.POST = "POST", a.GET = "GET", createjs.Methods = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = c.LOAD_TIMEOUT_DEFAULT
        }
        var b = a.prototype = {},
            c = a;
        c.LOAD_TIMEOUT_DEFAULT = 8e3, c.create = function (b) {
            if ("string" == typeof b) {
                var d = new a;
                return d.src = b, d
            }
            if (b instanceof c) return b;
            if (b instanceof Object && b.src) return null == b.loadTimeout && (b.loadTimeout = c.LOAD_TIMEOUT_DEFAULT), b;
            throw new Error("Type not recognized.")
        }, b.set = function (a) {
            for (var b in a) this[b] = a[b];
            return this
        }, createjs.LoadItem = c
    }(),
    function () {
        var a = {};
        a.isBinary = function (a) {
            switch (a) {
                case createjs.Types.IMAGE:
                case createjs.Types.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, a.isText = function (a) {
            switch (a) {
                case createjs.Types.TEXT:
                case createjs.Types.JSON:
                case createjs.Types.MANIFEST:
                case createjs.Types.XML:
                case createjs.Types.CSS:
                case createjs.Types.SVG:
                case createjs.Types.JAVASCRIPT:
                case createjs.Types.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        }, a.getTypeByExtension = function (a) {
            if (null == a) return createjs.Types.TEXT;
            switch (a.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.Types.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.Types.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.Types.VIDEO;
                case "json":
                    return createjs.Types.JSON;
                case "xml":
                    return createjs.Types.XML;
                case "css":
                    return createjs.Types.CSS;
                case "js":
                    return createjs.Types.JAVASCRIPT;
                case "svg":
                    return createjs.Types.SVG;
                default:
                    return createjs.Types.TEXT
            }
        }, createjs.RequestUtils = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, a ? this._item = createjs.LoadItem.create(a) : this._item = null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var b = createjs.extend(a, createjs.EventDispatcher),
            c = a;
        try {
            Object.defineProperties(c, {
                POST: {
                    get: createjs.deprecate(function () {
                        return createjs.Methods.POST
                    }, "AbstractLoader.POST")
                },
                GET: {
                    get: createjs.deprecate(function () {
                        return createjs.Methods.GET
                    }, "AbstractLoader.GET")
                },
                BINARY: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.BINARY
                    }, "AbstractLoader.BINARY")
                },
                CSS: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.CSS
                    }, "AbstractLoader.CSS")
                },
                FONT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.FONT
                    }, "AbstractLoader.FONT")
                },
                FONTCSS: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.FONTCSS
                    }, "AbstractLoader.FONTCSS")
                },
                IMAGE: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.IMAGE
                    }, "AbstractLoader.IMAGE")
                },
                JAVASCRIPT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JAVASCRIPT
                    }, "AbstractLoader.JAVASCRIPT")
                },
                JSON: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JSON
                    }, "AbstractLoader.JSON")
                },
                JSONP: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JSONP
                    }, "AbstractLoader.JSONP")
                },
                MANIFEST: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.MANIFEST
                    }, "AbstractLoader.MANIFEST")
                },
                SOUND: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SOUND
                    }, "AbstractLoader.SOUND")
                },
                VIDEO: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.VIDEO
                    }, "AbstractLoader.VIDEO")
                },
                SPRITESHEET: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SPRITESHEET
                    }, "AbstractLoader.SPRITESHEET")
                },
                SVG: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SVG
                    }, "AbstractLoader.SVG")
                },
                TEXT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.TEXT
                    }, "AbstractLoader.TEXT")
                },
                XML: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.XML
                    }, "AbstractLoader.XML")
                }
            })
        } catch (d) { }
        b.getItem = function () {
            return this._item
        }, b.getResult = function (a) {
            return a ? this._rawResult : this._result
        }, b.getTag = function () {
            return this._tag
        }, b.setTag = function (a) {
            this._tag = a
        }, b.load = function () {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var a = new createjs.Event("initialize");
            a.loader = this._request, this.dispatchEvent(a), this._request.load()
        }, b.cancel = function () {
            this.canceled = !0, this.destroy()
        }, b.destroy = function () {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, b.getLoadedItems = function () {
            return this._loadedItems
        }, b._createRequest = function () {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, b._createTag = function (a) {
            return null
        }, b._sendLoadStart = function () {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, b._sendProgress = function (a) {
            if (!this._isCanceled()) {
                var b = null;
                "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b)
            }
        }, b._sendComplete = function () {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var a = new createjs.Event("complete");
                a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a)
            }
        }, b._sendError = function (a) {
            !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a))
        }, b._isCanceled = function () {
            return null == window.createjs || this.canceled ? !0 : !1
        }, b.resultFormatter = null, b.handleEvent = function (a) {
            switch (a.type) {
                case "complete":
                    this._rawResult = a.target._response;
                    var b = this.resultFormatter && this.resultFormatter(this);
                    b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(a);
                    break;
                case "error":
                    this._sendError(a);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"))
            }
        }, b._resultFormatSuccess = function (a) {
            this._result = a, this._sendComplete()
        }, b._resultFormatFailed = function (a) {
            this._sendError(a)
        }, b.toString = function () {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        b.load = function () {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, b._createTag = function () { }, b._createRequest = function () {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, b._updateXHR = function (a) {
            a.loader.setResponseType && a.loader.setResponseType("blob")
        }, b._formatResult = function (a) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var b = window.URL || window.webkitURL,
                    c = a.getResult(!0);
                a.getTag().src = b.createObjectURL(c)
            }
            return a.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = function (a) {
            this._item = a
        },
            b = createjs.extend(a, createjs.EventDispatcher);
        b.load = function () { }, b.destroy = function () { }, b.cancel = function () { }, createjs.AbstractRequest = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1
        }
        var b = createjs.extend(a, createjs.AbstractRequest);
        b.load = function () {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var a = new createjs.Event("initialize");
            a.loader = this._tag, this.dispatchEvent(a), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0)
        }, b.destroy = function () {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, b._handleReadyStateChange = function () {
            clearTimeout(this._loadTimeout);
            var a = this._tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
        }, b._handleError = function () {
            this._clean(), this.dispatchEvent("error")
        }, b._handleTagComplete = function () {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete")
        }, b._handleTimeout = function () {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, b._clean = function () {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, b._handleStalled = function () { }, createjs.TagRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var b = createjs.extend(a, createjs.TagRequest);
        b.load = function () {
            var a = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = a;
            var b = createjs.proxy(this._handleProgress, this);
            this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, b._handleReadyStateChange = function () {
            clearTimeout(this._loadTimeout);
            var a = this._tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
        }, b._handleStalled = function () { }, b._handleProgress = function (a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(b)
            }
        }, b._clean = function () {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(a, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a)
        }
        var b = createjs.extend(a, createjs.AbstractRequest);
        a.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b.getResult = function (a) {
            return a && this._rawResponse ? this._rawResponse : this._response
        }, b.cancel = function () {
            this.canceled = !0, this._clean(), this._request.abort()
        }, b.load = function () {
            if (null == this._request) return void this._handleError();
            null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (a) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a))
            }
        }, b.setResponseType = function (a) {
            "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a
        }, b.getAllResponseHeaders = function () {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, b.getResponseHeader = function (a) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
        }, b._handleProgress = function (a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(b)
            }
        }, b._handleLoadStart = function (a) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, b._handleAbort = function (a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a))
        }, b._handleError = function (a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message))
        }, b._handleReadyStateChange = function (a) {
            4 == this._request.readyState && this._handleLoad()
        }, b._handleLoad = function (a) {
            if (!this.loaded) {
                this.loaded = !0;
                var b = this._checkError();
                if (b) return void this._handleError(b);
                if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                    this._response = new Blob([this._response])
                } catch (c) {
                    if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === c.name && window.BlobBuilder) {
                        var d = new BlobBuilder;
                        d.append(this._response), this._response = d.getBlob()
                    }
                }
                this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, b._handleTimeout = function (a) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a))
        }, b._checkError = function () {
            var a = parseInt(this._request.status);
            return a >= 400 && 599 >= a ? new Error(a) : 0 == a && /^https?:/.test(location.protocol) ? new Error(0) : null
        }, b._getResponse = function () {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (a) { }
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (a) { }
            return null
        }, b._createXHR = function (a) {
            var b = createjs.URLUtils.isCrossDomain(a),
                c = {},
                d = null;
            if (window.XMLHttpRequest) d = new XMLHttpRequest, b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest);
            else {
                for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
                    var g = s.ACTIVEX_VERSIONS[e];
                    try {
                        d = new ActiveXObject(g);
                        break
                    } catch (h) { }
                }
                if (null == d) return !1
            }
            null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;
            var i = null;
            if (i = a.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(a.src, a.values) : a.src, d.open(a.method || createjs.Methods.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.Methods.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers)
                for (var j in a.headers) c[j] = a.headers[j];
            for (j in c) d.setRequestHeader(j, c[j]);
            return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0
        }, b._clean = function () {
            clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, b.toString = function () {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c) {
            this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.FontLoader, createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(a, b, c)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        try {
            Object.defineProperties(c, {
                POST: {
                    get: createjs.deprecate(function () {
                        return createjs.Methods.POST
                    }, "AbstractLoader.POST")
                },
                GET: {
                    get: createjs.deprecate(function () {
                        return createjs.Methods.GET
                    }, "AbstractLoader.GET")
                },
                BINARY: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.BINARY
                    }, "AbstractLoader.BINARY")
                },
                CSS: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.CSS
                    }, "AbstractLoader.CSS")
                },
                FONT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.FONT
                    }, "AbstractLoader.FONT")
                },
                FONTCSS: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.FONTCSS
                    }, "AbstractLoader.FONTCSS")
                },
                IMAGE: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.IMAGE
                    }, "AbstractLoader.IMAGE")
                },
                JAVASCRIPT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JAVASCRIPT
                    }, "AbstractLoader.JAVASCRIPT")
                },
                JSON: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JSON
                    }, "AbstractLoader.JSON")
                },
                JSONP: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.JSONP
                    }, "AbstractLoader.JSONP")
                },
                MANIFEST: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.MANIFEST
                    }, "AbstractLoader.MANIFEST")
                },
                SOUND: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SOUND
                    }, "AbstractLoader.SOUND")
                },
                VIDEO: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.VIDEO
                    }, "AbstractLoader.VIDEO")
                },
                SPRITESHEET: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SPRITESHEET
                    }, "AbstractLoader.SPRITESHEET")
                },
                SVG: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.SVG
                    }, "AbstractLoader.SVG")
                },
                TEXT: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.TEXT
                    }, "AbstractLoader.TEXT")
                },
                XML: {
                    get: createjs.deprecate(function () {
                        return createjs.Types.XML
                    }, "AbstractLoader.XML")
                }
            })
        } catch (d) { }
        b.init = function (a, b, c) {
            this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(a), this._paused = !1, this._basePath = b, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
        }, b.registerLoader = function (a) {
            if (!a || !a.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(a)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(a)
        }, b.unregisterLoader = function (a) {
            var b = this._availableLoaders.indexOf(a); - 1 != b && b < this._defaultLoaderLength - 1 && this._availableLoaders.splice(b, 1)
        }, b.setPreferXHR = function (a) {
            return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR
        }, b.removeAll = function () {
            this.remove()
        }, b.remove = function (a) {
            var b = null;
            if (a && !Array.isArray(a)) b = [a];
            else if (a) b = a;
            else if (arguments.length > 0) return;
            var c = !1;
            if (b) {
                for (; b.length;) {
                    var d = b.pop(),
                        e = this.getResult(d);
                    for (f = this._loadQueue.length - 1; f >= 0; f--)
                        if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueue.splice(f, 1)[0].cancel();
                            break
                        }
                    for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
                        if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueueBackup.splice(f, 1)[0].cancel();
                            break
                        }
                    if (e) this._disposeItem(this.getItem(d));
                    else
                        for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                            var g = this._currentLoads[f].getItem();
                            if (g.id == d || g.src == d) {
                                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                                break
                            }
                        }
                }
                c && this._loadNext()
            } else {
                this.close();
                for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
                this.init(this.preferXHR, this._basePath)
            }
        }, b.reset = function () {
            this.close();
            for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
            for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) b.push(this._loadQueueBackup[c].getItem());
            this.loadManifest(b, !1)
        }, b.installPlugin = function (a) {
            if (null != a && null != a.getPreloadHandlers) {
                this._plugins.push(a);
                var b = a.getPreloadHandlers();
                if (b.scope = a, null != b.types)
                    for (var c = 0, d = b.types.length; d > c; c++) this._typeCallbacks[b.types[c]] = b;
                if (null != b.extensions)
                    for (c = 0, d = b.extensions.length; d > c; c++) this._extensionCallbacks[b.extensions[c]] = b
            }
        }, b.setMaxConnections = function (a) {
            this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, b.loadFile = function (a, b, c) {
            if (null == a) {
                var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                return void this._sendError(d)
            }
            this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.loadManifest = function (a, b, d) {
            var e = null,
                f = null;
            if (Array.isArray(a)) {
                if (0 == a.length) {
                    var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(g)
                }
                e = a
            } else if ("string" == typeof a) e = [{
                src: a,
                type: c.MANIFEST
            }];
            else {
                if ("object" != typeof a) {
                    var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(g)
                }
                if (void 0 !== a.src) {
                    if (null == a.type) a.type = c.MANIFEST;
                    else if (a.type != c.MANIFEST) {
                        var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(g)
                    }
                    e = [a]
                } else void 0 !== a.manifest && (e = a.manifest, f = a.path)
            }
            for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
            b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.load = function () {
            this.setPaused(!1)
        }, b.getItem = function (a) {
            return this._loadItemsById[a] || this._loadItemsBySrc[a]
        }, b.getResult = function (a, b) {
            var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
            if (null == c) return null;
            var d = c.id;
            return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
        }, b.getItems = function (a) {
            var b = [];
            for (var c in this._loadItemsById) {
                var d = this._loadItemsById[c],
                    e = this.getResult(c);
                (a !== !0 || null != e) && b.push({
                    item: d,
                    result: e,
                    rawResult: this.getResult(c, !0)
                })
            }
            return b
        }, b.setPaused = function (a) {
            this._paused = a, this._paused || this._loadNext()
        }, b.close = function () {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, b._addItem = function (a, b, c) {
            var d = this._createLoadItem(a, b, c);
            if (null != d) {
                var e = this._createLoader(d);
                null != e && ("plugins" in e && (e.plugins = this._plugins), d._loader = e, this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++ , this._updateProgress(), (this.maintainScriptOrder && d.type == createjs.Types.JAVASCRIPT || d.maintainOrder === !0) && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
            }
        }, b._createLoadItem = function (a, b, c) {
            var d = createjs.LoadItem.create(a);
            if (null == d) return null;
            var e = "",
                f = c || this._basePath;
            if (d.src instanceof Object) {
                if (!d.type) return null;
                if (b) {
                    e = b;
                    var g = createjs.URLUtils.parseURI(b);
                    null == f || g.absolute || g.relative || (e = f + e)
                } else null != f && (e = f)
            } else {
                var h = createjs.URLUtils.parseURI(d.src);
                h.extension && (d.ext = h.extension), null == d.type && (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));
                var i = d.src;
                if (!h.absolute && !h.relative)
                    if (b) {
                        e = b;
                        var g = createjs.URLUtils.parseURI(b);
                        i = b + i, null == f || g.absolute || g.relative || (e = f + e)
                    } else null != f && (e = f);
                d.src = e + d.src
            }
            d.path = e, (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);
            var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
            if (j) {
                var k = j.callback.call(j.scope, d, this);
                if (k === !1) return null;
                k === !0 || null != k && (d._loader = k), h = createjs.URLUtils.parseURI(d.src), null != h.extension && (d.ext = h.extension)
            }
            return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, null == d.crossOrigin && (d.crossOrigin = this._crossOrigin), d
        }, b._createLoader = function (a) {
            if (null != a._loader) return a._loader;
            for (var b = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
                var d = this._availableLoaders[c];
                if (d && d.canLoadItem(a)) return new d(a, b)
            }
            return null
        }, b._loadNext = function () {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
                    var b = this._loadQueue[a];
                    this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a-- , this._loadItem(b))
                }
            }
        }, b._loadItem = function (a) {
            a.on("fileload", this._handleFileLoad, this), a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleError, this), a.on("fileerror", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
        }, b._handleFileLoad = function (a) {
            a.target = null, this.dispatchEvent(a)
        }, b._handleFileError = function (a) {
            var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
            this._sendError(b)
        }, b._handleError = function (a) {
            var b = a.target;
            this._numItemsLoaded++ , this._finishOrderedItem(b, !0), this._updateProgress();
            var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());
            this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(b), this._cleanLoadItem(b), this._loadNext())
        }, b._handleFileComplete = function (a) {
            var b = a.target,
                c = b.getItem(),
                d = b.getResult();
            this._loadedResults[c.id] = d;
            var e = b.getResult(!0);
            null != e && e !== d && (this._loadedRawResults[c.id] = e), this._saveLoadedItems(b), this._removeLoadItem(b), this._finishOrderedItem(b) || this._processFinishedLoad(c, b), this._cleanLoadItem(b)
        }, b._saveLoadedItems = function (a) {
            var b = a.getLoadedItems();
            if (null !== b)
                for (var c = 0; c < b.length; c++) {
                    var d = b[c].item;
                    this._loadItemsBySrc[d.src] = d, this._loadItemsById[d.id] = d, this._loadedResults[d.id] = b[c].result, this._loadedRawResults[d.id] = b[c].rawResult
                }
        }, b._finishOrderedItem = function (a, b) {
            var c = a.getItem();
            if (this.maintainScriptOrder && c.type == createjs.Types.JAVASCRIPT || c.maintainOrder) {
                a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var d = createjs.indexOf(this._scriptOrder, c);
                return -1 == d ? !1 : (this._loadedScripts[d] = b === !0 ? !0 : c, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, b._checkScriptLoadOrder = function () {
            for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
                var c = this._loadedScripts[b];
                if (null === c) break;
                if (c !== !0) {
                    var d = this._loadedResults[c.id];
                    c.type == createjs.Types.JAVASCRIPT && createjs.DomUtils.appendToHead(d);
                    var e = c._loader;
                    this._processFinishedLoad(c, e), this._loadedScripts[b] = !0
                }
            }
        }, b._processFinishedLoad = function (a, b) {
            if (this._numItemsLoaded++ , !this.maintainScriptOrder && a.type == createjs.Types.JAVASCRIPT) {
                var c = b.getTag();
                createjs.DomUtils.appendToHead(c)
            }
            this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
        }, b._canStartLoad = function (a) {
            if (!this.maintainScriptOrder || a.preferXHR) return !0;
            var b = a.getItem();
            if (b.type != createjs.Types.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var c = this._scriptOrder.indexOf(b), d = 0; c > d;) {
                var e = this._loadedScripts[d];
                if (null == e) return !1;
                d++
            }
            return this._currentlyLoadingScript = !0, !0
        }, b._removeLoadItem = function (a) {
            for (var b = this._currentLoads.length, c = 0; b > c; c++)
                if (this._currentLoads[c] == a) {
                    this._currentLoads.splice(c, 1);
                    break
                }
        }, b._cleanLoadItem = function (a) {
            var b = a.getItem();
            b && delete b._loader
        }, b._handleProgress = function (a) {
            var b = a.target;
            this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
        }, b._updateProgress = function () {
            var a = this._numItemsLoaded / this._numItems,
                b = this._numItems - this._numItemsLoaded;
            if (b > 0) {
                for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) c += this._currentLoads[d].progress;
                a += c / b * (b / this._numItems)
            }
            this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a)
        }, b._disposeItem = function (a) {
            delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
        }, b._sendFileProgress = function (a, b) {
            if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
            }
        }, b._sendFileComplete = function (a, b) {
            if (!this._isCanceled() && !this._paused) {
                var c = new createjs.Event("fileload");
                c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
            }
        }, b._sendFileStart = function (a) {
            var b = new createjs.Event("filestart");
            b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
        }, b.toString = function () {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.TEXT)
        }
        var b = (createjs.extend(a, createjs.AbstractLoader), a);
        b.canLoadItem = function (a) {
            return a.type == createjs.Types.TEXT
        }, createjs.TextLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.BINARY
        }, b._updateXHR = function (a) {
            a.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", b ? this._tag = createjs.Elements.style() : this._tag = createjs.Elements.link(), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.CSS
        }, b._formatResult = function (a) {
            if (this._preferXHR) {
                var b = a.getTag();
                if (b.styleSheet) b.styleSheet.cssText = a.getResult(!0);
                else {
                    var c = createjs.Elements.text(a.getResult(!0));
                    b.appendChild(c)
                }
            } else b = this._tag;
            return createjs.DomUtils.appendToHead(b), b
        }, createjs.CSSLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, a.type), this._faces = {}, this._watched = [], this._count = 0, this._watchInterval = null, this._loadTimeout = null, this._injectCSS = void 0 === a.injectCSS ? !0 : a.injectCSS, this.dispatchEvent("initialize")
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        a.canLoadItem = function (a) {
            return a.type == createjs.Types.FONT || a.type == createjs.Types.FONTCSS
        }, a.sampleText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ", a._ctx = document.createElement("canvas").getContext("2d"), a._referenceFonts = ["serif", "monospace"], a.WEIGHT_REGEX = /[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi, a.STYLE_REGEX = /[- ._]*(italic|oblique)[- ._]*/gi, a.FONT_FORMAT = {
            woff2: "woff2",
            woff: "woff",
            ttf: "truetype",
            otf: "truetype"
        }, a.FONT_WEIGHT = {
            thin: 100,
            extralight: 200,
            ultralight: 200,
            light: 300,
            semilight: 300,
            demilight: 300,
            book: "normal",
            regular: "normal",
            semibold: 600,
            demibold: 600,
            extrabold: 800,
            ultrabold: 800,
            black: 900,
            heavy: 900
        }, a.WATCH_DURATION = 10, b.load = function () {
            if (this.type == createjs.Types.FONTCSS) {
                var a = this._watchCSS();
                if (!a) return void this.AbstractLoader_load()
            } else if (this._item.src instanceof Array) this._watchFontArray();
            else {
                var b = this._defFromSrc(this._item.src);
                this._watchFont(b), this._injectStyleTag(this._cssFromDef(b))
            }
            this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this.dispatchEvent("loadstart")
        }, b._handleTimeout = function () {
            this._stopWatching(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"))
        }, b._createRequest = function () {
            return this._request
        }, b.handleEvent = function (a) {
            switch (a.type) {
                case "complete":
                    this._rawResult = a.target._response, this._result = !0, this._parseCSS(this._rawResult);
                    break;
                case "error":
                    this._stopWatching(), this.AbstractLoader_handleEvent(a)
            }
        }, b._watchCSS = function () {
            var a = this._item.src;
            return a instanceof HTMLStyleElement && (this._injectCSS && !a.parentNode && (document.head || document.getElementsByTagName("head")[0]).appendChild(a), this._injectCSS = !1, a = "\n" + a.textContent), -1 !== a.search(/\n|\r|@font-face/i) ? (this._parseCSS(a), !0) : (this._request = new createjs.XHRRequest(this._item), !1)
        }, b._parseCSS = function (a) {
            for (var b = /@font-face\s*\{([^}]+)}/g; ;) {
                var c = b.exec(a);
                if (!c) break;
                this._watchFont(this._parseFontFace(c[1]))
            }
            this._injectStyleTag(a)
        }, b._watchFontArray = function () {
            for (var a, b = this._item.src, c = "", d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                a = "string" == typeof e ? this._defFromSrc(e) : this._defFromObj(e), this._watchFont(a), c += this._cssFromDef(a) + "\n"
            }
            this._injectStyleTag(c)
        }, b._injectStyleTag = function (a) {
            if (this._injectCSS) {
                var b = document.head || document.getElementsByTagName("head")[0],
                    c = document.createElement("style");
                c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c)
            }
        }, b._parseFontFace = function (a) {
            var b = this._getCSSValue(a, "font-family"),
                c = this._getCSSValue(a, "src");
            return b && c ? this._defFromObj({
                family: b,
                src: c,
                style: this._getCSSValue(a, "font-style"),
                weight: this._getCSSValue(a, "font-weight")
            }) : null
        }, b._watchFont = function (a) {
            a && !this._faces[a.id] && (this._faces[a.id] = a, this._watched.push(a), this._count++ , this._calculateReferenceSizes(a), this._startWatching())
        }, b._startWatching = function () {
            null == this._watchInterval && (this._watchInterval = setInterval(createjs.proxy(this._watch, this), a.WATCH_DURATION))
        }, b._stopWatching = function () {
            clearInterval(this._watchInterval), clearTimeout(this._loadTimeout), this._watchInterval = null
        }, b._watch = function () {
            for (var b = this._watched, c = a._referenceFonts, d = b.length, e = d - 1; e >= 0; e--)
                for (var f = b[e], g = f.refs, h = g.length - 1; h >= 0; h--) {
                    var i = this._getTextWidth(f.family + "," + c[h], f.weight, f.style);
                    if (i != g[h]) {
                        var j = new createjs.Event("fileload");
                        f.type = "font-family", j.item = f, this.dispatchEvent(j), b.splice(e, 1);
                        break
                    }
                }
            if (d !== b.length) {
                var j = new createjs.ProgressEvent(this._count - b.length, this._count);
                this.dispatchEvent(j)
            }
            0 === d && (this._stopWatching(), this._sendComplete())
        }, b._calculateReferenceSizes = function (b) {
            for (var c = a._referenceFonts, d = b.refs = [], e = 0; e < c.length; e++) d[e] = this._getTextWidth(c[e], b.weight, b.style)
        }, b._defFromSrc = function (b) {
            var c, d = /[- ._]+/g,
                e = b,
                f = null;
            c = e.search(/[?#]/), -1 !== c && (e = e.substr(0, c)), c = e.lastIndexOf("."), -1 !== c && (f = e.substr(c + 1), e = e.substr(0, c)), c = e.lastIndexOf("/"), -1 !== c && (e = e.substr(c + 1));
            var g = e,
                h = g.match(a.WEIGHT_REGEX);
            h && (h = h[0], g = g.replace(h, ""), h = h.replace(d, "").toLowerCase());
            var i = e.match(a.STYLE_REGEX);
            i && (g = g.replace(i[0], ""), i = "italic"), g = g.replace(d, "");
            var j = "local('" + e.replace(d, " ") + "'), url('" + b + "')",
                k = a.FONT_FORMAT[f];
            return k && (j += " format('" + k + "')"), this._defFromObj({
                family: g,
                weight: a.FONT_WEIGHT[h] || h,
                style: i,
                src: j
            })
        }, b._defFromObj = function (a) {
            var b = {
                family: a.family,
                src: a.src,
                style: a.style || "normal",
                weight: a.weight || "normal"
            };
            return b.id = b.family + ";" + b.style + ";" + b.weight, b
        }, b._cssFromDef = function (a) {
            return "@font-face {\n	font-family: '" + a.family + "';\n	font-style: " + a.style + ";\n	font-weight: " + a.weight + ";\n	src: " + a.src + ";\n}"
        }, b._getTextWidth = function (b, c, d) {
            var e = a._ctx;
            return e.font = d + " " + c + " 72px " + b, e.measureText(a.sampleText).width
        }, b._getCSSValue = function (a, b) {
            var c = new RegExp(b + ":s*([^;}]+?)s*[;}]"),
                d = c.exec(a);
            return d && d[1] ? d[1] : null
        }, createjs.FontLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.DomUtils.isImageTag(a) ? this._tag = a : createjs.DomUtils.isImageTag(a.src) ? this._tag = a.src : createjs.DomUtils.isImageTag(a.tag) && (this._tag = a.tag), null != this._tag ? this._preferXHR = !1 : this._tag = createjs.Elements.img(), this.on("initialize", this._updateXHR, this)
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.IMAGE
        }, b.load = function () {
            if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
            var a = this._item.crossOrigin;
            1 == a && (a = "Anonymous"), null == a || createjs.URLUtils.isLocal(this._item) || (this._tag.crossOrigin = a), this.AbstractLoader_load()
        }, b._updateXHR = function (a) {
            a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob")
        }, b._formatResult = function (a) {
            return this._formatImage
        }, b._formatImage = function (a, b) {
            var c = this._tag,
                d = window.URL || window.webkitURL;
            if (this._preferXHR)
                if (d) {
                    var e = d.createObjectURL(this.getResult(!0));
                    c.src = e, c.addEventListener("load", this._cleanUpURL, !1), c.addEventListener("error", this._cleanUpURL, !1)
                } else c.src = this._item.src;
            else;
            c.complete ? a(c) : (c.onload = createjs.proxy(function () {
                a(this._tag), c.onload = c.onerror = null
            }, this), c.onerror = createjs.proxy(function (a) {
                b(new createjs.ErrorEvent("IMAGE_FORMAT", null, a)), c.onload = c.onerror = null
            }, this))
        }, b._cleanUpURL = function (a) {
            var b = window.URL || window.webkitURL;
            b.revokeObjectURL(a.target.src)
        }, createjs.ImageLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(createjs.Elements.script())
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.JAVASCRIPT
        }, b._formatResult = function (a) {
            var b = a.getTag();
            return this._preferXHR && (b.text = a.getResult(!0)), b
        }, createjs.JavaScriptLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.JSON), this.resultFormatter = this._formatResult
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.JSON
        }, b._formatResult = function (a) {
            var b = null;
            try {
                b = createjs.DataUtils.parseJSON(a.getResult(!0))
            } catch (c) {
                var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);
                return this._sendError(d), c
            }
            return b
        }, createjs.JSONLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !1, createjs.Types.JSONP), this.setTag(createjs.Elements.script()), this.getTag().type = "text/javascript"
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.JSONP
        }, b.cancel = function () {
            this.AbstractLoader_cancel(), this._dispose()
        }, b.load = function () {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), createjs.DomUtils.appendToBody(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
        }, b._handleLoad = function (a) {
            this._result = this._rawResult = a, this._sendComplete(), this._dispose()
        }, b._handleTimeout = function () {
            this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
        }, b._dispose = function () {
            createjs.DomUtils.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
        }, createjs.JSONPLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.MANIFEST), this.plugins = null, this._manifestQueue = null
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.MANIFEST_PROGRESS = .25, c.canLoadItem = function (a) {
            return a.type == createjs.Types.MANIFEST
        }, b.load = function () {
            this.AbstractLoader_load()
        }, b._createRequest = function () {
            var a = this._item.callback;
            null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, b.handleEvent = function (a) {
            switch (a.type) {
                case "complete":
                    return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return a.loaded *= c.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
            }
            this.AbstractLoader_handleEvent(a)
        }, b.destroy = function () {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, b._loadManifest = function (a) {
            if (a && a.manifest) {
                var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR);
                b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("complete", this._handleManifestComplete, this, !0), b.on("error", this._handleManifestError, this, !0);
                for (var c = 0, d = this.plugins.length; d > c; c++) b.installPlugin(this.plugins[c]);
                b.loadManifest(a)
            } else this._sendComplete()
        }, b._handleManifestFileLoad = function (a) {
            a.target = null, this.dispatchEvent(a)
        }, b._handleManifestComplete = function (a) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, b._handleManifestProgress = function (a) {
            this.progress = a.progress * (1 - c.MANIFEST_PROGRESS) + c.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, b._handleManifestError = function (a) {
            var b = new createjs.Event("fileerror");
            b.item = a.data, this.dispatchEvent(b)
        }, createjs.ManifestLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractMediaLoader_constructor(a, b, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(a) ? this._tag = a : createjs.DomUtils.isAudioTag(a.src) ? this._tag = a : createjs.DomUtils.isAudioTag(a.tag) && (this._tag = createjs.DomUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1)
        }
        var b = createjs.extend(a, createjs.AbstractMediaLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.SOUND
        }, b._createTag = function (a) {
            var b = createjs.Elements.audio();
            return b.autoplay = !1, b.preload = "none", b.src = a, b
        }, createjs.SoundLoader = createjs.promote(a, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractMediaLoader_constructor(a, b, createjs.Types.VIDEO), createjs.DomUtils.isVideoTag(a) || createjs.DomUtils.isVideoTag(a.src) ? (this.setTag(createjs.DomUtils.isVideoTag(a) ? a : a.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var b = createjs.extend(a, createjs.AbstractMediaLoader),
            c = a;
        b._createTag = function () {
            return createjs.Elements.video()
        }, c.canLoadItem = function (a) {
            return a.type == createjs.Types.VIDEO
        }, createjs.VideoLoader = createjs.promote(a, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.SPRITESHEET), this._manifestQueue = null
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.SPRITESHEET_PROGRESS = .25, c.canLoadItem = function (a) {
            return a.type == createjs.Types.SPRITESHEET
        }, b.destroy = function () {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, b._createRequest = function () {
            var a = this._item.callback;
            null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, b.handleEvent = function (a) {
            switch (a.type) {
                case "complete":
                    return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return a.loaded *= c.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
            }
            this.AbstractLoader_handleEvent(a)
        }, b._loadManifest = function (a) {
            if (a && a.images) {
                var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                b.on("complete", this._handleManifestComplete, this, !0), b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("error", this._handleManifestError, this, !0), b.loadManifest(a.images)
            }
        }, b._handleManifestFileLoad = function (a) {
            var b = a.result;
            if (null != b) {
                var c = this.getResult().images,
                    d = c.indexOf(a.item.src);
                c[d] = b
            }
        }, b._handleManifestComplete = function (a) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, b._handleManifestProgress = function (a) {
            this.progress = a.progress * (1 - c.SPRITESHEET_PROGRESS) + c.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, b._handleManifestError = function (a) {
            var b = new createjs.Event("fileerror");
            b.item = a.data, this.dispatchEvent(b)
        }, createjs.SpriteSheetLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b) {
            this.AbstractLoader_constructor(a, b, createjs.Types.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", b ? this.setTag(createjs.Elements.svg()) : (this.setTag(createjs.Elements.object()), this.getTag().type = "image/svg+xml")
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.SVG
        }, b._formatResult = function (a) {
            var b = createjs.DataUtils.parseXML(a.getResult(!0)),
                c = a.getTag();
            if (!this._preferXHR && document.body.contains(c) && document.body.removeChild(c), null != b.documentElement) {
                var d = b.documentElement;
                return document.importNode && (d = document.importNode(d, !0)), c.appendChild(d), c
            }
            return b
        }, createjs.SVGLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.XML), this.resultFormatter = this._formatResult
        }
        var b = createjs.extend(a, createjs.AbstractLoader),
            c = a;
        c.canLoadItem = function (a) {
            return a.type == createjs.Types.XML
        }, b._formatResult = function (a) {
            return createjs.DataUtils.parseXML(a.getResult(!0))
        }, createjs.XMLLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        var a = createjs.SoundJS = createjs.SoundJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "BrowserDetect cannot be instantiated"
        }
        var b = a.agent = window.navigator.userAgent;
        a.isWindowPhone = b.indexOf("IEMobile") > -1 || b.indexOf("Windows Phone") > -1, a.isFirefox = b.indexOf("Firefox") > -1, a.isOpera = null != window.opera, a.isChrome = b.indexOf("Chrome") > -1, a.isIOS = (b.indexOf("iPod") > -1 || b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1) && !a.isWindowPhone, a.isAndroid = b.indexOf("Android") > -1 && !a.isWindowPhone, a.isBlackberry = b.indexOf("Blackberry") > -1, createjs.BrowserDetect = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = function () {
            this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
        },
            b = a.prototype = {},
            c = a;
        c.create = function (a) {
            if ("string" == typeof a) return console && (console.warn || console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."), (new createjs.PlayPropsConfig).set({
                interrupt: a
            });
            if (null == a || a instanceof c || a instanceof Object) return (new createjs.PlayPropsConfig).set(a);
            if (null == a) throw new Error("PlayProps configuration not recognized.")
        }, b.set = function (a) {
            if (null != a)
                for (var b in a) this[b] = a[b];
            return this
        }, b.toString = function () {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = c
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "Sound cannot be instantiated"
        }

        function b(a, b) {
            this.init(a, b)
        }
        var c = a;
        c.INTERRUPT_ANY = "any", c.INTERRUPT_EARLY = "early", c.INTERRUPT_LATE = "late", c.INTERRUPT_NONE = "none", c.PLAY_INITED = "playInited", c.PLAY_SUCCEEDED = "playSucceeded", c.PLAY_INTERRUPTED = "playInterrupted", c.PLAY_FINISHED = "playFinished", c.PLAY_FAILED = "playFailed", c.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], c.EXTENSION_MAP = {
            m4a: "mp4"
        }, c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.defaultInterruptBehavior = c.INTERRUPT_NONE, c.alternateExtensions = [], c.activePlugin = null, c._masterVolume = 1, c._getMasterVolume = function () {
            return this._masterVolume
        }, c.getVolume = createjs.deprecate(c._getMasterVolume, "Sound.getVolume"), c._setMasterVolume = function (a) {
            if (null != Number(a) && (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)))
                for (var b = this._instances, d = 0, e = b.length; e > d; d++) b[d].setMasterVolume(a)
        }, c.setVolume = createjs.deprecate(c._setMasterVolume, "Sound.setVolume"), c._masterMute = !1, c._getMute = function () {
            return this._masterMute
        }, c.getMute = createjs.deprecate(c._getMute, "Sound.getMute"), c._setMute = function (a) {
            if (null != a && (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)))
                for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a)
        }, c.setMute = createjs.deprecate(c._setMute, "Sound.setMute"), c._getCapabilities = function () {
            return null == c.activePlugin ? null : c.activePlugin._capabilities
        }, c.getCapabilities = createjs.deprecate(c._getCapabilities, "Sound.getCapabilities"), Object.defineProperties(c, {
            volume: {
                get: c._getMasterVolume,
                set: c._setMasterVolume
            },
            muted: {
                get: c._getMute,
                set: c._setMute
            },
            capabilities: {
                get: c._getCapabilities
            }
        }), c._pluginsRegistered = !1, c._lastID = 0, c._instances = [], c._idHash = {}, c._preloadHash = {}, c._defaultPlayPropsHash = {}, c.addEventListener = null, c.removeEventListener = null, c.removeAllEventListeners = null, c.dispatchEvent = null, c.hasEventListener = null, c._listeners = null, createjs.EventDispatcher.initialize(c), c.getPreloadHandlers = function () {
            return {
                callback: createjs.proxy(c.initLoad, c),
                types: ["sound"],
                extensions: c.SUPPORTED_EXTENSIONS
            }
        }, c._handleLoadComplete = function (a) {
            var b = a.target.getItem().src;
            if (c._preloadHash[b])
                for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
                    var f = c._preloadHash[b][d];
                    if (c._preloadHash[b][d] = !0, c.hasEventListener("fileload")) {
                        var a = new createjs.Event("fileload");
                        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
                    }
                }
        }, c._handleLoadError = function (a) {
            var b = a.target.getItem().src;
            if (c._preloadHash[b])
                for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
                    var f = c._preloadHash[b][d];
                    if (c._preloadHash[b][d] = !1, c.hasEventListener("fileerror")) {
                        var a = new createjs.Event("fileerror");
                        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
                    }
                }
        }, c._registerPlugin = function (a) {
            return a.isSupported() ? (c.activePlugin = new a, !0) : !1
        }, c.registerPlugins = function (a) {
            c._pluginsRegistered = !0;
            for (var b = 0, d = a.length; d > b; b++)
                if (c._registerPlugin(a[b])) return !0;
            return !1
        }, c.initializeDefaultPlugins = function () {
            return null != c.activePlugin ? !0 : c._pluginsRegistered ? !1 : c.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
        }, c.isReady = function () {
            return null != c.activePlugin
        }, c.initLoad = function (a) {
            return "video" == a.type ? !0 : c._registerSound(a)
        }, c._registerSound = function (a) {
            if (!c.initializeDefaultPlugins()) return !1;
            var d;
            if (a.src instanceof Object ? (d = c._parseSrc(a.src),
                d.src = a.path + d.src) : d = c._parsePath(a.src), null == d) return !1;
            a.src = d.src, a.type = "sound";
            var e = a.data,
                f = null;
            if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite))
                for (var g, h = e.audioSprite.length; h--;) g = e.audioSprite[h], c._idHash[g.id] = {
                    src: a.src,
                    startTime: parseInt(g.startTime),
                    duration: parseInt(g.duration)
                }, g.defaultPlayProps && (c._defaultPlayPropsHash[g.id] = createjs.PlayPropsConfig.create(g.defaultPlayProps));
            null != a.id && (c._idHash[a.id] = {
                src: a.src
            });
            var i = c.activePlugin.register(a);
            return b.create(a.src, f), null != e && isNaN(e) ? a.data.channels = f || b.maxPerChannel() : a.data = f || b.maxPerChannel(), i.type && (a.type = i.type), a.defaultPlayProps && (c._defaultPlayPropsHash[a.src] = createjs.PlayPropsConfig.create(a.defaultPlayProps)), i
        }, c.registerSound = function (a, b, d, e, f) {
            var g = {
                src: a,
                id: b,
                data: d,
                defaultPlayProps: f
            };
            a instanceof Object && a.src && (e = b, g = a), g = createjs.LoadItem.create(g), g.path = e, null == e || g.src instanceof Object || (g.src = e + g.src);
            var h = c._registerSound(g);
            if (!h) return !1;
            if (c._preloadHash[g.src] || (c._preloadHash[g.src] = []), c._preloadHash[g.src].push(g), 1 == c._preloadHash[g.src].length) h.on("complete", this._handleLoadComplete, this), h.on("error", this._handleLoadError, this), c.activePlugin.preload(h);
            else if (1 == c._preloadHash[g.src][0]) return !0;
            return g
        }, c.registerSounds = function (a, b) {
            var c = [];
            a.path && (b ? b += a.path : b = a.path, a = a.manifest);
            for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, b, a[d].defaultPlayProps);
            return c
        }, c.removeSound = function (a, d) {
            if (null == c.activePlugin) return !1;
            a instanceof Object && a.src && (a = a.src);
            var e;
            if (a instanceof Object ? e = c._parseSrc(a) : (a = c._getSrcById(a).src, e = c._parsePath(a)), null == e) return !1;
            a = e.src, null != d && (a = d + a);
            for (var f in c._idHash) c._idHash[f].src == a && delete c._idHash[f];
            return b.removeSrc(a), delete c._preloadHash[a], c.activePlugin.removeSound(a), !0
        }, c.removeSounds = function (a, b) {
            var c = [];
            a.path && (b ? b += a.path : b = a.path, a = a.manifest);
            for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
            return c
        }, c.removeAllSounds = function () {
            c._idHash = {}, c._preloadHash = {}, b.removeAll(), c.activePlugin && c.activePlugin.removeAllSounds()
        }, c.loadComplete = function (a) {
            if (!c.isReady()) return !1;
            var b = c._parsePath(a);
            return a = b ? c._getSrcById(b.src).src : c._getSrcById(a).src, void 0 == c._preloadHash[a] ? !1 : 1 == c._preloadHash[a][0]
        }, c._parsePath = function (a) {
            "string" != typeof a && (a = a.toString());
            var b = a.match(c.FILE_PATTERN);
            if (null == b) return !1;
            for (var d = b[4], e = b[5], f = c.capabilities, g = 0; !f[e];)
                if (e = c.alternateExtensions[g++], g > c.alternateExtensions.length) return null;
            a = a.replace("." + b[5], "." + e);
            var h = {
                name: d,
                src: a,
                extension: e
            };
            return h
        }, c._parseSrc = function (a) {
            var b = {
                name: void 0,
                src: void 0,
                extension: void 0
            },
                d = c.capabilities;
            for (var e in a)
                if (a.hasOwnProperty(e) && d[e]) {
                    b.src = a[e], b.extension = e;
                    break
                }
            if (!b.src) return !1;
            var f = b.src.lastIndexOf("/");
            return -1 != f ? b.name = b.src.slice(f + 1) : b.name = b.src, b
        }, c.play = function (a, b) {
            var d = createjs.PlayPropsConfig.create(b),
                e = c.createInstance(a, d.startTime, d.duration),
                f = c._playInstance(e, d);
            return f || e._playFailed(), e
        }, c.createInstance = function (a, d, e) {
            if (!c.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(a, d, e);
            var f = c._defaultPlayPropsHash[a];
            a = c._getSrcById(a);
            var g = c._parsePath(a.src),
                h = null;
            return null != g && null != g.src ? (b.create(g.src), null == d && (d = a.startTime), h = c.activePlugin.create(g.src, d, e || a.duration), f = f || c._defaultPlayPropsHash[g.src], f && h.applyPlayProps(f)) : h = new createjs.DefaultSoundInstance(a, d, e), h.uniqueId = c._lastID++ , h
        }, c.stop = function () {
            for (var a = this._instances, b = a.length; b--;) a[b].stop()
        }, c.setDefaultPlayProps = function (a, b) {
            a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src] = createjs.PlayPropsConfig.create(b)
        }, c.getDefaultPlayProps = function (a) {
            return a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src]
        }, c._playInstance = function (a, b) {
            var d = c._defaultPlayPropsHash[a.src] || {};
            if (null == b.interrupt && (b.interrupt = d.interrupt || c.defaultInterruptBehavior), null == b.delay && (b.delay = d.delay || 0), null == b.offset && (b.offset = a.position), null == b.loop && (b.loop = a.loop), null == b.volume && (b.volume = a.volume), null == b.pan && (b.pan = a.pan), 0 == b.delay) {
                var e = c._beginPlaying(a, b);
                if (!e) return !1
            } else {
                var f = setTimeout(function () {
                    c._beginPlaying(a, b)
                }, b.delay);
                a.delayTimeoutId = f
            }
            return this._instances.push(a), !0
        }, c._beginPlaying = function (a, c) {
            if (!b.add(a, c.interrupt)) return !1;
            var d = a._beginPlaying(c);
            if (!d) {
                var e = createjs.indexOf(this._instances, a);
                return e > -1 && this._instances.splice(e, 1), !1
            }
            return !0
        }, c._getSrcById = function (a) {
            return c._idHash[a] || {
                src: a
            }
        }, c._playFinished = function (a) {
            b.remove(a);
            var c = createjs.indexOf(this._instances, a);
            c > -1 && this._instances.splice(c, 1)
        }, createjs.Sound = a, b.channels = {}, b.create = function (a, c) {
            var d = b.get(a);
            return null == d ? (b.channels[a] = new b(a, c), !0) : !1
        }, b.removeSrc = function (a) {
            var c = b.get(a);
            return null == c ? !1 : (c._removeAll(), delete b.channels[a], !0)
        }, b.removeAll = function () {
            for (var a in b.channels) b.channels[a]._removeAll();
            b.channels = {}
        }, b.add = function (a, c) {
            var d = b.get(a.src);
            return null == d ? !1 : d._add(a, c)
        }, b.remove = function (a) {
            var c = b.get(a.src);
            return null == c ? !1 : (c._remove(a), !0)
        }, b.maxPerChannel = function () {
            return d.maxDefault
        }, b.get = function (a) {
            return b.channels[a]
        };
        var d = b.prototype;
        d.constructor = b, d.src = null, d.max = null, d.maxDefault = 100, d.length = 0, d.init = function (a, b) {
            this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, d._get = function (a) {
            return this._instances[a]
        }, d._add = function (a, b) {
            return this._getSlot(b, a) ? (this._instances.push(a), this.length++ , !0) : !1
        }, d._remove = function (a) {
            var b = createjs.indexOf(this._instances, a);
            return -1 == b ? !1 : (this._instances.splice(b, 1), this.length-- , !0)
        }, d._removeAll = function () {
            for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop()
        }, d._getSlot = function (b, c) {
            var d, e;
            if (b != a.INTERRUPT_NONE && (e = this._get(0), null == e)) return !0;
            for (var f = 0, g = this.max; g > f; f++) {
                if (d = this._get(f), null == d) return !0;
                if (d.playState == a.PLAY_FINISHED || d.playState == a.PLAY_INTERRUPTED || d.playState == a.PLAY_FAILED) {
                    e = d;
                    break
                }
                b != a.INTERRUPT_NONE && (b == a.INTERRUPT_EARLY && d.position < e.position || b == a.INTERRUPT_LATE && d.position > e.position) && (e = d)
            }
            return null != e ? (e._interrupt(), this._remove(e), !0) : !1
        }, d.toString = function () {
            return "[Sound SoundChannel]"
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = function (a, b, c, d) {
            this.EventDispatcher_constructor(), this.src = a, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                get: this._getVolume,
                set: this._setVolume
            }), this.getVolume = createjs.deprecate(this._getVolume, "AbstractSoundInstance.getVolume"), this.setVolume = createjs.deprecate(this._setVolume, "AbstractSoundInstance.setVolume"), this._pan = 0, Object.defineProperty(this, "pan", {
                get: this._getPan,
                set: this._setPan
            }), this.getPan = createjs.deprecate(this._getPan, "AbstractSoundInstance.getPan"), this.setPan = createjs.deprecate(this._setPan, "AbstractSoundInstance.setPan"), this._startTime = Math.max(0, b || 0), Object.defineProperty(this, "startTime", {
                get: this._getStartTime,
                set: this._setStartTime
            }), this.getStartTime = createjs.deprecate(this._getStartTime, "AbstractSoundInstance.getStartTime"), this.setStartTime = createjs.deprecate(this._setStartTime, "AbstractSoundInstance.setStartTime"), this._duration = Math.max(0, c || 0), Object.defineProperty(this, "duration", {
                get: this._getDuration,
                set: this._setDuration
            }), this.getDuration = createjs.deprecate(this._getDuration, "AbstractSoundInstance.getDuration"), this.setDuration = createjs.deprecate(this._setDuration, "AbstractSoundInstance.setDuration"), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                get: this._getPlaybackResource,
                set: this._setPlaybackResource
            }), d !== !1 && d !== !0 && this._setPlaybackResource(d), this.getPlaybackResource = createjs.deprecate(this._getPlaybackResource, "AbstractSoundInstance.getPlaybackResource"), this.setPlaybackResource = createjs.deprecate(this._setPlaybackResource, "AbstractSoundInstance.setPlaybackResource"), this._position = 0, Object.defineProperty(this, "position", {
                get: this._getPosition,
                set: this._setPosition
            }), this.getPosition = createjs.deprecate(this._getPosition, "AbstractSoundInstance.getPosition"), this.setPosition = createjs.deprecate(this._setPosition, "AbstractSoundInstance.setPosition"), this._loop = 0, Object.defineProperty(this, "loop", {
                get: this._getLoop,
                set: this._setLoop
            }), this.getLoop = createjs.deprecate(this._getLoop, "AbstractSoundInstance.getLoop"), this.setLoop = createjs.deprecate(this._setLoop, "AbstractSoundInstance.setLoop"), this._muted = !1, Object.defineProperty(this, "muted", {
                get: this._getMuted,
                set: this._setMuted
            }), this.getMuted = createjs.deprecate(this._getMuted, "AbstractSoundInstance.getMuted"), this.setMuted = createjs.deprecate(this._setMuted, "AbstractSoundInstance.setMuted"), this._paused = !1, Object.defineProperty(this, "paused", {
                get: this._getPaused,
                set: this._setPaused
            }), this.getPaused = createjs.deprecate(this._getPaused, "AbstractSoundInstance.getPaused"), this.setPaused = createjs.deprecate(this._setPaused, "AbstractSoundInstance.setPaused")
        },
            b = createjs.extend(a, createjs.EventDispatcher);
        b.play = function (a) {
            var b = createjs.PlayPropsConfig.create(a);
            return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(b), void (this._paused && this._setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, b), this)
        }, b.stop = function () {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, b.destroy = function () {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, b.applyPlayProps = function (a) {
            return null != a.offset && this._setPosition(a.offset), null != a.loop && this._setLoop(a.loop), null != a.volume && this._setVolume(a.volume), null != a.pan && this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), this
        }, b.toString = function () {
            return "[AbstractSoundInstance]"
        }, b._getPaused = function () {
            return this._paused
        }, b._setPaused = function (a) {
            return a !== !0 && a !== !1 || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
        }, b._setVolume = function (a) {
            return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this)
        }, b._getVolume = function () {
            return this._volume
        }, b._setMuted = function (a) {
            return a === !0 || a === !1 ? (this._muted = a, this._updateVolume(), this) : void 0
        }, b._getMuted = function () {
            return this._muted
        }, b._setPan = function (a) {
            return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this)
        }, b._getPan = function () {
            return this._pan
        }, b._getPosition = function () {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, b._setPosition = function (a) {
            return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, b._getStartTime = function () {
            return this._startTime
        }, b._setStartTime = function (a) {
            return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this)
        }, b._getDuration = function () {
            return this._duration
        }, b._setDuration = function (a) {
            return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this)
        }, b._setPlaybackResource = function (a) {
            return this._playbackResource = a, 0 == this._duration && this._playbackResource && this._setDurationFromSource(), this
        }, b._getPlaybackResource = function () {
            return this._playbackResource
        }, b._getLoop = function () {
            return this._loop
        }, b._setLoop = function (a) {
            null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a)), this._loop = a
        }, b._sendEvent = function (a) {
            var b = new createjs.Event(a);
            this.dispatchEvent(b)
        }, b._cleanUp = function () {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, b._interrupt = function () {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, b._beginPlaying = function (a) {
            return this._setPosition(a.offset), this._setLoop(a.loop), this._setVolume(a.volume), this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, b._playFailed = function () {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, b._handleSoundComplete = function (a) {
            return this._position = 0, 0 != this._loop ? (this._loop-- , this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
        }, b._handleSoundReady = function () { }, b._updateVolume = function () { }, b._updatePan = function () { }, b._updateStartTime = function () { }, b._updateDuration = function () { }, b._setDurationFromSource = function () { }, b._calculateCurrentPosition = function () { }, b._updatePosition = function () { }, b._removeLooping = function (a) { }, b._addLooping = function (a) { }, b._pause = function () { }, b._resume = function () { }, b._handleStop = function () { }, b._handleCleanUp = function () { }, b._handleLoop = function () { }, createjs.AbstractSoundInstance = createjs.promote(a, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = function () {
            this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
        },
            b = a.prototype;
        a._capabilities = null, a.isSupported = function () {
            return !0
        }, b.register = function (a) {
            var b = this._loaders[a.src];
            return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", this._handlePreloadComplete, this), this._loaders[a.src] = b, b)
        }, b.preload = function (a) {
            a.on("error", this._handlePreloadError, this), a.load()
        }, b.isPreloadStarted = function (a) {
            return null != this._audioSources[a]
        }, b.isPreloadComplete = function (a) {
            return !(null == this._audioSources[a] || 1 == this._audioSources[a])
        }, b.removeSound = function (a) {
            if (this._soundInstances[a]) {
                for (var b = this._soundInstances[a].length; b--;) {
                    var c = this._soundInstances[a][b];
                    c.destroy()
                }
                delete this._soundInstances[a], delete this._audioSources[a], this._loaders[a] && this._loaders[a].destroy(), delete this._loaders[a]
            }
        }, b.removeAllSounds = function () {
            for (var a in this._audioSources) this.removeSound(a)
        }, b.create = function (a, b, c) {
            this.isPreloadStarted(a) || this.preload(this.register(a));
            var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
            return this._soundInstances[a] && this._soundInstances[a].push(d), d.setMasterVolume && d.setMasterVolume(createjs.Sound.volume), d.setMasterMute && d.setMasterMute(createjs.Sound.muted), d
        }, b.setVolume = function (a) {
            return this._volume = a, this._updateVolume(), !0
        }, b.getVolume = function () {
            return this._volume
        }, b.setMute = function (a) {
            return this._updateVolume(), !0
        }, b.toString = function () {
            return "[AbstractPlugin]"
        }, b._handlePreloadComplete = function (a) {
            var b = a.target.getItem().src;
            this._audioSources[b] = a.result;
            for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
                var e = this._soundInstances[b][c];
                e.playbackResource = this._audioSources[b], this._soundInstances[b] = null
            }
        }, b._handlePreloadError = function (a) { }, b._updateVolume = function () { }, createjs.AbstractPlugin = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.AbstractLoader_constructor(a, !0, createjs.Types.SOUND)
        }
        var b = createjs.extend(a, createjs.AbstractLoader);
        a.context = null, b.toString = function () {
            return "[WebAudioLoader]"
        }, b._createRequest = function () {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, b._sendComplete = function (b) {
            a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, b._handleAudioDecoded = function (a) {
            this._result = a, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, d, e) {
            this.AbstractSoundInstance_constructor(a, b, d, e), this.gainNode = c.context.createGain(), this.panNode = c.context.createPanner(), this.panNode.panningModel = c._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var b = createjs.extend(a, createjs.AbstractSoundInstance),
            c = a;
        c.context = null, c._scratchBuffer = null, c.destinationNode = null, c._panningModel = "equalpower", b.destroy = function () {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, b.toString = function () {
            return "[WebAudioSoundInstance]"
        }, b._updatePan = function () {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, b._removeLooping = function (a) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, b._addLooping = function (a) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, b._setDurationFromSource = function () {
            this._duration = 1e3 * this.playbackResource.duration
        }, b._handleCleanUp = function () {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, b._cleanUpAudioNode = function (a) {
            if (a) {
                if (a.stop(0), a.disconnect(0), createjs.BrowserDetect.isIOS) try {
                    a.buffer = c._scratchBuffer
                } catch (b) { }
                a = null
            }
            return a
        }, b._handleSoundReady = function (a) {
            this.gainNode.connect(c.destinationNode);
            var b = .001 * this._duration,
                d = Math.min(.001 * Math.max(0, this._position), b);
            this.sourceNode = this._createAndPlayAudioNode(c.context.currentTime - b, d), this._playbackStartTime = this.sourceNode.startTime - d, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (b - d)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, b._createAndPlayAudioNode = function (a, b) {
            var d = c.context.createBufferSource();
            d.buffer = this.playbackResource, d.connect(this.panNode);
            var e = .001 * this._duration;
            return d.startTime = a + e, d.start(d.startTime, b + .001 * this._startTime, e - b), d
        }, b._pause = function () {
            this._position = 1e3 * (c.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, b._resume = function () {
            this._handleSoundReady()
        }, b._updateVolume = function () {
            var a = this._muted ? 0 : this._volume;
            a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
        }, b._calculateCurrentPosition = function () {
            return 1e3 * (c.context.currentTime - this._playbackStartTime)
        }, b._updatePosition = function () {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, b._handleLoop = function () {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, b._updateDuration = function () {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this._panningModel = c._panningModel, this.context = c.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = c._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var b = createjs.extend(a, createjs.AbstractPlugin),
            c = a;
        c._capabilities = null, c._panningModel = "equalpower", c.context = null, c._scratchBuffer = null, c._unlocked = !1, c.DEFAULT_SAMPLE_RATE = 44100, c.isSupported = function () {
            var a = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return "file:" != location.protocol || a || this._isFileXHRSupported() ? (c._generateCapabilities(), null == c.context ? !1 : !0) : !1
        }, c.playEmptySound = function () {
            if (null != c.context) {
                var a = c.context.createBufferSource();
                a.buffer = c._scratchBuffer, a.connect(c.context.destination), a.start(0, 0, 0)
            }
        }, c._isFileXHRSupported = function () {
            var a = !0,
                b = new XMLHttpRequest;
            try {
                b.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (c) {
                return a = !1
            }
            b.onerror = function () {
                a = !1
            }, b.onload = function () {
                a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                b.send()
            } catch (c) {
                a = !1
            }
            return a
        }, c._generateCapabilities = function () {
            if (null == c._capabilities) {
                var a = document.createElement("audio");
                if (null == a.canPlayType) return null;
                if (null == c.context && (c.context = c._createAudioContext(), null == c.context)) return null;
                null == c._scratchBuffer && (c._scratchBuffer = c.context.createBuffer(1, 1, 22050)), c._compatibilitySetUp(), "ontouchstart" in window && "running" != c.context.state && (c._unlock(), document.addEventListener("mousedown", c._unlock, !0), document.addEventListener("touchstart", c._unlock, !0), document.addEventListener("touchend", c._unlock, !0)), c._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = d[g] || g;
                    c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
                c.context.destination.numberOfChannels < 2 && (c._capabilities.panning = !1)
            }
        }, c._createAudioContext = function () {
            var a = window.AudioContext || window.webkitAudioContext;
            if (null == a) return null;
            var b = new a;
            if (/(iPhone|iPad)/i.test(navigator.userAgent) && b.sampleRate !== c.DEFAULT_SAMPLE_RATE) {
                var d = b.createBuffer(1, 1, c.DEFAULT_SAMPLE_RATE),
                    e = b.createBufferSource();
                e.buffer = d, e.connect(b.destination), e.start(0), e.disconnect(), b.close(), b = new a
            }
            return b
        }, c._compatibilitySetUp = function () {
            if (c._panningModel = "equalpower", !c.context.createGain) {
                c.context.createGain = c.context.createGainNode;
                var a = c.context.createBufferSource();
                a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, c._panningModel = 0
            }
        }, c._unlock = function () {
            c._unlocked || (c.playEmptySound(), "running" == c.context.state && (document.removeEventListener("mousedown", c._unlock, !0), document.removeEventListener("touchend", c._unlock, !0), document.removeEventListener("touchstart", c._unlock, !0), c._unlocked = !0))
        }, b.toString = function () {
            return "[WebAudioPlugin]"
        }, b._addPropsToClasses = function () {
            var a = this._soundInstanceClass;
            a.context = this.context, a._scratchBuffer = c._scratchBuffer, a.destinationNode = this.gainNode, a._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, b._updateVolume = function () {
            var a = createjs.Sound._masterMute ? 0 : this._volume;
            a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
        }, createjs.WebAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function b(a) {
            this._tags = []
        }
        var c = a;
        c._tags = {}, c._tagPool = new b, c._tagUsed = {}, c.get = function (a) {
            var b = c._tags[a];
            return null == b ? (b = c._tags[a] = c._tagPool.get(), b.src = a) : c._tagUsed[a] ? (b = c._tagPool.get(), b.src = a) : c._tagUsed[a] = !0, b
        }, c.set = function (a, b) {
            b == c._tags[a] ? c._tagUsed[a] = !1 : c._tagPool.set(b)
        }, c.remove = function (a) {
            var b = c._tags[a];
            return null == b ? !1 : (c._tagPool.set(b), delete c._tags[a], delete c._tagUsed[a], !0)
        }, c.getDuration = function (a) {
            var b = c._tags[a];
            return null != b && b.duration ? 1e3 * b.duration : 0
        }, createjs.HTMLAudioTagPool = a;
        var d = b.prototype;
        d.constructor = b, d.get = function () {
            var a;
            return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a
        }, d.set = function (a) {
            var b = createjs.indexOf(this._tags, a); - 1 == b && (this._tags.src = null, this._tags.push(a))
        }, d.toString = function () {
            return "[TagPool]"
        }, d._createTag = function () {
            var a = document.createElement("audio");
            return a.autoplay = !1, a.preload = "none", a
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a, b, c, d) {
            this.AbstractSoundInstance_constructor(a, b, c, d), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var b = createjs.extend(a, createjs.AbstractSoundInstance);
        b.setMasterVolume = function (a) {
            this._updateVolume()
        }, b.setMasterMute = function (a) {
            this._updateVolume()
        }, b.toString = function () {
            return "[HTMLAudioSoundInstance]"
        }, b._removeLooping = function () {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._addLooping = function () {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, b._handleCleanUp = function () {
            var a = this._playbackResource;
            if (null != a) {
                a.pause(), a.loop = !1, a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    a.currentTime = this._startTime
                } catch (b) { }
                createjs.HTMLAudioTagPool.set(this.src, a), this._playbackResource = null
            }
        }, b._beginPlaying = function (a) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a)
        }, b._handleSoundReady = function (a) {
            if (4 !== this._playbackResource.readyState) {
                var b = this._playbackResource;
                return b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), b.preload = "auto", void b.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, b._handleTagReady = function (a) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, b._pause = function () {
            this._playbackResource.pause()
        }, b._resume = function () {
            this._playbackResource.play()
        }, b._updateVolume = function () {
            if (null != this._playbackResource) {
                var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                a != this._playbackResource.volume && (this._playbackResource.volume = a)
            }
        }, b._calculateCurrentPosition = function () {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, b._updatePosition = function () {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (a) {
                this._handleSetPositionSeek(null)
            }
        }, b._handleSetPositionSeek = function (a) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._handleAudioSpriteLoop = function (a) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop-- , this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, b._handleLoop = function (a) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, b._updateStartTime = function () {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, b._updateDuration = function () {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, b._setDurationFromSource = function () {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this._capabilities = c._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var b = createjs.extend(a, createjs.AbstractPlugin),
            c = a;
        c.MAX_INSTANCES = 30, c._AUDIO_READY = "canplaythrough", c._AUDIO_ENDED = "ended", c._AUDIO_SEEKED = "seeked", c._AUDIO_STALLED = "stalled", c._TIME_UPDATE = "timeupdate", c._capabilities = null, c.isSupported = function () {
            return c._generateCapabilities(), null != c._capabilities
        }, c._generateCapabilities = function () {
            if (null == c._capabilities) {
                var a = document.createElement("audio");
                if (null == a.canPlayType) return null;
                c._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = d[g] || g;
                    c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
                }
            }
        }, b.register = function (a) {
            var b = createjs.HTMLAudioTagPool.get(a.src),
                c = this.AbstractPlugin_register(a);
            return c.setTag(b), c
        }, b.removeSound = function (a) {
            this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a)
        }, b.create = function (a, b, c) {
            var d = this.AbstractPlugin_create(a, b, c);
            return d.playbackResource = null, d
        }, b.toString = function () {
            return "[HTMLAudioPlugin]"
        }, b.setVolume = b.getVolume = b.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.loop = 0, this.useTicks = !1, this.reversed = !1, this.bounce = !1, this.timeScale = 1, this.duration = 0, this.position = 0, this.rawPosition = -1, this._paused = !0, this._next = null,
                this._prev = null, this._parent = null, this._labels = null, this._labelList = null, a && (this.useTicks = !!a.useTicks, this.ignoreGlobalPause = !!a.ignoreGlobalPause, this.loop = a.loop === !0 ? -1 : a.loop || 0, this.reversed = !!a.reversed, this.bounce = !!a.bounce, this.timeScale = a.timeScale || 1, a.onChange && this.addEventListener("change", a.onChange), a.onComplete && this.addEventListener("complete", a.onComplete))
        }
        var b = createjs.extend(a, createjs.EventDispatcher);
        b._setPaused = function (a) {
            return createjs.Tween._register(this, a), this
        }, b.setPaused = createjs.deprecate(b._setPaused, "AbstractTween.setPaused"), b._getPaused = function () {
            return this._paused
        }, b.getPaused = createjs.deprecate(b._getPaused, "AbstactTween.getPaused"), b._getCurrentLabel = function (a) {
            var b = this.getLabels();
            null == a && (a = this.position);
            for (var c = 0, d = b.length; d > c && !(a < b[c].position); c++);
            return 0 === c ? null : b[c - 1].label
        }, b.getCurrentLabel = createjs.deprecate(b._getCurrentLabel, "AbstractTween.getCurrentLabel");
        try {
            Object.defineProperties(b, {
                paused: {
                    set: b._setPaused,
                    get: b._getPaused
                },
                currentLabel: {
                    get: b._getCurrentLabel
                }
            })
        } catch (c) { }
        b.advance = function (a, b) {
            this.setPosition(this.rawPosition + a * this.timeScale, b)
        }, b.setPosition = function (a, b, c, d) {
            var e = this.duration,
                f = this.loop,
                g = this.rawPosition,
                h = 0,
                i = 0,
                j = !1;
            if (0 > a && (a = 0), 0 === e) {
                if (j = !0, -1 !== g) return j
            } else {
                if (h = a / e | 0, i = a - h * e, j = -1 !== f && a >= f * e + e, j && (a = (i = e) * (h = f) + e), a === g) return j;
                var k = !this.reversed != !(this.bounce && h % 2);
                k && (i = e - i)
            }
            this.position = i, this.rawPosition = a, this._updatePosition(c, j), j && (this.paused = !0), d && d(this), b || this._runActions(g, a, c, !c && -1 === g), this.dispatchEvent("change"), j && this.dispatchEvent("complete")
        }, b.calculatePosition = function (a) {
            var b = this.duration,
                c = this.loop,
                d = 0,
                e = 0;
            if (0 === b) return 0; - 1 !== c && a >= c * b + b ? (e = b, d = c) : 0 > a ? e = 0 : (d = a / b | 0, e = a - d * b);
            var f = !this.reversed != !(this.bounce && d % 2);
            return f ? b - e : e
        }, b.getLabels = function () {
            var a = this._labelList;
            if (!a) {
                a = this._labelList = [];
                var b = this._labels;
                for (var c in b) a.push({
                    label: c,
                    position: b[c]
                });
                a.sort(function (a, b) {
                    return a.position - b.position
                })
            }
            return a
        }, b.setLabels = function (a) {
            this._labels = a, this._labelList = null
        }, b.addLabel = function (a, b) {
            this._labels || (this._labels = {}), this._labels[a] = b;
            var c = this._labelList;
            if (c) {
                for (var d = 0, e = c.length; e > d && !(b < c[d].position); d++);
                c.splice(d, 0, {
                    label: a,
                    position: b
                })
            }
        }, b.gotoAndPlay = function (a) {
            this.paused = !1, this._goto(a)
        }, b.gotoAndStop = function (a) {
            this.paused = !0, this._goto(a)
        }, b.resolve = function (a) {
            var b = Number(a);
            return isNaN(b) && (b = this._labels && this._labels[a]), b
        }, b.toString = function () {
            return "[AbstractTween]"
        }, b.clone = function () {
            throw "AbstractTween can not be cloned."
        }, b._init = function (a) {
            a && a.paused || (this.paused = !1), a && null != a.position && this.setPosition(a.position)
        }, b._updatePosition = function (a, b) { }, b._goto = function (a) {
            var b = this.resolve(a);
            null != b && this.setPosition(b, !1, !0)
        }, b._runActions = function (a, b, c, d) {
            if (this._actionHead || this.tweens) {
                var e, f, g, h, i = this.duration,
                    j = this.reversed,
                    k = this.bounce,
                    l = this.loop;
                if (0 === i ? (e = f = g = h = 0, j = k = !1) : (e = a / i | 0, f = b / i | 0, g = a - e * i, h = b - f * i), -1 !== l && (f > l && (h = i, f = l), e > l && (g = i, e = l)), c) return this._runActionsRange(h, h, c, d);
                if (e !== f || g !== h || c || d) {
                    -1 === e && (e = g = 0);
                    var m = b >= a,
                        n = e;
                    do {
                        var o = !j != !(k && n % 2),
                            p = n === e ? g : m ? 0 : i,
                            q = n === f ? h : m ? i : 0;
                        if (o && (p = i - p, q = i - q), k && n !== e && p === q);
                        else if (this._runActionsRange(p, q, c, d || n !== e && !k)) return !0;
                        d = !1
                    } while (m && ++n <= f || !m && --n >= f)
                }
            }
        }, b._runActionsRange = function (a, b, c, d) { }, createjs.AbstractTween = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(c, d) {
            this.AbstractTween_constructor(d), this.pluginData = null, this.target = c, this.passive = !1, this._stepHead = new b(null, 0, 0, {}, null, !0), this._stepTail = this._stepHead, this._stepPosition = 0, this._actionHead = null, this._actionTail = null, this._plugins = null, this._pluginIds = null, this._injected = null, d && (this.pluginData = d.pluginData, d.override && a.removeTweens(c)), this.pluginData || (this.pluginData = {}), this._init(d)
        }

        function b(a, b, c, d, e, f) {
            this.next = null, this.prev = a, this.t = b, this.d = c, this.props = d, this.ease = e, this.passive = f, this.index = a ? a.index + 1 : 0
        }

        function c(a, b, c, d, e) {
            this.next = null, this.prev = a, this.t = b, this.d = 0, this.scope = c, this.funct = d, this.params = e
        }
        var d = createjs.extend(a, createjs.AbstractTween);
        a.IGNORE = {}, a._tweens = [], a._plugins = null, a._tweenHead = null, a._tweenTail = null, a.get = function (b, c) {
            return new a(b, c)
        }, a.tick = function (b, c) {
            for (var d = a._tweenHead; d;) {
                var e = d._next;
                c && !d.ignoreGlobalPause || d._paused || d.advance(d.useTicks ? 1 : b), d = e
            }
        }, a.handleEvent = function (a) {
            "tick" === a.type && this.tick(a.delta, a.paused)
        }, a.removeTweens = function (b) {
            if (b.tweenjs_count) {
                for (var c = a._tweenHead; c;) {
                    var d = c._next;
                    c.target === b && a._register(c, !0), c = d
                }
                b.tweenjs_count = 0
            }
        }, a.removeAllTweens = function () {
            for (var b = a._tweenHead; b;) {
                var c = b._next;
                b._paused = !0, b.target && (b.target.tweenjs_count = 0), b._next = b._prev = null, b = c
            }
            a._tweenHead = a._tweenTail = null
        }, a.hasActiveTweens = function (b) {
            return b ? !!b.tweenjs_count : !!a._tweenHead
        }, a._installPlugin = function (b) {
            for (var c = b.priority = b.priority || 0, d = a._plugins = a._plugins || [], e = 0, f = d.length; f > e && !(c < d[e].priority); e++);
            d.splice(e, 0, b)
        }, a._register = function (b, c) {
            var d = b.target;
            if (!c && b._paused) {
                d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1);
                var e = a._tweenTail;
                e ? (a._tweenTail = e._next = b, b._prev = e) : a._tweenHead = a._tweenTail = b, !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), a._inited = !0)
            } else if (c && !b._paused) {
                d && d.tweenjs_count--;
                var f = b._next,
                    g = b._prev;
                f ? f._prev = g : a._tweenTail = g, g ? g._next = f : a._tweenHead = f, b._next = b._prev = null
            }
            b._paused = c
        }, d.wait = function (a, b) {
            return a > 0 && this._addStep(+a, this._stepTail.props, null, b), this
        }, d.to = function (a, b, c) {
            (null == b || 0 > b) && (b = 0);
            var d = this._addStep(+b, null, c);
            return this._appendProps(a, d), this
        }, d.label = function (a) {
            return this.addLabel(a, this.duration), this
        }, d.call = function (a, b, c) {
            return this._addAction(c || this.target, a, b || [this])
        }, d.set = function (a, b) {
            return this._addAction(b || this.target, this._set, [a])
        }, d.play = function (a) {
            return this._addAction(a || this, this._set, [{
                paused: !1
            }])
        }, d.pause = function (a) {
            return this._addAction(a || this, this._set, [{
                paused: !0
            }])
        }, d.w = d.wait, d.t = d.to, d.c = d.call, d.s = d.set, d.toString = function () {
            return "[Tween]"
        }, d.clone = function () {
            throw "Tween can not be cloned."
        }, d._addPlugin = function (a) {
            var b = this._pluginIds || (this._pluginIds = {}),
                c = a.ID;
            if (c && !b[c]) {
                b[c] = !0;
                for (var d = this._plugins || (this._plugins = []), e = a.priority || 0, f = 0, g = d.length; g > f; f++)
                    if (e < d[f].priority) return void d.splice(f, 0, a);
                d.push(a)
            }
        }, d._updatePosition = function (a, b) {
            var c = this._stepHead.next,
                d = this.position,
                e = this.duration;
            if (this.target && c) {
                for (var f = c.next; f && f.t <= d;) c = c.next, f = c.next;
                var g = b ? 0 === e ? 1 : d / e : (d - c.t) / c.d;
                this._updateTargetProps(c, g, b)
            }
            this._stepPosition = c ? d - c.t : 0
        }, d._updateTargetProps = function (b, c, d) {
            if (!(this.passive = !!b.passive)) {
                var e, f, g, h, i = b.prev.props,
                    j = b.props;
                (h = b.ease) && (c = h(c, 0, 1, 1));
                var k = this._plugins;
                a: for (var l in i) {
                    if (f = i[l], g = j[l], e = f !== g && "number" == typeof f ? f + (g - f) * c : c >= 1 ? g : f, k)
                        for (var m = 0, n = k.length; n > m; m++) {
                            var o = k[m].change(this, b, l, e, c, d);
                            if (o === a.IGNORE) continue a;
                            void 0 !== o && (e = o)
                        }
                    this.target[l] = e
                }
            }
        }, d._runActionsRange = function (a, b, c, d) {
            var e = a > b,
                f = e ? this._actionTail : this._actionHead,
                g = b,
                h = a;
            e && (g = a, h = b);
            for (var i = this.position; f;) {
                var j = f.t;
                if ((j === b || j > h && g > j || d && j === a) && (f.funct.apply(f.scope, f.params), i !== this.position)) return !0;
                f = e ? f.prev : f.next
            }
        }, d._appendProps = function (b, c, d) {
            var e, f, g, h, i, j = this._stepHead.props,
                k = this.target,
                l = a._plugins,
                m = c.prev,
                n = m.props,
                o = c.props || (c.props = this._cloneProps(n)),
                p = {};
            for (e in b)
                if (b.hasOwnProperty(e) && (p[e] = o[e] = b[e], void 0 === j[e])) {
                    if (h = void 0, l)
                        for (f = l.length - 1; f >= 0; f--)
                            if (g = l[f].init(this, e, h), void 0 !== g && (h = g), h === a.IGNORE) {
                                delete o[e], delete p[e];
                                break
                            }
                    h !== a.IGNORE && (void 0 === h && (h = k[e]), n[e] = void 0 === h ? null : h)
                }
            for (e in p) {
                g = b[e];
                for (var q, r = m;
                    (q = r) && (r = q.prev);)
                    if (r.props !== q.props) {
                        if (void 0 !== r.props[e]) break;
                        r.props[e] = n[e]
                    }
            }
            if (d !== !1 && (l = this._plugins))
                for (f = l.length - 1; f >= 0; f--) l[f].step(this, c, p);
            (i = this._injected) && (this._injected = null, this._appendProps(i, c, !1))
        }, d._injectProp = function (a, b) {
            var c = this._injected || (this._injected = {});
            c[a] = b
        }, d._addStep = function (a, c, d, e) {
            var f = new b(this._stepTail, this.duration, a, c, d, e || !1);
            return this.duration += a, this._stepTail = this._stepTail.next = f
        }, d._addAction = function (a, b, d) {
            var e = new c(this._actionTail, this.duration, a, b, d);
            return this._actionTail ? this._actionTail.next = e : this._actionHead = e, this._actionTail = e, this
        }, d._set = function (a) {
            for (var b in a) this[b] = a[b]
        }, d._cloneProps = function (a) {
            var b = {};
            for (var c in a) b[c] = a[c];
            return b
        }, createjs.Tween = createjs.promote(a, "AbstractTween")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a(a) {
            var b, c;
            a instanceof Array || null == a && arguments.length > 1 ? (b = a, c = arguments[1], a = arguments[2]) : a && (b = a.tweens, c = a.labels), this.AbstractTween_constructor(a), this.tweens = [], b && this.addTween.apply(this, b), this.setLabels(c), this._init(a)
        }
        var b = createjs.extend(a, createjs.AbstractTween);
        b.addTween = function (a) {
            a._parent && a._parent.removeTween(a);
            var b = arguments.length;
            if (b > 1) {
                for (var c = 0; b > c; c++) this.addTween(arguments[c]);
                return arguments[b - 1]
            }
            if (0 === b) return null;
            this.tweens.push(a), a._parent = this, a.paused = !0;
            var d = a.duration;
            return a.loop > 0 && (d *= a.loop + 1), d > this.duration && (this.duration = d), this.rawPosition >= 0 && a.setPosition(this.rawPosition), a
        }, b.removeTween = function (a) {
            var b = arguments.length;
            if (b > 1) {
                for (var c = !0, d = 0; b > d; d++) c = c && this.removeTween(arguments[d]);
                return c
            }
            if (0 === b) return !0;
            for (var e = this.tweens, d = e.length; d--;)
                if (e[d] === a) return e.splice(d, 1), a._parent = null, a.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, b.updateDuration = function () {
            this.duration = 0;
            for (var a = 0, b = this.tweens.length; b > a; a++) {
                var c = this.tweens[a],
                    d = c.duration;
                c.loop > 0 && (d *= c.loop + 1), d > this.duration && (this.duration = d)
            }
        }, b.toString = function () {
            return "[Timeline]"
        }, b.clone = function () {
            throw "Timeline can not be cloned."
        }, b._updatePosition = function (a, b) {
            for (var c = this.position, d = 0, e = this.tweens.length; e > d; d++) this.tweens[d].setPosition(c, !0, a)
        }, b._runActionsRange = function (a, b, c, d) {
            for (var e = this.position, f = 0, g = this.tweens.length; g > f; f++)
                if (this.tweens[f]._runActions(a, b, c, d), e !== this.position) return !0
        }, createjs.Timeline = createjs.promote(a, "AbstractTween")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "Ease cannot be instantiated."
        }
        a.linear = function (a) {
            return a
        }, a.none = a.linear, a.get = function (a) {
            return -1 > a ? a = -1 : a > 1 && (a = 1),
                function (b) {
                    return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                }
        }, a.getPowIn = function (a) {
            return function (b) {
                return Math.pow(b, a)
            }
        }, a.getPowOut = function (a) {
            return function (b) {
                return 1 - Math.pow(1 - b, a)
            }
        }, a.getPowInOut = function (a) {
            return function (b) {
                return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
            }
        }, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function (a) {
            return 1 - Math.cos(a * Math.PI / 2)
        }, a.sineOut = function (a) {
            return Math.sin(a * Math.PI / 2)
        }, a.sineInOut = function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        }, a.getBackIn = function (a) {
            return function (b) {
                return b * b * ((a + 1) * b - a)
            }
        }, a.backIn = a.getBackIn(1.7), a.getBackOut = function (a) {
            return function (b) {
                return --b * b * ((a + 1) * b + a) + 1
            }
        }, a.backOut = a.getBackOut(1.7), a.getBackInOut = function (a) {
            return a *= 1.525,
                function (b) {
                    return (b *= 2) < 1 ? .5 * (b * b * ((a + 1) * b - a)) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                }
        }, a.backInOut = a.getBackInOut(1.7), a.circIn = function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }, a.circOut = function (a) {
            return Math.sqrt(1 - --a * a)
        }, a.circInOut = function (a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, a.bounceIn = function (b) {
            return 1 - a.bounceOut(1 - b)
        }, a.bounceOut = function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, a.bounceInOut = function (b) {
            return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
        }, a.getElasticIn = function (a, b) {
            var c = 2 * Math.PI;
            return function (d) {
                if (0 == d || 1 == d) return d;
                var e = b / c * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
            }
        }, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function (a, b) {
            var c = 2 * Math.PI;
            return function (d) {
                if (0 == d || 1 == d) return d;
                var e = b / c * Math.asin(1 / a);
                return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
            }
        }, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function (a, b) {
            var c = 2 * Math.PI;
            return function (d) {
                var e = b / c * Math.asin(1 / a);
                return (d *= 2) < 1 ? -.5 * (a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b)) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1
            }
        }, a.elasticInOut = a.getElasticInOut(1, .3 * 1.5), createjs.Ease = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function a() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        var b = a;
        b.priority = 0, b.ID = "MotionGuide", b.install = function () {
            return createjs.Tween._installPlugin(a), createjs.Tween.IGNORE
        }, b.init = function (a, c, d) {
            "guide" == c && a._addPlugin(b)
        }, b.step = function (a, c, d) {
            for (var e in d)
                if ("guide" === e) {
                    var f = c.props.guide,
                        g = b._solveGuideData(d.guide, f);
                    f.valid = !g;
                    var h = f.endData;
                    if (a._injectProp("x", h.x), a._injectProp("y", h.y), g || !f.orient) break;
                    var i = void 0 === c.prev.props.rotation ? a.target.rotation || 0 : c.prev.props.rotation;
                    if (f.startOffsetRot = i - f.startData.rotation, "fixed" == f.orient) f.endAbsRot = h.rotation + f.startOffsetRot, f.deltaRotation = 0;
                    else {
                        var j = void 0 === d.rotation ? a.target.rotation || 0 : d.rotation,
                            k = j - f.endData.rotation - f.startOffsetRot,
                            l = k % 360;
                        switch (f.endAbsRot = j, f.orient) {
                            case "auto":
                                f.deltaRotation = k;
                                break;
                            case "cw":
                                f.deltaRotation = (l + 360) % 360 + 360 * Math.abs(k / 360 | 0);
                                break;
                            case "ccw":
                                f.deltaRotation = (l - 360) % 360 + -360 * Math.abs(k / 360 | 0)
                        }
                    }
                    a._injectProp("rotation", f.endAbsRot)
                }
        }, b.change = function (a, c, d, e, f, g) {
            var h = c.props.guide;
            if (h && c.props !== c.prev.props && h !== c.prev.props.guide) return "guide" === d && !h.valid || "x" == d || "y" == d || "rotation" === d && h.orient ? createjs.Tween.IGNORE : void b._ratioToPositionData(f, h, a.target)
        }, b.debug = function (a, c, d) {
            a = a.guide || a;
            var e = b._findPathProblems(a);
            if (e && console.error("MotionGuidePlugin Error found: \n" + e), !c) return e;
            var f, g = a.path,
                h = g.length,
                i = 3,
                j = 9;
            for (c.save(), c.lineCap = "round", c.lineJoin = "miter", c.beginPath(), c.moveTo(g[0], g[1]), f = 2; h > f; f += 4) c.quadraticCurveTo(g[f], g[f + 1], g[f + 2], g[f + 3]);
            c.strokeStyle = "black", c.lineWidth = 1.5 * i, c.stroke(), c.strokeStyle = "white", c.lineWidth = i, c.stroke(), c.closePath();
            var k = d.length;
            if (d && k) {
                var l = {},
                    m = {};
                b._solveGuideData(a, l);
                for (var f = 0; k > f; f++) l.orient = "fixed", b._ratioToPositionData(d[f], l, m), c.beginPath(), c.moveTo(m.x, m.y), c.lineTo(m.x + Math.cos(.0174533 * m.rotation) * j, m.y + Math.sin(.0174533 * m.rotation) * j), c.strokeStyle = "black", c.lineWidth = 1.5 * i, c.stroke(), c.strokeStyle = "red", c.lineWidth = i, c.stroke(), c.closePath()
            }
            return c.restore(), e
        }, b._solveGuideData = function (a, c) {
            var d = void 0;
            if (d = b.debug(a)) return d;
            var e = c.path = a.path;
            c.orient = a.orient;
            c.subLines = [], c.totalLength = 0, c.startOffsetRot = 0, c.deltaRotation = 0, c.startData = {
                ratio: 0
            }, c.endData = {
                ratio: 1
            }, c.animSpan = 1;
            var f, g, h, i, j, k, l, m, n, o = e.length,
                p = 10,
                q = {};
            for (f = e[0], g = e[1], l = 2; o > l; l += 4) {
                h = e[l], i = e[l + 1], j = e[l + 2], k = e[l + 3];
                var r = {
                    weightings: [],
                    estLength: 0,
                    portion: 0
                },
                    s = f,
                    t = g;
                for (m = 1; p >= m; m++) {
                    b._getParamsForCurve(f, g, h, i, j, k, m / p, !1, q);
                    var u = q.x - s,
                        v = q.y - t;
                    n = Math.sqrt(u * u + v * v), r.weightings.push(n), r.estLength += n, s = q.x, t = q.y
                }
                for (c.totalLength += r.estLength, m = 0; p > m; m++) n = r.estLength, r.weightings[m] = r.weightings[m] / n;
                c.subLines.push(r), f = j, g = k
            }
            n = c.totalLength;
            var w = c.subLines.length;
            for (l = 0; w > l; l++) c.subLines[l].portion = c.subLines[l].estLength / n;
            var x = isNaN(a.start) ? 0 : a.start,
                y = isNaN(a.end) ? 1 : a.end;
            b._ratioToPositionData(x, c, c.startData), b._ratioToPositionData(y, c, c.endData), c.startData.ratio = x, c.endData.ratio = y, c.animSpan = c.endData.ratio - c.startData.ratio
        }, b._ratioToPositionData = function (a, c, d) {
            var e, f, g, h, i, j = c.subLines,
                k = 0,
                l = 10,
                m = a * c.animSpan + c.startData.ratio;
            for (f = j.length, e = 0; f > e; e++) {
                if (h = j[e].portion, k + h >= m) {
                    i = e;
                    break
                }
                k += h
            }
            void 0 === i && (i = f - 1, k -= h);
            var n = j[i].weightings,
                o = h;
            for (f = n.length, e = 0; f > e && (h = n[e] * o, !(k + h >= m)); e++) k += h;
            i = 4 * i + 2, g = e / l + (m - k) / h * (1 / l);
            var p = c.path;
            return b._getParamsForCurve(p[i - 2], p[i - 1], p[i], p[i + 1], p[i + 2], p[i + 3], g, c.orient, d), c.orient && (a >= .99999 && 1.00001 >= a && void 0 !== c.endAbsRot ? d.rotation = c.endAbsRot : d.rotation += c.startOffsetRot + a * c.deltaRotation), d
        }, b._getParamsForCurve = function (a, b, c, d, e, f, g, h, i) {
            var j = 1 - g;
            i.x = j * j * a + 2 * j * g * c + g * g * e, i.y = j * j * b + 2 * j * g * d + g * g * f, h && (i.rotation = 57.2957795 * Math.atan2((d - b) * j + (f - d) * g, (c - a) * j + (e - c) * g))
        }, b._findPathProblems = function (a) {
            var b = a.path,
                c = b && b.length || 0;
            if (6 > c || (c - 2) % 4) {
                var d = "	Cannot parse 'path' array due to invalid number of entries in path. ";
                return d += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ", d += "See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\n", d += "Only [ " + c + " ] values found. Expected: " + Math.max(4 * Math.ceil((c - 2) / 4) + 2, 6)
            }
            for (var e = 0; c > e; e++)
                if (isNaN(b[e])) return "All data in path array must be numeric";
            var f = a.start;
            if (isNaN(f) && void 0 !== f) return "'start' out of bounds. Expected 0 to 1, got: " + f;
            var g = a.end;
            if (isNaN(g) && void 0 !== g) return "'end' out of bounds. Expected 0 to 1, got: " + g;
            var h = a.orient;
            return h && "fixed" != h && "auto" != h && "cw" != h && "ccw" != h ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + h : void 0
        }, createjs.MotionGuidePlugin = a
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var a = createjs.TweenJS = createjs.TweenJS || {};
        a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT"
    }();

//https://api.codethislab.com/gd/moregames.js
function extractHostname(url) {
    var hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2]
    } else {
        hostname = url.split('/')[0]
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;
    if (arrLen > 2) {
        if ((splitArr[arrLen - 2] === "com" || splitArr[arrLen - 2] === "net" || splitArr[arrLen - 2] === "co") && arrLen >= 3) {
            domain = splitArr[arrLen - 3] + '.' + splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1]
        } else {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1]
        }
    }
    return domain
}
const getClosestTop = () => {
    let oFrame = window,
        bException = false;
    try {
        while (oFrame.parent.document !== oFrame.document) {
            if (oFrame.parent.document) {
                oFrame = oFrame.parent
            } else {
                bException = true;
                break
            }
        }
    } catch (e) {
        bException = true
    }
    return {
        'topFrame': oFrame,
        'err': bException
    }
};
const getBestPageUrl = ({
    err: crossDomainError,
    topFrame
}) => {
    let sBestPageUrl = '';
    if (!crossDomainError) {
        sBestPageUrl = topFrame.location.href
    } else {
        try {
            try {
                sBestPageUrl = window.top.location.href
            } catch (e) {
                let aOrigins = window.location.ancestorOrigins;
                sBestPageUrl = aOrigins[aOrigins.length - 1]
            }
        } catch (e) {
            sBestPageUrl = topFrame.document.referrer
        }
    }
    return sBestPageUrl
};
const TOPFRAMEOBJ = getClosestTop();
const PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function showMoreGames() {
    if (jQuery("#more-games-button").length > 0) {
        jQuery("#more-games-button").fadeIn()
    }
}

function hideMoreGames() {
    if (jQuery("#more-games-button").length > 0) {
        jQuery("#more-games-button").fadeOut()
    }
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true)
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    } else {
        xhr = null
    }
    return xhr
}

function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1]
}

function checkMoreGames(szGameId, szAlignment, aTags, aTagsToRemove, iLimit, szColor) {
    var url = 'https://api.codethislab.com/gd/gd_list.json';
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return
    }
    xhr.onload = function () {
        var szRet = xhr.response;
        var aGames = JSON.parse(szRet);
        if (aGames.length === 0) {
            return
        }
        var aGamesToAdd = new Array();
        for (var t = 0; t < aTags.length; t++) {
            for (var k = 0; k < aGames.length; k++) {
                if (aGames[k].tag.indexOf(aTags[t]) !== -1 && aGamesToAdd.indexOf(aGames[k]) === -1 && aGames[k].id !== szGameId) {
                    aGamesToAdd.push(aGames[k])
                }
            }
        }
        var aGamesToAppend = new Array();
        for (var k = 0; k < aGames.length; k++) {
            if (aGamesToAdd.indexOf(aGames[k]) === -1 && aGames[k].id !== szGameId) {
                aGamesToAppend.push(aGames[k])
            }
        };
        aGamesToAdd = aGamesToAdd.concat(aGamesToAppend);
        var iCont = 0;
        while (iCont < aGamesToAdd.length) {
            var bIncrease = true;
            for (var k = 0; k < aGamesToAdd[iCont].tag.length; k++) {
                var szTag = aGamesToAdd[iCont].tag[k];
                if (aTagsToRemove.indexOf(szTag) !== -1) {
                    aGamesToAdd.splice(iCont, 1);
                    bIncrease = false;
                    break
                }
            }
            if (bIncrease) {
                iCont++
            }
        }
        if (iLimit > 0) {
            var iIteration = aGamesToAdd.length - iLimit;
            for (var j = 0; j < iIteration; j++) {
                var iRandIndex = Math.floor(Math.random() * aGamesToAdd.length);
                aGamesToAdd.splice(iRandIndex, 1)
            }
        }
        var szUrlBut = "https://api.codethislab.com/gd/images/moregames_" + szColor + ".png";
        var szUrlExitBut = "https://api.codethislab.com/gd/images/moregames_exit_" + szColor + ".png";
        jQuery("body").append('<div id="more-games-button" class="' + szAlignment + '" style="background-image:url(' + szUrlBut + ');"></div>');
        jQuery("#more-games-button").on("click", function () {
            var szHTML = "<div class='more-games-dialog-wrapper'>";
            szHTML += "<div class='more-games-dialog-block'></div>";
            szHTML += "<div class='more-games-dialog-content'>";
            szHTML += "<div class='more-games-dialog-scrolling'>";
            for (var i = 0; i < aGamesToAdd.length; i++) {
                szHTML += "<div class='more-games-dialog-tile' data-url='" + aGamesToAdd[i].url + "'>";
                szHTML += "<img src='" + aGamesToAdd[i].img + "' />";
                szHTML += "</div>"
            }
            szHTML += "</div>";
            szHTML += "<div class='embed-and-earn'>";
            szHTML += "<a href='http://gamedistribution.com/publishers/' target='_blank'>Earn with</br>our games</a>";
            szHTML += "<a target='_blank' href='http://gamedistribution.com/games?company=Code%20This%20Lab%20srl'>Embed<br>our games</a>";
            szHTML += "</div>";
            szHTML += "<div class='more-games-dialog-logo'></div>";
            szHTML += "</div>";
            szHTML += "<div class='more-games-dialog-exit' style='background-image:url(" + szUrlExitBut + ");'>";
            szHTML += "</div>";
            szHTML += "</div>";
            jQuery("body").append(szHTML);
            setTimeout(function () {
                jQuery(".more-games-dialog-block").addClass("more-games-dialog-block-show");
                setTimeout(function () {
                    jQuery(".more-games-dialog-content").addClass("more-games-dialog-content-show");
                    jQuery(".more-games-dialog-exit").addClass("more-games-dialog-exit-show")
                }, 100)
            }, 100)
        });
        jQuery("#more-games-button").fadeIn()
    };
    xhr.onerror = function (evt) {
        trace('Woops, there was an error making the request ' + JSON.stringify(evt))
    };
    xhr.send()
}
$(document).ready(function () {
    jQuery(document).on("click", ".more-games-dialog-tile", function () {
        var url = jQuery(this).attr("data-url");
        var argumenturl = "";
        if (window.location.href.indexOf("?") > 0) {
            argumenturl = window.location.href.split("?")[1];
            argumenturl = "?" + argumenturl
        }
        console.log(argumenturl);
        console.log(window.location.href);
        console.log(url);
        console.log(url + argumenturl);
        window.location.href = url + argumenturl
    });
    jQuery(document).on("click", ".more-games-dialog-exit", function () {
        jQuery(".more-games-dialog-content").removeClass("more-games-dialog-content-show");
        jQuery(".more-games-dialog-exit").removeClass("more-games-dialog-exit-show");
        setTimeout(function () {
            jQuery(".more-games-dialog-block").removeClass("more-games-dialog-block-show");
            setTimeout(function () {
                jQuery(".more-games-dialog-wrapper").remove()
            }, 500)
        }, 100)
    })
});

/*! howler.js v2.0.12 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
! function () {
    "use strict";
    var e = function () {
        this.init()
    };
    e.prototype = {
        init: function () {
            var e = this || n;
            return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
        },
        volume: function (e) {
            var t = this || n;
            if (e = parseFloat(e), t.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
                if (t._volume = e, t._muted) return t;
                t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);
                for (var o = 0; o < t._howls.length; o++)
                    if (!t._howls[o]._webAudio)
                        for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                            var u = t._howls[o]._soundById(r[a]);
                            u && u._node && (u._node.volume = u._volume * e)
                        }
                return t
            }
            return t._volume
        },
        mute: function (e) {
            var t = this || n;
            t.ctx || _(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, n.ctx.currentTime);
            for (var o = 0; o < t._howls.length; o++)
                if (!t._howls[o]._webAudio)
                    for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                        var u = t._howls[o]._soundById(r[a]);
                        u && u._node && (u._node.muted = !!e || u._muted)
                    }
            return t
        },
        unload: function () {
            for (var e = this || n, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
            return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()), e
        },
        codecs: function (e) {
            return (this || n)._codecs[e.replace(/^x-/, "")]
        },
        _setup: function () {
            var e = this || n;
            if (e.state = e.ctx ? e.ctx.state || "running" : "running", e._autoSuspend(), !e.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    var t = new Audio;
                    void 0 === t.oncanplaythrough && (e._canPlayEvent = "canplay")
                } catch (n) {
                    e.noAudio = !0
                } else e.noAudio = !0;
            try {
                var t = new Audio;
                t.muted && (e.noAudio = !0)
            } catch (e) { }
            return e.noAudio || e._setupCodecs(), e
        },
        _setupCodecs: function () {
            var e = this || n,
                t = null;
            try {
                t = "undefined" != typeof Audio ? new Audio : null
            } catch (n) {
                return e
            }
            if (!t || "function" != typeof t.canPlayType) return e;
            var o = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                a = r && parseInt(r[0].split("/")[1], 10) < 33;
            return e._codecs = {
                mp3: !(a || !o && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!o,
                opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, e
        },
        _enableMobileAudio: function () {
            var e = this || n,
                t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
                o = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
            if (!e._mobileEnabled && e.ctx && (t || o)) {
                e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                var r = function () {
                    n._autoResume();
                    var t = e.ctx.createBufferSource();
                    t.buffer = e._scratchBuffer, t.connect(e.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), t.onended = function () {
                        t.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchstart", r, !0), document.removeEventListener("touchend", r, !0)
                    }
                };
                return document.addEventListener("touchstart", r, !0), document.addEventListener("touchend", r, !0), e
            }
        },
        _autoSuspend: function () {
            var e = this;
            if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
                for (var t = 0; t < e._howls.length; t++)
                    if (e._howls[t]._webAudio)
                        for (var o = 0; o < e._howls[t]._sounds.length; o++)
                            if (!e._howls[t]._sounds[o]._paused) return e;
                return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
                    e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () {
                        e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                    }))
                }, 3e4), e
            }
        },
        _autoResume: function () {
            var e = this;
            if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function () {
                e.state = "running";
                for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume")
            }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
        }
    };
    var n = new e,
        t = function (e) {
            var n = this;
            if (!e.src || 0 === e.src.length) return void console.error("An array of source files must be passed with any new Howl.");
            n.init(e)
        };
    t.prototype = {
        init: function (e) {
            var t = this;
            return n.ctx || _(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                fn: e.onend
            }] : [], t._onfade = e.onfade ? [{
                fn: e.onfade
            }] : [], t._onload = e.onload ? [{
                fn: e.onload
            }] : [], t._onloaderror = e.onloaderror ? [{
                fn: e.onloaderror
            }] : [], t._onplayerror = e.onplayerror ? [{
                fn: e.onplayerror
            }] : [], t._onpause = e.onpause ? [{
                fn: e.onpause
            }] : [], t._onplay = e.onplay ? [{
                fn: e.onplay
            }] : [], t._onstop = e.onstop ? [{
                fn: e.onstop
            }] : [], t._onmute = e.onmute ? [{
                fn: e.onmute
            }] : [], t._onvolume = e.onvolume ? [{
                fn: e.onvolume
            }] : [], t._onrate = e.onrate ? [{
                fn: e.onrate
            }] : [], t._onseek = e.onseek ? [{
                fn: e.onseek
            }] : [], t._onresume = [], t._webAudio = n.usingWebAudio && !t._html5, void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(), n._howls.push(t), t._autoplay && t._queue.push({
                event: "play",
                action: function () {
                    t.play()
                }
            }), t._preload && t.load(), t
        },
        load: function () {
            var e = this,
                t = null;
            if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
            "string" == typeof e._src && (e._src = [e._src]);
            for (var r = 0; r < e._src.length; r++) {
                var u, i;
                if (e._format && e._format[r]) u = e._format[r];
                else {
                    if ("string" != typeof (i = e._src[r])) {
                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    u = /^data:audio\/([^;,]+);/i.exec(i), u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])), u && (u = u[1].toLowerCase())
                }
                if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), u && n.codecs(u)) {
                    t = e._src[r];
                    break
                }
            }
            return t ? (e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new o(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
        },
        play: function (e, t) {
            var o = this,
                r = null;
            if ("number" == typeof e) r = e, e = null;
            else {
                if ("string" == typeof e && "loaded" === o._state && !o._sprite[e]) return null;
                if (void 0 === e) {
                    e = "__default";
                    for (var a = 0, u = 0; u < o._sounds.length; u++) o._sounds[u]._paused && !o._sounds[u]._ended && (a++ , r = o._sounds[u]._id);
                    1 === a ? e = null : r = null
                }
            }
            var i = r ? o._soundById(r) : o._inactiveSound();
            if (!i) return null;
            if (r && !e && (e = i._sprite || "__default"), "loaded" !== o._state) {
                i._sprite = e, i._ended = !1;
                var d = i._id;
                return o._queue.push({
                    event: "play",
                    action: function () {
                        o.play(d)
                    }
                }), d
            }
            if (r && !i._paused) return t || o._loadQueue("play"), i._id;
            o._webAudio && n._autoResume();
            var _ = Math.max(0, i._seek > 0 ? i._seek : o._sprite[e][0] / 1e3),
                s = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - _),
                l = 1e3 * s / Math.abs(i._rate);
            i._paused = !1, i._ended = !1, i._sprite = e, i._seek = _, i._start = o._sprite[e][0] / 1e3, i._stop = (o._sprite[e][0] + o._sprite[e][1]) / 1e3, i._loop = !(!i._loop && !o._sprite[e][2]);
            var c = i._node;
            if (o._webAudio) {
                var f = function () {
                    o._refreshBuffer(i);
                    var e = i._muted || o._muted ? 0 : i._volume;
                    c.gain.setValueAtTime(e, n.ctx.currentTime), i._playStart = n.ctx.currentTime, void 0 === c.bufferSource.start ? i._loop ? c.bufferSource.noteGrainOn(0, _, 86400) : c.bufferSource.noteGrainOn(0, _, s) : i._loop ? c.bufferSource.start(0, _, 86400) : c.bufferSource.start(0, _, s), l !== 1 / 0 && (o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l)), t || setTimeout(function () {
                        o._emit("play", i._id)
                    }, 0)
                };
                "running" === n.state ? f() : (o.once("resume", f), o._clearTimer(i._id))
            } else {
                var p = function () {
                    c.currentTime = _, c.muted = i._muted || o._muted || n._muted || c.muted, c.volume = i._volume * n.volume(), c.playbackRate = i._rate;
                    try {
                        var r = c.play();
                        if ("undefined" != typeof Promise && r instanceof Promise) {
                            o._playLock = !0;
                            var a = function () {
                                o._playLock = !1, t || o._emit("play", i._id)
                            };
                            r.then(a, a)
                        } else t || o._emit("play", i._id);
                        if (c.playbackRate = i._rate, c.paused) return void o._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");
                        "__default" !== e || i._loop ? o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l) : (o._endTimers[i._id] = function () {
                            o._ended(i), c.removeEventListener("ended", o._endTimers[i._id], !1)
                        }, c.addEventListener("ended", o._endTimers[i._id], !1))
                    } catch (e) {
                        o._emit("playerror", i._id, e)
                    }
                },
                    m = window && window.ejecta || !c.readyState && n._navigator.isCocoonJS;
                if (c.readyState >= 3 || m) p();
                else {
                    var v = function () {
                        p(), c.removeEventListener(n._canPlayEvent, v, !1)
                    };
                    c.addEventListener(n._canPlayEvent, v, !1), o._clearTimer(i._id)
                }
            }
            return i._id
        },
        pause: function (e) {
            var n = this;
            if ("loaded" !== n._state || n._playLock) return n._queue.push({
                event: "pause",
                action: function () {
                    n.pause(e)
                }
            }), n;
            for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                n._clearTimer(t[o]);
                var r = n._soundById(t[o]);
                if (r && !r._paused && (r._seek = n.seek(t[o]), r._rateSeek = 0, r._paused = !0, n._stopFade(t[o]), r._node))
                    if (n._webAudio) {
                        if (!r._node.bufferSource) continue;
                        void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node)
                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || n._emit("pause", r ? r._id : null)
            }
            return n
        },
        stop: function (e, n) {
            var t = this;
            if ("loaded" !== t._state) return t._queue.push({
                event: "stop",
                action: function () {
                    t.stop(e)
                }
            }), t;
            for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
                t._clearTimer(o[r]);
                var a = t._soundById(o[r]);
                a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, t._stopFade(o[r]), a._node && (t._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), t._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), n || t._emit("stop", a._id))
            }
            return t
        },
        mute: function (e, t) {
            var o = this;
            if ("loaded" !== o._state) return o._queue.push({
                event: "mute",
                action: function () {
                    o.mute(e, t)
                }
            }), o;
            if (void 0 === t) {
                if ("boolean" != typeof e) return o._muted;
                o._muted = e
            }
            for (var r = o._getSoundIds(t), a = 0; a < r.length; a++) {
                var u = o._soundById(r[a]);
                u && (u._muted = e, u._interval && o._stopFade(u._id), o._webAudio && u._node ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime) : u._node && (u._node.muted = !!n._muted || e), o._emit("mute", u._id))
            }
            return o
        },
        volume: function () {
            var e, t, o = this,
                r = arguments;
            if (0 === r.length) return o._volume;
            if (1 === r.length || 2 === r.length && void 0 === r[1]) {
                o._getSoundIds().indexOf(r[0]) >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
            } else r.length >= 2 && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
            var a;
            if (!(void 0 !== e && e >= 0 && e <= 1)) return a = t ? o._soundById(t) : o._sounds[0], a ? a._volume : 0;
            if ("loaded" !== o._state) return o._queue.push({
                event: "volume",
                action: function () {
                    o.volume.apply(o, r)
                }
            }), o;
            void 0 === t && (o._volume = e), t = o._getSoundIds(t);
            for (var u = 0; u < t.length; u++)(a = o._soundById(t[u])) && (a._volume = e, r[2] || o._stopFade(t[u]), o._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), o._emit("volume", a._id));
            return o
        },
        fade: function (e, t, o, r) {
            var a = this;
            if ("loaded" !== a._state) return a._queue.push({
                event: "fade",
                action: function () {
                    a.fade(e, t, o, r)
                }
            }), a;
            a.volume(e, r);
            for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
                var d = a._soundById(u[i]);
                if (d) {
                    if (r || a._stopFade(u[i]), a._webAudio && !d._muted) {
                        var _ = n.ctx.currentTime,
                            s = _ + o / 1e3;
                        d._volume = e, d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(t, s)
                    }
                    a._startFadeInterval(d, e, t, o, u[i], void 0 === r)
                }
            }
            return a
        },
        _startFadeInterval: function (e, n, t, o, r, a) {
            var u = this,
                i = n,
                d = t - n,
                _ = Math.abs(d / .01),
                s = Math.max(4, _ > 0 ? o / _ : o),
                l = Date.now();
            e._fadeTo = t, e._interval = setInterval(function () {
                var r = (Date.now() - l) / o;
                l = Date.now(), i += d * r, i = Math.max(0, i), i = Math.min(1, i), i = Math.round(100 * i) / 100, u._webAudio ? e._volume = i : u.volume(i, e._id, !0), a && (u._volume = i), (t < n && i <= t || t > n && i >= t) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, u.volume(t, e._id), u._emit("fade", e._id))
            }, s)
        },
        _stopFade: function (e) {
            var t = this,
                o = t._soundById(e);
            return o && o._interval && (t._webAudio && o._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(o._interval), o._interval = null, t.volume(o._fadeTo, e), o._fadeTo = null, t._emit("fade", e)), t
        },
        loop: function () {
            var e, n, t, o = this,
                r = arguments;
            if (0 === r.length) return o._loop;
            if (1 === r.length) {
                if ("boolean" != typeof r[0]) return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
                e = r[0], o._loop = e
            } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
            for (var a = o._getSoundIds(n), u = 0; u < a.length; u++)(t = o._soundById(a[u])) && (t._loop = e, o._webAudio && t._node && t._node.bufferSource && (t._node.bufferSource.loop = e, e && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop)));
            return o
        },
        rate: function () {
            var e, t, o = this,
                r = arguments;
            if (0 === r.length) t = o._sounds[0]._id;
            else if (1 === r.length) {
                var a = o._getSoundIds(),
                    u = a.indexOf(r[0]);
                u >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
            } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
            var i;
            if ("number" != typeof e) return i = o._soundById(t), i ? i._rate : o._rate;
            if ("loaded" !== o._state) return o._queue.push({
                event: "rate",
                action: function () {
                    o.rate.apply(o, r)
                }
            }), o;
            void 0 === t && (o._rate = e), t = o._getSoundIds(t);
            for (var d = 0; d < t.length; d++)
                if (i = o._soundById(t[d])) {
                    i._rateSeek = o.seek(t[d]), i._playStart = o._webAudio ? n.ctx.currentTime : i._playStart, i._rate = e, o._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime) : i._node && (i._node.playbackRate = e);
                    var _ = o.seek(t[d]),
                        s = (o._sprite[i._sprite][0] + o._sprite[i._sprite][1]) / 1e3 - _,
                        l = 1e3 * s / Math.abs(i._rate);
                    !o._endTimers[t[d]] && i._paused || (o._clearTimer(t[d]), o._endTimers[t[d]] = setTimeout(o._ended.bind(o, i), l)), o._emit("rate", i._id)
                }
            return o
        },
        seek: function () {
            var e, t, o = this,
                r = arguments;
            if (0 === r.length) t = o._sounds[0]._id;
            else if (1 === r.length) {
                var a = o._getSoundIds(),
                    u = a.indexOf(r[0]);
                u >= 0 ? t = parseInt(r[0], 10) : o._sounds.length && (t = o._sounds[0]._id, e = parseFloat(r[0]))
            } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
            if (void 0 === t) return o;
            if ("loaded" !== o._state) return o._queue.push({
                event: "seek",
                action: function () {
                    o.seek.apply(o, r)
                }
            }), o;
            var i = o._soundById(t);
            if (i) {
                if (!("number" == typeof e && e >= 0)) {
                    if (o._webAudio) {
                        var d = o.playing(t) ? n.ctx.currentTime - i._playStart : 0,
                            _ = i._rateSeek ? i._rateSeek - i._seek : 0;
                        return i._seek + (_ + d * Math.abs(i._rate))
                    }
                    return i._node.currentTime
                }
                var s = o.playing(t);
                if (s && o.pause(t, !0), i._seek = e, i._ended = !1, o._clearTimer(t), s && o.play(t, !0), !o._webAudio && i._node && (i._node.currentTime = e), s && !o._webAudio) {
                    var l = function () {
                        o._playLock ? setTimeout(l, 0) : o._emit("seek", t)
                    };
                    setTimeout(l, 0)
                } else o._emit("seek", t)
            }
            return o
        },
        playing: function (e) {
            var n = this;
            if ("number" == typeof e) {
                var t = n._soundById(e);
                return !!t && !t._paused
            }
            for (var o = 0; o < n._sounds.length; o++)
                if (!n._sounds[o]._paused) return !0;
            return !1
        },
        duration: function (e) {
            var n = this,
                t = n._duration,
                o = n._soundById(e);
            return o && (t = n._sprite[o._sprite][1] / 1e3), t
        },
        state: function () {
            return this._state
        },
        unload: function () {
            for (var e = this, t = e._sounds, o = 0; o < t.length; o++) {
                if (t[o]._paused || e.stop(t[o]._id), !e._webAudio) {
                    /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (t[o]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), t[o]._node.removeEventListener("error", t[o]._errorFn, !1), t[o]._node.removeEventListener(n._canPlayEvent, t[o]._loadFn, !1)
                }
                delete t[o]._node, e._clearTimer(t[o]._id);
                var a = n._howls.indexOf(e);
                a >= 0 && n._howls.splice(a, 1)
            }
            var u = !0;
            for (o = 0; o < n._howls.length; o++)
                if (n._howls[o]._src === e._src) {
                    u = !1;
                    break
                }
            return r && u && delete r[e._src], n.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
        },
        on: function (e, n, t, o) {
            var r = this,
                a = r["_on" + e];
            return "function" == typeof n && a.push(o ? {
                id: t,
                fn: n,
                once: o
            } : {
                    id: t,
                    fn: n
                }), r
        },
        off: function (e, n, t) {
            var o = this,
                r = o["_on" + e],
                a = 0;
            if ("number" == typeof n && (t = n, n = null), n || t)
                for (a = 0; a < r.length; a++) {
                    var u = t === r[a].id;
                    if (n === r[a].fn && u || !n && u) {
                        r.splice(a, 1);
                        break
                    }
                } else if (e) o["_on" + e] = [];
            else {
                var i = Object.keys(o);
                for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(o[i[a]]) && (o[i[a]] = [])
            }
            return o
        },
        once: function (e, n, t) {
            var o = this;
            return o.on(e, n, t, 1), o
        },
        _emit: function (e, n, t) {
            for (var o = this, r = o["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function (e) {
                e.call(this, n, t)
            }.bind(o, r[a].fn), 0), r[a].once && o.off(e, r[a].fn, r[a].id));
            return o._loadQueue(e), o
        },
        _loadQueue: function (e) {
            var n = this;
            if (n._queue.length > 0) {
                var t = n._queue[0];
                t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action()
            }
            return n
        },
        _ended: function (e) {
            var t = this,
                o = e._sprite;
            if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
            var r = !(!e._loop && !t._sprite[o][2]);
            if (t._emit("end", e._id), !t._webAudio && r && t.stop(e._id, !0).play(e._id), t._webAudio && r) {
                t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = n.ctx.currentTime;
                var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a)
            }
            return t._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), n._autoSuspend()), t._webAudio || r || t.stop(e._id), t
        },
        _clearTimer: function (e) {
            var n = this;
            if (n._endTimers[e]) {
                if ("function" != typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
                else {
                    var t = n._soundById(e);
                    t && t._node && t._node.removeEventListener("ended", n._endTimers[e], !1)
                }
                delete n._endTimers[e]
            }
            return n
        },
        _soundById: function (e) {
            for (var n = this, t = 0; t < n._sounds.length; t++)
                if (e === n._sounds[t]._id) return n._sounds[t];
            return null
        },
        _inactiveSound: function () {
            var e = this;
            e._drain();
            for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended) return e._sounds[n].reset();
            return new o(e)
        },
        _drain: function () {
            var e = this,
                n = e._pool,
                t = 0,
                o = 0;
            if (!(e._sounds.length < n)) {
                for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
                for (o = e._sounds.length - 1; o >= 0; o--) {
                    if (t <= n) return;
                    e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), t--)
                }
            }
        },
        _getSoundIds: function (e) {
            var n = this;
            if (void 0 === e) {
                for (var t = [], o = 0; o < n._sounds.length; o++) t.push(n._sounds[o]._id);
                return t
            }
            return [e]
        },
        _refreshBuffer: function (e) {
            var t = this;
            return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = r[t._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime), t
        },
        _cleanBuffer: function (e) {
            var t = this;
            if (n._scratchBuffer) {
                e.bufferSource.onended = null, e.bufferSource.disconnect(0);
                try {
                    e.bufferSource.buffer = n._scratchBuffer
                } catch (e) { }
            }
            return e.bufferSource = null, t
        }
    };
    var o = function (e) {
        this._parent = e, this.init()
    };
    o.prototype = {
        init: function () {
            var e = this,
                t = e._parent;
            return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, t._sounds.push(e), e.create(), e
        },
        create: function () {
            var e = this,
                t = e._parent,
                o = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return t._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(o, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = o * n.volume(), e._node.load()), e
        },
        reset: function () {
            var e = this,
                t = e._parent;
            return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, e
        },
        _errorListener: function () {
            var e = this;
            e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
        },
        _loadListener: function () {
            var e = this,
                t = e._parent;
            t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {
                __default: [0, 1e3 * t._duration]
            }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1)
        }
    };
    var r = {},
        a = function (e) {
            var n = e._src;
            if (r[n]) return e._duration = r[n].duration, void d(e);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), a = 0; a < t.length; ++a) o[a] = t.charCodeAt(a);
                i(o.buffer, e)
            } else {
                var _ = new XMLHttpRequest;
                _.open("GET", n, !0), _.withCredentials = e._xhrWithCredentials, _.responseType = "arraybuffer", _.onload = function () {
                    var n = (_.status + "")[0];
                    if ("0" !== n && "2" !== n && "3" !== n) return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                    i(_.response, e)
                }, _.onerror = function () {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load())
                }, u(_)
            }
        },
        u = function (e) {
            try {
                e.send()
            } catch (n) {
                e.onerror()
            }
        },
        i = function (e, t) {
            n.ctx.decodeAudioData(e, function (e) {
                e && t._sounds.length > 0 && (r[t._src] = e, d(t, e))
            }, function () {
                t._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        d = function (e, n) {
            n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                __default: [0, 1e3 * e._duration]
            }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
        },
        _ = function () {
            try {
                "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
            } catch (e) {
                n.usingWebAudio = !1
            }
            var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
                t = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                o = t ? parseInt(t[1], 10) : null;
            if (e && o && o < 9) {
                var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
                (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1)
            }
            n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime), n.masterGain.connect(n.ctx.destination)), n._setup()
        };
    "function" == typeof define && define.amd && define([], function () {
        return {
            Howler: n,
            Howl: t
        }
    }), "undefined" != typeof exports && (exports.Howler = n, exports.Howl = t), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = t, window.Sound = o) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = t, global.Sound = o)
}();
/*! Spatial Plugin */
! function () {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (e) {
        var n = this;
        if (!n.ctx || !n.ctx.listener) return n;
        for (var t = n._howls.length - 1; t >= 0; t--) n._howls[t].stereo(e);
        return n
    }, HowlerGlobal.prototype.pos = function (e, n, t) {
        var r = this;
        return r.ctx && r.ctx.listener ? (n = "number" != typeof n ? r._pos[1] : n, t = "number" != typeof t ? r._pos[2] : t, "number" != typeof e ? r._pos : (r._pos = [e, n, t], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r
    }, HowlerGlobal.prototype.orientation = function (e, n, t, r, o, i) {
        var a = this;
        if (!a.ctx || !a.ctx.listener) return a;
        var p = a._orientation;
        return n = "number" != typeof n ? p[1] : n, t = "number" != typeof t ? p[2] : t, r = "number" != typeof r ? p[3] : r, o = "number" != typeof o ? p[4] : o, i = "number" != typeof i ? p[5] : i, "number" != typeof e ? p : (a._orientation = [e, n, t, r, o, i], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, .1), a.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.upZ.setTargetAtTime(t, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, n, t, r, o, i), a)
    }, Howl.prototype.init = function (e) {
        return function (n) {
            var t = this;
            return t._orientation = n.orientation || [1, 0, 0], t._stereo = n.stereo || null, t._pos = n.pos || null, t._pannerAttr = {
                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse",
                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4,
                panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF",
                refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1
            }, t._onstereo = n.onstereo ? [{
                fn: n.onstereo
            }] : [], t._onpos = n.onpos ? [{
                fn: n.onpos
            }] : [], t._onorientation = n.onorientation ? [{
                fn: n.onorientation
            }] : [], e.call(this, n)
        }
    }(Howl.prototype.init), Howl.prototype.stereo = function (n, t) {
        var r = this;
        if (!r._webAudio) return r;
        if ("loaded" !== r._state) return r._queue.push({
            event: "stereo",
            action: function () {
                r.stereo(n, t)
            }
        }), r;
        var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === t) {
            if ("number" != typeof n) return r._stereo;
            r._stereo = n, r._pos = [n, 0, 0]
        }
        for (var i = r._getSoundIds(t), a = 0; a < i.length; a++) {
            var p = r._soundById(i[a]);
            if (p) {
                if ("number" != typeof n) return p._stereo;
                p._stereo = n, p._pos = [n, 0, 0], p._node && (p._pannerAttr.panningModel = "equalpower", p._panner && p._panner.pan || e(p, o), "spatial" === o ? void 0 !== p._panner.positionX ? (p._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : p._panner.setPosition(n, 0, 0) : p._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)), r._emit("stereo", p._id)
            }
        }
        return r
    }, Howl.prototype.pos = function (n, t, r, o) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state) return i._queue.push({
            event: "pos",
            action: function () {
                i.pos(n, t, r, o)
            }
        }), i;
        if (t = "number" != typeof t ? 0 : t, r = "number" != typeof r ? -.5 : r, void 0 === o) {
            if ("number" != typeof n) return i._pos;
            i._pos = [n, t, r]
        }
        for (var a = i._getSoundIds(o), p = 0; p < a.length; p++) {
            var s = i._soundById(a[p]);
            if (s) {
                if ("number" != typeof n) return s._pos;
                s._pos = [n, t, r], s._node && (s._panner && !s._panner.pan || e(s, "spatial"), void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : s._panner.setOrientation(n, t, r)), i._emit("pos", s._id)
            }
        }
        return i
    }, Howl.prototype.orientation = function (n, t, r, o) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state) return i._queue.push({
            event: "orientation",
            action: function () {
                i.orientation(n, t, r, o)
            }
        }), i;
        if (t = "number" != typeof t ? i._orientation[1] : t, r = "number" != typeof r ? i._orientation[2] : r, void 0 === o) {
            if ("number" != typeof n) return i._orientation;
            i._orientation = [n, t, r]
        }
        for (var a = i._getSoundIds(o), p = 0; p < a.length; p++) {
            var s = i._soundById(a[p]);
            if (s) {
                if ("number" != typeof n) return s._orientation;
                s._orientation = [n, t, r], s._node && (s._panner || (s._pos || (s._pos = i._pos || [0, 0, -.5]), e(s, "spatial")), s._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)), i._emit("orientation", s._id)
            }
        }
        return i
    }, Howl.prototype.pannerAttr = function () {
        var n, t, r, o = this,
            i = arguments;
        if (!o._webAudio) return o;
        if (0 === i.length) return o._pannerAttr;
        if (1 === i.length) {
            if ("object" != typeof i[0]) return r = o._soundById(parseInt(i[0], 10)), r ? r._pannerAttr : o._pannerAttr;
            n = i[0], void 0 === t && (n.pannerAttr || (n.pannerAttr = {
                coneInnerAngle: n.coneInnerAngle,
                coneOuterAngle: n.coneOuterAngle,
                coneOuterGain: n.coneOuterGain,
                distanceModel: n.distanceModel,
                maxDistance: n.maxDistance,
                refDistance: n.refDistance,
                rolloffFactor: n.rolloffFactor,
                panningModel: n.panningModel
            }), o._pannerAttr = {
                coneInnerAngle: void 0 !== n.pannerAttr.coneInnerAngle ? n.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                coneOuterAngle: void 0 !== n.pannerAttr.coneOuterAngle ? n.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                coneOuterGain: void 0 !== n.pannerAttr.coneOuterGain ? n.pannerAttr.coneOuterGain : o._coneOuterGain,
                distanceModel: void 0 !== n.pannerAttr.distanceModel ? n.pannerAttr.distanceModel : o._distanceModel,
                maxDistance: void 0 !== n.pannerAttr.maxDistance ? n.pannerAttr.maxDistance : o._maxDistance,
                refDistance: void 0 !== n.pannerAttr.refDistance ? n.pannerAttr.refDistance : o._refDistance,
                rolloffFactor: void 0 !== n.pannerAttr.rolloffFactor ? n.pannerAttr.rolloffFactor : o._rolloffFactor,
                panningModel: void 0 !== n.pannerAttr.panningModel ? n.pannerAttr.panningModel : o._panningModel
            })
        } else 2 === i.length && (n = i[0], t = parseInt(i[1], 10));
        for (var a = o._getSoundIds(t), p = 0; p < a.length; p++)
            if (r = o._soundById(a[p])) {
                var s = r._pannerAttr;
                s = {
                    coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : s.coneInnerAngle,
                    coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : s.coneOuterAngle,
                    coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : s.coneOuterGain,
                    distanceModel: void 0 !== n.distanceModel ? n.distanceModel : s.distanceModel,
                    maxDistance: void 0 !== n.maxDistance ? n.maxDistance : s.maxDistance,
                    refDistance: void 0 !== n.refDistance ? n.refDistance : s.refDistance,
                    rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : s.rolloffFactor,
                    panningModel: void 0 !== n.panningModel ? n.panningModel : s.panningModel
                };
                var c = r._panner;
                c ? (c.coneInnerAngle = s.coneInnerAngle, c.coneOuterAngle = s.coneOuterAngle, c.coneOuterGain = s.coneOuterGain, c.distanceModel = s.distanceModel, c.maxDistance = s.maxDistance, c.refDistance = s.refDistance, c.rolloffFactor = s.rolloffFactor, c.panningModel = s.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]), e(r, "spatial"))
            }
        return o
    }, Sound.prototype.init = function (e) {
        return function () {
            var n = this,
                t = n._parent;
            n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this), n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
        }
    }(Sound.prototype.init), Sound.prototype.reset = function (e) {
        return function () {
            var n = this,
                t = n._parent;
            return n._orientation = t._orientation, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this)
        }
    }(Sound.prototype.reset);
    var e = function (e, n) {
        n = n || "spatial", "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
    }
}();

/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
"undefined" == typeof _pio && (_pio = {});
(function () {
    _pio.channel = function () { };
    _pio.channel.prototype.call = function (a, c, b, e, d) {
        var f = "undefined" != typeof PLAYERIO_API_HOST ? PLAYERIO_API_HOST : (PlayerIO.useSecureApiRequests ? "https" : "http") + "://api.playerio.com/json/",
            g = new XMLHttpRequest;
        "withCredentials" in g ? g.open("post", f, !0) : "undefined" != typeof XDomainRequest ? (g = new XDomainRequest, g.open("post", f)) : g = new _pio.flashWebRequest("post", f);
        var h = Error();
        null != g ? (g.send("[" + a + "|" + (this.token || "") + "]" + JSON.stringify(c)), g.onload = function () {
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
        }, g.onerror = function (b) {
            _pio.handleError(h, e, PlayerIOErrorCode.GeneralError,
                "Error talking to webservice: " + JSON.stringify(b))
        }) : _pio.handleError(h, e, PlayerIOErrorCode.GeneralError, "Need to implement flash calling")
    };
    _pio.runCallback = function (a, c, b) {
        try {
            a && a(c)
        } catch (e) {
            a = "Unhandled error in callback: " + e.message, a = a + "\nStack:\n" + (e.stack || e.stacktrace || e.StackTrace), b && (a = a + "\nCallsite stack:\n" + (b.stack || b.stacktrace || b.StackTrace)), console.log(a)
        }
    };
    _pio.handleError = function (a, c, b, e) {
        b = _pio.error(b, e);
        a && (a.stack && (b.stack = a.stack), a.stacktrace && (b.stacktrace = a.stacktrace),
            a.StackTrace && (b.StackTrace = a.StackTrace));
        c ? _pio.runCallback(c, b, a) : "undefined" != typeof console ? console.log("No error callback specified for: " + b.code + ": " + b.message + "\n" + (b.stack || b.stacktrace || b.StackTrace)) : alert("No error callback specified for: " + b.code + ": " + b.message + "\n" + (b.stack || b.stacktrace || b.StackTrace))
    };
    _pio.error = function (a, c) {
        1 == arguments.length && (c = a, a = PlayerIOErrorCode.GeneralError);
        "number" == typeof a && (a = PlayerIOErrorCode.codes[a]);
        if ("string" != typeof a) throw console.log(a, c, Error().stack),
            "Code must be a string!";
        var b = Error();
        return new PlayerIOError(a, c, b.stack || b.stacktrace || b.StackTrace)
    };
    _pio.debugLog = function (a) {
        "undefined" != typeof console && console.log(a)
    };
    _pio.convertToKVArray = function (a) {
        var c = [];
        if (a)
            for (var b in a) c.push({
                key: "" + b,
                value: "" + a[b]
            });
        return c
    };
    _pio.convertFromKVArray = function (a) {
        var c = {};
        if (a && a.length)
            for (var b in a) c[a[b].key] = a[b].value;
        return c
    };
    _pio.convertToSegmentArray = function (a) {
        var c = [];
        if (a)
            for (var b in a) c.push(b + ":" + a[b]);
        return c
    }
})();
PlayerIO = {
    useSecureApiRequests: !1,
    authenticate: function (a, c, b, e, d, f) {
        if ("auto" == b.publishingnetworklogin) "undefined" == typeof window.PublishingNetwork ? f(new PlayerIOError(PlayerIOErrorCode.GeneralError, "Could not find the PublishingNetwork object on the current page. Did you include the PublishingNetwork.js script?")) : PublishingNetwork.dialog("login", {
            gameId: a,
            connectionId: c,
            __use_usertoken__: !0
        }, function (b) {
            b.error ? f(new PlayerIOError(PlayerIOErrorCode.GeneralError, b.error)) : "undefined" == typeof b.userToken ?
                f(new PlayerIOError(PlayerIOErrorCode.GeneralError, "Missing userToken value in result, but no error message given.")) : PlayerIO.authenticate(a, c, {
                    userToken: b.userToken
                }, e, d, f)
        });
        else {
            var g = new _pio.channel;
            g.authenticate(a, c, _pio.convertToKVArray(b), _pio.convertToSegmentArray(e), "javascript", _pio.convertToKVArray({}), null, d, f, function (b) {
                g.token = b.token;
                return new _pio.client(g, a, b.gamefsredirectmap, b.userid)
            })
        }
    },
    quickConnect: null,
    gameFS: function (a) {
        return new _pio.gameFS(a)
    }
};
var JSON;
JSON || (JSON = {});
(function () {
    function a(b) {
        return 10 > b ? "0" + b : b
    }

    function c(b) {
        d.lastIndex = 0;
        return d.test(b) ? '"' + b.replace(d, function (b) {
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
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (b) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (b) {
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
    "function" !== typeof JSON.stringify && (JSON.stringify = function (a, d, c) {
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
    "function" !== typeof JSON.parse && (JSON.parse = function (b, a) {
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
        e.test(b) && (b = b.replace(e, function (b) {
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
(function () {
    function a(b) {
        if (null != d) b(d);
        else if (f) b(null);
        else if (null == g) {
            g = [b];
            var a = setInterval(function () {
                var b = c();
                null != b && e(b)
            }, 50);
            setTimeout(function () {
                null == d && e(null)
            }, 3E4);
            var e = function (b) {
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
            } catch (m) { }
        }
        b = function (b) {
            b = document.getElementsByTagName(b);
            for (var a = 0; a != b.length; a++)
                if (b[a].ping && "pong" == b[a].ping()) return b[a]
        };
        return b("embed") || b("object")
    }
    var b = {},
        e = 0;
    __pio_flashfallback_callback__ = function () {
        var a = b[arguments[0]];
        if (a) {
            for (var d = [], c = 1; c != arguments.length; c++) d[c - 1] = arguments[c];
            a.apply(null, d)
        }
    };
    _pio.flashWebRequest = function (d, c) {
        var f = this;
        this.response = null;
        this.onload = function () { };
        this.onerror = function () { };
        this.send = function (g) {
            a(function (a) {
                if (null == a) f.onerror("Browser does not support Cross-Origin (CORS) webrequest or Flash as a fallback method");
                else {
                    var h = "cb" + e++;
                    b[h] = function (a, d) {
                        delete b[h];
                        if (a) f.response = d, f.onload();
                        else f.onerror(d)
                    };
                    a.webrequest(h, d, c, g)
                }
            })
        }
    };
    _pio.flashSocketConnection = function (d, c, f, g, n) {
        var h = "cb" + e++,
            l = this,
            k = new _pio.messageSerializer,
            m = !1,
            x = !1,
            w = setTimeout(function () {
                m || (m = !0, f(!1, "Connect attempt timed out"))
            }, c);
        this.disconnect = function () {
            console.log("... this shouldn't happen")
        };
        this.sendMessage = function (b) {
            console.log("... send msg. this shouldn't happen")
        };
        a(function (a) {
            null == a ? (m = !0, f(!1, "Browser does not support WebSocket connections and the Flash fallback failed.")) :
                (b[h] = function (b, d) {
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
                }, l.disconnect = function () {
                    if (x) {
                        x = !1;
                        g();
                        try {
                            a.socketClose(h)
                        } catch (C) {
                            _pio.debugLog(C)
                        }
                    }
                }, l.sendMessage = function (b) {
                    b = k.serializeMessage(b);
                    a.socketSend(h, b)
                }, a.socketConnection(h, d))
        })
    };
    _pio.isFlashFallbackEnabled = function (b) {
        a(function (a) {
            b(null != a)
        })
    };
    var d = null,
        f = !1,
        g = null
})();
(function () {
    var a = _pio.channel.prototype;
    a.connect = function (a, b, e, d, f, g, h, l, k, m, n) {
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
    a.authenticate = function (a, b, e, d, f, g, h, l, k, m) {
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
    a.createRoom = function (a, b, e, d, f, g, h, l) {
        this.call(21, {
            roomid: a,
            roomtype: b,
            visible: e,
            roomdata: d,
            isdevroom: f
        }, g, h, l)
    };
    a.joinRoom = function (a, b, e, d, f, g) {
        this.call(24, {
            roomid: a,
            joindata: b,
            isdevroom: e
        }, d, f, g)
    };
    a.createJoinRoom = function (a, b, e, d, f, g, h, l, k) {
        this.call(27, {
            roomid: a,
            roomtype: b,
            visible: e,
            roomdata: d,
            joindata: f,
            isdevroom: g
        }, h, l, k)
    };
    a.listRooms = function (a, b, e, d, f, g, h, l) {
        this.call(30, {
            roomtype: a,
            searchcriteria: b,
            resultlimit: e,
            resultoffset: d,
            onlydevrooms: f
        }, g, h, l)
    };
    a.userLeftRoom = function (a, b, e, d, f, g) {
        this.call(40, {
            extendedroomid: a,
            newplayercount: b,
            closed: e
        },
            d, f, g)
    };
    a.writeError = function (a, b, e, d, f, g, h, l) {
        this.call(50, {
            source: a,
            error: b,
            details: e,
            stacktrace: d,
            extradata: f
        }, g, h, l)
    };
    a.updateRoom = function (a, b, e, d, f, g) {
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
    a.createObjects = function (a, b, e, d, f) {
        this.call(82, {
            objects: a,
            loadexisting: b
        }, e, d, f)
    };
    a.loadObjects = function (a, b, e, d) {
        this.call(85, {
            objectids: a
        }, b, e, d)
    };
    _pio.LockType = {
        NoLocks: 0,
        LockIndividual: 1,
        LockAll: 2
    };
    a.saveObjectChanges = function (a, b, e, d, f, g) {
        this.call(88, {
            locktype: a,
            changesets: b,
            createifmissing: e
        }, d, f, g)
    };
    a.deleteObjects = function (a, b, e, d) {
        this.call(91, {
            objectids: a
        }, b, e, d)
    };
    a.loadMatchingObjects = function (a, b, e, d, f, g, h) {
        this.call(94, {
            table: a,
            index: b,
            indexvalue: e,
            limit: d
        }, f, g, h)
    };
    a.loadIndexRange = function (a, b, e, d, f, g, h, l) {
        this.call(97, {
            table: a,
            index: b,
            startindexvalue: e,
            stopindexvalue: d,
            limit: f
        }, g, h, l)
    };
    a.deleteIndexRange = function (a, b, e, d, f, g, h) {
        this.call(100, {
            table: a,
            index: b,
            startindexvalue: e,
            stopindexvalue: d
        }, f, g, h)
    };
    a.loadMyPlayerObject = function (a, b, e) {
        this.call(103, {}, a, b, e)
    };
    a.payVaultReadHistory = function (a, b, e, d, f, g) {
        this.call(160, {
            page: a,
            pagesize: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultRefresh = function (a, b, e, d, f) {
        this.call(163, {
            lastversion: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultConsume = function (a, b, e, d, f) {
        this.call(166, {
            ids: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultCredit = function (a, b, e, d, f, g) {
        this.call(169, {
            amount: a,
            reason: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultDebit =
        function (a, b, e, d, f, g) {
            this.call(172, {
                amount: a,
                reason: b,
                targetuserid: e
            }, d, f, g)
        };
    a.payVaultBuy = function (a, b, e, d, f, g) {
        this.call(175, {
            items: a,
            storeitems: b,
            targetuserid: e
        }, d, f, g)
    };
    a.payVaultGive = function (a, b, e, d, f) {
        this.call(178, {
            items: a,
            targetuserid: b
        }, e, d, f)
    };
    a.payVaultPaymentInfo = function (a, b, e, d, f, g) {
        this.call(181, {
            provider: a,
            purchasearguments: b,
            items: e
        }, d, f, g)
    };
    a.payVaultUsePaymentInfo = function (a, b, e, d, f) {
        this.call(184, {
            provider: a,
            providerarguments: b
        }, e, d, f)
    };
    a.partnerPayTrigger = function (a, b, e, d,
        f) {
        this.call(200, {
            key: a,
            count: b
        }, e, d, f)
    };
    a.partnerPaySetTag = function (a, b, e, d) {
        this.call(203, {
            partnerid: a
        }, b, e, d)
    };
    a.notificationsRefresh = function (a, b, e, d) {
        this.call(213, {
            lastversion: a
        }, b, e, d)
    };
    a.notificationsRegisterEndpoints = function (a, b, e, d, f) {
        this.call(216, {
            lastversion: a,
            endpoints: b
        }, e, d, f)
    };
    a.notificationsSend = function (a, b, e, d) {
        this.call(219, {
            notifications: a
        }, b, e, d)
    };
    a.notificationsToggleEndpoints = function (a, b, e, d, f, g) {
        this.call(222, {
            lastversion: a,
            endpoints: b,
            enabled: e
        }, d, f, g)
    };
    a.notificationsDeleteEndpoints =
        function (a, b, e, d, f) {
            this.call(225, {
                lastversion: a,
                endpoints: b
            }, e, d, f)
        };
    a.gameRequestsSend = function (a, b, e, d, f, g) {
        this.call(241, {
            requesttype: a,
            requestdata: b,
            requestrecipients: e
        }, d, f, g)
    };
    a.gameRequestsRefresh = function (a, b, e, d) {
        this.call(244, {
            playcodes: a
        }, b, e, d)
    };
    a.gameRequestsDelete = function (a, b, e, d) {
        this.call(247, {
            requestids: a
        }, b, e, d)
    };
    a.achievementsRefresh = function (a, b, e, d) {
        this.call(271, {
            lastversion: a
        }, b, e, d)
    };
    a.achievementsLoad = function (a, b, e, d) {
        this.call(274, {
            userids: a
        }, b, e, d)
    };
    a.achievementsProgressSet =
        function (a, b, e, d, f) {
            this.call(277, {
                achievementid: a,
                progress: b
            }, e, d, f)
        };
    a.achievementsProgressAdd = function (a, b, e, d, f) {
        this.call(280, {
            achievementid: a,
            progressdelta: b
        }, e, d, f)
    };
    a.achievementsProgressMax = function (a, b, e, d, f) {
        this.call(283, {
            achievementid: a,
            progress: b
        }, e, d, f)
    };
    a.achievementsProgressComplete = function (a, b, e, d) {
        this.call(286, {
            achievementid: a
        }, b, e, d)
    };
    a.playerInsightRefresh = function (a, b, e) {
        this.call(301, {}, a, b, e)
    };
    a.playerInsightSetSegments = function (a, b, e, d) {
        this.call(304, {
            segments: a
        }, b, e, d)
    };
    a.playerInsightTrackInvitedBy = function (a, b, e, d, f) {
        this.call(307, {
            invitinguserid: a,
            invitationchannel: b
        }, e, d, f)
    };
    a.playerInsightTrackEvents = function (a, b, e, d) {
        this.call(311, {
            events: a
        }, b, e, d)
    };
    a.playerInsightTrackExternalPayment = function (a, b, e, d, f) {
        this.call(314, {
            currency: a,
            amount: b
        }, e, d, f)
    };
    a.playerInsightSessionKeepAlive = function (a, b, e) {
        this.call(317, {}, a, b, e)
    };
    a.playerInsightSessionStop = function (a, b, e) {
        this.call(320, {}, a, b, e)
    };
    a.oneScoreLoad = function (a, b, e, d) {
        this.call(351, {
            userids: a
        }, b, e, d)
    };
    a.oneScoreSet =
        function (a, b, e, d) {
            this.call(354, {
                score: a
            }, b, e, d)
        };
    a.oneScoreAdd = function (a, b, e, d) {
        this.call(357, {
            score: a
        }, b, e, d)
    };
    a.oneScoreRefresh = function (a, b, e) {
        this.call(360, {}, a, b, e)
    };
    a.simpleConnect = function (a, b, e, d, f, g, h, l, k) {
        this.call(400, {
            gameid: a,
            usernameoremail: b,
            password: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleRegister = function (a, b, e, d, f, g, h, l, k, m, n, q, t, y) {
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
    a.simpleRecoverPassword = function (a, b, e, d, f) {
        this.call(406, {
            gameid: a,
            usernameoremail: b
        }, e, d, f)
    };
    a.kongregateConnect = function (a, b, e, d, f, g, h, l, k) {
        this.call(412, {
            gameid: a,
            userid: b,
            gameauthtoken: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleGetCaptcha = function (a, b, e, d, f, g) {
        this.call(415, {
            gameid: a,
            width: b,
            height: e
        }, d, f, g)
    };
    a.facebookOAuthConnect = function (a, b, e, d, f, g, h, l, k) {
        this.call(418, {
            gameid: a,
            accesstoken: b,
            partnerid: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.steamConnect = function (a, b, e, d, f, g, h, l, k) {
        this.call(421, {
            gameid: a,
            steamappid: b,
            steamsessionticket: e,
            playerinsightsegments: d,
            clientapi: f,
            clientinfo: g
        }, h, l, k)
    };
    a.simpleUserGetSecureLoginInfo = function (a, b, e) {
        this.call(424, {}, a, b, e)
    };
    a.joinCluster = function (a, b, e, d, f, g, h, l, k, m, n, q, t, y, r, x, w) {
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
    a.serverHeartbeat = function (a, b, e, d, f, g, h, l, k, m, n, q, t, y, r, x, w, z, C, D) {
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
    a.getGameAssemblyUrl = function (a, b, e, d, f, g) {
        this.call(513, {
            clusteraccesskey: a,
            gamecodeid: b,
            machineid: e
        }, d, f, g)
    };
    a.devServerLogin =
        function (a, b, e, d, f) {
            this.call(524, {
                username: a,
                password: b
            }, e, d, f)
        };
    a.webserviceOnlineTest = function (a, b, e) {
        this.call(533, {}, a, b, e)
    };
    a.getServerInfo = function (a, b, e, d) {
        this.call(540, {
            machineid: a
        }, b, e, d)
    };
    a.socialRefresh = function (a, b, e) {
        this.call(601, {}, a, b, e)
    };
    a.socialLoadProfiles = function (a, b, e, d) {
        this.call(604, {
            userids: a
        }, b, e, d)
    }
})();
PlayerIOError = function (a, c, b) {
    this.code = a;
    this.message = c;
    this.stack = b;
    this.stack || (b = Error(), this.stack = b.stack || b.stacktrace || b.StackTrace);
    this.toString = function () {
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
(function () {
    _pio.client = function (a, c, b, e) {
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
(function () {
    var a = {};
    _pio.gameFS = function (c, b) {
        if ("string" == typeof b && 0 < b.length) {
            var e = (b || "").split("|");
            if (1 <= e.length)
                for (var d = a[c.toLowerCase()] = {}, f = 0; f != e.length; f++) {
                    var g = e[f];
                    "alltoredirect" == g || "cdnmap" == g ? d.baseUrl = e[f + 1] : "alltoredirectsecure" == g || "cdnmapsecure" == g ? d.secureBaseUrl = e[f + 1] : d["." + g] = e[f + 1]
                }
        }
        this.getUrl = function (b, d) {
            if ("/" == !b[0]) throw _pio.error("The path given to getUrl must start with a slash, like: '/myfile.swf' or '/folder/file.jpg'");
            var e = a[c];
            return e ? (d ? e.secureBaseUrl :
                e.baseUrl) + (e["." + b] || b) : (d ? "https" : "http") + "://r.playerio.com/r/" + c + b
        }
    }
})();
(function () {
    _pio.gameRequests = function (a) {
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
        this.send = function (b, e, c, h, l) {
            a.gameRequestsSend(b, _pio.convertToKVArray(e), c, h, l, function (a) { })
        };
        this.refresh =
            function (d, f) {
                a.gameRequestsRefresh(b, d, f, function (a) {
                    e._playCodes = a.newplaycodes;
                    e.waitingRequests = c(a.requests)
                })
            };
        this["delete"] = function (b, f, g) {
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
                    function (a) {
                        e.waitingRequests = c(a.requests)
                    })
            } else b = _pio.error("The first argument to delete should be an array: client.gameRequests.delete([requests], ...)"), _pio.handleError(b, g, b.code, b.message)
        }
    };
    _pio.gameRequest = function (a, c, b, e, d) {
        this.id = a;
        this.type = c;
        this.senderUserId = b;
        this.created = new Date(e);
        this.data = _pio.convertFromKVArray(d)
    }
})();
(function () {
    _pio.errorLog = function (a) {
        this.writeError = function (c, b, e, d) {
            a.writeError("Javascript", c, b, e, _pio.convertToKVArray(d))
        }
    }
})();
(function () {
    _pio.quickConnect = function () {
        this.simpleGetCaptcha = function (a, c, b, e, d) {
            (new _pio.channel).simpleGetCaptcha(a, c, b, e, d, function (a) {
                return new _pio.simpleGetCaptchaOutput(a.captchakey, a.captchaimageurl)
            })
        };
        this.simpleRecoverPassword = function (a, c, b, e) {
            (new _pio.channel).simpleRecoverPassword(a, c, b, e, function (a) { })
        }
    };
    _pio.simpleGetCaptchaOutput = function (a, c) {
        this.captchaKey = a;
        this.captchaImageUrl = c
    };
    PlayerIO.quickConnect = new _pio.quickConnect
})();
(function () {
    _pio.payVault = function (a) {
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
        this.has = function (a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0; d != this.items.length; d++)
                if (this.items[d].itemKey == a) return !0;
            return !1
        };
        this.first = function (a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0; d != this.items.length; d++)
                if (this.items[d].itemKey == a) return this.items[d];
            return null
        };
        this.count = function (a) {
            if (null == b) throw new PlayerIOError(PlayerIOErrorCode.VaultNotLoaded, "Cannot access items before vault has been loaded. Please refresh the vault first");
            for (var d = 0, e = 0; e != this.items.length; e++) this.items[e].itemKey == a && d++;
            return d
        };
        this.refresh = function (d, e) {
            a.payVaultRefresh(b, null, d, e, function (a) {
                c(a.vaultcontents)
            })
        };
        this.readHistory = function (b, e, c, h) {
            a.payVaultReadHistory(b, e, null, c, h, function (a) {
                for (var b = [], d = 0; d != a.entries.length; d++) {
                    var e = a.entries[d];
                    b.push(new _pio.payVaultHistoryEntry(e.type, e.amount, e.timestamp, e.itemkeys || [], e.reason, e.providertransactionid, e.providerprice))
                }
                return b
            })
        };
        this.credit = function (b, e, g, h) {
            a.payVaultCredit(b, e, null, g, h, function (a) {
                c(a.vaultcontents)
            })
        };
        this.debit = function (b, e, g, h) {
            a.payVaultDebit(b, e, null, g, h, function (a) {
                c(a.vaultcontents)
            })
        };
        this.consume = function (b, e, g) {
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
                a.payVaultConsume(d, null, e, g, function (a) {
                    c(a.vaultcontents)
                })
            } else b = _pio.error("The first argument to consume should be an array: client.payVault.consume([item], ...)"), _pio.handleError(b, g, b.code, b.message)
        };
        this.buy = function (b, e, g, h) {
            a.payVaultBuy(_pio.convertBuyItems(b), e, null, g, h, function (a) {
                c(a.vaultcontents)
            })
        };
        this.give = function (b, e, g) {
            a.payVaultGive(_pio.convertBuyItems(b), null, e, g, function (a) {
                c(a.vaultcontents)
            })
        };
        this.getBuyCoinsInfo = function (b, e, c, h) {
            a.payVaultPaymentInfo(b, _pio.convertToKVArray(e), null, c, h, function (a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        this.getBuyDirectInfo = function (b, e, c, h, l) {
            a.payVaultPaymentInfo(b, _pio.convertToKVArray(e), _pio.convertBuyItems(c), h, l, function (a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        var e = this
    };
    _pio.convertBuyItems = function (a) {
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
    _pio.vaultItem = function (a, c, b) {
        this.id = a;
        this.itemKey = c;
        this.purchaseDate = b
    };
    _pio.payVaultHistoryEntry = function (a, c, b, e, d, f, g) {
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
(function () {
    _pio.bigDB = function (a) {
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
        this.createObject = function (b, d, c, l, k) {
            var f = _pio.compareForChanges({}, c || {}, !0, !0);
            a.createObjects([{
                key: d,
                table: b,
                properties: f
            }], !1, l,
                k,
                function (a) {
                    if (1 == a.objects.length) return new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, f);
                    throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error creating object");
                })
        };
        this.loadMyPlayerObject = function (b, d) {
            a.loadMyPlayerObject(b, d, function (a) {
                return new _pio.databaseobject(e, "PlayerObjects", a.playerobject.key, a.playerobject.version, !0, a.playerobject.properties)
            })
        };
        this.load = function (b, d, c, l) {
            a.loadObjects([{
                table: b,
                keys: [d]
            }], c, l, function (a) {
                if (1 == a.objects.length) return null ==
                    a.objects[0] ? null : new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties);
                throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error loading object");
            })
        };
        this.loadKeys = function (b, d, c, l) {
            a.loadObjects([{
                table: b,
                keys: d
            }], c, l, function (a) {
                for (var d = [], c = 0; c != a.objects.length; c++) {
                    var f = a.objects[c];
                    d[c] = null == f ? null : new _pio.databaseobject(e, b, f.key, f.version, !1, f.properties)
                }
                return d
            })
        };
        this.loadOrCreate = function (b, d, c, l) {
            a.createObjects([{
                key: d,
                table: b,
                properties: []
            }], !0, c, l, function (a) {
                if (1 == a.objects.length) return new _pio.databaseobject(e, b, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties);
                throw new PlayerIOError(PlayerIOErrorCode.GeneralError, "Error creating object");
            })
        };
        this.deleteKeys = function (b, d, e, c) {
            a.deleteObjects([{
                table: b,
                keys: d
            }], e, c, function (a) {
                return null
            })
        };
        this.loadKeysOrCreate = function (b, d, c, l) {
            for (var f = [], g = 0; g != d.length; g++) f.push({
                key: d[g],
                table: b,
                properties: []
            });
            a.createObjects(f, !0, c, l, function (a) {
                for (var d = [], c = 0; c != a.objects.length; c++) {
                    var f =
                        a.objects[c];
                    d[c] = new _pio.databaseobject(e, b, f.key, f.version, !1, f.properties)
                }
                return d
            })
        };
        this.loadSingle = function (d, c, h, l, k) {
            a.loadMatchingObjects(d, c, b(h), 1, l, k, function (a) {
                return 0 == a.objects.length ? null : new _pio.databaseobject(e, d, a.objects[0].key, a.objects[0].version, !1, a.objects[0].properties)
            })
        };
        this.loadRange = function (d, c, h, l, k, m, n, q) {
            a.loadIndexRange(d, c, b(h, l), b(h, k), m, n, q, function (a) {
                for (var b = [], c = 0; c != a.objects.length; c++) {
                    var f = a.objects[c];
                    b[c] = null == f ? null : new _pio.databaseobject(e,
                        d, f.key, f.version, !1, f.properties)
                }
                return b
            })
        };
        this.deleteRange = function (d, e, c, l, k, m, n) {
            a.deleteIndexRange(d, e, b(c, l), b(c, k), m, n, function () { })
        };
        this.saveChanges = function (b, e, h, l, k, m) {
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
                setIsSavingOnAll: function (a) {
                    for (var b = 0; b != this.objects.length; b++) this.objects[b]._internal_("set-is-saving", a)
                },
                done: function () {
                    this.setIsSavingOnAll(!1);
                    c()
                },
                execute: function () {
                    var b = this;
                    b.setIsSavingOnAll(!0);
                    0 < b.changesets.length ? a.saveObjectChanges(_pio.LockType.LockAll,
                        b.changesets, f, l,
                        function (a) {
                            b.done();
                            _pio.handleError(a, k, a.code, a.message)
                        },
                        function (a) {
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
    _pio.databaseobject = function (a, c, b, e, d, f) {
        var g = {},
            h = !1;
        _pio.bigDBDeserialize(f, g, !0);
        this.table = c;
        this.key = b;
        this.existsInDatabase = !0;
        this.save = function (b, e, c, f) {
            a.saveChanges(b, e, [this], c, f, d)
        };
        this._internal_ = function (a, d) {
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
    _pio.compareForChanges = function (a, c, b,
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
        function (a, c, b) {
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
(function () {
    _pio.multiplayer = function (a) {
        var b = this;
        this.developmentServer = null;
        this.useSecureConnections = !1;
        this.createRoom = function (d, e, c, h, l, k) {
            a.createRoom(d, e, c, _pio.convertToKVArray(h), null != b.developmentServer, l, k, function (a) {
                return a.roomid
            })
        };
        this.joinRoom = function (d, e, c, h) {
            clearTimeout(setTimeout(function () {
                c(new _pio.connection)
            }, 1E4));
            var f = Error();
            a.joinRoom(d, _pio.convertToKVArray(e), null != b.developmentServer, function () { }, h, function (a) {
                return new _pio.connection(f, b.developmentServer,
                    b.useSecureConnections, a.endpoints, a.joinkey, e || {}, c, h)
            })
        };
        this.createJoinRoom = function (d, e, c, h, l, k, m) {
            clearTimeout(setTimeout(function () {
                k(new _pio.connection)
            }, 1E4));
            var f = Error();
            a.createJoinRoom(d, e, c, _pio.convertToKVArray(h), _pio.convertToKVArray(l), null != b.developmentServer, function () { }, m, function (a) {
                return new _pio.connection(f, b.developmentServer, b.useSecureConnections, a.endpoints, a.joinkey, l || {}, k, m)
            })
        };
        this.listRooms = function (d, e, c, h, l, k) {
            a.listRooms(d, _pio.convertToKVArray(e), c, h, null !=
                b.developmentServer, l, k,
                function (a) {
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
    _pio.websocketConnection = function (a, e, d, c, g, h, l) {
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
        var y = setTimeout(function () {
            f ||
                (f = !0, g(!1, "Connect attempt timed out"))
        }, c);
        t.onopen = function () {
            f || (clearTimeout(y), q = f = !0, g(q))
        };
        t.onclose = function (a) {
            b.disconnect()
        };
        t.onerror = function (a) {
            b.disconnect()
        };
        t.onmessage = function (b) {
            if (q)
                if (a) {
                    var d = new FileReader;
                    d.onloadend = function () {
                        for (var a = new Uint8Array(d.result), b = Array(a.length), e = 0; e != a.length; e++) b[e] = a[e];
                        l(n.deserializeMessage(b, 0, b.length))
                    };
                    d.readAsArrayBuffer(b.data)
                } else b = _pio.base64decode(b.data), l(n.deserializeMessage(b, 0, b.length))
        };
        this.disconnect = function () {
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
        this.sendMessage = function (b) {
            b = n.serializeMessage(b);
            if (a) {
                for (var d = new Uint8Array(b.length), e = 0; e < b.length; e++) d[e] = b[e];
                t.send(d.buffer)
            } else b = _pio.base64encode(b), t.send(b)
        }
    };
    _pio.connection = function (a, e, d, c, g, h, l, k) {
        function b(b) {
            function n() {
                if (0 < z.length) {
                    var e = z[0];
                    z.splice(0, 1);
                    var c = b(d, e, 4E3, function (a, b) {
                        if (a) {
                            x = c;
                            f.connected = !0;
                            var d = f.createMessage("join");
                            d.addString(g);
                            if (null != h)
                                for (var l in h) d.addString(l), d.addString("" + h[l]);
                            f.sendMessage(d)
                        } else _pio.debugLog("Unable to connect to endpoint: " + e + '. reason: "' + b + (0 < z.length ? '". Trying next endpoint.' : '". No more endpoints to try.')), n()
                    }, function (a) {
                        f.connected && (f.connected = !1, setTimeout(function () {
                            for (var a = 0; a != t.length; a++) _pio.runCallback(t[a].callback, f, t[a].stackSource)
                        }, 100))
                    }, function (b) {
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
        window.FileReader && "WebKit" == z && 535 <= w || "Firefox" == z && 11 <= w || "Trident" == z && 6 <= w ? b(function (a, b, d, e, c, f) {
            return new _pio.websocketConnection(!0, a, b, d, e, c, f)
        }) : _pio.isFlashFallbackEnabled(function (a) {
            a ? b(function (a, b, d, e, c, f) {
                return new _pio.flashSocketConnection(b, d, e, c, f)
            }) : b(function (a, b, d, e, c, f) {
                return new _pio.websocketConnection(!1, a, b, d, e, c, f)
            })
        });
        this.connected = !1;
        this.addDisconnectCallback = function (a) {
            t.push({
                callback: a,
                stackSourc: Error()
            })
        };
        this.addMessageCallback = function (a, b) {
            null == a && (a = "*");
            var d = y[a];
            d || (y[a] = d = []);
            d.push({
                callback: b,
                stackSource: Error()
            })
        };
        this.removeDisconnectCallback = function (a) {
            for (var b = 0; b < t.length; b++) t[b].callback == a && (t.splice(b, 1), b--)
        };
        this.removeMessageCallback = function (a) {
            for (var b in y)
                for (var d = y[b], e = 0; e < d.length; e++) d[e].callback == a && (d.splice(e, 1), e--)
        };
        this.createMessage = function (a) {
            for (var b = new _pio.message(a),
                d = 1; d < arguments.length; d++) b.add(arguments[d]);
            return b
        };
        this.send = function (a) {
            var b = this.createMessage.apply(this, arguments);
            this.sendMessage(b)
        };
        this.sendMessage = function (a) {
            f.connected ? x.sendMessage(a) : r.push(a)
        };
        this.disconnect = function () {
            f.connected && x.disconnect()
        }
    };
    _pio.message = function (a) {
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
        this.add = function () {
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
        this.addInt = function (a) {
            b(-2147483648 <= a && 2147483647 >= a, Math.trunc(a), 0, "an integer (32bit)")
        };
        this.addUInt = function (a) {
            b(0 <= a && 4294967295 >= a, Math.trunc(a), 1, "an unsigned integer (32bit)")
        };
        this.addLong = function (a) {
            b(-0x7ffffffffffffc00 <= a && 0x7ffffffffffffc00 >= a, Math.trunc(a), 2, "a long (64bit)")
        };
        this.addULong = function (a) {
            b(0 <= a && 1.844674407370955E19 >= a, a, 3, "an unsigned long (64bit)")
        };
        this.addBoolean = function (a) {
            b(!0, a ? !0 : !1, 8, "a boolean value")
        };
        this.addFloat = function (a) {
            b(!0,
                Number(a), 5, "a floating point value (32bit)")
        };
        this.addDouble = function (a) {
            b(!0, Number(a), 4, "a double floating point value (64bit)")
        };
        this.addByteArray = function (a) {
            b(g(a), a, 7, "a bytearray")
        };
        this.addString = function (a) {
            b(!0, a + "", 6, "a string")
        };
        this.getInt = function (a) {
            return d(a, 0)
        };
        this.getUInt = function (a) {
            return d(a, 1)
        };
        this.getLong = function (a) {
            return d(a, 2)
        };
        this.getULong = function (a) {
            return d(a, 3)
        };
        this.getBoolean = function (a) {
            return d(a, 8)
        };
        this.getDouble = function (a) {
            return d(a, 4)
        };
        this.getFloat =
            function (a) {
                return d(a, 5)
            };
        this.getByteArray = function (a) {
            return d(a, 7)
        };
        this.getString = function (a) {
            return d(a, 6)
        };
        this.toString = function () {
            for (var a = "msg.Type = " + this.type, b = 0; b != this.length; b++) a += ", msg[" + b + "] = " + k[b] + " (" + c(l[b]) + ")";
            return a
        };
        this._internal_ = function (a, b) {
            switch (a) {
                case "get-objects":
                    return k;
                case "get-types":
                    return l
            }
        }
    };
    _pio.roomInfo = function (a, e, d, c) {
        this.id = a;
        this.roomType = e;
        this.onlineUsers = d;
        this.roomData = c
    };
    _pio.byteWriter = function () {
        this.bytes = [];
        this.writeByte = function (a) {
            if (0 <=
                a && 255 >= a) this.bytes.push(a);
            else throw Error("This is not a byte value: " + a);
        };
        this.writeBytes = function (a) {
            for (var b = 0; b != a.length; b++) this.writeByte(a[b])
        };
        this.writeTagWithLength = function (a, e, d) {
            63 < a || 0 > a ? this.writeBottomPatternAndBytes(d, _pio.binaryserializer.bytesFromInt(a)) : this.writeByte(e | a)
        };
        this.writeBottomPatternAndBytes = function (a, e) {
            var b = 0;
            0 != e[0] ? b = 3 : 0 != e[1] ? b = 2 : 0 != e[2] && (b = 1);
            this.writeByte(a | b);
            for (b = e.length - b - 1; b != e.length; b++) this.writeByte(e[b])
        };
        this.writeLongPattern = function (a,
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
    _pio.messageSerializer = function () {
        this.serializeMessage = function (a) {
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
        this.deserializeMessage = function (a, e, d) {
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
        pow2: function (a) {
            return 0 <= a && 31 > a ? 1 << a : this.pow2[a] ||
                (this.pow2[a] = Math.pow(2, a))
        },
        _intEncode: function (a, e) {
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
        _floatEncode: function (a, e, d) {
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
        bytesFromString: function (a) {
            for (var b = [], d = 0; d < a.length; d++)
                if (127 >= a.charCodeAt(d)) b.push(a.charCodeAt(d));
                else
                    for (var c = encodeURIComponent(a.charAt(d)).substr(1).split("%"), g = 0; g < c.length; g++) b.push(parseInt(c[g], 16));
            return b
        },
        bytesFromInt: function (a) {
            return this._intEncode(a,
                4)
        },
        bytesFromUInt: function (a) {
            return this._intEncode(a, 4)
        },
        bytesFromLong: function (a) {
            return this._intEncode(a, 8)
        },
        bytesFromULong: function (a) {
            return this._intEncode(a, 8)
        },
        bytesFromFloat: function (a) {
            return this._floatEncode(a, 23, 8)
        },
        bytesFromDouble: function (a) {
            return this._floatEncode(a, 52, 11)
        },
        _intDecode: function (a, c, d, f, g) {
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
        _float32Decode: function (a, c) {
            var b = a.slice(c,
                c + 4).reverse(),
                e = 1 - 2 * (b[3] >> 7),
                g = (b[3] << 1 & 255 | b[2] >> 7) - 127;
            b = (b[2] & 127) << 16 | b[1] << 8 | b[0];
            return 128 === g ? 0 !== b ? NaN : Infinity * e : -127 === g ? e * b * this.pow2(-149) : e * (1 + b * this.pow2(-23)) * this.pow2(g)
        },
        _float64Decode: function (a, c) {
            var b = a.slice(c, c + 8).reverse(),
                e = 1 - 2 * (b[7] >> 7),
                g = ((b[7] << 1 & 255) << 3 | b[6] >> 4) - 1023;
            b = (b[6] & 15) * this.pow2(48) + b[5] * this.pow2(40) + b[4] * this.pow2(32) + b[3] * this.pow2(24) + b[2] * this.pow2(16) + b[1] * this.pow2(8) + b[0];
            return 1024 === g ? 0 !== b ? NaN : Infinity * e : -1023 === g ? e * b * this.pow2(-1074) : e * (1 + b *
                this.pow2(-52)) * this.pow2(g)
        },
        stringFromBytes: function (a, c, d) {
            for (var b = "", e = c; e < c + d; e++) b += 127 >= a[e] ? 37 === a[e] ? "%25" : String.fromCharCode(a[e]) : "%" + a[e].toString(16).toUpperCase();
            return decodeURIComponent(b)
        },
        intFromBytes: function (a, c, d) {
            return this._intDecode(a, c, d, 4, !0)
        },
        uintFromBytes: function (a, c, d) {
            return this._intDecode(a, c, d, 4, !1)
        },
        longFromBytes: function (a, c, d) {
            return this._intDecode(a, c, d, 8, !0)
        },
        ulongFromBytes: function (a, c, d) {
            return this._intDecode(a, c, d, 8, !1)
        },
        floatFromBytes: function (a, c,
            d) {
            return 4 == d ? this._float32Decode(a, c) : NaN
        },
        doubleFromBytes: function (a, c, d) {
            return 8 == d ? this._float64Decode(a, c) : NaN
        }
    };
    for (var a = [], c = 0; 65 != c; c++) a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charCodeAt(c)] = c;
    _pio.base64encode = function (a) {
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
    _pio.base64decode = function (b) {
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
(function () {
    _pio.achievements = function (a) {
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
        this.addOnComplete = function (a) {
            if ("function" === typeof a && 1 == a.length) e.onCompleteHandlers.push(a);
            else throw new PlayerIOError(PlayerIOErrorCode.InvalidArgument, "Expects argument to be a function that takes an achievement as an argument.");
        };
        this.get = function (a) {
            if ("string" === typeof e.myAchievements) return null;
            for (var b = 0; b < e.myAchievements.length; b++)
                if (e.myAchievements[b].id == a) return e.myAchievements[b];
            return null
        };
        this.refresh = function (c, f) {
            a.achievementsRefresh(b,
                c, f,
                function (a) {
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
        this.load = function (b, c, e) {
            "object" == typeof b || requests.length ? a.achievementsLoad(b, c, e, function (a) {
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
        this.progressSet = function (b, e, g, h) {
            a.achievementsProgressSet(b, e, g, h, function (a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressAdd = function (b, e, g, h) {
            a.achievementsProgressAdd(b, e, g, h, function (a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressMax = function (b, e, g, h) {
            a.achievementsProgressMax(b, e, g, h, function (a) {
                return c(a.achievement, a.completednow)
            })
        };
        this.progressComplete = function (b, e, g) {
            a.achievementsProgressComplete(b, e, g, function (a) {
                return c(a.achievement, a.completednow)
            })
        }
    };
    _pio.achievement = function (a, c, b, e, d, f, g) {
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
(function () {
    _pio.playerInsight = function (a) {
        function c(a) {
            b.playersOnline = -1 == a.playersonline ? "[ERROR: The current connection does not have the rights required to read the playersonline variable.]" : a.playersonline;
            b.segments = _pio.convertFromKVArray(a.segments)
        }
        this.playersOnline = "[ERROR: You tried to access playerInsight.playersOnline before loading it. You have to call the refresh method first.]";
        this.segments = {};
        var b = this;
        this.refresh = function (b, d) {
            a.playerInsightRefresh(b, d, function (a) {
                c(a.state)
            })
        };
        this.setSegments = function (b, d, f) {
            a.playerInsightSetSegments(_pio.convertToSegmentArray(b), d, f, function (a) {
                c(a.state)
            })
        };
        this.trackInvitedBy = function (b, c, f, g) {
            a.playerInsightTrackInvitedBy(b, c, f, g, function (a) { })
        };
        this.trackEvent = function (b, c, f, g) {
            a.playerInsightTrackEvents([{
                eventtype: b,
                value: c
            }], f, g, function (a) { })
        };
        this.trackExternalPayment = function (b, c, f, g) {
            a.playerInsightTrackExternalPayment(b, c, f, g, function (a) { })
        };
        this.sessionKeepAlive = function (b, c) {
            a.playerInsightSessionKeepAlive(b, c, function (a) { })
        }
    }
})();
(function () {
    _pio.oneScore = function (a) {
        this.percentile = "[ERROR: You tried to access oneScore.percentile before loading the OneScore. You have to call the refresh method first.]";
        this.score = "[ERROR: You tried to access oneScore.score before loading the OneScore. You have to call the refresh method first.]";
        this.topRank = "[ERROR: You tried to access oneScore.topRank before loading the OneScore. You have to call the refresh method first.]";
        var c = this;
        this.refresh = function (b, e) {
            a.oneScoreRefresh(b, e, function (a) {
                a =
                    new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank
            })
        };
        this.set = function (b, e, d) {
            a.oneScoreSet(b, e, d, function (a) {
                a = new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank;
                return a
            })
        };
        this.add = function (b, e, d) {
            a.oneScoreAdd(b, e, d, function (a) {
                a = new _pio.oneScoreValue(a.onescore.percentile, a.onescore.score, a.onescore.toprank);
                c.percentile = a.percentile;
                c.score = a.score;
                c.topRank = a.toprank;
                return a
            })
        };
        this.load = function (b, c, d) {
            if ("object" == typeof b || requests.length) a.oneScoreLoad(b, c, d, function (a) {
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
    _pio.oneScoreValue = function (a, c, b) {
        this.percentile = "undefined" === typeof a ? 0 : a;
        this.score = "undefined" === typeof c ? 0 : c;
        this.topRank = "undefined" === typeof b ? 0 : b
    }
})();
(function () {
    _pio.notifications = function (a) {
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
        this.refresh = function (b, e) {
            a.notificationsRefresh(d, b, e, c)
        };
        this.registerEndpoint = function (b, g, h, l, k, m) {
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
            } (q = null == f || f.enabled != l) || (q = JSON.stringify(f.configuration) != JSON.stringify(h));
            q ? a.notificationsRegisterEndpoints(d, [{
                type: b,
                identifier: g,
                configuration: _pio.convertToKVArray(h),
                enabled: l
            }], k, m, c) : k && k()
        };
        this.toggleEndpoints = function (e, g, h, l) {
            e = b(e);
            0 < e.length ? a.notificationsToggleEndpoints(d, e, g ? !0 : !1, h, l, c) : h && h()
        };
        this.deleteEndpoints = function (e, g, h) {
            e = b(e);
            0 < e.length ? a.notificationsDeleteEndpoints(d, e, g, h, c) : g && g()
        };
        this.send = function (b, c, d) {
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
    _pio.notificationEndpoint = function (a, c, b, e) {
        this.type = a;
        this.identifier = c;
        this.configuration = b;
        this.enabled = e
    }
})();
(function () {
    _pio.publishingNetwork = function (a, c) {
        var b = this;
        this.profiles = new _pio.publishingNetworkProfiles(a);
        this.payments = new _pio.publishingNetworkPayments(a);
        this.relations = new _pio.publishingNetworkRelations(a, c, this);
        this.userToken = "[ERROR: you tried to access publishingNetwork.userToken before calling publishingNetwork.refresh(callback)]";
        this.refresh = function (c, d) {
            a.socialRefresh(c, d, function (a) {
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
    _pio.showDialog = function (a, c, b, e) {
        if ("undefined" == typeof window.PublishingNetwork) throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotAvailable, "PublishingNetwork.js was not found on the current page. You have to include the 'piocdn.com/publishingnetwork.js' on the containing page to show dialogs. See http://playerio.com/documentation/ for more information.");
        b.__apitoken__ = c.token;
        window.PublishingNetwork.dialog(a, b, e)
    }
})();
(function () {
    _pio.publishingNetworkPayments = function (a) {
        this.showBuyCoinsDialog = function (c, b, e, d) {
            b || (b = {});
            b.coinamount = c;
            a.payVaultPaymentInfo("publishingnetwork", _pio.convertToKVArray(b), null, function (b) {
                _pio.showDialog("buy", a, b, function (a) {
                    a.error ? d(new PlayerIOError(PlayerIOErrorCode.GeneralError, a.error)) : e(a)
                })
            }, d, function (a) {
                return _pio.convertFromKVArray(a.providerarguments)
            })
        };
        this.showBuyItemsDialog = function (c, b, e, d) {
            a.payVaultPaymentInfo("publishingnetwork", _pio.convertToKVArray(b || {}),
                _pio.convertBuyItems(c),
                function (b) {
                    _pio.showDialog("buy", a, b, function (a) {
                        a.error ? d(new PlayerIOError(PlayerIOErrorCode.GeneralError, a.error)) : e(a)
                    })
                }, d,
                function (a) {
                    return _pio.convertFromKVArray(a.providerarguments)
                })
        }
    }
})();
(function () {
    _pio.publishingNetworkProfiles = function (a) {
        this.myProfile = "[ERROR: you tried to access publishingNetworkProfiles.myProfile before calling publishingNetwork.refresh(callback)]";
        this.showProfile = function (c, b) {
            _pio.showDialog("profile", a, {
                userId: c
            }, b)
        };
        this.loadProfiles = function (c, b, e) {
            a.socialLoadProfiles(c, b, e, function (a) {
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
    _pio.publishingNetworkProfile = function (a) {
        this.userId = a.userid;
        this.displayName = a.displayname;
        this.avatarUrl = a.avatarurl;
        this.lastOnline = new Date(a.lastonline);
        this.countryCode = a.countrycode
    }
})();
(function () {
    _pio.publishingNetworkRelations = function (a, c, b) {
        this.friends = "[ERROR: you tried to access publishingNetworkRelations.friends before calling publishingNetwork.refresh(callback)]";
        this.isFriend = function (a) {
            if ("undefined" != typeof _pio.friendLookup && "undefined" != typeof _pio.friendLookup[c]) return _pio.friendLookup[c][a] || !1;
            throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotLoaded, "Cannot access profile, friends, ignored before Publishing Network has been loaded. Please refresh Publishing Network first");
        };
        this.isBlocked = function (a) {
            if ("undefined" != typeof _pio.blockedLookup && "undefined" != typeof _pio.blockedLookup[c]) return _pio.blockedLookup[c][a] || !1;
            throw new PlayerIOError(PlayerIOErrorCode.PublishingNetworkNotLoaded, "Cannot access profile, friends, ignored before Publishing Network has been loaded. Please refresh Publishing Network first");
        };
        this.showRequestFriendshipDialog = function (b, c) {
            _pio.showDialog("requestfriendship", a, {
                userId: b
            }, c)
        };
        this.showRequestBlockUserDialog = function (c, d) {
            _pio.showDialog("requestblockuser",
                a, {
                userId: c
            },
                function () {
                    b.refresh(function () {
                        d && d()
                    }, function () {
                        d && d()
                    })
                })
        };
        this.showFriendsManager = function (c) {
            _pio.showDialog("friendsmanager", a, {}, function (a) {
                a.updated ? b.refresh(function () {
                    c && c()
                }, function () {
                    c && c()
                }) : c && c()
            })
        };
        this.showBlockedUsersManager = function (c) {
            _pio.showDialog("blockedusersmanager", a, {}, function (a) {
                a.updated ? b.refresh(function () {
                    c && c()
                }, function () {
                    c && c()
                }) : c && c()
            })
        }
    }
})();
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function () {
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
            request: function (c) {
                var d = e.requestFullscreen;
                c = c || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[d]();
                else c[d](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                a[e.exitFullscreen]()
            },
            toggle: function (a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function (a) {
                this.on("change", a)
            },
            onerror: function (a) {
                this.on("error", a)
            },
            on: function (b, c) {
                var e = d[b];
                e && a.addEventListener(e, c, !1)
            },
            off: function (b,
                c) {
                var e = d[b];
                e && a.removeEventListener(e, c, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(f, {
        isFullscreen: {
            get: function () {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function () {
                return a[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function () {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), c ? module.exports = f : window.screenfull = f) : c ? module.exports = !1 : window.screenfull = !1
})();
(function () {
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
        c(a, function (c, e) {
            d = b(d, c, e, a)
        });
        return d
    }

    function l(a) {
        function c(c) {
            return h(c, function (c, d) {
                var e = d.pattern || g(d);
                !c && (c = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), d = d.label || d, c = b(c[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function k(b) {
            return h(b, function (b, c) {
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
        var A = function (b) {
            return h(b, function (b, c) {
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
            u = function (b) {
                return h(b, function (b, c) {
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
            E = function (b) {
                return h(b, function (b, c, d) {
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
            v = function (c) {
                return h(c, function (c, d) {
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
            } else (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(a)) && (p = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (p = [p, /BB10/.test(a)], v = (p[1] ? (B = null, E = "BlackBerry") : "Device Software") + " " + p[0], r = null) : this != e && "Wii" != B && (H && G || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < r || /\bWindows XP\b/.test(v) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !y.test(p =
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
                toString: function () {
                    var a = this.version;
                    return this.family + (a && !O ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        } (p = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(K)) && !/\bi686\b/i.test(K) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + p), "")), u && (/\bWOW64\b/i.test(a) || H && /\w(?:86|32)$/.test(t.cpuClass || t.platform) && !/\bWin64; x64\b/i.test(a)) &&
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
            toString: function () {
                return "null"
            }
        };
        n.parse = l;
        n.toString = function () {
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
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (m.platform = w, define(function () {
        return w
    })) : n &&
        k ? e(w, function (a, b) {
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
    setTimeout(function () {
        __iosResize()
    }, 500)
}
$(document).ready(function () {
    platform && "iPhone" === platform.product && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
    platform && "iPhone" === platform.product && iosResize()
});
var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = !1,
    s_bIsRetina, pausedTweenObjs = [];
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function () {
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
createjs.Tween.pauseAllTweens = function () {
    for (var a = 0, c = createjs.Tween._tweens.slice().reverse(), b; b = c[a++];) pausedTweenObjs.push(b), !1 === b.ignoreGlobalPause && b.setPaused(!0)
};
createjs.Tween.resumeAllTweens = function () {
    for (var a = 0, c; c = pausedTweenObjs[a++];) c.setPaused(!1);
    pausedTweenObjs.length = 0
};

//function setVolume(a, c) {
//    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = c
//}

//function setMute(a, c) {
//    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(c)
//}

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

//function shuffle(a) {
//    for (var c = a.length, b, e; 0 < c;) e = Math.floor(Math.random() * c), c-- , b = a[c], a[c] = a[e], a[e] = b;
//    return a
//}
NoClickDelay.prototype = {
    handleEvent: function (a) {
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
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (a) {
        this.moved = !0
    },
    onTouchEnd: function (a) {
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
(function () {
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
String.prototype.format = function () {
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
if (screenfull.enabled) screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut()
});
var s_szGameID = "7e30875c404b442eb12597175bdb85dc";
window.GD_OPTIONS = {
    gameId: s_szGameID,
    onEvent: function (a) {
        switch (a.name) {
            case "SDK_GAME_START":
                s_oMain && s_oMain.startUpdate();
                break;
            case "SDK_GAME_PAUSE":
                s_oMain && s_oMain.stopUpdate()
        }
    }
};
(function (a, c, b) {
    var e = a.getElementsByTagName(c)[0];
    a.getElementById(b) || (a = a.createElement(c), a.id = b, a.src = "https://html5.api.gamedistribution.com/main.min.js", e.parentNode.insertBefore(a, e))
})(document, "script", "gamedistribution-jssdk");

function CSpriteLibrary() {
    var a, c, b, e, d, f;
    this.init = function (g, h, l) {
        b = c = 0;
        e = g;
        d = h;
        f = l;
        a = {}
    };
    this.addSprite = function (b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function (b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function () {
        d.call(f)
    };
    this._onSpriteLoaded = function () {
        e.call(f);
        ++b == c && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function () {
            this.oSpriteLibrary._onSpriteLoaded()
        },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function () {
        return c
    }
}
var CCTLMultiplayerGui = function () {
    this._cssClassDomain = "ctl-multiplayer-";
    this._idCurDialog;
    this._idLoadingDialog;
    var a = localStorage.getItem("nickname");
    this._szNickName = null === a ? "" : a;
    jQuery(document).on("click", "." + this._cssClassDomain + "room-list li", function () {
        g_oCTLMultiplayer.closeCurrentDialog();
        var a = jQuery(this).text();
        "true" === jQuery(this).attr("data-private") ? g_oCTLMultiplayer.showTypeRoomPassword(a) : (g_oCTLMultiplayer.showLoading("connecting"), on_ctl_multiplayer_join_room(a))
    })
};
CCTLMultiplayerGui.prototype.refreshRoomList = function (a) {
    for (var c = "", b = 0; b < a.length; b++) c += '<li data-private="' + a[b]["private"] + '">', c += "<span>", c += a[b].name, c += "</span>", !0 === a[b]["private"] && (c += '<i class="' + this._cssClassDomain + 'icons-lock"></i>'), c += "</li>";
    jQuery("." + this._cssClassDomain + "room-list").html(c)
};
CCTLMultiplayerGui.prototype.showRoomList = function (a) {
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
CCTLMultiplayerGui.prototype.setNickName = function (a) {
    this._szNickName = a;
    localStorage.setItem("nickname", a)
};
CCTLMultiplayerGui.prototype.showTypeRoomPassword = function (a) {
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
CCTLMultiplayerGui.prototype.showCreateRoom = function () {
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
CCTLMultiplayerGui.prototype.showChooseNickName = function () {
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
CCTLMultiplayerGui.prototype.showGeneralDialog = function (a, c) {
    this._idCurDialog = this.showDialog(a, "", [{
        txt: "back",
        cb: c,
        classes: ""
    }])
};
CCTLMultiplayerGui.prototype.closeLoadingDialog = function () {
    this.closeDlg(this._idLoadingDialog)
};
CCTLMultiplayerGui.prototype.closeCurrentDialog = function () {
    this.closeDlg(this._idCurDialog)
};
CCTLMultiplayerGui.prototype.makeCode = function () {
    for (var a = "", c = 0; 32 > c; c++) a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
    return a
};
CCTLMultiplayerGui.prototype.showDialog = function (a, c, b, e) {
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
CCTLMultiplayerGui.prototype.buildExtraFooter = function () {
    return '<div class="' + this._cssClassDomain + 'copyright"><a href="http://www.codethislab.com" target="_blank">www.codethislab.com</a></div>'
};
CCTLMultiplayerGui.prototype.showLoading = function (a, c) {
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
CCTLMultiplayerGui.prototype.closeDlg = function (a) {
    jQuery("#" + a).remove()
};
CCTLMultiplayerGui.prototype.closeAllDialog = function () {
    g_oCTLMultiplayer.closeLoadingDialog();
    g_oCTLMultiplayer.closeCurrentDialog()
};
CCTLMultiplayerGui.prototype.getNickname = function () {
    return this._szNickName
};
var g_oCTLMultiplayer = new CCTLMultiplayerGui;

function CToggle(a, c, b, e, d) {
    var f, g, h, l, k, m, n;
    this._init = function (a, b, c, d, e) {
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
    this.unload = function () {
        s_bMobile ? n.off("mousedown", g) : (n.off("mousedown", g), n.off("mouseover", l));
        n.off("pressup", h);
        d.removeChild(n)
    };
    this._initListener = function () {
        s_bMobile ? g = n.on("mousedown", this.buttonDown) : (g = n.on("mousedown", this.buttonDown), l = n.on("mouseover", this.buttonOver));
        h = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        k[a] = b;
        m[a] = c
    };
    this.setActive = function (a) {
        f = a;
        n.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function () {
        n.scaleX = 1;
        n.scaleY = 1;
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_button", 1, !1);
        f = !f;
        n.gotoAndStop("state_" + f);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(m[ON_MOUSE_UP],
            f)
    };
    this.buttonDown = function () {
        n.scaleX = .9;
        n.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
    };
    this.buttonOver = function (a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function (a, b) {
        n.x = a;
        n.y = b
    };
    this._init(a, c, b, e, d)
}

function CGfxButton(a, c, b, e) {
    var d, f, g, h, l, k, m, n, q;
    this._init = function (a, b, c, e) {
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
    this.unload = function () {
        s_bMobile ? n.off("mousedown", g) : (n.off("mousedown", g), n.off("mouseover", l));
        n.off("pressup", h);
        e.removeChild(n)
    };
    this.setVisible = function (a) {
        n.visible = a
    };
    this.setClickable = function (a) {
        d = !a
    };
    this._initListener = function () {
        s_bMobile ? g = n.on("mousedown", this.buttonDown) :
            (g = n.on("mousedown", this.buttonDown), l = n.on("mouseover", this.buttonOver));
        h = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        k[a] = b;
        m[a] = c
    };
    this.buttonRelease = function () {
        d || (n.scaleX = f, n.scaleY = f, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(m[ON_MOUSE_UP]))
    };
    this.buttonDown = function () {
        d || (n.scaleX = .9 * f, n.scaleY = .9 * f, q || playSound("press_button", 1, !1), k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function (a) {
        s_bMobile || d || (a.target.cursor = "pointer")
    };
    this.pulseAnimation =
        function () {
            createjs.Tween.get(n).to({
                scaleX: .9 * f,
                scaleY: .9 * f
            }, 850, createjs.Ease.quadOut).to({
                scaleX: f,
                scaleY: f
            }, 650, createjs.Ease.quadIn).call(function () {
                t.pulseAnimation()
            })
        };
    this.trembleAnimation = function () {
        createjs.Tween.get(n).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function () {
            t.trebleAnimation()
        })
    };
    this.setPosition = function (a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function (a) {
        n.x = a
    };
    this.setY = function (a) {
        n.y =
            a
    };
    this.getButtonImage = function () {
        return n
    };
    this.getX = function () {
        return n.x
    };
    this.getY = function () {
        return n.y
    };
    this.setMuted = function (a) {
        q = a
    };
    var t = this;
    this._init(a, c, b, e);
    return this
}

function CTextButton(a, c, b, e, d, f, g, h) {
    var l, k, m, n, q;
    this._init = function (a, b, c, d, e, f, g, h) {
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
    this.unload = function () {
        m.off("mousedown", n);
        m.off("pressup", q);
        h.removeChild(m)
    };
    this.setVisible = function (a) {
        m.visible = a
    };
    this._initListener = function () {
        n = m.on("mousedown", this.buttonDown);
        q = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, b, c) {
        l[a] = b;
        k[a] = c
    };
    this.buttonRelease = function () {
        m.scaleX = 1;
        m.scaleY = 1;
        playSound("press_button", 1, !1);
        l[ON_MOUSE_UP] &&
            l[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
    };
    this.buttonDown = function () {
        m.scaleX = .9;
        m.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function (a, b) {
        m.x = a;
        m.y = b
    };
    this.setX = function (a) {
        m.x = a
    };
    this.setY = function (a) {
        m.y = a
    };
    this.getButtonImage = function () {
        return m
    };
    this.getX = function () {
        return m.x
    };
    this.getY = function () {
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
    this._init = function () {
        a = [];
        c = [];
        d = new CNetworkMessageForwarder
    };
    this.unload = function () {
        s_oNetworkManager = null
    };
    this.connectToSystem = function () {
        s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, s_oNetworkManager.gotoLobby);
        g_oCTLMultiplayer.showChooseNickName()
    };
    this.login = function (b) {
        g = b;
        b = this._setValidNick(b);
        PlayerIO.useSecureApiRequests = !MULTIPLAYER_TEST_LOCAL;
        PlayerIO.authenticate(GAME_PLAYERIO_ID, "public", {
            userId: b
        }, {}, function (b) {
            e = b;
            e.multiplayer.useSecureConnections = !MULTIPLAYER_TEST_LOCAL;
            MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184", e.multiplayer.createJoinRoom("fakeroom" + Math.random(), "fakeroom", !1, null, null, function (a) {
                a.addMessageCallback("*", d.messageHandler);
                a.addDisconnectCallback(s_oNetworkManager.callbackDisconnect)
            }, s_oNetworkManager.callbackError));
            a[ON_LOGIN_SUCCESS] && a[ON_LOGIN_SUCCESS].call(c[ON_LOGIN_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this._setValidNick = function (a) {
        var b = s_oNetworkManager._getRandomCodeNumber();
        "" === a ? g = a = "guest-" + b : a = a + "-" + b;
        return a
    };
    this._getRandomCodeNumber = function () {
        return Math.floor(1E3 * Math.random())
    };
    this.generateRandomName = function () {
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
    this.getBotName = function () {
        return m
    };
    this.addEventListener = function (b, d, e) {
        a[b] = d;
        c[b] = e
    };
    this.callbackError = function (b) {
        a[ON_CONNECTION_ERROR] && a[ON_CONNECTION_ERROR].call(c[ON_CONNECTION_ERROR], b)
    };
    this.callbackDisconnect = function (b) {
        a[ON_DISCONNECTION] && a[ON_DISCONNECTION].call(c[ON_DISCONNECTION],
            b)
    };
    this.sendMsg = function (a, c) {
        b && b.send(a, c)
    };
    this.disconnect = function () {
        b && (b.disconnect(), b = null)
    };
    this.isUserA = function () {
        return 0 === parseInt(f) ? !0 : !1
    };
    this.getPlayerOrderID = function () {
        return f
    };
    this.getPlayerNickname = function () {
        return g
    };
    this.getEnemyNickname = function () {
        return h
    };
    this.createRoom = function (f, h) {
        s_oNetworkManager.addEventListener(ON_USEROWNERROOM_CREATE_SUCCESS, this._onRoomCreated);
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.createJoinRoom(f,
            ROOM_TYPE_USEROWNER, !0, {
            id: f,
            pass: h
        }, {
            nickname: g
        },
            function (e) {
                b = e;
                e.addMessageCallback("*", d.messageHandler);
                e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
                a[ON_USEROWNERROOM_CREATE_SUCCESS] && a[ON_USEROWNERROOM_CREATE_SUCCESS].call(c[ON_USEROWNERROOM_CREATE_SUCCESS])
            }, s_oNetworkManager.callbackError)
    };
    this.joinRoom = function (f) {
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR, this._onRoomJoinedFailed);
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.joinRoom(f, {
            nickname: g
        }, function (e) {
            b = e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            a[ON_USEROWNERROOM_JOIN_SUCCESS] && a[ON_USEROWNERROOM_JOIN_SUCCESS].call(c[ON_USEROWNERROOM_JOIN_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.gotoGameRoom = function (g) {
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        var l = g.getString(0);
        f = g.getInt(1);
        h = g.getString(2);
        e.multiplayer.createJoinRoom(l, ROOM_TYPE_GAME, !1, null, null, function (e) {
            b =
                e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            g_oCTLMultiplayer.closeAllDialog();
            a[ON_GAMEROOM_CONNECTION_SUCCESS] && a[ON_GAMEROOM_CONNECTION_SUCCESS].call(c[ON_GAMEROOM_CONNECTION_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.gotoMatchMakingRoom = function () {
        MULTIPLAYER_TEST_LOCAL && (e.multiplayer.developmentServer = "localhost:8184");
        e.multiplayer.createJoinRoom("matchmakingroom1", ROOM_TYPE_MATCHMAKING, !0, null, {
            nickname: g
        }, function (e) {
            b =
                e;
            e.addMessageCallback("*", d.messageHandler);
            e.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
            a[ON_MATCHMAKING_CONNECTION_SUCCESS] && a[ON_MATCHMAKING_CONNECTION_SUCCESS].call(c[ON_MATCHMAKING_CONNECTION_SUCCESS])
        }, s_oNetworkManager.callbackError)
    };
    this.tryCreateUniqueRoom = function (a, b) {
        l = a;
        k = b;
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {
            id: a
        }, 0, 0, s_oNetworkManager._onUniqueListRoomSearch, s_oNetworkManager.callbackError)
    };
    this._onUniqueListRoomSearch = function (a) {
        0 < a.length && (l += "-" + s_oNetworkManager._getRandomCodeNumber());
        s_oNetworkManager.createRoom(l, k)
    };
    this._onRoomCreated = function () {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_WAITING_FOR_OPPONENT_IN_ROOM + l, "s_oNetworkManager._onDisconnectFromARoom")
    };
    this._onDisconnectFromARoom = function () {
        a[ON_BACK_FROM_A_ROOM] && a[ON_BACK_FROM_A_ROOM].call(c[ON_BACK_FROM_A_ROOM]);
        s_oNetworkManager.disconnect();
        setTimeout(function () {
            s_oNetworkManager.gotoLobby()
        }, 250)
    };
    this._onRoomJoined = function () { };
    this._onRoomJoinedFailed = function (a) {
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR,
            function () { });
        switch (a.code) {
            case ERROR_CODE_UNKNOWNROOM:
                g_oCTLMultiplayer.closeAllDialog(), g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_DOESNT_EXIST, "s_oNetworkManager.gotoLobby")
        }
    };
    this.gotoLobby = function () {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_CONNECT_TO_LOBBY);
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, null, 0, 0, s_oNetworkManager._onListRoom, s_oNetworkManager.callbackError)
    };
    this._onListRoom = function (a) {
        for (var b = [], c = 0; c < a.length; c++) b[c] = {
            name: a[c].id,
            "private": 0 ===
                a[c].roomData.pass.length ? !1 : !0
        };
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showRoomList(b)
    };
    this.joinQuickMatch = function () {
        g_oCTLMultiplayer.showLoading(TEXT_FIND_OPPONENT, "s_oNetworkManager._onDisconnectFromARoom");
        s_oNetworkManager.gotoMatchMakingRoom()
    };
    this.tryJoinRoomWithPass = function (a, b) {
        l = a;
        k = b;
        s_oNetworkManager.addEventListener(ON_ROOM_INFO_RETURNED, s_oNetworkManager._checkUserPermissionToJoin);
        s_oNetworkManager.getRoomInfo(a, b)
    };
    this._checkUserPermissionToJoin = function (a) {
        0 < a.length ?
            s_oNetworkManager.joinRoom(a[0].roomData.id, a[0].roomData.pass) : (g_oCTLMultiplayer.closeAllDialog(), g_oCTLMultiplayer.showGeneralDialog(TEXT_WRONG_PASSWORD, "s_oNetworkManager._onPasswordFailed"))
    };
    this._onPasswordFailed = function () {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showTypeRoomPassword(l)
    };
    this.getRoomInfo = function (a, b) {
        e.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {
            id: a,
            pass: b
        }, 0, 0, s_oNetworkManager._onRoomInfoReturned, s_oNetworkManager.callbackError)
    };
    this._onRoomInfoReturned = function (b) {
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
    this._init = function () { };
    this.messageHandler = function (c) {
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
    this._onFullRoom = function () {
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_IS_FULL, "s_oNetworkManager.gotoLobby")
    };
    this._onGameFound = function (a) {
        s_oNetworkManager.gotoGameRoom(a)
    };
    this._onSetWinner = function (a) {
        s_oGame.opponentLeftTheGame()
    };
    this._onRematchPanel = function () {
        s_oGame.showRematchQuestion()
    };
    this._onRematchResults = function (a) {
        if (a.getBoolean(0)) s_oGame.onOpponentAcceptRematch();
        else s_oGame.onOpponentRefuseRematch()
    };
    this._onEnemyMoves = function (a) {
        a = a.getString(0);
        a = JSON.parse(a);
        s_oGame.remoteMovePiece(a[MSG_MOVE])
    };
    this._onOpponentDiceRolled = function (a) {
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
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k)
    };
    this.unload = function () {
        k.removeAllChildren();
        l.unload()
    };
    this._onImagesLoaded = function () { };
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
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
        }, 500).call(function () {
            createjs.Tween.removeTweens(f);
            k.removeChild(f)
        })
    };
    this._onButStartRelease = function () {
        $(s_oMain).trigger("show_preroll_ad");
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function (f) {
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
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !0;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function (a) {
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
    this.preloaderReady = function () {
        c = !0;
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
    };
    this.soundLoaded = function () {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._initSounds = function () {
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
    this._loadImages = function () {
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
    this._onImagesLoaded = function () {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._onAllImagesLoaded = function () { };
    this._onRemovePreloader = function () {
        f.unload();
        try {
            checkMoreGames(s_szGameID, "bottom-left", ["multiplayer", "board"], [], -1, "light_brown")
        } catch (h) { }
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded = function () {
        this._loadImages()
    };
    this.gotoMenu = function () {
        try {
            showMoreGames()
        } catch (h) { }
        new CMenu;
        d = STATE_MENU
    };
    this.gotoGame = function () {
        s_oGame =
            new CGameSingle(g);
        d = STATE_GAME
    };
    this.gotoGameMulti = function () {
        s_b2Players = !0;
        s_oGame = new CGameMulti(g);
        d = STATE_GAME
    };
    this.gotoGameWithBot = function () {
        s_b2Players = !1;
        s_oGame = new CGameSingleWithBot(g);
        d = STATE_GAME
    };
    this.gotoSelectPlayers = function () {
        new CSelectPlayers
    };
    this.gotoSelectMode = function () {
        new CSelectMode
    };
    this.gotoHelp = function () {
        new CHelp;
        d = STATE_HELP
    };
    this.stopUpdate = function () {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile ||
            Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (a) {
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
    this._init = function () {
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
        }, 1E3).call(function () {
            y.visible = !1
        });
        s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.pulseTitle = function () {
        var a = this;
        (new createjs.Tween.get(void 0)).to({
            scaleX: .9,
            scaleY: .9
        }, 850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        }, 650, createjs.Ease.quadIn).call(function () {
            a.pulseTitle()
        })
    };
    this.unload = function () {
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
    this.refreshButtonPos = function (n, m) {
        q.setPosition(b, e - m);
        t.setPosition(a, c - m);
        x.setPosition(l + n, m + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(g - n, m + h);
        z && screenfull.enabled && w.setPosition(d + n, f + m)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function () {
        new CCreditsPanel
    };
    this.resetFullscreenBut =
        function () {
            w.setActive(s_bFullscreen)
        };
    this._onFullscreen = function () {
        s_bFullscreen ? C.call(window.document) : z.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButLocalRelease = function () {
        this.unload();
        s_bPlayWithBot = s_bMultiplayer = !1;
        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers();
        try {
            hideMoreGames()
        } catch (D) { }
    };
    this._onButMultiplayerRelease = function () {
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
        } catch (D) { }
    };
    this._onGameStart = function () {
        s_oMenu.clearBotCheck();
        s_bMultiplayer = !0;
        s_bPlayWithBot = !1;
        s_oMenu.unload();
        s_oMain.gotoGameMulti()
    };
    this._checkMatchWithBot = function () {
        var a = randomFloatBetween(18E3, 26E3);
        m = setTimeout(function () {
            s_bPlayWithBot = s_bMultiplayer = !0;
            g_oCTLMultiplayer.closeAllDialog();
            s_oNetworkManager.disconnect();
            s_oNetworkManager.generateRandomName();
            s_oMenu.unload();
            s_oMain.gotoGameWithBot()
        }, a)
    };
    this.clearBotCheck = function () {
        clearTimeout(m)
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null,
    CGameBase = function (a) {
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
CGameBase.prototype._init = function () {
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
    this._oFastDistributionBut.addEventListener(ON_MOUSE_DOWN, function () {
        s_oGame.onFastDistribution()
    });
    this._oInterface = new CInterface
};
CGameBase.prototype.reset = function () {
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
CGameBase.prototype.initDistribution = function () {
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
CGameBase.prototype.onFastDistribution = function () {
    this._bFastDistribution = !0;
    (new createjs.Tween.get(s_oGame._oFastDistributionBut.getButtonImage())).to({
        x: CANVAS_WIDTH + 200
    }, 300).call(function () {
        s_oGame._oFastDistributionBut.unload()
    })
};
CGameBase.prototype.onClickedPiece = function (a) {
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
                        function () {
                            s_oGame.onClickedTriangle(b[3][0])
                        }), this._oEndRectWhite.on("rollover", function (a) {
                            s_bMobile || (a.target.cursor = "pointer")
                        }), this._oEndRectWhite.on("rollout", function (a) {
                            s_bMobile || (a.target.cursor = "default")
                        }), s_oStage.addChild(this._oEndRectWhite)) : (a = s_oSpriteLibrary.getSprite("light_turn"), this._oEndRectBlack = createBitmap(a, a.width, a.height), this._oEndRectBlack.regX = 11, this._oEndRectBlack.regY = 12, this._oEndRectBlack.x = X_INTERFACE_PLAYER_END, this._oEndRectBlack.y = Y_INTERFACE_PLAYER_1,
                            this._oEndRectBlack.on("mousedown", function () {
                                s_oGame.onClickedTriangle(b[3][0])
                            }), this._oEndRectBlack.on("rollover", function (a) {
                                s_bMobile || (a.target.cursor = "pointer")
                            }), this._oEndRectBlack.on("rollout", function (a) {
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
CGameBase.prototype.isPossibleMove = function (a) {
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
    if (this._bDoubleDice) (f = this._aTriangle[a + this._iDice1 * b]) ? (1 >= f.getNumPieces() || f.getColor() === c) && d[0].push({
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
        }) : this._bDice1 && this._bDice2 && this.checkBearOff() && (a + (this._iDice1 + this._iDice2) * b === e || this.checkPieceBefore(c, g)) && d[3].push({
            iFocusTriangle: e,
            cost: 2,
            iDiceDisable: 2,
            aMoveTriangle: [g, e]
        })
    }
    return 0 < d[0].length || 0 < d[1].length || 0 < d[3].length ? d : null
};
CGameBase.prototype.checkPieceBefore = function (a, c) {
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
CGameBase.prototype.checkBearOff = function () {
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
CGameBase.prototype.checkAvaiableMove = function () {
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
CGameBase.prototype.updateInput = function () {
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
CGameBase.prototype.afterMove = function () {
    this._bPieceMoving = !1;
    s_oGame.checkGameOver();
    0 < this._iPlayerDice ? !0 === s_oGame.checkAvaiableMove() ? (s_oGame.updateInput(), s_b2Players || this._bTurnPlayer1 || s_oGame.cpuThinkBeforeChoice()) : (this._oAlertBox.show(TEXT_NO_MOVES_AVAILABLE), playSound("negative_beep", 1, !1), this._oWhiteDices.fadeOutTween(), this._oRedDices.fadeOutTween(), this._iPlayerDice = 0, this._bDice2 = this._bDice1 = this._bDoubleDice = !1, s_oGame.changeTurn(), s_oGame.updateInput()) : (this._bDoubleDice = !1, this._oWhiteDices.fadeOutTween(), s_oGame.checkGameOver(), s_oGame.changeTurn(), s_oGame.updateInput())
};
CGameBase.prototype.afterRollDice = function () {
    this._bTurnPlayer1 ? (this._iDice1 = this._oWhiteDices.returnDiceResult1(), this._iDice2 = this._oWhiteDices.returnDiceResult2()) : (this._iDice1 = this._oRedDices.returnDiceResult1(), this._iDice2 = this._oRedDices.returnDiceResult2());
    this._bDice2 = this._bDice1 = !0;
    this._iDice1 !== this._iDice2 ? this._iPlayerDice = 2 : (this._iPlayerDice = 4, this._oAlertBox.show(TEXT_DOUBLE_DICES), playSound("positive_beep", 1, !1), this._bDoubleDice = !0);
    !1 === s_oGame.checkAvaiableMove() ? (this._bDoubleDice =
        this._bDice2 = this._bDice1 = !1, this._iPlayerDice = 0, s_oGame.changeTurn(), s_oGame.updateInput(), !s_b2Players && this._bTurnPlayer1 && this._oInterface.setVisibleButDice(!0), s_b2Players || this._bTurnPlayer1 || (this._oInterface.setVisibleButDice(!1), setTimeout(s_oGame.rollDice, 1E3)), s_b2Players && this._oInterface.setVisibleButDice(!0), this._oAlertBox.show(TEXT_NO_MOVES_AVAILABLE), playSound("negative_beep", 1, !1)) : (this._oInterface.setVisibleButDice(!1), s_b2Players || !1 !== this._bTurnPlayer1 || (new createjs.Tween.get(s_oGame)).to({},
            1500).call(s_oGame.cpuThinkBeforeChoice))
};
CGameBase.prototype.debug = function () {
    for (var a = 0; a < this._aTriangle.length; a++) 0 < this._aTriangle[a].getNumPieces() && this._aTriangle[a].getLastPiece().unloadListeners()
};
CGameBase.prototype.unload = function () {
    this._bStartGame = !1;
    s_oGame._oInterface.unload();
    s_oGame._oEndPanel && s_oGame._oEndPanel.unload();
    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren()
};
CGameBase.prototype.onRestart = function () {
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", this._iScore);
    $(s_oMain).trigger("show_interlevel_ad");
    this._oEndPanel.hide();
    s_oGame.reset();
    for (var a = 0; a < this._aTriangle.length; a++) this._aTriangle[a].reset();
    s_oGame.initDistribution()
};
CGameBase.prototype.onConfirmExit = function () {
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", this._iScore);
    $(s_oMain).trigger("show_interlevel_ad");
    s_oGame.unload();
    s_oMain.gotoMenu()
};
CGameBase.prototype.checkGameOver = function () {
    for (var a, c = 0, b = 0, e = 0; e < this._aTriangle.length; e++) {
        a = this._aTriangle[e].getArrayPieces();
        for (var d = 0; d < a.length; d++) a[d].getColor() === WHITE_PIECE ? c++ : b++;
        c += this._aBar[BAR_UP].getNumPieces();
        b += this._aBar[BAR_DOWN].getNumPieces()
    }
    0 === c ? (this._bStartGame = !1, this.gameOver(0)) : 0 === b && (this._bStartGame = !1, this.gameOver(1))
};
CGameBase.prototype.cpuThinkBeforeChoice = function () {
    this._oThinking.show();
    var a = randomIntBetween(MIN_TIME_THINK, MAX_TIME_THINK);
    setTimeout(function () {
        s_oGame.cpuChoicePiece()
    }, a)
};
CGameBase.prototype.cpuChoicePiece = function () {
    var a, c = [],
        b = 0;
    if (0 < this._aBar[BAR_DOWN].getNumPieces()) {
        var e = this._aBar[BAR_DOWN].getLastPiece();
        if (a = s_oGame.isPossibleMove(e))
            for (var d = 0; d < a.length - 1; d++)
                for (var f = 0; f < a[d].length; f++) b = 0, 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[d][f].iFocusTriangle].getColor() === BLACK_PIECE && b++ , 13 > a[d][f].iFocusTriangle && b++ , 13 < a[d][f].iFocusTriangle && 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && b++ , 13 > a[d][f].iFocusTriangle &&
                    1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && b-- , 1 === this._aTriangle[a[d][f].iFocusTriangle].getNumPieces() && 13 > a[d][f].iFocusTriangle && b++ , c.push({
                        oMove: a[d][f],
                        iPoints: b,
                        oCurrentPiece: e
                    })
    } else
        for (d = 0; d < this._aTriangle.length; d++)
            if (0 < this._aTriangle[d].getNumPieces() && (e = this._aTriangle[d].getLastPiece(), e.getColor() === BLACK_PIECE && e.getStateListener() && (a = s_oGame.isPossibleMove(e)))) {
                for (var g = 0; g < a.length - 1; g++)
                    for (f = 0; f < a[g].length; f++) b = 0, 3 > this._aTriangle[e.getTriangle()].getNumPieces() &&
                        (b -= 3), 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() === BLACK_PIECE && (b += 3), 13 > a[g][f].iFocusTriangle && b++ , 13 < a[g][f].iFocusTriangle && b-- , 11 < a[g][f].iFocusTriangle && 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() === WHITE_PIECE && (b += 4), 11 > a[g][f].iFocusTriangle && 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && this._aTriangle[a[g][f].iFocusTriangle].getColor() ===
                        WHITE_PIECE && b-- , 1 === this._aTriangle[e.getTriangle()].getNumPieces() && b++ , 1 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && 13 > a[g][f].iFocusTriangle && b++ , 5 < e.getTriangle() && 5 >= a[g][f].iFocusTriangle && (b += 5), 5 >= e.getTriangle() && 3 > this._aTriangle[e.getTriangle()].getNumPieces() && (b -= 10), 6 > a[g][f].iFocusTriangle && 0 === this._aTriangle[a[g][f].iFocusTriangle].getNumPieces() && (b -= 5), 5 >= e.getTriangle() && (b -= 4), c.push({
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
    c.sort(function (a, b) {
        return parseFloat(b.iPoints) - parseFloat(a.iPoints)
    });
    this._oCurrentPiece = c[0].oCurrentPiece;
    this._oCurrentPiece.setOnTop();
    s_oGame.onClickedTriangle(c[0].oMove)
};
CGameBase.prototype.update = function () {
    s_oGame._oThinking && s_oGame._oThinking.update()
};
CGameBase.prototype.getPieceByIndex = function (a) {
    for (var c = 0; c < this._aTmpPieces.length; c++)
        if (this._aTmpPieces[c].getIndex() === a) return this._aTmpPieces[c]
};
var CGameSingle = function (a) {
    CGameBase.call(this, a);
    this._init()
};
CGameSingle.prototype = Object.create(CGameBase.prototype);
CGameSingle.prototype._init = function () {
    CGameBase.prototype._init();
    this._startGame()
};
CGameSingle.prototype._startGame = function () {
    50 < randomFloatBetween(1, 100) ? this._bTurnPlayer1 = !0 : this._bTurnPlayer1 = !1;
    this.initDistribution();
    this._oThinking = new CThinking;
    this._oThinking.hide();
    this._oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
    this._oEndPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
    this._oEndPanel.addEventListener(ON_RESTART, this.onRestart, this)
};
CGameSingle.prototype._onAfterDistribution = function () {
    if (!this._bFastDistribution) s_oGame.onFastDistribution();
    (s_b2Players || this._bTurnPlayer1) && s_oInterface.setVisibleButDice(!0);
    s_oInterface.onFocusTurn(this._bTurnPlayer1);
    s_oGame.updateInput()
};
CGameSingle.prototype.changeTurn = function () {
    this._iNumTurns++;
    0 === this._iTotThrows % NUM_TURNS_PER_ADS && $(s_oMain).trigger("show_interlevel_ad");
    this._bTurnPlayer1 = !this._bTurnPlayer1;
    this._oInterface.onFocusTurn(this._bTurnPlayer1);
    s_b2Players || this._bTurnPlayer1 ? (this._oInterface.setVisibleButDice(!0), this._oThinking.hide()) : this._bCpuTurned = !1;
    s_b2Players || this._bTurnPlayer1 || this._oThinking.show()
};
CGameSingle.prototype.rollDice = function () {
    s_oGame._oWhiteDices.fadeOutTween();
    s_oGame._oRedDices.fadeOutTween();
    s_oGame._bTurnPlayer1 ? s_oGame._oWhiteDices.show() : s_oGame._bStartGame && s_oGame._oRedDices.show();
    s_oGame._oInterface.setVisibleButDice(!1)
};
CGameSingle.prototype.onClickedTriangle = function (a) {
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
        this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite++ : this._iBearOffBlack++ , this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece(), this._oCurrentPiece.setTriangle(null), this._oCurrentPiece.unloadListeners();
    a.aMoveTriangle.shift();
    0 < a.aMoveTriangle.length ? (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
        x: this._aTriangle[c].getX(),
        y: this._aTriangle[c].getY()
    }, 700, createjs.Ease.cubicOut).call(function () {
        s_oGame.onClickedTriangle(a)
    }) : (this._bTurnPlayer1 || s_b2Players ||
        (this._bCpuTurned = !0), this._iPlayerDice -= a.cost, this._bDoubleDice || (0 === a.iDiceDisable ? this._bDice1 = !1 : (1 !== a.iDiceDisable && (this._bDice1 = !1), this._bDice2 = !1)), b ? this.afterMove() : this._oCurrentPiece.movePieceOnBoard(this._aTriangle[c].getX(), this._aTriangle[c].getY()));
    this._oCurrentPiece.isOnBar() ? this._oCurrentPiece.getColor() === WHITE_PIECE ? (this._aBar[BAR_UP].getLastPiece().setBar(!1), this._aTriangle[c].addPiece(this._aBar[BAR_UP].removePiece())) : (this._aBar[BAR_DOWN].getLastPiece().setBar(!1),
        this._aTriangle[c].addPiece(this._aBar[BAR_DOWN].removePiece())) : b || this._aTriangle[c].addPiece(this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece());
    b || this._oCurrentPiece.setTriangle(c)
};
CGameSingle.prototype.gameOver = function (a) {
    for (var c = 0, b = 0; b < this._aTriangle.length; b++) c += this._aTriangle[b].getNumPieces();
    for (b = 0; b < this._aBar.length; b++) c += this._aBar[b].getNumPieces();
    this._iScore = c * MULTIPLIER_SCORE;
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons()
};
var CGameMulti = function (a) {
    CGameBase.call(this, a);
    this._init()
};
CGameMulti.prototype = Object.create(CGameBase.prototype);
CGameMulti.prototype._init = function () {
    CGameBase.prototype._init();
    this._startGame()
};
CGameMulti.prototype._startGame = function () {
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
CGameMulti.prototype._onAfterDistribution = function () {
    if (!this._bFastDistribution) s_oGame.onFastDistribution();
    s_oNetworkManager.isUserA() && s_oInterface.setVisibleButDice(!0);
    s_oInterface.onFocusTurn(this._bTurnPlayer1);
    s_oGame.updateInput()
};
CGameMulti.prototype.changeTurn = function () {
    this._iNumTurns++;
    0 === this._iTotThrows % NUM_TURNS_PER_ADS && $(s_oMain).trigger("show_interlevel_ad");
    this._bTurnPlayer1 = !this._bTurnPlayer1;
    this._oWhiteDices.fadeOutTween();
    this._oRedDices.fadeOutTween();
    s_oNetworkManager.isUserA() ? this._bTurnPlayer1 ? (this._oThinking.hide(), s_oInterface.setVisibleButDice(!0)) : (this._oThinking.show(), s_oInterface.setVisibleButDice(!1)) : this._bTurnPlayer1 ? (this._oThinking.show(), s_oInterface.setVisibleButDice(!1)) : (this._oThinking.hide(),
        s_oInterface.setVisibleButDice(!0));
    this._oInterface.onFocusTurn(this._bTurnPlayer1)
};
CGameMulti.prototype.rollDice = function () {
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
CGameMulti.prototype.remoteDiceRoll = function (a) {
    s_oGame._bTurnPlayer1 ? s_oGame._oWhiteDices.showAResult(a.first, a.second) : s_oGame._bStartGame && s_oGame._oRedDices.showAResult(a.first, a.second)
};
CGameMulti.prototype.onClickedTriangle = function (a, c) {
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
    }, 300, createjs.Ease.cubicOut), this._oCurrentPiece.getColor() === WHITE_PIECE ? this._iBearOffWhite++ : this._iBearOffBlack++ , this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece(), this._oCurrentPiece.setTriangle(null), this._oCurrentPiece.unloadListeners();
    a.aMoveTriangle.shift();
    0 < a.aMoveTriangle.length ? (new createjs.Tween.get(this._oCurrentPiece.getPiece())).to({
        x: this._aTriangle[d].getX(),
        y: this._aTriangle[d].getY()
    }, 700, createjs.Ease.cubicOut).call(function () {
        s_oGame.onClickedTriangle(a, !0)
    }) : (this._bTurnPlayer1 || s_b2Players || (this._bCpuTurned = !0), this._iPlayerDice -= a.cost, this._bDoubleDice || (0 === a.iDiceDisable ? this._bDice1 = !1 : (1 !== a.iDiceDisable && (this._bDice1 = !1), this._bDice2 = !1)), b ? this.afterMove() : this._oCurrentPiece.movePieceOnBoard(this._aTriangle[d].getX(), this._aTriangle[d].getY()));
    this._oCurrentPiece.isOnBar() ? this._oCurrentPiece.getColor() === WHITE_PIECE ? (this._aBar[BAR_UP].getLastPiece().setBar(!1), this._aTriangle[d].addPiece(this._aBar[BAR_UP].removePiece())) : (this._aBar[BAR_DOWN].getLastPiece().setBar(!1),
        this._aTriangle[d].addPiece(this._aBar[BAR_DOWN].removePiece())) : b || this._aTriangle[d].addPiece(this._aTriangle[this._oCurrentPiece.getTriangle()].removePiece());
    b || this._oCurrentPiece.setTriangle(d)
};
CGameMulti.prototype.remoteMovePiece = function (a) {
    var c = this.getPieceByIndex(a.iCurrentPieceIndex);
    this.onClickedPiece(c);
    this.onClickedTriangle(a.aPossibleMove, !0)
};
CGameMulti.prototype.gameOver = function (a) {
    this._oThinking.hide();
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons();
    var c = !1;
    0 === a ? s_oNetworkManager.isUserA() && (c = !0) : s_oNetworkManager.isUserA() || (c = !0);
    s_oNetworkManager.sendMsg(MSG_END_MATCH, c)
};
CGameMulti.prototype.showRematchQuestion = function () { };
CGameMulti.prototype.unload = function () {
    this._bStartGame = !1;
    s_oGame._oInterface.unload();
    s_oGame._oEndPanel && s_oGame._oEndPanel.unload();
    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren();
    s_oNetworkManager.addEventListener(ON_DISCONNECTION, function () { })
};
CGameMulti.prototype.onConfirmExit = function () {
    s_oGame.unload();
    $(s_oMain).trigger("show_interlevel_ad");
    $(s_oMain).trigger("end_session");
    s_oMain.gotoMenu();
    s_oNetworkManager.disconnect()
};
CGameMulti.prototype._onConfirmRematch = function () {
    this._oEndPanel.changeMessage(TEXT_WAIT_OPPONENT);
    this._oEndPanel.hideButtons();
    s_oNetworkManager.sendMsg(MSG_ACCEPT_REMATCH, "")
};
CGameMulti.prototype.onOpponentRefuseRematch = function () {
    this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
    this._oEndPanel.hideRestartButton();
    this._oEndPanel.centerHomeButton()
};
CGameMulti.prototype.onOpponentAcceptRematch = function () {
    this._oEndPanel.hide();
    s_oNetworkManager.isUserA() || this._oThinking.show();
    s_oGame.onRestart();
    this._bTurnPlayer1 = !0
};
CGameMulti.prototype.playerDisconnectedFromGame = function () {
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
CGameMulti.prototype.opponentLeftTheGame = function () {
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
var CGameSingleWithBot = function (a) {
    CGameSingle.call(this, a)
};
CGameSingleWithBot.prototype = Object.create(CGameSingle.prototype);
CGameSingleWithBot.prototype._startGame = function () {
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
CGameSingleWithBot.prototype.gameOver = function (a) {
    for (var c = 0, b = 0; b < this._aTriangle.length; b++) c += this._aTriangle[b].getNumPieces();
    for (b = 0; b < this._aBar.length; b++) c += this._aBar[b].getNumPieces();
    this._iScore = c * MULTIPLIER_SCORE;
    this._oEndPanel.show(this._iScore, a);
    this._oEndPanel.showButtons()
};
CGameSingleWithBot.prototype._onConfirmRematch = function () {
    this._oEndPanel.changeMessage(TEXT_WAIT_OPPONENT);
    this._oEndPanel.hideButtons();
    var a = randomFloatBetween(200, 2E3);
    if (.33 < Math.random()) .4 < Math.random() ? setTimeout(function () {
        s_oGame._rematch()
    }, a) : s_oGame._rematch();
    else if (.4 < Math.random()) setTimeout(function () {
        s_oGame.onBotRefuseRematch()
    }, a);
    else s_oGame.onBotRefuseRematch()
};
CGameSingleWithBot.prototype.onBotRefuseRematch = function () {
    this._oEndPanel.changeMessage(TEXT_OPPONENT_LEFT);
    this._oEndPanel.hideRestartButton();
    this._oEndPanel.centerHomeButton()
};
CGameSingleWithBot.prototype._rematch = function () {
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
    this._init = function () {
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
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
        k.unload();
        s_oStage.removeChild(m);
        y && screenfull.enabled && n.unload();
        s_oInterface = null
    };
    this.refreshPlayersScore = function (a, b) { };
    this.setP2ImageHuman = function () {
        var a = s_oSpriteLibrary.getSprite("turn_p2");
        z.image = a
    };
    this.refreshButtonPos = function (a, c) {
        k.setPosition(g -
            a, c + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(d - a, c + f);
        y && screenfull.enabled && n.setPosition(b + a, e + c);
        s_bMobile && t && (s_b2Players ? ((void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x - a, (void 0).y - c), (void 0).setPosition((void 0).x - a, (void 0).y - c)) : ((void 0).setPosition((void 0).x + a, (void 0).y - c), (void 0).setPosition((void 0).x + a, (void 0).y - c)))
    };
    this.onFocusTurn = function (a) {
        D && (D = !1, F.tweenFocusTurn());
        C.y =
            a ? Y_INTERFACE_PLAYER_1 : Y_INTERFACE_PLAYER_2
    };
    this.setPlayersInfo = function (a, b) {
        var c = s_oSpriteLibrary.getSprite("turn_p1");
        new CVerticalText(w.x + c.width / 2, w.y + c.height, a, m);
        new CVerticalText(z.x + c.width / 2, z.y + c.height, b, m)
    };
    this.tweenFocusTurn = function () {
        (new createjs.Tween.get(C)).to({
            alpha: 1
        }, 700).to({
            alpha: 0
        }, 700).call(F.tweenFocusTurn)
    };
    this.setOnTop = function () {
        s_oStage.addChildAt(m, s_oStage.numChildren)
    };
    this.setVisibleButDice = function (b) {
        !1 === b ? (new createjs.Tween.get(x.getButtonImage())).to({
            x: CANVAS_WIDTH +
                200
        }, 300, createjs.Ease.cubicIn) : !0 === b && (new createjs.Tween.get(x.getButtonImage())).to({
            x: a
        }, 300, createjs.Ease.cubicOut)
    };
    this.refreshScore = function (a) { };
    this._onRollDice = function () {
        s_oGame.rollDice()
    };
    this._onButHelpRelease = function () {
        q = new CHelpPanel
    };
    this.onExitFromHelp = function () {
        q.unload()
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function () {
        new CAreYouSurePanel(s_oGame.onConfirmExit)
    };
    this.resetFullscreenBut = function () {
        n.setActive(s_bFullscreen)
    };
    this._onFullscreen = function () {
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
    this._init = function () {
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
    this.changePointer = function (a) {
        !1 === s_bMobile && (a.target.cursor = "pointer")
    };
    this.unload = function () {
        e.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(c);
            s_oStage.removeChild(b);
            e.unload()
        });
        f.off("click", g);
        s_oStage.removeChild(f)
    };
    this._onLogoButRelease = function () {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._onMoreGamesReleased = function () {
        window.open("http://codecanyon.net/collections/5409142-games")
    };
    this._init()
}

function CAreYouSurePanel(a) {
    var c, b, e, d, f, g;
    this._init = function (a) {
        createjs.Tween.pauseAllTweens();
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        g = d.on("mousedown", function () { });
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
    this._onButYes = function () {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function () {
            h.unload();
            a()
        })
    };
    this._onButNo = function () {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: c
        },
            400, createjs.Ease.backIn).call(function () {
                h.unload()
            })
    };
    this.unload = function () {
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
    this._init = function (a) {
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
        function () {
            s_oStage.removeChild(b);
            h.unload();
            l.unload()
        };
    this.addEventListener = function (a, b, c) {
        m[a] = b;
        n[a] = c
    };
    this.onMouseDown = function () { };
    this._initListener = function () {
        l.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        h.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function (a, c) {
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
        }, 500).call(function () {
            h._initListener()
        });
        $(s_oMain).trigger("save_score", g);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this.hide = function () {
        b.visible = !1
    };
    this.hideRestartButton = function () {
        h.setVisible(!1)
    };
    this.hideButtons = function () {
        l.setVisible(!1);
        h.setVisible(!1)
    };
    this.showButtons = function () {
        l.setVisible(!0);
        h.setVisible(!0)
    };
    this.changeMessage = function (a) {
        e.text = a
    };
    this.centerHomeButton =
        function () {
            s_oSpriteLibrary.getSprite("msg_box");
            l.setX(CANVAS_WIDTH / 2);
            l.setVisible(!0)
        };
    this._onExit = function () {
        k.stop();
        f = ON_BACK_MENU;
        m[f] && m[f].call(n[f])
    };
    this._onRestart = function () {
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
    this.init = function () {
        s_oSelectPlayers = this;
        g = new createjs.Container;
        s_oStage.addChild(g);
        var r = s_oSpriteLibrary.getSprite("bg_select_mode");
        r = new createBitmap(r, r.width, r.height);
        g.addChild(r);
        r = s_oSpriteLibrary.getSprite("but_p1");
        h = new CGfxButton(CANVAS_WIDTH / 2 - 225, CANVAS_HEIGHT / 2 + 50, r, g);
        h.addEventListener(ON_MOUSE_DOWN, function () {
            this.onSelectPlayer(!1)
        }, this);
        r = s_oSpriteLibrary.getSprite("but_p2");
        l = new CGfxButton(CANVAS_WIDTH /
            2 + 225, CANVAS_HEIGHT / 2 + 50, r, g);
        l.addEventListener(ON_MOUSE_DOWN, function () {
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
    this.refreshButtonPos = function (g, h) {
        m.setPosition(d - g, f + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(b - g, h + e);
        t && screenfull.enabled && q.setPosition(a + g, c + h)
    };
    this.onSelectPlayer = function (a) {
        s_b2Players = a;
        this.unload();
        s_oMain.gotoGame()
    };
    this.unload = function () {
        s_oStage.removeChild(g);
        s_oSelectPlayers
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function () {
        q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? y.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function () {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayers = null;

function CAlertBox(a) {
    var c, b, e, d, f, g = this,
        h;
    this.init = function (a) {
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
    this.show = function (a) {
        h = !1;
        d.text = a;
        (new createjs.Tween.get(c)).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.cubicOut).wait(1600).call(function () {
            h || g.hide()
        })
    };
    this.hide = function () {
        h = !0;
        createjs.Tween.removeTweens(c);
        (new createjs.Tween.get(c)).to({
            y: f
        }, 500, createjs.Ease.cubicIn)
    };
    this.onMouseDown = function () {
        h || g.hide()
    };
    this.init(a)
}

function CThinking() {
    var a, c, b, e, d, f, g;
    this._init = function () {
        a = !0;
        c = 0;
        b = new createjs.Container;
        var h = (new createjs.Graphics).beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f = new createjs.Shape(h);
        g = f.on("click", function () { });
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
    this.unload = function () {
        a = !1;
        f.off("click", g);
        s_oStage.removeChild(b)
    };
    this.isShown = function () {
        return b.visible
    };
    this.show = function () {
        b.visible = !0
    };
    this.hide = function () {
        b.visible = !1
    };
    this.setMessage = function (a) {
        e.text = a
    };
    this.update = function () {
        a && (c += s_iTimeElaps, 0 <= c && c < TIME_LOOP_WAIT / 4 ? d.text = "" : c >= TIME_LOOP_WAIT / 4 && c < 2 * TIME_LOOP_WAIT / 4 ? d.text = "." : c >= 2 * TIME_LOOP_WAIT / 4 &&
            c < 3 * TIME_LOOP_WAIT / 4 ? d.text = ".." : c >= 3 * TIME_LOOP_WAIT / 4 && c < TIME_LOOP_WAIT ? d.text = "..." : c = 0)
    };
    this._init()
}

function CPiece(a, c, b, e, d) {
    var f, g, h, l, k, m, n, q, t, y, r, x, w, z, C, D;
    this.init = function (a, b, c, d, e) {
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
    this.onOver = function (a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setClicked = function (a) {
        !0 === a ? (m.alpha = 1, q = !0) : (m.alpha = 0, q = !1)
    };
    this.getStateClick = function () {
        return q
    };
    this.getColor = function () {
        return h
    };
    this.getInstance = function () {
        return n
    };
    this.getPiece = function () {
        return l
    };
    this.getIndex = function () {
        return y
    };
    this.getXOut = function () {
        return f - 2
    };
    this.getYOut = function (a) {
        return h === WHITE_PIECE ? Y_OFFBOARD_DOWN + 238 - 17 * a : Y_OFFBOARD_UP + 17 * a
    };
    this.takeInAnimation = function () {
        k.gotoAndPlay("takeIn")
    };
    this.takeOutAnimation = function () {
        k.gotoAndPlay("takeOut")
    };
    this.setTriangle = function (a) {
        z = a
    };
    this.getTriangle = function () {
        return z
    };
    this.setOnTop = function () {
        t.addChild(l)
    };
    this.setBar = function (a) {
        C = a
    };
    this.isOnBar = function () {
        return C
    };
    this.movePieceDistribution = function (a, b) {
        this.takeInAnimation();
        playSound("click_cell",
            1, !1);
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, MS_DISTRIBUTION, createjs.Ease.cubicOut).call(function () {
            s_oGame.initDistribution()
        })
    };
    this.movePieceOnBoard = function (a, b) {
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, 700, createjs.Ease.cubicOut).call(function () {
            s_oGame.updateInput();
            s_oGame.afterMove()
        })
    };
    this.movePiece = function (a, b) {
        (new createjs.Tween.get(l)).to({
            x: a,
            y: b
        }, 700, createjs.Ease.cubicOut)
    };
    this.initListeners = function () {
        r = l.on("mousedown", function () {
            s_oGame.onClickedPiece(n)
        });
        x = l.on("rollover",
            this.onOver);
        w = l.on("rollout", this.onMouseOut);
        D = !0
    };
    this.unloadListeners = function () {
        l.off("mousedown", r);
        l.off("rollover", x);
        l.off("rollout", w);
        D = !1
    };
    this.cpuInit = function () {
        D = !0
    };
    this.cpuUnload = function () {
        D = !1
    };
    this.getStateListener = function () {
        return D
    };
    this.onMouseOut = function (a) {
        s_bMobile || (a.target.cursor = "default")
    };
    this.init(a, c, b, e, d)
}

function CTriangle(a, c, b, e) {
    var d, f, g, h, l, k, m, n, q, t;
    this.init = function (a, b, c, e) {
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
    this.reset = function () {
        n = []
    };
    this.getX = function () {
        return d
    };
    this.getY = function () {
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
    this.getNumPieces = function () {
        return n.length
    };
    this.addPiece = function (a) {
        n.push(a);
        q = a.getColor()
    };
    this.isHerePiece = function (a) {
        for (var b = !1, c = 0; c < n.length; c++) a === n[c] && (b = !0);
        return b
    };
    this.getColor = function () {
        return q
    };
    this.getPieceByIndex = function (a) {
        return n[a]
    };
    this.onFocus = function (a) {
        k.gotoAndStop("focus");
        this.initShape(a)
    };
    this.onOver = function (a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.onIdle = function () {
        k.gotoAndStop("idle");
        s_oStage.removeChild(t)
    };
    this.getLastPiece = function () {
        return n[n.length - 1]
    };
    this.getArrayPieces = function () {
        return n
    };
    this.removePiece = function () {
        return n.pop()
    };
    this.initShape = function (b) {
        t = new createjs.Shape;
        l === TRIANGLE_UP ? t.graphics.beginFill("#000000").drawRect(a - 31, c, 62, 283) : t.graphics.beginFill("#000000").drawRect(a - 31, c, 62, -283);
        t.alpha = .01;
        t.on("mousedown", function () {
            s_oGame.onClickedTriangle(b)
        });
        t.on("mouseover", this.onOver);
        s_oStage.addChild(t)
    };
    this.init(a, c, b, e)
}

function CBar(a, c, b, e) {
    var d, f, g, h, l, k, m, n;
    this.init = function (a, b, c, e) {
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
    this.getX = function () {
        return d
    };
    this.getY = function () {
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
    this.getNumPieces = function () {
        return k.length
    };
    this.addPiece = function (a) {
        k.push(a);
        m = a.getColor()
    };
    this.isHerePiece = function (a) {
        for (var b = !1, c = 0; c < k.length; c++) a === k[c] && (b = !0);
        return b
    };
    this.getColor = function () {
        return m
    };
    this.getPieceByIndex =
        function (a) {
            return k[a]
        };
    this.onOver = function (a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.getLastPiece = function () {
        return k[k.length - 1]
    };
    this.getArrayPieces = function () {
        return k
    };
    this.removePiece = function () {
        return k.pop()
    };
    this.init(a, c, b, e)
}

function CDices(a) {
    var c, b, e, d, f, g, h = !1,
        l, k, m = this;
    this._init = function (a) {
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
    this.isAnimationOn = function () {
        return h
    };
    this.checkToRetry = function () {
        s_oGame.checkForFirstTurn();
        9 === b + e && Math.floor(100 * Math.random() + 1) > DICE_RETRY_VAR && (b = Math.floor(6 * Math.random() + 1), e = Math.floor(6 * Math.random() +
            1))
    };
    this.show = function () {
        d.visible = f.visible = !1;
        b = Math.floor(6 * Math.random() + 1);
        e = Math.floor(6 * Math.random() + 1);
        h = !0;
        playSound("dices", 1, !1);
        g.visible = !0;
        g.gotoAndPlay("idle");
        g.on("animationend", function () {
            g.visible && m.secondAnimation()
        })
    };
    this.showAResult = function (a, c) {
        b = a;
        e = c;
        h = !0;
        playSound("dices", 1, !1);
        g.visible = !0;
        g.gotoAndPlay("idle");
        g.on("animationend", function () {
            g.visible && m.secondAnimation()
        })
    };
    this.secondAnimation = function () {
        g.visible = !1;
        d.alpha = f.alpha = 1;
        d.visible = f.visible = !0;
        d.gotoAndPlay("idle" +
            b);
        f.gotoAndPlay("idle" + e);
        h = !1;
        s_oGame.afterRollDice(b, e)
    };
    this.movePlayer = function () {
        !1 === h && (h = !0, s_oGame.movePlayer(b + e))
    };
    this.fadeOutTween = function () {
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
    this.returnDiceResult1 = function () {
        return b
    };
    this.returnDiceResult2 = function () {
        return e
    };
    this.hide = function () {
        d.visible = f.visible = !1
    };
    this.unload = function () {
        s_oDices = null
    };
    this.isFirstLaunch = function () {
        return l
    };
    this.setFirstLaunch =
        function (a) {
            l = a
        };
    s_oDices = this;
    this._init(a)
}

function CVerticalText(a, c, b, e) {
    var d, f;
    this._init = function (a, b, c, e) {
        d = new createjs.Container;
        d.x = a;
        d.y = b;
        e.addChild(d);
        this._buildText()
    };
    this.unload = function () { };
    this._buildText = function () {
        for (var a = 0; a < b.length; a++) f = new createjs.Text(b[a], "60px " + PRIMARY_FONT, "#3d1f00"), f.y += 50 * a, f.textBaseline = "top", f.textAlign = "center", f.lineWidth = 100, d.addChild(f);
        a = d.getBounds().height;
        146 < a && (d.scaleX = d.scaleY = 146 / a)
    };
    this._init(a, c, b, e)
};