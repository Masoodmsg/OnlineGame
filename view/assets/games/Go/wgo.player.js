/*! MIT license, more info: wgo.waltheri.net */


(function(b, p) {
    var g = function(u) {
            var a = new r(JSON.parse(JSON.stringify(u.getProperties()))),
                c;
            for (c in u.children) a.appendChild(g(u.children[c]));
            return a
        },
        f = function(u, a) {
            var c;
            if (a[u] !== p) return a[u];
            for (var h in a.children)
                if (c = f(u, a.children[h])) return c;
            return !1
        },
        l = function(a, c) {
            a.push(JSON.parse(JSON.stringify(c.getProperties())));
            if (1 < c.children.length) {
                for (var h = [], e = 0; e < c.children.length; e++) {
                    var d = [];
                    l(d, c.children[e]);
                    h.push(d)
                }
                a.push(h)
            } else c.children.length && l(a, c.children[0])
        },
        d = function(c,
            a) {
            for (var h = a, e, b = 1; b < c.length; b++)
                if (c[b].constructor == Array)
                    for (var k = 0; k < c[b].length; k++) e = new r(c[b][k][0]), h.appendChild(e), d(c[b][k], e);
                else e = new r(c[b]), h.insertAfter(e), h = e
        },
        k = function(c) {
            return "string" == typeof c ? c.replace(/\\/g, "\\\\").replace(/]/g, "\\]") : c
        },
        a = function(c, a) {
            return String.fromCharCode(97 + c) + String.fromCharCode(97 + a)
        },
        h = function(c, a, h) {
            if (a.length) {
                h.sgf += c;
                for (var e in a) h.sgf += "[" + a[e] + "]"
            }
        },
        n = function(c, e) {
            if (c.move) {
                var d = "";
                c.move.pass || (d = a(c.move.x, c.move.y));
                e.sgf =
                    c.move.c == b.B ? e.sgf + ("B[" + d + "]") : e.sgf + ("W[" + d + "]")
            }
            if (c.setup) {
                var d = [],
                    m = [],
                    f = [],
                    q;
                for (q in c.setup) c.setup[q].c == b.B ? d.push(a(c.setup[q].x, c.setup[q].y)) : c.setup[q].c == b.W ? m.push(a(c.setup[q].x, c.setup[q].y)) : f.push(a(c.setup[q].x, c.setup[q].y));
                h("AB", d, e);
                h("AW", m, e);
                h("AE", f, e)
            }
            if (c.markup) {
                d = {};
                for (q in c.markup) d[c.markup[q].type] = d[c.markup[q].type] || [], "LB" == c.markup[q].type ? d.LB.push(a(c.markup[q].x, c.markup[q].y) + ":" + k(c.markup[q].text)) : d[c.markup[q].type].push(a(c.markup[q].x, c.markup[q].y));
                for (var g in d) h(g, d[g], e)
            }
            q = c.getProperties();
            for (g in q) "object" != typeof q[g] && (e.sgf = "turn" == g ? e.sgf + ("PL[" + (q[g] == b.B ? "B" : "W") + "]") : "comment" == g ? e.sgf + ("C[" + k(q[g]) + "]") : e.sgf + (g + "[" + k(q[g]) + "]"));
            if (1 == c.children.length) e.sgf += "\n;", n(c.children[0], e);
            else if (1 < c.children.length)
                for (g in c.children) q = c.children[g], d = e, d.sgf += "(\n;", n(q, d), d.sgf += "\n)"
        },
        m = function() {
            this.size = 19;
            this.info = {};
            this.root = new r;
            this.propertyCount = this.nodeCount = 0
        };
    m.prototype = {
        constructor: m,
        clone: function() {
            var c =
                new m;
            c.size = this.size;
            c.info = JSON.parse(JSON.stringify(this.info));
            c.root = g(this.root);
            c.nodeCount = this.nodeCount;
            c.propertyCount = this.propertyCount;
            return c
        },
        hasComments: function() {
            return !!f("comment", this.root)
        }
    };
    m.fromSgf = function(c) {
        return b.SGF.parse(c)
    };
    m.fromJGO = function(c) {
        c = "string" == typeof c ? JSON.parse(c) : c;
        var a = new m;
        a.info = JSON.parse(JSON.stringify(c.info));
        a.size = c.size;
        a.nodeCount = c.nodeCount;
        a.propertyCount = c.propertyCount;
        a.root = new r(c.game[0]);
        d(c.game, a.root);
        return a
    };
    m.prototype.toSgf =
        function() {
            var c = {
                    sgf: "(\n;"
                },
                a = {},
                e;
            for (e in this.info) "black" == e ? (this.info.black.name && (a.PB = k(this.info.black.name)), this.info.black.rank && (a.BR = k(this.info.black.rank)), this.info.black.team && (a.BT = k(this.info.black.team))) : "white" == e ? (this.info.white.name && (a.PW = k(this.info.white.name)), this.info.white.rank && (a.WR = k(this.info.white.rank)), this.info.white.team && (a.WT = k(this.info.white.team))) : a[e] = k(this.info[e]);
            this.size && (a.SZ = this.size);
            a.AP || (a.AP = "WGo.js:2");
            a.FF || (a.FF = "4");
            a.GM || (a.GM =
                "1");
            a.CA || (a.CA = "UTF-8");
            for (e in a) a[e] && (c.sgf += e + "[" + a[e] + "]");
            n(this.root, c);
            c.sgf += ")";
            return c.sgf
        };
    m.prototype.toJGO = function(c) {
        var a = {};
        a.size = this.size;
        a.info = JSON.parse(JSON.stringify(this.info));
        a.nodeCount = this.nodeCount;
        a.propertyCount = this.propertyCount;
        a.game = [];
        l(a.game, this.root);
        return c ? JSON.stringify(a) : a
    };
    var e = function(c) {
        var a;
        c.name ? (a = b.filterHTML(c.name), c.rank && (a += " (" + b.filterHTML(c.rank) + ")"), c.team && (a += ", " + b.filterHTML(c.team))) : (c.team && (a = b.filterHTML(c.team)),
            c.rank && (a += " (" + b.filterHTML(c.rank) + ")"));
        return a
    };
    m.infoFormatters = {
        black: e,
        white: e,
        TM: function(c) {
            if (0 == c) return b.t("none");
            var a, e = Math.floor(c / 60);
            1 == e ? a = "1 " + b.t("minute") : 1 < e && (a = e + " " + b.t("minutes"));
            e = c % 60;
            1 == e ? a += " 1 " + b.t("second") : 1 < e && (a += " " + e + " " + b.t("seconds"));
            return a
        },
        RE: function(c) {
            return '<a href="javascript: void(0)" onclick="this.parentNode.innerHTML = \'' + b.filterHTML(c) + '\'" title="' + b.t("res-show-tip") + '">' + b.t("show") + "</a>"
        }
    };
    m.infoList = "black white AN CP DT EV GN GC HA ON OT RE RO RU SO TM US PC KM".split(" ");
    b.Kifu = m;
    var c = function(c, a, e) {
            for (var h = 0; h < c.length; h++)
                if (c[h].x == a.x && c[h].y == a.y) {
                    c[h][e] = a[e];
                    return
                }
            c.push(a)
        },
        q = function(c, a) {
            if (c)
                for (var e = 0; e < c.length; e++)
                    if (c[e].x == a.x && c[e].y == a.y) {
                        c.splice(e, 1);
                        break
                    }
        },
        r = function(c, a) {
            this.parent = a || null;
            this.children = [];
            if (c)
                for (var e in c) this[e] = c[e]
        };
    r.prototype = {
        constructor: r,
        getChild: function(c) {
            c = c || 0;
            return this.children[c] ? this.children[c] : null
        },
        addSetup: function(a) {
            this.setup = this.setup || [];
            c(this.setup, a, "c");
            return this
        },
        removeSetup: function(c) {
            q(this.setup,
                c);
            return this
        },
        addMarkup: function(a) {
            this.markup = this.markup || [];
            c(this.markup, a, "type");
            return this
        },
        removeMarkup: function(c) {
            q(this.markup, c);
            return this
        },
        remove: function() {
            var c = this.parent;
            if (!c) throw new Exception("Root node cannot be removed");
            for (var a in c.children)
                if (c.children[a] == this) {
                    c.children.splice(a, 1);
                    break
                }
            c.children = c.children.concat(this.children);
            this.parent = null;
            return c
        },
        insertAfter: function(c) {
            for (var a in this.children) this.children[a].parent = c;
            c.children = c.children.concat(this.children);
            c.parent = this;
            this.children = [c];
            return c
        },
        appendChild: function(c) {
            c.parent = this;
            this.children.push(c);
            return c
        },
        getProperties: function() {
            var c = {},
                a;
            for (a in this) this.hasOwnProperty(a) && "children" != a && "parent" != a && "_" != a[0] && (c[a] = this[a]);
            return c
        }
    };
    b.KNode = r;
    var y = function(c, a) {
            for (var e = c.size, h = [], d = [], b = 0; b < e * e; b++) c.schema[b] && !a.schema[b] ? d.push({
                x: Math.floor(b / e),
                y: b % e
            }) : c.schema[b] != a.schema[b] && h.push({
                x: Math.floor(b / e),
                y: b % e,
                c: a.schema[b]
            });
            return {
                add: h,
                remove: d
            }
        },
        e = function(c, a, e) {
            this.kifu =
                c;
            this.node = this.kifu.root;
            this.allow_illegal = e || !1;
            this.game = new b.Game(this.kifu.size, this.allow_illegal ? "NONE" : "KO", this.allow_illegal, this.allow_illegal);
            this.path = {
                m: 0
            };
            this.kifu.info.HA && 1 < this.kifu.info.HA && (this.game.turn = b.W);
            this.change = v(this.game, this.node, !0);
            this.rememberPath = a ? !0 : !1
        },
        w = function(c, a) {
            var e = [],
                h, d;
            for (d in c) {
                h = !0;
                for (var b in a)
                    if (c[d].x == a[b].x && c[d].y == a[b].y) {
                        h = !1;
                        break
                    }
                h && e.push(c[d])
            }
            return e
        },
        v = function(c, a, e) {
            a.parent && (a.parent._last_selected = a.parent.children.indexOf(a));
            if (a.move != p) {
                if (a.move.pass) return c.pass(a.move.c), {
                    add: [],
                    remove: []
                };
                c = c.play(a.move.x, a.move.y, a.move.c);
                if ("number" == typeof c) throw new x(c, a);
                for (var h in c)
                    if (c[h].x == a.move.x && c[h].y == a.move.y) return {
                        add: [],
                        remove: c
                    };
                return {
                    add: [a.move],
                    remove: c
                }
            }
            e || c.pushPosition();
            e = [];
            var d = [];
            if (a.setup != p)
                for (h in a.setup) a.setup[h].c ? (c.setStone(a.setup[h].x, a.setup[h].y, a.setup[h].c), e.push(a.setup[h])) : (c.removeStone(a.setup[h].x, a.setup[h].y), d.push(a.setup[h]));
            a.turn && (c.turn = a.turn);
            return {
                add: e,
                remove: d
            }
        },
        z = function(c) {
            c === p && this.rememberPath && (c = this.node._last_selected);
            c = c || 0;
            var a = this.node.children[c];
            if (!a) return !1;
            var e = v(this.game, a);
            this.path.m++;
            1 < this.node.children.length && (this.path[this.path.m] = c);
            this.node = a;
            return e
        },
        A = function() {
            if (!this.node.parent) return !1;
            this.node = this.node.parent;
            this.game.popPosition();
            this.node.turn && (this.game.turn = this.node.turn);
            this.path[this.path.m] !== p && delete this.path[this.path.m];
            this.path.m--;
            return !0
        },
        B = function() {
            this.game.firstPosition();
            this.node = this.kifu.root;
            this.path = {
                m: 0
            };
            this.kifu.info.HA && 1 < this.kifu.info.HA && (this.game.turn = b.W);
            this.change = v(this.game, this.node, !0)
        };
    e.prototype = {
        constructor: e,
        next: function(c) {
            this.change = z.call(this, c);
            return this
        },
        last: function() {
            var c;
            for (this.change = {
                    add: [],
                    remove: []
                }; c = z.call(this);) {
                var a = this.change;
                a.add = w(a.add, c.remove).concat(c.add);
                a.remove = w(a.remove, c.add).concat(c.remove)
            }
            return this
        },
        previous: function() {
            var c = this.game.getPosition();
            A.call(this);
            this.change = y(c, this.game.getPosition());
            return this
        },
        first: function() {
            var c = this.game.getPosition();
            B.call(this);
            this.change = y(c, this.game.getPosition());
            return this
        },
        goTo: function(c) {
            if (c === p) return this;
            var a = this.game.getPosition();
            B.call(this);
            for (var e = 0; e < c.m && z.call(this, c[e + 1]); e++);
            this.change = y(a, this.game.getPosition());
            return this
        },
        previousFork: function() {
            for (var c = this.game.getPosition(); A.call(this) && 1 == this.node.children.length;);
            this.change = y(c, this.game.getPosition());
            return this
        },
        getPosition: function() {
            return this.game.getPosition()
        },
        allowIllegalMoves: function(c) {
            c ? (this.game.allow_rewrite = !0, this.game.allow_suicide = !0, this.repeating = "NONE") : (this.game.allow_rewrite = !1, this.game.allow_suicide = !1, this.repeating = "KO")
        }
    };
    b.KifuReader = e;
    var x = function(c, a) {
        this.name = "InvalidMoveError";
        this.message = "Invalid move in kifu detected. ";
        if (a.move && a.move.c !== p && a.move.x !== p && a.move.y !== p) {
            var e = a.move.x;
            7 < a.move.x && e++;
            String.fromCharCode(e + 65);
            this.message += "Trying to play " + (a.move.c == b.WHITE ? "white" : "black") + " move on " + String.fromCharCode(a.move.x +
                65) + "" + (19 - a.move.y)
        } else this.message += "Move object doesn't contain arbitrary attributes.";
        if (c) switch (c) {
            case 1:
                this.message += ", but these coordinates are not on board.";
                break;
            case 2:
                this.message += ", but there already is a stone.";
                break;
            case 3:
                this.message += ", but this move is a suicide.";
                break;
            case 4:
                this.message += ", but this position already occured."
        } else this.message += "."
    };
    x.prototype = Error();
    x.prototype.constructor = x;
    b.InvalidMoveError = x;
    b.i18n.en.show = "show";
    b.i18n.en["res-show-tip"] = "Click to show result."
})(WGo);
(function(b, p) {
    b.SGF = {};
    var g = function(a, d, b, e, c, k) {
            d = k == d ? "black" : "white";
            b.info[d] = b.info[d] || {};
            b.info[d][a] = c[0]
        },
        f = b.SGF.properties = {};
    f.B = f.W = function(a, d, k, e) {
        d.move = !k[0] || 19 >= a.size && "tt" == k[0] ? {
            pass: !0,
            c: "B" == e ? b.B : b.W
        } : {
            x: k[0].charCodeAt(0) - 97,
            y: k[0].charCodeAt(1) - 97,
            c: "B" == e ? b.B : b.W
        }
    };
    f.AB = f.AW = function(a, d, k, e) {
        for (var c in k) d.addSetup({
            x: k[c].charCodeAt(0) - 97,
            y: k[c].charCodeAt(1) - 97,
            c: "AB" == e ? b.B : b.W
        })
    };
    f.AE = function(a, d, b) {
        for (var e in b) d.addSetup({
            x: b[e].charCodeAt(0) - 97,
            y: b[e].charCodeAt(1) -
                97
        })
    };
    f.PL = function(a, d, k) {
        d.turn = "b" == k[0] || "B" == k[0] ? b.B : b.W
    };
    f.C = function(a, d, b) {
        d.comment = b.join()
    };
    f.LB = function(a, d, b) {
        for (var e in b) d.addMarkup({
            x: b[e].charCodeAt(0) - 97,
            y: b[e].charCodeAt(1) - 97,
            type: "LB",
            text: b[e].substr(3)
        })
    };
    f.CR = f.SQ = f.TR = f.SL = f.MA = function(a, d, b, e) {
        for (var c in b) d.addMarkup({
            x: b[c].charCodeAt(0) - 97,
            y: b[c].charCodeAt(1) - 97,
            type: e
        })
    };
    f.SZ = function(a, d, b) {
        a.size = parseInt(b[0])
    };
    f.BR = f.WR = g.bind(this, "rank", "BR");
    f.PB = f.PW = g.bind(this, "name", "PB");
    f.BT = f.WT = g.bind(this, "team",
        "BT");
    f.TM = function(a, d, b, e) {
        a.info[e] = b[0];
        d.BL = b[0];
        d.WL = b[0]
    };
    var l = /\(|\)|(;(\s*[A-Z]+(\s*((\[\])|(\[(.|\s)*?([^\\]\]))))+)*)/g,
        d = /[A-Z]+(\s*((\[\])|(\[(.|\s)*?([^\\]\]))))+/g,
        k = /[A-Z]+/,
        a = /(\[\])|(\[(.|\s)*?([^\\]\]))/g;
    b.SGF.parse = function(h) {
        var f = [],
            g, e, c, q = new b.Kifu,
            r = null;
        h = h.match(l);
        for (var p in h)
            if ("(" == h[p]) f.push(r);
            else if (")" == h[p]) r = f.pop();
        else {
            r && q.nodeCount++;
            r = r ? r.appendChild(new b.KNode) : q.root;
            g = h[p].match(d) || [];
            q.propertyCount += g.length;
            for (var w in g) {
                c = k.exec(g[w])[0];
                e = g[w].match(a);
                for (var v in e) e[v] = e[v].substring(1, e[v].length - 1).replace(/\\(?!\\)/g, "");
                if (b.SGF.properties[c]) b.SGF.properties[c](q, r, e, c);
                else 1 >= e.length && (e = e[0]), r.parent ? r[c] = e : q.info[c] = e
            }
        }
        return q
    }
})(WGo);
(function(b) {
    var p = function(c, a) {
        this.name = "FileError";
        this.message = 1 == a ? "File '" + c + "' is empty." : 2 == a ? "Network error. It is not possible to read '" + c + "'." : "File '" + c + "' hasn't been found on server."
    };
    p.prototype = Error();
    p.prototype.constructor = p;
    b.FileError = p;
    var g = b.loadFromUrl = function(c, a) {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        if (0 == e.responseText.length) throw new p(c, 1);
                        a(e.responseText)
                    } else throw new p(c);
            };
            try {
                e.open("GET", c, !0), e.send()
            } catch (d) {
                throw new p(c,
                    2);
            }
        },
        f = function(c) {
            c.change && this.board.update(c.change);
            this.temp_marks && this.board.removeObject(this.temp_marks);
            var a = [];
            this.notification();
            c.node.move && this.config.markLastMove && (c.node.move.pass ? this.notification(b.t((c.node.move.c == b.B ? "b" : "w") + "pass")) : a.push({
                type: "CR",
                x: c.node.move.x,
                y: c.node.move.y
            }));
            if (1 < c.node.children.length && this.config.displayVariations)
                for (var e = 0; e < c.node.children.length; e++) c.node.children[e].move && !c.node.children[e].move.pass && a.push({
                    type: "LB",
                    text: String.fromCharCode(65 +
                        e),
                    x: c.node.children[e].move.x,
                    y: c.node.children[e].move.y,
                    c: this.board.theme.variationColor || "rgba(0,32,128,0.8)"
                });
            if (c.node.markup) {
                for (e in c.node.markup)
                    for (var d = 0; d < a.length; d++) c.node.markup[e].x == a[d].x && c.node.markup[e].y == a[d].y && (a.splice(d, 1), d--);
                a = a.concat(c.node.markup)
            }
            this.temp_marks = a;
            this.board.addObject(a)
        },
        l = function(c) {
            this.board.setSize(c.kifu.size);
            this.board.removeAllObjects();
            this.config.enableWheel && this.setWheel(!0)
        },
        d = function(c, a) {
            return c == a.element || c == a.element ? !1 :
                c._wgo_scrollable || c.scrollHeight > c.offsetHeight && "auto" == window.getComputedStyle(c).overflow ? !0 : d(c.parentNode, a)
        },
        k = function(c) {
            var a = c.wheelDelta || -1 * c.detail;
            return d(c.target, this) ? !0 : 0 > a ? (this.next(), this.config.lockScroll && c.preventDefault && c.preventDefault(), !this.config.lockScroll) : 0 < a ? (this.previous(), this.config.lockScroll && c.preventDefault && c.preventDefault(), !this.config.lockScroll) : !0
        },
        a = function(c) {
            if (document.querySelector("input:focus, textarea:focus")) return !0;
            switch (c.keyCode) {
                case 39:
                    this.next();
                    break;
                case 37:
                    this.previous();
                    break;
                default:
                    return !0
            }
            this.config.lockScroll && c.preventDefault && c.preventDefault();
            return !this.config.lockScroll
        },
        h = function(c, a) {
            if (!this.kifuReader || !this.kifuReader.node) return !1;
            for (var e in this.kifuReader.node.children)
                if (this.kifuReader.node.children[e].move && this.kifuReader.node.children[e].move.x == c && this.kifuReader.node.children[e].move.y == a) {
                    this.next(e);
                    break
                }
        },
        n = function(c) {
            this.config = c;
            for (var a in n.default) void 0 === this.config[a] && void 0 !== n.default[a] &&
                (this.config[a] = n.default[a]);
            this.element = document.createElement("div");
            this.board = new b.Board(this.element, this.config.board);
            this.init();
            this.initGame()
        };
    n.prototype = {
        constructor: n,
        init: function() {
            this.kifu = null;
            this.listeners = {
                kifuLoaded: [l.bind(this)],
                update: [f.bind(this)],
                frozen: [],
                unfrozen: []
            };
            this.config.kifuLoaded && this.addEventListener("kifuLoaded", this.config.kifuLoaded);
            this.config.update && this.addEventListener("update", this.config.update);
            this.config.frozen && this.addEventListener("frozen",
                this.config.frozen);
            this.config.unfrozen && this.addEventListener("unfrozen", this.config.unfrozen);
            this.board.addEventListener("click", h.bind(this));
            this.element.addEventListener("click", this.focus.bind(this));
            this.focus()
        },
        initGame: function() {
            this.config.sgf ? this.loadSgf(this.config.sgf, this.config.move) : this.config.json ? this.loadJSON(this.config.json, this.config.move) : this.config.sgfFile && this.loadSgfFromFile(this.config.sgfFile, this.config.move)
        },
        update: function(c) {
            this.kifuReader && this.kifuReader.change &&
                (c = {
                    type: "update",
                    op: c,
                    target: this,
                    node: this.kifuReader.node,
                    position: this.kifuReader.getPosition(),
                    path: this.kifuReader.path,
                    change: this.kifuReader.change
                }, this.dispatchEvent(c))
        },
        loadKifu: function(c, a) {
            this.kifu = c;
            this.kifuReader = new b.KifuReader(this.kifu, this.config.rememberPath, this.config.allowIllegalMoves);
            this.dispatchEvent({
                type: "kifuLoaded",
                target: this,
                kifu: this.kifu
            });
            this.update("init");
            a && this.goTo(a)
        },
        loadSgf: function(c, a) {
            try {
                this.loadKifu(b.Kifu.fromSgf(c), a)
            } catch (e) {
                this.error(e)
            }
        },
        loadJSON: function(c, a) {
            try {
                this.loadKifu(b.Kifu.fromJGO(c), a)
            } catch (e) {
                this.error(e)
            }
        },
        loadSgfFromFile: function(a, e) {
            var d = this;
            try {
                g(a, function(a) {
                    d.loadSgf(a, e)
                })
            } catch (b) {
                this.error(b)
            }
        },
        addEventListener: function(a, e) {
            this.listeners[a] = this.listeners[a] || [];
            this.listeners[a].push(e)
        },
        removeEventListener: function(a, e) {
            if (this.listeners[a]) {
                var d = this.listeners[a].indexOf(e); - 1 != d && this.listeners[a].splice(d, 1)
            }
        },
        dispatchEvent: function(a) {
            if (this.listeners[a.type])
                for (var e in this.listeners[a.type]) this.listeners[a.type][e](a)
        },
        notification: function(a) {
            console && a && console.log(a)
        },
        help: function(a) {
            console && console.log(a)
        },
        error: function(a) {
            if (!b.ERROR_REPORT) throw a;
            console && console.log(a)
        },
        next: function(a) {
            if (!this.frozen && this.kifu) try {
                this.kifuReader.next(a), this.update()
            } catch (e) {
                this.error(e)
            }
        },
        previous: function() {
            if (!this.frozen && this.kifu) try {
                this.kifuReader.previous(), this.update()
            } catch (a) {
                this.error(a)
            }
        },
        last: function() {
            if (!this.frozen && this.kifu) try {
                this.kifuReader.last(), this.update()
            } catch (a) {
                this.error(a)
            }
        },
        first: function() {
            if (!this.frozen && this.kifu) try {
                this.kifuReader.first(), this.update()
            } catch (a) {
                this.error(a)
            }
        },
        goTo: function(a) {
            if (!this.frozen && this.kifu) {
                var e;
                "function" == typeof a && (a = a.call(this));
                "number" == typeof a ? (e = b.clone(this.kifuReader.path), e.m = a || 0) : e = a;
                try {
                    this.kifuReader.goTo(e), this.update()
                } catch (d) {
                    this.error(d)
                }
            }
        },
        getGameInfo: function() {
            if (!this.kifu) return null;
            var a = {},
                e;
            for (e in this.kifu.info) - 1 != b.Kifu.infoList.indexOf(e) && (b.Kifu.infoFormatters[e] ? a[b.t(e)] = b.Kifu.infoFormatters[e](this.kifu.info[e]) :
                a[b.t(e)] = b.filterHTML(this.kifu.info[e]));
            return a
        },
        setFrozen: function(a) {
            this.frozen = a;
            this.dispatchEvent({
                type: this.frozen ? "frozen" : "unfrozen",
                target: this
            })
        },
        appendTo: function(a) {
            a.appendChild(this.element)
        },
        focus: function() {
            this.config.enableKeys && this.setKeys(!0)
        },
        setKeys: function(c) {
            document.onkeydown = c ? a.bind(this) : null
        },
        setWheel: function(a) {
            !this._wheel_listener && a ? (this._wheel_listener = k.bind(this), a = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", this.element.addEventListener(a,
                this._wheel_listener)) : this._wheel_listener && !a && (a = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", this.element.removeEventListener(a, this._wheel_listener), delete this._wheel_listener)
        },
        setCoordinates: function(a) {
            !this.coordinates && a ? (this.board.setSection(-.5, -.5, -.5, -.5), this.board.addCustomObject(b.Board.coordinates)) : this.coordinates && !a && (this.board.setSection(0, 0, 0, 0), this.board.removeCustomObject(b.Board.coordinates));
            this.coordinates = a
        }
    };
    n.default = {
        sgf: void 0,
        json: void 0,
        sgfFile: void 0,
        move: void 0,
        board: {},
        enableWheel: !0,
        lockScroll: !0,
        enableKeys: !0,
        rememberPath: !0,
        kifuLoaded: void 0,
        update: void 0,
        frozen: void 0,
        unfrozen: void 0,
        allowIllegalMoves: !1,
        markLastMove: !0,
        displayVariations: !0
    };
    b.Player = n;
    var m = {
            "about-text": "<h1>WGo.js Player 2.0</h1><p>WGo.js Player is extension of WGo.js, HTML5 library for purposes of game of go. It allows to replay go game records and it has many features like score counting. It is also designed to be easily extendable.</p><p>WGo.js is open source licensed under <a href='http://en.wikipedia.org/wiki/MIT_License' target='_blank'>MIT license</a>. You can use and modify any code from this project.</p><p>You can find more information at <a href='http://wgo.waltheri.net/player' target='_blank'>wgo.waltheri.net/player</a></p><p>Copyright &copy; 2013 Jan Prokop</p>",
            black: "Black",
            white: "White",
            DT: "Date",
            KM: "Komi",
            HA: "Handicap",
            AN: "Annotations",
            CP: "Copyright",
            GC: "Game comments",
            GN: "Game name",
            ON: "Fuseki",
            OT: "Overtime",
            TM: "Basic time",
            RE: "Result",
            RO: "Round",
            RU: "Rules",
            US: "Recorder",
            PC: "Place",
            EV: "Event",
            SO: "Source",
            none: "none",
            bpass: "Black passed.",
            wpass: "White passed."
        },
        e;
    for (e in m) b.i18n.en[e] = m[e]
})(WGo);
(function(b) {
    var p = 0,
        g = function(d, b, a) {
            var h = {};
            h.element = document.createElement("div");
            h.element.className = "wgo-player-" + d;
            h.wrapper = document.createElement("div");
            h.wrapper.className = "wgo-player-" + d + "-wrapper";
            h.element.appendChild(h.wrapper);
            b.appendChild(h.element);
            a || (h.element.style.display = "none");
            return h
        },
        f = function(d) {
            var b;
            if (b = this.currentLayout.layout ? this.currentLayout.layout[d] : this.currentLayout[d]) {
                this.regions[d].element.style.display = "block";
                b.constructor != Array && (b = [b]);
                for (var a in b) this.components[b[a]] ||
                    (this.components[b[a]] = new l.component[b[a]](this)), this.components[b[a]].appendTo(this.regions[d].wrapper), this.components[b[a]]._detachFromPlayer = !1
            } else this.regions[d].element.style.display = "none"
        },
        l = b.extendClass(b.Player, function(d, k) {
            this.config = k;
            for (var a in l.default) void 0 === this.config[a] && void 0 !== l.default[a] && (this.config[a] = l.default[a]);
            for (a in b.Player.default) void 0 === this.config[a] && void 0 !== b.Player.default[a] && (this.config[a] = b.Player.default[a]);
            this.element = d;
            this.element.innerHTML =
                "";
            this.classes = (this.element.className ? this.element.className + " " : "") + "wgo-player-main";
            this.element.className = this.classes;
            this.element.id || (this.element.id = "wgo_" + p++);
            this.dom = {};
            this.dom.center = document.createElement("div");
            this.dom.center.className = "wgo-player-center";
            this.dom.board = document.createElement("div");
            this.dom.board.className = "wgo-player-board";
            this.regions = {};
            this.regions.left = g("left", this.element);
            this.element.appendChild(this.dom.center);
            this.regions.right = g("right", this.element);
            this.regions.top = g("top", this.dom.center);
            this.dom.center.appendChild(this.dom.board);
            this.regions.bottom = g("bottom", this.dom.center);
            this.board = new b.Board(this.dom.board, this.config.board);
            this.init();
            this.components = {};
            window.addEventListener("resize", function() {
                this.noresize || this.updateDimensions()
            }.bind(this));
            this.updateDimensions();
            this.initGame()
        });
    l.prototype.appendTo = function(d) {
        d.appendChild(this.element);
        this.updateDimensions()
    };
    l.prototype.updateDimensions = function() {
        for (var d = window.getComputedStyle(this.element),
                b = []; this.element.firstChild;) b.push(this.element.firstChild), this.element.removeChild(this.element.firstChild);
        for (var a = parseInt(d.width), h = parseInt(d.height), n = parseInt(d.maxHeight) || 0, d = 0; d < b.length; d++) this.element.appendChild(b[d]);
        if (a != this.width || h != this.height || n != this.maxHeight) {
            this.width = a;
            this.height = h;
            this.maxHeight = n;
            a: if (b = this.config.layout, b.constructor == Array) {
                a = this.height || this.maxHeight;
                for (h = 0; h < b.length; h++)
                    if (!b[h].conditions || !(b[h].conditions.minWidth && !(b[h].conditions.minWidth <=
                            this.width) || b[h].conditions.minHeight && a && !(b[h].conditions.minHeight <= a) || b[h].conditions.maxWidth && !(b[h].conditions.maxWidth >= this.width) || b[h].conditions.maxHeight && a && !(b[h].conditions.maxHeight >= a) || b[h].conditions.custom && !b[h].conditions.custom.call(this))) {
                        b = b[h];
                        break a
                    }
                b = void 0
            }
            if ((this.currentLayout = b) && this.lastLayout != this.currentLayout) {
                this.element.className = this.currentLayout.className ? this.classes + " " + this.currentLayout.className : this.classes;
                for (var g in this.components) this.components[g]._detachFromPlayer = !0;
                f.call(this, "left");
                f.call(this, "right");
                f.call(this, "top");
                f.call(this, "bottom");
                for (g in this.components) this.components[g]._detachFromPlayer && this.components[g].element.parentNode && this.components[g].element.parentNode.removeChild(this.components[g].element);
                this.lastLayout = this.currentLayout
            }
            b = this.dom.board.clientWidth;
            (g = this.height || this.maxHeight) && (g -= this.regions.top.element.offsetHeight + this.regions.bottom.element.offsetHeight);
            g && g < b ? g != this.board.height && this.board.setHeight(g) : b !=
                this.board.width && this.board.setWidth(b);
            b = g - b;
            0 < b ? (this.dom.board.style.height = g + "px", this.dom.board.style.paddingTop = b / 2 + "px") : (this.dom.board.style.height = "auto", this.dom.board.style.paddingTop = "0");
            this.regions.left.element.style.height = this.dom.center.offsetHeight + "px";
            this.regions.right.element.style.height = this.dom.center.offsetHeight + "px";
            for (d in this.components) this.components[d].updateDimensions && this.components[d].updateDimensions()
        }
    };
    l.prototype.showMessage = function(d, f, a) {
        this.info_overlay =
            document.createElement("div");
        this.info_overlay.style.width = this.element.offsetWidth + "px";
        this.info_overlay.style.height = this.element.offsetHeight + "px";
        this.info_overlay.className = "wgo-info-overlay";
        this.element.appendChild(this.info_overlay);
        var h = document.createElement("div");
        h.className = "wgo-info-message";
        h.innerHTML = d;
        d = document.createElement("div");
        d.className = "wgo-info-close";
        a || (d.innerHTML = b.t("BP:closemsg"));
        h.appendChild(d);
        this.info_overlay.appendChild(h);
        f ? this.info_overlay.addEventListener("click",
            function(a) {
                f(a)
            }) : a || this.info_overlay.addEventListener("click", function(a) {
            this.hideMessage()
        }.bind(this));
        this.setFrozen(!0)
    };
    l.prototype.hideMessage = function() {
        this.element.removeChild(this.info_overlay);
        this.setFrozen(!1)
    };
    l.prototype.error = function(d) {
        if (!b.ERROR_REPORT) throw d;
        switch (d.name) {
            case "InvalidMoveError":
                this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + '</p><p>If this message isn\'t correct, please report it by clicking <a href="#">here</a>, otherwise contact maintainer of this site.</p>');
                break;
            case "FileError":
                this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + "</p><p>Please contact maintainer of this site. Note: it is possible to read files only from this host.</p>");
                break;
            default:
                this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + "</p><pre>" + d.stacktrace + '</pre><p>Please contact maintainer of this site. You can also report it <a href="#">here</a>.</p>')
        }
    };
    l.component = {};
    l.layouts = {
        one_column: {
            top: [],
            bottom: []
        },
        no_comment: {
            top: [],
            bottom: []
        },
        right_top: {
            top: [],
            right: []
        },
        right: {
            right: []
        },
        minimal: {
            bottom: []
        }
    };
    l.dynamicLayout = [{
        conditions: {
            minWidth: 650
        },
        layout: l.layouts.right_top,
        className: "wgo-twocols wgo-large"
    }, {
        conditions: {
            minWidth: 550,
            minHeight: 600
        },
        layout: l.layouts.one_column,
        className: "wgo-medium"
    }, {
        conditions: {
            minWidth: 350
        },
        layout: l.layouts.no_comment,
        className: "wgo-small"
    }, {
        layout: l.layouts.no_comment,
        className: "wgo-xsmall"
    }];
    l.default = {
        layout: l.dynamicLayout
    };
    b.i18n.en["BP:closemsg"] = "click anywhere to close this window";
    l.attributes = {
        "data-wgo": function(b) {
            b && ("(" == b[0] ?
                this.sgf = b : this.sgfFile = b)
        },
        "data-wgo-board": function(b) {
            this.board = eval("({" + b + "})")
        },
        "data-wgo-onkifuload": function(b) {
            this.kifuLoaded = new Function(b)
        },
        "data-wgo-onupdate": function(b) {
            this.update = new Function(b)
        },
        "data-wgo-onfrozen": function(b) {
            this.frozen = new Function(b)
        },
        "data-wgo-onunfrozen": function(b) {
            this.unfrozen = new Function(b)
        },
        "data-wgo-layout": function(b) {
            this.layout = eval("({" + b + "})")
        },
        "data-wgo-enablewheel": function(b) {
            "false" == b.toLowerCase() && (this.enableWheel = !1)
        },
        "data-wgo-lockscroll": function(b) {
            "false" ==
            b.toLowerCase() && (this.lockScroll = !1)
        },
        "data-wgo-enablekeys": function(b) {
            "false" == b.toLowerCase() && (this.enableKeys = !1)
        },
        "data-wgo-rememberpath": function(b) {
            "false" == b.toLowerCase() && (this.rememberPath = !1)
        },
        "data-wgo-allowillegal": function(b) {
            "false" != b.toLowerCase() && (this.allowIllegalMoves = !0)
        },
        "data-wgo-move": function(b) {
            var f = parseInt(b);
            this.move = f ? f : eval("({" + b + "})")
        },
        "data-wgo-marklastmove": function(b) {
            "false" == b.toLowerCase() && (this.markLastMove = !1)
        },
        "data-wgo-diagram": function(b) {
            b && ("(" ==
                b[0] ? this.sgf = b : this.sgfFile = b, this.enableWheel = this.enableKeys = this.markLastMove = !1, this.layout = {
                    top: [],
                    right: [],
                    left: [],
                    bottom: []
                })
        }
    };
    b.BasicPlayer = l;
    //window.addEventListener("load", function() {
    window.setTimeout(() => {
        for (var b = document.querySelectorAll("[data-wgo],[data-wgo-diagram]"), f = 0; f < b.length; f++) {
            for (var a = b[f], h = void 0, g = void 0, h = void 0, g = {}, m = 0; m < a.attributes.length; m++) h = a.attributes[m], l.attributes[h.name] && l.attributes[h.name].call(g, h.value, h.name);
            h = new l(a, g);
            a._wgo_player = h
        }
    },500)
    //})
})(WGo);
(function(b, p) {
    var g = function() {
        this.element = document.createElement("div")
    };
    g.prototype = {
        constructor: g,
        appendTo: function(b) {
            b.appendChild(this.element)
        },
        getWidth: function() {
            var b = window.getComputedStyle(this.element);
            return parseInt(b.width)
        },
        getHeight: function() {
            var b = window.getComputedStyle(this.element);
            return parseInt(b.height)
        },
        updateDimensions: function() {}
    };
    b.BasicPlayer.component.Component = g
})(WGo);
(function() {
    var b = function(a) {
            this[a] = {};
            var b = this[a];
            b.box = document.createElement("div");
            b.box.className = "wgo-box-wrapper wgo-player-wrapper wgo-" + a;
            b.name = document.createElement("div");
            b.name.className = "wgo-box-title";
            b.name.innerHTML = a;
            b.box.appendChild(b.name);
            a = document.createElement("div");
            a.className = "wgo-player-info";
            b.box.appendChild(a);
            b.info = {};
            b.info.rank = p("rank");
            b.info.rank.val.innerHTML = "-";
            b.info.caps = p("caps");
            b.info.caps.val.innerHTML = "0";
            b.info.time = p("time");
            b.info.time.val.innerHTML =
                "--:--";
            a.appendChild(b.info.rank.wrapper);
            a.appendChild(b.info.caps.wrapper);
            a.appendChild(b.info.time.wrapper)
        },
        p = function(a) {
            var b = {};
            b.wrapper = document.createElement("div");
            b.wrapper.className = "wgo-player-info-box-wrapper";
            b.box = document.createElement("div");
            b.box.className = "wgo-player-info-box";
            b.wrapper.appendChild(b.box);
            b.title = document.createElement("div");
            b.title.className = "wgo-player-info-title";
            b.title.innerHTML = WGo.t(a);
            b.box.appendChild(b.title);
            b.val = document.createElement("div");
            b.val.className =
                "wgo-player-info-value";
            b.box.appendChild(b.val);
            return b
        },
        g = function(a) {
            a = a.kifu.info || {};
            a.black ? (this.black.name.innerHTML = WGo.filterHTML(a.black.name) || WGo.t("black"), this.black.info.rank.val.innerHTML = WGo.filterHTML(a.black.rank) || "-") : (this.black.name.innerHTML = WGo.t("black"), this.black.info.rank.val.innerHTML = "-");
            a.white ? (this.white.name.innerHTML = WGo.filterHTML(a.white.name) || WGo.t("white"), this.white.info.rank.val.innerHTML = WGo.filterHTML(a.white.rank) || "-") : (this.white.name.innerHTML = WGo.t("white"),
                this.white.info.rank.val.innerHTML = "-");
            this.black.info.caps.val.innerHTML = "0";
            this.white.info.caps.val.innerHTML = "0";
            a.TM ? (this.setPlayerTime("black", a.TM), this.setPlayerTime("white", a.TM)) : (this.black.info.time.val.innerHTML = "--:--", this.white.info.time.val.innerHTML = "--:--");
            this.updateDimensions()
        },
        f = function(a) {
            var b, d;
            a.style.fontSize ? (d = parseInt(a.style.fontSize), a.style.fontSize = "", b = window.getComputedStyle(a), b = parseInt(b.fontSize), a.style.fontSize = d + "px") : (b = window.getComputedStyle(a), b =
                d = parseInt(b.fontSize));
            if (!(d == b && a.scrollHeight <= a.offsetHeight))
                if (a.scrollHeight > a.offsetHeight)
                    for (d -= 2; a.scrollHeight > a.offsetHeight && 1 < d;) a.style.fontSize = d + "px", d -= 2;
                else if (d < b) {
                for (d += 2; a.scrollHeight <= a.offsetHeight && d <= b;) a.style.fontSize = d + "px", d += 2;
                a.scrollHeight > a.offsetHeight && (a.style.fontSize = d - 4 + "px")
            }
        },
        l = function(a) {
            a.node.BL && this.setPlayerTime("black", a.node.BL);
            a.node.WL && this.setPlayerTime("white", a.node.WL);
            void 0 !== a.position.capCount.black && (this.black.info.caps.val.innerHTML =
                a.position.capCount.black);
            void 0 !== a.position.capCount.white && (this.white.info.caps.val.innerHTML = a.position.capCount.white)
        },
        d = WGo.extendClass(WGo.BasicPlayer.component.Component, function(a) {
            this.super(a);
            this.element.className = "wgo-infobox";
            b.call(this, "white");
            b.call(this, "black");
            this.element.appendChild(this.white.box);
            this.element.appendChild(this.black.box);
            a.addEventListener("kifuLoaded", g.bind(this));
            a.addEventListener("update", l.bind(this))
        });
    d.prototype.setPlayerTime = function(a, b) {
        var d =
            Math.floor(b / 60),
            f = Math.round(b) % 60;
        this[a].info.time.val.innerHTML = d + ":" + (10 > f ? "0" + f : f)
    };
    d.prototype.updateDimensions = function() {
        f(this.black.name);
        f(this.white.name)
    };
    var k = WGo.BasicPlayer.layouts;
    k.right_top.right.push("InfoBox");
    k.right.right.push("InfoBox");
    k.one_column.top.push("InfoBox");
    k.no_comment.top.push("InfoBox");
    WGo.i18n.en.rank = "Rank";
    WGo.i18n.en.caps = "Caps";
    WGo.i18n.en.time = "Time";
    WGo.BasicPlayer.component.InfoBox = d
})(WGo);
(function(b, p) {
    var g = function(a) {
            var b, d;
            b = a.charCodeAt(0) - 97;
            0 > b && (b += 32);
            7 < b && b--;
            d = a.charCodeAt(1) - 48;
            2 < a.length && (d = 10 * d + (a.charCodeAt(2) - 48));
            d = this.kifuReader.game.size - d;
            this._tmp_mark = {
                type: "MA",
                x: b,
                y: d
            };
            this.board.addObject(this._tmp_mark)
        },
        f = function() {
            this.board.removeObject(this._tmp_mark);
            delete this._tmp_mark
        },
        l = function(a, b) {
            for (var d in a) a[d].className && "wgo-move-link" == a[d].className ? (a[d].addEventListener("mouseover", g.bind(b, a[d].innerHTML)), a[d].addEventListener("mouseout", f.bind(b))) :
                a[d].childNodes && a[d].childNodes.length && l(a[d].childNodes, b)
        },
        d = function(a, d) {
            var f = '<div class="wgo-info-list">';
            d && (f += '<div class="wgo-info-title">' + b.t("gameinfo") + "</div>");
            for (var g in a) f += '<div class="wgo-info-item"><span class="wgo-info-label">' + g + '</span><span class="wgo-info-value">' + a[g] + "</span></div>";
            return f + "</div>"
        },
        k = b.extendClass(b.BasicPlayer.component.Component, function(a) {
            this.super(a);
            this.player = a;
            this.element.className = "wgo-commentbox";
            this.box = document.createElement("div");
            this.box.className = "wgo-box-wrapper wgo-comments-wrapper";
            this.element.appendChild(this.box);
            this.comments_title = document.createElement("div");
            this.comments_title.className = "wgo-box-title";
            this.comments_title.innerHTML = b.t("comments");
            this.box.appendChild(this.comments_title);
            this.comments = document.createElement("div");
            this.comments.className = "wgo-comments-content";
            this.box.appendChild(this.comments);
            this.help = document.createElement("div");
            this.help.className = "wgo-help";
            this.help.style.display = "none";
            this.comments.appendChild(this.help);
            this.notification = document.createElement("div");
            this.notification.className = "wgo-notification";
            this.notification.style.display = "none";
            this.comments.appendChild(this.notification);
            this.comment_text = document.createElement("div");
            this.comment_text.className = "wgo-comment-text";
            this.comments.appendChild(this.comment_text);
            a.addEventListener("kifuLoaded", function(h) {
                h.kifu.hasComments() ? (this.comments_title.innerHTML = b.t("comments"), this.element.className = "wgo-commentbox",
                    this._update = function(a) {
                        this.setComments(a)
                    }.bind(this), a.addEventListener("update", this._update)) : (this.comments_title.innerHTML = b.t("gameinfo"), this.element.className = "wgo-commentbox wgo-gameinfo", this._update && (a.removeEventListener("update", this._update), delete this._update), this.comment_text.innerHTML = d(h.target.getGameInfo()))
            }.bind(this));
            a.notification = function(a) {
                a ? (this.notification.style.display = "block", this.notification.innerHTML = a, this.is_notification = !0) : (this.notification.style.display =
                    "none", this.is_notification = !1)
            }.bind(this);
            a.help = function(a) {
                a ? (this.help.style.display = "block", this.help.innerHTML = a, this.is_help = !0) : (this.help.style.display = "none", this.is_help = !1)
            }.bind(this)
        });
    k.prototype.setComments = function(a) {
        this.player._tmp_mark && f.call(this.player);
        var b = "";
        a.node.parent || (b = d(a.target.getGameInfo(), !0));
        this.comment_text.innerHTML = b + this.getCommentText(a.node.comment, this.player.config.formatNicks, this.player.config.formatMoves);
        this.player.config.formatMoves && this.comment_text.childNodes &&
            this.comment_text.childNodes.length && l(this.comment_text.childNodes, this.player)
    };
    k.prototype.getCommentText = function(a, d, f) {
        return a ? (a = "<p>" + b.filterHTML(a).replace(/\n/g, "</p><p>") + "</p>", d && (a = a.replace(/(<p>)([^:]{3,}:)\s/g, '<p><span class="wgo-comments-nick">$2</span> ')), f && (a = a.replace(/\b[a-zA-Z]1?\d\b/g, '<a href="javascript:void(0)" class="wgo-move-link">$&</a>')), a) : ""
    };
    b.BasicPlayer.default.formatNicks = !0;
    b.BasicPlayer.default.formatMoves = !0;
    b.BasicPlayer.attributes["data-wgo-formatnicks"] =
        function(a) {
            "false" == a.toLowerCase() && (this.formatNicks = !1)
        };
    b.BasicPlayer.attributes["data-wgo-formatmoves"] = function(a) {
        "false" == a.toLowerCase() && (this.formatMoves = !1)
    };
    b.BasicPlayer.layouts.right_top.right.push("CommentBox");
    b.BasicPlayer.layouts.right.right.push("CommentBox");
    b.BasicPlayer.layouts.one_column.bottom.push("CommentBox");
    b.i18n.en.comments = "Comments";
    b.i18n.en.gameinfo = "Game info";
    b.BasicPlayer.component.CommentBox = k
})(WGo);
(function(b, p) {
    var g = b.extendClass(b.BasicPlayer.component.Component, function(a) {
        this.super(a);
        this.widgets = [];
        this.element.className = "wgo-player-control";
        this.iconBar = document.createElement("div");
        this.iconBar.className = "wgo-control-wrapper";
        this.element.appendChild(this.iconBar);
        var b, d;
        for (d in g.widgets) b = new g.widgets[d].constructor(a, g.widgets[d].args), b.appendTo(this.iconBar), this.widgets.push(b)
    });
    g.prototype.updateDimensions = function() {
        this.element.className = 340 > this.element.clientWidth ?
            "wgo-player-control wgo-340" : 440 > this.element.clientWidth ? "wgo-player-control wgo-440" : "wgo-player-control"
    };
    var f = b.BasicPlayer.control = {},
        l = function(a) {
            a.node.parent || this.disabled ? a.node.parent && this.disabled && this.enable() : this.disable()
        },
        d = function(a) {
            a.node.children.length || this.disabled ? a.node.children.length && this.disabled && this.enable() : this.disable()
        },
        k = function(a) {
            (this._disabled = this.disabled) || this.disable()
        },
        a = function(a) {
            this._disabled || this.enable();
            delete this._disabled
        };
    f.Widget =
        function(a, b) {
            this.element = this.element || document.createElement(b.type || "div");
            this.element.className = "wgo-widget-" + b.name;
            this.init(a, b)
        };
    f.Widget.prototype = {
        constructor: f.Widget,
        init: function(a, b) {
            b && (b.disabled && this.disable(), b.init && b.init.call(this, a))
        },
        appendTo: function(a) {
            a.appendChild(this.element)
        },
        disable: function() {
            this.disabled = !0; - 1 == this.element.className.search("wgo-disabled") && (this.element.className += " wgo-disabled")
        },
        enable: function() {
            this.disabled = !1;
            this.element.className = this.element.className.replace(" wgo-disabled",
                "");
            this.element.disabled = ""
        }
    };
    f.Group = b.extendClass(f.Widget, function(a, b) {
        this.element = document.createElement("div");
        this.element.className = "wgo-ctrlgroup wgo-ctrlgroup-" + b.name;
        var d, f;
        for (f in b.widgets) d = new b.widgets[f].constructor(a, b.widgets[f].args), d.appendTo(this.element)
    });
    f.Clickable = b.extendClass(f.Widget, function(a, b) {
        this.super(a, b)
    });
    f.Clickable.prototype.init = function(a, b) {
        var d, f = this;
        d = b.togglable ? function() {
            f.disabled || (b.click.call(f, a) ? f.select() : f.unselect())
        } : function() {
            f.disabled ||
                b.click.call(f, a)
        };
        this.element.addEventListener("click", d);
        this.element.addEventListener("touchstart", function(a) {
            a.preventDefault();
            d();
            b.multiple && (f._touch_i = 0, f._touch_int = window.setInterval(function() {
                500 < f._touch_i && d();
                f._touch_i += 100
            }, 100));
            return !1
        });
        b.multiple && this.element.addEventListener("touchend", function(a) {
            window.clearInterval(f._touch_int)
        });
        b.disabled && this.disable();
        b.init && b.init.call(this, a)
    };
    f.Clickable.prototype.select = function() {
        this.selected = !0; - 1 == this.element.className.search("wgo-selected") &&
            (this.element.className += " wgo-selected")
    };
    f.Clickable.prototype.unselect = function() {
        this.selected = !1;
        this.element.className = this.element.className.replace(" wgo-selected", "")
    };
    f.Button = b.extendClass(f.Clickable, function(a, c) {
        var d = this.element = document.createElement("button");
        d.className = "wgo-button wgo-button-" + c.name;
        d.title = b.t(c.name);
        this.init(a, c)
    });
    f.Button.prototype.disable = function() {
        f.Button.prototype.super.prototype.disable.call(this);
        this.element.disabled = "disabled"
    };
    f.Button.prototype.enable =
        function() {
            f.Button.prototype.super.prototype.enable.call(this);
            this.element.disabled = ""
        };
    f.MenuItem = b.extendClass(f.Clickable, function(a, c) {
        var d = this.element = document.createElement("div");
        d.className = "wgo-menu-item wgo-menu-item-" + c.name;
        d.title = b.t(c.name);
        d.innerHTML = d.title;
        this.init(a, c)
    });
    f.MoveNumber = b.extendClass(f.Widget, function(a) {
        this.element = document.createElement("form");
        this.element.className = "wgo-player-mn-wrapper";
        var b = this.move = document.createElement("input");
        b.type = "text";
        b.value =
            "0";
        b.maxlength = 3;
        b.className = "wgo-player-mn-value";
        this.element.appendChild(b);
        this.element.onsubmit = b.onchange = function(a) {
            a.goTo(this.getValue());
            return !1
        }.bind(this, a);
        a.addEventListener("update", function(a) {
            this.setValue(a.path.m)
        }.bind(this));
        a.addEventListener("kifuLoaded", this.enable.bind(this));
        a.addEventListener("frozen", this.disable.bind(this));
        a.addEventListener("unfrozen", this.enable.bind(this))
    });
    f.MoveNumber.prototype.disable = function() {
        f.MoveNumber.prototype.super.prototype.disable.call(this);
        this.move.disabled = "disabled"
    };
    f.MoveNumber.prototype.enable = function() {
        f.MoveNumber.prototype.super.prototype.enable.call(this);
        this.move.disabled = ""
    };
    f.MoveNumber.prototype.setValue = function(a) {
        this.move.value = a
    };
    f.MoveNumber.prototype.getValue = function() {
        return parseInt(this.move.value)
    };
    var h = function(a) {
        if (a._menu_tmp) delete a._menu_tmp;
        else {
            if (!a.menu) {
                a.menu = document.createElement("div");
                a.menu.className = "wgo-player-menu";
                a.menu.style.position = "absolute";
                a.menu.style.display = "none";
                this.element.parentElement.appendChild(a.menu);
                var b, d;
                for (d in g.menu) b = new g.menu[d].constructor(a, g.menu[d].args, !0), b.appendTo(a.menu)
            }
            if ("none" != a.menu.style.display) return a.menu.style.display = "none", document.removeEventListener("click", a._menu_ev), delete a._menu_ev, this.unselect(), !1;
            a.menu.style.display = "block";
            b = this.element.offsetTop;
            d = this.element.offsetLeft;
            this.element.parentElement.parentElement.parentElement.parentElement == a.regions.bottom.wrapper ? (a.menu.style.left = d + "px", a.menu.style.top = b - a.menu.offsetHeight + 1 + "px") : (a.menu.style.left =
                d + "px", a.menu.style.top = b + this.element.offsetHeight + "px");
            a._menu_ev = h.bind(this, a);
            a._menu_tmp = !0;
            document.addEventListener("click", a._menu_ev);
            return !0
        }
    };
    g.menu = [{
        constructor: f.MenuItem,
        args: {
            name: "switch-coo",
            togglable: !0,
            click: function(a) {
                a.setCoordinates(!a.coordinates);
                return a.coordinates
            },
            init: function(a) {
                a.coordinates && this.select()
            }
        }
    }];
    g.widgets = [{
        constructor: f.Group,
        args: {
            name: "left",
            widgets: [{
                constructor: f.Button,
                args: {
                    name: "menu",
                    togglable: !0,
                    click: h
                }
            }]
        }
    }, {
        constructor: f.Group,
        args: {
            name: "right",
            widgets: [{
                constructor: f.Button,
                args: {
                    name: "about",
                    click: function(a) {
                        a.showMessage(b.t("about-text"))
                    }
                }
            }]
        }
    }, {
        constructor: f.Group,
        args: {
            name: "control",
            widgets: [{
                constructor: f.Button,
                args: {
                    name: "first",
                    disabled: !0,
                    init: function(b) {
                        b.addEventListener("update", l.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        a.first()
                    }
                }
            }, {
                constructor: f.Button,
                args: {
                    name: "multiprev",
                    disabled: !0,
                    multiple: !0,
                    init: function(b) {
                        b.addEventListener("update",
                            l.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        var c = b.clone(a.kifuReader.path);
                        c.m -= 10;
                        a.goTo(c)
                    }
                }
            }, {
                constructor: f.Button,
                args: {
                    name: "previous",
                    disabled: !0,
                    multiple: !0,
                    init: function(b) {
                        b.addEventListener("update", l.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        a.previous()
                    }
                }
            }, {
                constructor: f.MoveNumber
            }, {
                constructor: f.Button,
                args: {
                    name: "next",
                    disabled: !0,
                    multiple: !0,
                    init: function(b) {
                        b.addEventListener("update", d.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        a.next()
                    }
                }
            }, {
                constructor: f.Button,
                args: {
                    name: "multinext",
                    disabled: !0,
                    multiple: !0,
                    init: function(b) {
                        b.addEventListener("update", d.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        var c = b.clone(a.kifuReader.path);
                        c.m += 10;
                        a.goTo(c)
                    }
                }
            }, {
                constructor: f.Button,
                args: {
                    name: "last",
                    disabled: !0,
                    init: function(b) {
                        b.addEventListener("update", d.bind(this));
                        b.addEventListener("frozen", k.bind(this));
                        b.addEventListener("unfrozen", a.bind(this))
                    },
                    click: function(a) {
                        a.last()
                    }
                }
            }]
        }
    }];
    var n = b.BasicPlayer.layouts;
    n.right_top.top.push("Control");
    n.right.right.push("Control");
    n.one_column.top.push("Control");
    n.no_comment.bottom.push("Control");
    n.minimal.bottom.push("Control");
    var n = {
            about: "About",
            first: "First",
            multiprev: "10 moves back",
            previous: "Previous",
            next: "Next",
            multinext: "10 moves forward",
            last: "Last",
            "switch-coo": "Display coordinates",
            menu: "Menu"
        },
        m;
    for (m in n) b.i18n.en[m] = n[m];
    b.BasicPlayer.component.Control = g
})(WGo);
(function(b) {
    var p = function(b, g) {
            this.player.frozen || this._lastX == b && this._lastY == g || (this._lastX = b, this._lastY = g, this._last_mark && this.board.removeObject(this._last_mark), -1 != b && -1 != g && this.player.kifuReader.game.isValid(b, g) ? (this._last_mark = {
                type: "outline",
                x: b,
                y: g,
                c: this.player.kifuReader.game.turn
            }, this.board.addObject(this._last_mark)) : delete this._last_mark)
        },
        g = function() {
            this._last_mark && (this.board.removeObject(this._last_mark), delete this._last_mark, delete this._lastX, delete this._lastY)
        };
    b.Player.Editable = {};
    b.Player.Editable = function(b, g) {
        this.player = b;
        this.board = g;
        this.editMode = !1
    };
    b.Player.Editable.prototype.set = function(f) {
        if (!this.editMode && f) this.originalReader = this.player.kifuReader, this.player.kifuReader = new b.KifuReader(this.player.kifu.clone(), this.originalReader.rememberPath, this.originalReader.allow_illegal, this.originalReader.allow_illegal), this.player.kifuReader.goTo(this.originalReader.path), this._ev_click = this._ev_click || this.play.bind(this), this._ev_move = this._ev_move ||
            p.bind(this), this._ev_out = this._ev_out || g.bind(this), this.board.addEventListener("click", this._ev_click), this.board.addEventListener("mousemove", this._ev_move), this.board.addEventListener("mouseout", this._ev_out), this.editMode = !0;
        else if (this.editMode && !f) {
            this.originalReader.goTo(this.player.kifuReader.path);
            f = this.originalReader;
            for (var l = this.player.kifuReader.getPosition(), d = this.originalReader.getPosition(), k = l.size, a = [], h = [], n = 0; n < k * k; n++) l.schema[n] && !d.schema[n] ? h.push({
                x: Math.floor(n / k),
                y: n % k
            }) : l.schema[n] != d.schema[n] && a.push({
                x: Math.floor(n / k),
                y: n % k,
                c: d.schema[n]
            });
            f.change = {
                add: a,
                remove: h
            };
            this.player.kifuReader = this.originalReader;
            this.player.update(!0);
            this.board.removeEventListener("click", this._ev_click);
            this.board.removeEventListener("mousemove", this._ev_move);
            this.board.removeEventListener("mouseout", this._ev_out);
            this.editMode = !1
        }
    };
    b.Player.Editable.prototype.play = function(f, g) {
        !this.player.frozen && this.player.kifuReader.game.isValid(f, g) && (this.player.kifuReader.node.appendChild(new b.KNode({
            move: {
                x: f,
                y: g,
                c: this.player.kifuReader.game.turn
            },
            _edited: !0
        })), this.player.next(this.player.kifuReader.node.children.length - 1))
    };
    b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
        constructor: b.BasicPlayer.control.MenuItem,
        args: {
            name: "editmode",
            togglable: !0,
            click: function(f) {
                this._editable = this._editable || new b.Player.Editable(f, f.board);
                this._editable.set(!this._editable.editMode);
                return this._editable.editMode
            },
            init: function(b) {
                var g = this;
                b.addEventListener("frozen",
                    function(b) {
                        (g._disabled = g.disabled) || g.disable()
                    });
                b.addEventListener("unfrozen", function(b) {
                    g._disabled || g.enable();
                    delete g._disabled
                })
            }
        }
    });
    b.i18n.en.editmode = "Edit mode"
})(WGo);
(function(b) {
    var p = function(b, f, a, g) {
            this.originalPosition = b;
            this.position = b.clone();
            this.board = f;
            this.komi = a;
            this.output = g
        },
        g = p.state = {
            UNKNOWN: 0,
            BLACK_STONE: 1,
            WHITE_STONE: -1,
            BLACK_CANDIDATE: 2,
            WHITE_CANDIDATE: -2,
            BLACK_NEUTRAL: 3,
            WHITE_NEUTRAL: -3,
            NEUTRAL: 4
        },
        f = function(b, g, a, h, n) {
            var m = b.get(g, a);
            void 0 !== m && m != h && m != n && (b.set(g, a, h), f(b, g - 1, a, h, n), f(b, g, a - 1, h, n), f(b, g + 1, a, h, n), f(b, g, a + 1, h, n))
        },
        l = function(b, g, a, f, n) {
            var m = g.get(a, f);
            b.get(a, f) != m && (b.set(a, f, m), l(b, g, a - 1, f, n), l(b, g, a, f - 1, n), l(b, g, a +
                1, f, n), l(b, g, a, f + 1, n))
        };
    p.prototype.start = function() {
        this.calculate();
        this.saved_state = this.board.getState();
        this.displayScore();
        this._click = function(d, k) {
            var a = this.originalPosition.get(d, k);
            a == b.W ? this.position.get(d, k) == g.WHITE_STONE ? f(this.position, d, k, g.BLACK_CANDIDATE, g.BLACK_STONE) : (l(this.position, this.originalPosition, d, k, g.BLACK_STONE), this.calculate()) : a == b.B ? this.position.get(d, k) == g.BLACK_STONE ? f(this.position, d, k, g.WHITE_CANDIDATE, g.WHITE_STONE) : (l(this.position, this.originalPosition,
                d, k, g.WHITE_STONE), this.calculate()) : (a = this.position.get(d, k), a == g.BLACK_CANDIDATE ? this.position.set(d, k, g.BLACK_NEUTRAL) : a == g.WHITE_CANDIDATE ? this.position.set(d, k, g.WHITE_NEUTRAL) : a == g.BLACK_NEUTRAL ? this.position.set(d, k, g.BLACK_CANDIDATE) : a == g.WHITE_NEUTRAL && this.position.set(d, k, g.WHITE_CANDIDATE));
            this.board.restoreState({
                objects: b.clone(this.saved_state.objects)
            });
            this.displayScore()
        }.bind(this);
        this.board.addEventListener("click", this._click)
    };
    p.prototype.end = function() {
        this.board.restoreState({
            objects: b.clone(this.saved_state.objects)
        });
        this.board.removeEventListener("click", this._click)
    };
    p.prototype.displayScore = function() {
        for (var d = [], f = [], a = [], h = [], n = [], m = 0; m < this.position.size; m++)
            for (var e = 0; e < this.position.size; e++) s = this.position.get(m, e), t = this.originalPosition.get(m, e), s == g.BLACK_CANDIDATE ? d.push({
                x: m,
                y: e,
                type: "mini",
                c: b.B
            }) : s == g.WHITE_CANDIDATE ? f.push({
                x: m,
                y: e,
                type: "mini",
                c: b.W
            }) : s == g.NEUTRAL && a.push({
                x: m,
                y: e
            }), t == b.W && s != g.WHITE_STONE ? n.push({
                x: m,
                y: e,
                type: "outline",
                c: b.W
            }) : t == b.B && s != g.BLACK_STONE && h.push({
                x: m,
                y: e,
                type: "outline",
                c: b.B
            });
        for (m = 0; m < h.length; m++) this.board.removeObjectsAt(h[m].x, h[m].y);
        for (m = 0; m < n.length; m++) this.board.removeObjectsAt(n[m].x, n[m].y);
        this.board.addObject(n);
        this.board.addObject(h);
        this.board.addObject(d);
        this.board.addObject(f);
        a = "<p style='font-weight: bold;'>" + b.t("RE") + "</p>";
        m = d.length + n.length + this.originalPosition.capCount.black;
        e = f.length + h.length + this.originalPosition.capCount.white + parseFloat(this.komi);
        a += "<p>" + b.t("black") + ": " + d.length + " + " + (n.length + this.originalPosition.capCount.black) +
            " = " + m + "</br>";
        a += b.t("white") + ": " + f.length + " + " + (h.length + this.originalPosition.capCount.white) + " + " + this.komi + " = " + e + "</p>";
        a = m > e ? a + ("<p style='font-weight: bold;'>" + b.t("bwin", m - e) + "</p>") : a + ("<p style='font-weight: bold;'>" + b.t("wwin", e - m) + "</p>");
        this.output(a)
    };
    p.prototype.calculate = function() {
        var b, f, a, h, n, m;
        b = this.position;
        for (m = !0; m;) {
            m = !1;
            for (var e = 0; e < b.size; e++)
                for (var c = 0; c < b.size; c++)
                    if (f = b.get(c, e), f == g.UNKNOWN || f == g.BLACK_CANDIDATE || f == g.WHITE_CANDIDATE) {
                        a = [b.get(c - 1, e), b.get(c,
                            e - 1), b.get(c + 1, e), b.get(c, e + 1)];
                        n = h = !1;
                        for (var l = 0; 4 > l; l++) a[l] == g.BLACK_STONE || a[l] == g.BLACK_CANDIDATE ? h = !0 : a[l] == g.WHITE_STONE || a[l] == g.WHITE_CANDIDATE ? n = !0 : a[l] == g.NEUTRAL && (n = h = !0);
                        a = !1;
                        h && n ? a = g.NEUTRAL : h ? a = g.BLACK_CANDIDATE : n && (a = g.WHITE_CANDIDATE);
                        a && f != a && (m = !0, b.set(c, e, a))
                    }
        }
    };
    b.ScoreMode = p;
    b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
        constructor: b.BasicPlayer.control.MenuItem,
        args: {
            name: "scoremode",
            togglable: !0,
            click: function(d) {
                if (this.selected) return d.setFrozen(!1),
                    this._score_mode.end(), delete this._score_mode, d.notification(), d.help(), !1;
                d.setFrozen(!0);
                d.help("<p>" + b.t("help_score") + "</p>");
                this._score_mode = new b.ScoreMode(d.kifuReader.game.position, d.board, d.kifu.info.KM || .5, d.notification);
                this._score_mode.start();
                return !0
            }
        }
    });
    b.i18n.en.scoremode = "Count score";
    b.i18n.en.score = "Score";
    b.i18n.en.bwin = "Black wins by $ points.";
    b.i18n.en.wwin = "White wins by $ points.";
    b.i18n.en.help_score = "Click on stones to mark them dead or alive. You can also set and unset territory points by clicking on them. Territories must be completely bordered."
})(WGo);
(function(b, p) {
    var g = {
            active: !0,
            query: {}
        },
        f = function(b) {
            try {
                g.query = JSON.parse('{"' + window.location.hash.substr(1).replace("=", '":') + "}")
            } catch (f) {
                g.query = {}
            }
        };
    window.addEventListener("hashchange", function() {
        if ("" != window.location.hash && g.active) {
            f();
            for (var b in g.query) {
                var k = document.getElementById(b);
                k && k._wgo_player && k._wgo_player.goTo(l)
            }
        }
    });
    window.addEventListener("DOMContentLoaded", function() {
        "" != window.location.hash && g.active && f()
    });
    window.addEventListener("load", function() {
        if ("" != window.location.hash &&
            g.active)
            for (var b in g.query) {
                var f = document.getElementById(b);
                if (f && f._wgo_player) {
                    f.scrollIntoView();
                    break
                }
            }
    });
    var l = function() {
        if (g.query[this.element.id]) return g.query[this.element.id].goto
    };
    b.Player.default.move = l;
    b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
        constructor: b.BasicPlayer.control.MenuItem,
        args: {
            name: "permalink",
            click: function(d) {
                var f = location.href.split("#")[0] + "#" + d.element.id + '={"goto":' + JSON.stringify(d.kifuReader.path) + "}";
                d.showMessage("<h1>" +
                    b.t("permalink") + '</h1><p><input class="wgo-permalink" type="text" value=\'' + f + '\' onclick="this.select(); event.stopPropagation()"/></p>')
            }
        }
    });
    b.Player.permalink = g;
    b.i18n.en.permalink = "Permanent link"
})(WGo);