!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(window, (function() {
    return function(e) {
        var t = {};
        function n(i) {
            if (t[i])
                return t[i].exports;
            var r = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    n.d(i, r, function(t) {
                        return e[t]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/",
        n(n.s = 1)
    }([function(e, t, n) {
        window,
        e.exports = function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var r = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, n),
                r.l = !0,
                r.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var r in e)
                        n.d(i, r, function(t) {
                            return e[t]
                        }
                        .bind(null, r));
                return i
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "/",
            n(n.s = 62)
        }([function(e, t, n) {
            window,
            e.exports = function(e) {
                var t = {};
                function n(i) {
                    if (t[i])
                        return t[i].exports;
                    var r = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(r.exports, r, r.exports, n),
                    r.l = !0,
                    r.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var i = Object.create(null);
                    if (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var r in e)
                            n.d(i, r, function(t) {
                                return e[t]
                            }
                            .bind(null, r));
                    return i
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "/",
                n(n.s = 8)
            }([function(e, t) {
                e.exports = n(4)
            }
            , function(e, t) {
                e.exports = n(38)
            }
            , function(e, t) {
                e.exports = n(8)
            }
            , function(e, t) {
                e.exports = n(41)
            }
            , function(e, t) {
                e.exports = n(63)
            }
            , function(e, t) {
                e.exports = n(64)
            }
            , function(e, t) {
                e.exports = n(59)
            }
            , function(e, t) {
                e.exports = n(61)
            }
            , function(e, t, n) {
                "use strict";
                n.r(t),
                n.d(t, "createBrowserNotifications", (function() {
                    return h
                }
                )),
                n.d(t, "BrowserNotification", (function() {
                    return l
                }
                )),
                n.d(t, "Decorator", (function() {
                    return p
                }
                )),
                n.d(t, "Err", (function() {
                    return d
                }
                )),
                n.d(t, "Evt", (function() {
                    return m
                }
                )),
                n.d(t, "createHttp", (function() {
                    return b
                }
                )),
                n.d(t, "createLogger", (function() {
                    return u
                }
                )),
                n.d(t, "Logger", (function() {
                    return a
                }
                )),
                n.d(t, "createNotifications", (function() {
                    return x
                }
                )),
                n.d(t, "Notifications", (function() {
                    return E
                }
                )),
                n.d(t, "Signal", (function() {
                    return k
                }
                )),
                n.d(t, "I18N", (function() {
                    return T
                }
                ));
                var i = n(0)
                  , r = n.n(i)
                  , s = n(1);
                const o = (...e)=>e.map(e=>"string" == typeof e ? e : JSON.stringify(e));
                var a;
                function u(e) {
                    const t = new a.Service(e);
                    return a.POOL.addLogger(t),
                    t
                }
                !function(e) {
                    e.MAX_LOGS_SIZE = 1048576,
                    e.LS_LOGS_KEY = "uuip-logs";
                    const t = /[\u0100-\uFFFF]/g;
                    let n;
                    !function(e) {
                        e[e.Trace = 1] = "Trace",
                        e[e.Debug = 2] = "Debug",
                        e[e.Warn = 3] = "Warn",
                        e[e.Error = 4] = "Error",
                        e[e.Fatal = 5] = "Fatal"
                    }(n = e.Level || (e.Level = {})),
                    e.Service = class {
                        constructor(e) {
                            this.loggerEmitter = r()(),
                            this.prefix = e
                        }
                        log(t, ...n) {
                            const i = o(this.prefix ? ["" + this.prefix, ...n] : n)
                              , r = Date.now()
                              , a = s.DateTime.fromMillis(r).toFormat("yyyy-LL-dd HH:mm:ss:SSS");
                            switch (t) {
                            case e.Level.Trace:
                                console.info(a, ...i);
                                break;
                            case e.Level.Debug:
                                console.log(a, ...i);
                                break;
                            case e.Level.Warn:
                                console.warn(a, ...i);
                                break;
                            case e.Level.Error:
                            case e.Level.Fatal:
                                console.error(a, ...i);
                                break;
                            default:
                                console.log(...i)
                            }
                            const u = {
                                pfx: this.prefix,
                                msgs: [...n],
                                ts: r,
                                lvl: t
                            };
                            this.emit("add", u)
                        }
                        info(...e) {
                            this.log(n.Trace, ...e)
                        }
                        warn(...e) {
                            this.log(n.Warn, ...e)
                        }
                        error(...e) {
                            this.log(n.Error, ...e)
                        }
                        emit(e, ...t) {
                            this.loggerEmitter.emit(e, ...t)
                        }
                        addEventListener(e, t) {
                            return this.loggerEmitter.on(e, t),
                            ()=>{
                                this.removeEventListener(e, t)
                            }
                        }
                        removeEventListener(e, t) {
                            this.loggerEmitter.off(e, t)
                        }
                    }
                    ;
                    class i {
                        constructor() {
                            this.loggers = new Map,
                            this.logsCollection = [],
                            this.prefixedLogsCollections = {},
                            this.logRecordsSerializedLength = 0,
                            this.onLoggerAddRecord = e=>{
                                this.addLogRecord(e),
                                this.save()
                            }
                            ,
                            this.restore()
                        }
                        static getSerializedJsonLogRecordBytesSize(e="") {
                            const n = e.length;
                            if (n) {
                                const i = e.replace(t, "").length;
                                return 1 * i + 2 * (n - i)
                            }
                            return n
                        }
                        get serializedJsonLogsBytesSize() {
                            const e = this.logsCollection.length;
                            return 2 + this.logRecordsSerializedLength + 1 * (e - 1)
                        }
                        save() {
                            window.localStorage.setItem(e.LS_LOGS_KEY, JSON.stringify(this.logsCollection))
                        }
                        restore() {
                            try {
                                (JSON.parse(window.localStorage.getItem(e.LS_LOGS_KEY) || "[]") || []).forEach(e=>this.addLogRecord(e))
                            } catch (e) {
                                console.warn("Logger failed read logs from localStorage: ", e)
                            }
                        }
                        addLogRecord(t) {
                            for (this.logsCollection.push(t),
                            this.logRecordsSerializedLength += i.getSerializedJsonLogRecordBytesSize(JSON.stringify(t)),
                            this.prefixedLogsCollections[t.pfx] = this.prefixedLogsCollections[t.pfx] || new Set,
                            this.prefixedLogsCollections[t.pfx].add(t); this.serializedJsonLogsBytesSize > e.MAX_LOGS_SIZE; )
                                this.logsCollection.length && this.removeLogRecord(this.logsCollection[0])
                        }
                        removeLogRecord(e) {
                            if (e) {
                                const t = this.logsCollection.indexOf(e);
                                -1 !== t && (this.logsCollection.splice(t, 1),
                                this.logRecordsSerializedLength -= i.getSerializedJsonLogRecordBytesSize(JSON.stringify(e)),
                                this.prefixedLogsCollections[e.pfx] && this.prefixedLogsCollections[e.pfx].has(e) && this.prefixedLogsCollections[e.pfx].delete(e))
                            }
                        }
                        static getLogRecordReadable(e) {
                            return {
                                prefix: e.pfx,
                                messages: e.msgs,
                                timestamp: s.DateTime.fromMillis(e.ts).toFormat("yyyy-LL-dd HH:mm:ss:SSS"),
                                level: n[e.lvl]
                            }
                        }
                        static getLogsReadableJson(e) {
                            const t = e=>e.map(e=>i.getLogRecordReadable(e));
                            return JSON.stringify(Array.isArray(e) ? t(e) : Object.keys(e).reduce((n,i)=>(n[i] = t(e[i]),
                            n), {}), null, 2)
                        }
                        static getLogsReadableText(e) {
                            const t = e=>e.reduce((e,t)=>{
                                const n = i.getLogRecordReadable(t);
                                return e + (n.timestamp + " ") + n.prefix + " " + n.level + " " + o(n.messages).join(" ") + " \r\n"
                            }
                            , "");
                            return Array.isArray(e) ? t(e) : Object.keys(e).reduce((n,i)=>(n += `[SERVICE "${i}" LOGS]: `) + t(e[i]), "")
                        }
                        static getLogsUrl(e) {
                            return "data:text/plain;charset=utf-8," + encodeURIComponent(e)
                        }
                        static browserDownload(e, t) {
                            try {
                                if (document && document.createElement) {
                                    const n = document.createElement("a");
                                    n.setAttribute("href", e),
                                    n.setAttribute("download", t),
                                    n.style.display = "none",
                                    document.body.appendChild(n),
                                    n.click(),
                                    document.body.removeChild(n)
                                } else
                                    console.warn("Browser is not supported to download logs")
                            } catch (e) {}
                        }
                        addLogger(e) {
                            this.loggers.set(e.prefix, e),
                            e.removeEventListener("add", this.onLoggerAddRecord),
                            e.addEventListener("add", this.onLoggerAddRecord)
                        }
                        getAllLogsJsonUrl() {
                            return i.getLogsUrl(i.getLogsReadableJson(this.logsCollection))
                        }
                        getAllPrefixedLogsJsonUrl() {
                            return i.getLogsUrl(i.getLogsReadableJson(this.getAllPrefixedLogsCollections()))
                        }
                        getPrefixedLogsJsonUrl(e) {
                            return i.getLogsUrl(i.getLogsReadableJson(this.getPrefixedLogsCollection(e)))
                        }
                        getAllLogsTextUrl() {
                            return i.getLogsUrl(i.getLogsReadableText(this.logsCollection))
                        }
                        getPrefixedLogsTextUrl(e) {
                            return i.getLogsUrl(i.getLogsReadableText(this.getPrefixedLogsCollection(e)))
                        }
                        browserDownloadAllLogsJson() {
                            i.browserDownload(this.getAllLogsJsonUrl(), new Date + "_all_logs.json")
                        }
                        browserDownloadAllPrefixedLogsJson() {
                            i.browserDownload(this.getAllPrefixedLogsJsonUrl(), new Date + "_all_prefixed_logs.json")
                        }
                        browserDownloadPrefixedLogsJson(e) {
                            i.browserDownload(this.getPrefixedLogsJsonUrl(e), `${new Date}_${e}_logs.json`)
                        }
                        browserDownloadAllLogsText() {
                            i.browserDownload(this.getAllLogsTextUrl(), new Date + "_all_logs.log")
                        }
                        browserDownloadPrefixedLogsText(e) {
                            i.browserDownload(this.getPrefixedLogsTextUrl(e), `${new Date}_${e}_logs.log`)
                        }
                        cleanupAllLogs() {
                            this.logsCollection.length = 0,
                            this.logRecordsSerializedLength = 0,
                            Object.keys(this.prefixedLogsCollections).forEach(e=>this.prefixedLogsCollections[e] = new Set),
                            this.save()
                        }
                        cleanupPrefixedLogs(e) {
                            this.getPrefixedLogsCollection(e).forEach(e=>this.removeLogRecord(e)),
                            this.prefixedLogsCollections[e] = new Set,
                            this.save()
                        }
                        getAllLogsCollection() {
                            return [...this.logsCollection]
                        }
                        getAllPrefixedLogsCollections() {
                            return Object.keys(this.prefixedLogsCollections).reduce((e,t)=>(e[t] = this.getPrefixedLogsCollection(t),
                            e), {})
                        }
                        getPrefixedLogsCollection(e) {
                            return Array.from(this.prefixedLogsCollections[e] || new Set)
                        }
                    }
                    e.ServicesPool = i,
                    e.POOL = new e.ServicesPool
                }(a || (a = {}));
                const c = u("unified-ui-platform-sdk");
                var l, d;
                function h(e) {
                    return new l.Service(e)
                }
                function f(e, t) {
                    if (e.descriptor = e.descriptor || Object.getOwnPropertyDescriptor(e.target, e.key),
                    "function" != typeof e.descriptor.value)
                        return console.warn(e.key, "Decorator must be used on function"),
                        e.descriptor;
                    const n = e.descriptor.value
                      , i = e.target.constructor.name;
                    return e.descriptor.value = function() {
                        const e = [];
                        for (let t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return t.call(this, n, e, i)
                    }
                    ,
                    e.descriptor
                }
                !function(e) {
                    class t {
                        constructor(e) {
                            this.defaultOptions = e || {}
                        }
                        static get isBrowserNotificationPromiseSupported() {
                            try {
                                window.Notification.requestPermission().then()
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }
                        get isBrowserNotificationSupported() {
                            return !!("Notification"in window)
                        }
                        get isBrowserNotificationIconSupported() {
                            return this.isBrowserNotificationSupported && "icon"in window.Notification.prototype
                        }
                        get isBrowserNotificationImageSupported() {
                            return this.isBrowserNotificationSupported && "image"in window.Notification.prototype
                        }
                        get isBrowserNotificationBadgeSupported() {
                            return this.isBrowserNotificationSupported && "badge"in window.Notification.prototype
                        }
                        get isPermissionGranted() {
                            return "granted" === window.Notification.permission
                        }
                        get isPermissionDenied() {
                            return "denied" === window.Notification.permission
                        }
                        get isPermissionUnknown() {
                            return !this.isPermissionGranted && !this.isPermissionDenied
                        }
                        requestNotificationUserPermission() {
                            return function(e, t, n, i) {
                                return new (n || (n = Promise))((function(t, r) {
                                    function s(e) {
                                        try {
                                            a(i.next(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            a(i.throw(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function a(e) {
                                        var i;
                                        e.done ? t(e.value) : (i = e.value,
                                        i instanceof n ? i : new n((function(e) {
                                            e(i)
                                        }
                                        ))).then(s, o)
                                    }
                                    a((i = i.apply(e, [])).next())
                                }
                                ))
                            }(this, 0, void 0, (function*() {
                                this.isBrowserNotificationSupported ? t.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission() : yield new Promise(e=>window.Notification.requestPermission(t=>e(t))) : c.warn("Browser notification is not supported...")
                            }
                            ))
                        }
                        fire(e, t) {
                            return new window.Notification(e,Object.assign(Object.assign({}, this.defaultOptions), t || {}))
                        }
                    }
                    e.Service = t
                }(l || (l = {})),
                function(e) {
                    class t extends Error {
                        constructor(e, t) {
                            super(),
                            this.isErr = "yes",
                            this.id = e,
                            this.stack = (new Error).stack,
                            "string" == typeof t ? this.message = t : t instanceof Error ? (this.message = t.message,
                            this.name = t.name) : this.message = ""
                        }
                    }
                    e.Message = t;
                    class n extends Error {
                        constructor(e, t) {
                            super(),
                            this.isErr = "yes",
                            this.id = e,
                            this.stack = (new Error).stack,
                            this.details = t,
                            this.message = "{err.details}"
                        }
                    }
                    e.Details = n,
                    e.Create = class {
                    }
                }(d || (d = {}));
                var p, v, g = function(e, t, n, i) {
                    return new (n || (n = Promise))((function(r, s) {
                        function o(e) {
                            try {
                                u(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function a(e) {
                            try {
                                u(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function u(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(o, a)
                        }
                        u((i = i.apply(e, t || [])).next())
                    }
                    ))
                };
                (v = p || (p = {})).Debounce = function(e=250) {
                    return function(t, n, i) {
                        let r;
                        return f({
                            target: t,
                            key: n,
                            descriptor: i
                        }, (function(t, n) {
                            clearTimeout(r),
                            r = window.setTimeout(()=>{
                                clearTimeout(r),
                                t.apply(this, n)
                            }
                            , e)
                        }
                        ))
                    }
                }
                ,
                v.Evt = function() {
                    return (e,t)=>{
                        const n = {
                            get() {
                                return new m(this,void 0 !== t ? t : e.key)
                            },
                            enumerable: !0,
                            configurable: !0
                        };
                        return void 0 !== t ? Object.defineProperty(e, t, n) : {
                            kind: "method",
                            placement: "prototype",
                            key: e.key,
                            descriptor: n
                        }
                    }
                }
                ,
                v.Exec = function(e, t=!0) {
                    return function(n, i, r) {
                        return f({
                            target: n,
                            key: i,
                            descriptor: r
                        }, (function(n, r) {
                            return function(e, t, n, i) {
                                return new (n || (n = Promise))((function(t, r) {
                                    function s(e) {
                                        try {
                                            a(i.next(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            a(i.throw(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function a(e) {
                                        var i;
                                        e.done ? t(e.value) : (i = e.value,
                                        i instanceof n ? i : new n((function(e) {
                                            e(i)
                                        }
                                        ))).then(s, o)
                                    }
                                    a((i = i.apply(e, [])).next())
                                }
                                ))
                            }(this, 0, void 0, (function*() {
                                const s = "_" + i + "_exec_flag";
                                if (t && this[s])
                                    return void console.log("PREVENTING DOUBLE EXECUTION");
                                const o = t=>{
                                    if (this[s] = t,
                                    "function" == typeof e)
                                        e.call(this, {
                                            isExec: t,
                                            ctx: this
                                        });
                                    else {
                                        const n = e;
                                        t ? n.before && n.before.call(this, this) : n.after && n.after.call(this, this)
                                    }
                                }
                                ;
                                o(!0);
                                const a = n.apply(this, r);
                                return a instanceof Promise ? a.then(()=>o(!1)).catch(()=>o(!1)) : (console.warn("Must be async function to use [@Executing] decorator"),
                                o(!1)),
                                a
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                v.Handle = function(e) {
                    return function(t, n, i) {
                        return f({
                            target: t,
                            key: n,
                            descriptor: i
                        }, (function(t, i, r) {
                            return g(this, void 0, void 0, (function*() {
                                const s = this
                                  , o = t=>g(this, void 0, void 0, (function*() {
                                    t.id && "string" == typeof t.id && "yes" === t.isErr || ("string" == typeof t || t instanceof Error ? t = new d.Message("system",t) : (console.warn("Err must be 'string' or 'new Error()' instance"),
                                    t = new d.Message("system","")));
                                    const i = t;
                                    i.ctx = s;
                                    const o = `Error] ${r}.${n} [${i.id}]: ${i.message}`;
                                    if ("function" == typeof e) {
                                        const t = e;
                                        console.log("[Handled" + o);
                                        const n = t.call(s, i);
                                        n instanceof Promise && (yield n)
                                    } else {
                                        const t = e;
                                        if (t[i.id]) {
                                            console.log("[Handled" + o);
                                            const e = t[i.id].call(s, i);
                                            e instanceof Promise && (yield e)
                                        } else if (t.handle) {
                                            console.log("[Handled" + o);
                                            const e = t.handle.call(s, i);
                                            e instanceof Promise && (yield e)
                                        } else
                                            console.warn("[Unhandled " + o);
                                        if (t.fallback) {
                                            const e = t.fallback.call(s, i);
                                            e instanceof Promise && (yield e)
                                        }
                                    }
                                }
                                ));
                                try {
                                    const e = t.apply(s, i);
                                    return e instanceof Promise ? new Promise(t=>{
                                        e.then(t).catch(e=>g(this, void 0, void 0, (function*() {
                                            yield o(e),
                                            t(void 0)
                                        }
                                        )))
                                    }
                                    ) : e
                                } catch (e) {
                                    return void (yield o(e))
                                }
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                v.Once = function() {
                    return function(e, t, n) {
                        return f({
                            target: e,
                            key: t,
                            descriptor: n
                        }, (function(e, n) {
                            const i = "_" + t + "_once_flag";
                            if (!this[i])
                                return this[i] = !0,
                                e.call(this, n)
                        }
                        ))
                    }
                }
                ,
                v.Throttle = function(e=1e3 / 60) {
                    return function(t, n, i) {
                        let r = void 0
                          , s = Date.now();
                        return f({
                            target: t,
                            key: n,
                            descriptor: i
                        }, (function(t, n) {
                            const i = (...n)=>{
                                const o = Date.now();
                                window.clearTimeout(r),
                                !s || o - s >= e ? (s = o,
                                t.apply(this, n)) : r = window.setTimeout(()=>i(...n), e - (o - s))
                            }
                            ;
                            i(...n)
                        }
                        ))
                    }
                }
                ;
                class m {
                    constructor(e, t) {
                        this.target = e,
                        this.eventName = t
                    }
                    emit(e, t={
                        bubbles: !0,
                        composed: !0,
                        cancelable: !1
                    }) {
                        this.target.dispatchEvent(new CustomEvent(this.eventName,Object.assign({
                            detail: e
                        }, t)))
                    }
                }
                var y = n(3)
                  , S = n.n(y)
                  , w = n(4);
                function b(e) {
                    const t = S.a.create();
                    return t.accessToken = e,
                    t.interceptors.request.use(e=>{
                        if (!e.headers.Authorization && t.accessToken && (e.headers.Authorization = "Bearer " + t.accessToken),
                        !e.headers.TrackingID) {
                            const t = Object(w.v1)();
                            e.headers.TrackingID = `uuip_${t}_1.0:1.0`
                        }
                        return e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/json"),
                        e
                    }
                    ),
                    t
                }
                var E, k, O = n(2), C = n.n(O);
                function x(e={}) {
                    const t = new E.Service;
                    return t.updateConfig(e),
                    t
                }
                !function(e) {
                    let t, n;
                    !function(e) {
                        let t, n, i, r, s, o, a, u;
                        !function(e) {
                            e.Info = "info",
                            e.Warn = "warn",
                            e.Error = "error",
                            e.Success = "success",
                            e.Chat = "chat",
                            e.Default = "default"
                        }(t = e.Type || (e.Type = {})),
                        e.TYPES = Object.values(t),
                        function(e) {
                            e.Silent = "silent",
                            e.AutoDismiss = "autodismiss",
                            e.Acknowledge = "acknowledge"
                        }(n = e.Mode || (e.Mode = {})),
                        e.MODES = Object.values(n),
                        function(e) {
                            e.Added = "added",
                            e.Pended = "pended",
                            e.Activated = "activated",
                            e.Deactivated = "deactivated",
                            e.Removed = "removed"
                        }(i = e.Status || (e.Status = {})),
                        e.StatusWeight = {
                            [i.Added]: 0,
                            [i.Pended]: 1,
                            [i.Activated]: 2,
                            [i.Deactivated]: 3,
                            [i.Removed]: 4
                        },
                        e.STATUSES = Object.values(i),
                        function(e) {
                            e.User = "user_add"
                        }(r = e.AddEventReason || (e.AddEventReason = {})),
                        function(e) {
                            e.ServiceAutoPropagate = "service_auto_propagate_pending",
                            e.ServiceAutoDismiss = "service_autodismiss_pending",
                            e.UserSilent = "user_silent_pending"
                        }(s = e.PendingEventReason || (e.PendingEventReason = {})),
                        function(e) {
                            e.ServiceAutoPropagate = "service_auto_propagate_activate"
                        }(o = e.ActivateEventReason || (e.ActivateEventReason = {})),
                        function(e) {
                            e.UserNegative = "user_negative_deactivate",
                            e.UserPositive = "user_positive_deactivate",
                            e.UserNeutral = "user_neutral_deactivate"
                        }(a = e.DeactivateEventReason || (e.DeactivateEventReason = {})),
                        function(e) {
                            e.User = "user_remove"
                        }(u = e.RemoveEventReason || (e.RemoveEventReason = {}))
                    }(t = e.ItemMeta || (e.ItemMeta = {})),
                    function(e) {
                        e.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"],
                        e.STATUS_EVENT_MAP = {
                            add: t.Status.Added,
                            pending: t.Status.Pended,
                            activate: t.Status.Activated,
                            deactivate: t.Status.Deactivated,
                            remove: t.Status.Removed
                        },
                        e.DISABLED_ITEM_MODE = {
                            [t.Mode.Silent]: !1,
                            [t.Mode.AutoDismiss]: !1,
                            [t.Mode.Acknowledge]: !1
                        },
                        e.ACTIVATED_ITEM_MODE_LIMIT = {
                            [t.Mode.Silent]: 0,
                            [t.Mode.AutoDismiss]: 10,
                            [t.Mode.Acknowledge]: 1
                        },
                        e.AUTO_DISMISS_TIMEOUT = 5e3
                    }(n = e.ServiceMeta || (e.ServiceMeta = {}));
                    class i {
                        constructor() {
                            this.hubEmitter = r()()
                        }
                        emit(e, ...t) {
                            this.hubEmitter.emit(e, ...t)
                        }
                        addEventListener(e, t) {
                            this.hubEmitter.on(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this.hubEmitter.once(e, t)
                        }
                        removeEventListener(e, t) {
                            this.hubEmitter.off(e, t)
                        }
                        removeAllEventListeners() {
                            C()(this.hubEmitter)
                        }
                    }
                    e.Item = class {
                        constructor(e, n) {
                            this._serviceHubSubscriptions = [],
                            this._itemEmitter = r()();
                            const {type: i, mode: o, title: a, data: u, timestamp: c} = e.data;
                            this.type = i,
                            this.title = a,
                            this.data = u,
                            this._mode = o,
                            this.timestamp = c || (new Date).toISOString(),
                            this.datetime = s.DateTime.fromISO(this.timestamp).toLocaleString(s.DateTime.DATETIME_SHORT_WITH_SECONDS),
                            this.options = Object.freeze(this.validateAuxOptions(e.options || {})),
                            n && (this._serviceHubAdapter = n,
                            this._status = t.Status.Added,
                            this._reason = t.AddEventReason.User,
                            this.bindItemHubListeners())
                        }
                        get status() {
                            return this._status
                        }
                        get reason() {
                            return this._reason
                        }
                        get mode() {
                            return this._mode
                        }
                        validateAuxOptions(e) {
                            let n = {};
                            return e && void 0 !== e.AUTO_DISMISS_TIMEOUT && this.mode === t.Mode.AutoDismiss && (n = Object.assign(Object.assign({}, n), {
                                AUTO_DISMISS_TIMEOUT: e.AUTO_DISMISS_TIMEOUT
                            })),
                            n
                        }
                        bindItemHubListeners() {
                            if (this._serviceHubAdapter) {
                                {
                                    const e = (e,n,i)=>{
                                        this.timestamp in e && (this._status = n,
                                        this._reason = i,
                                        n === t.Status.Removed && (this.unbindItemHubListeners(),
                                        this.removeAllEventListeners()),
                                        this.emit("statusUpdate", n, i))
                                    }
                                    ;
                                    this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", e);
                                    const n = ()=>{
                                        var t;
                                        null === (t = this._serviceHubAdapter) || void 0 === t || t.removeEventListener("statusServiceUpdateResponse", e)
                                    }
                                    ;
                                    this._serviceHubSubscriptions.push(n)
                                }
                                {
                                    const e = (e,t)=>{
                                        this.timestamp in e && (this._mode = t,
                                        this.emit("modeUpdate", t))
                                    }
                                    ;
                                    this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", e);
                                    const t = ()=>{
                                        var t;
                                        null === (t = this._serviceHubAdapter) || void 0 === t || t.removeEventListener("modeStatusUpdateResponse", e)
                                    }
                                    ;
                                    this._serviceHubSubscriptions.push(t)
                                }
                            }
                        }
                        unbindItemHubListeners() {
                            this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach(e=>e()),
                            this._serviceHubSubscriptions.length = 0)
                        }
                        deactivate(e) {
                            this._status && t.StatusWeight[this._status] < t.StatusWeight[t.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t.Status.Deactivated, e) : c.warn("Service hub adapter is not initialized for this notification item instance: ", this) : c.warn(`Notification should have "${t.Status.Pended}" or "${t.Status.Activated}" status to be able change status to "${t.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`)
                        }
                        pending() {
                            this._status === t.Status.Activated || this.mode !== t.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t.Status.Pended, t.PendingEventReason.UserSilent) : c.warn("Service hub adapter is not initialized for this notification item instance: ", this) : c.warn(`Notification should have "${t.Status.Activated}" status or not "${t.Mode.Silent}" mode, to be able change status to "${t.Status.Pended}" and mode to "${t.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`)
                        }
                        emit(e, ...t) {
                            this._itemEmitter.emit(e, ...t)
                        }
                        addEventListener(e, t) {
                            this._itemEmitter.on(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this._itemEmitter.once(e, t)
                        }
                        removeEventListener(e, t) {
                            this._itemEmitter.off(e, t)
                        }
                        removeAllEventListeners() {
                            C()(this._itemEmitter)
                        }
                    }
                    ;
                    const o = (e,t,n=(()=>0))=>[...e, ...t].sort(n)
                      , a = (e,t)=>e.reduce((e,n)=>(-1 === t.indexOf(n) && e.push(n),
                    e), []);
                    class u {
                        constructor() {
                            this.emitter = r()(),
                            this.map = {},
                            this.status = u.createStatus(),
                            this.serviceConfig = {
                                DISABLED_ITEM_MODE: Object.assign({}, n.DISABLED_ITEM_MODE),
                                ACTIVATED_ITEM_MODE_LIMIT: Object.assign({}, n.ACTIVATED_ITEM_MODE_LIMIT),
                                AUTO_DISMISS_TIMEOUT: n.AUTO_DISMISS_TIMEOUT
                            },
                            this.activeAutoDismissTimeoutRefs = {},
                            this.serviceHubAdapter = new i,
                            this.bindServiceHubEvents()
                        }
                        static mergeConfig(e, ...t) {
                            if (!t.length)
                                return e;
                            const n = t.shift()
                              , i = e=>e && "object" == typeof e && !Array.isArray(e);
                            if (i(e) && i(n))
                                for (const t in n)
                                    i(n[t]) ? (e[t] || Object.assign(e, {
                                        [t]: {}
                                    }),
                                    this.mergeConfig(e[t], n[t])) : Object.assign(e, {
                                        [t]: n[t]
                                    });
                            return this.mergeConfig(e, ...t)
                        }
                        static createStatus() {
                            return {
                                [t.Status.Added]: this.createStatusHolderCollection(),
                                [t.Status.Pended]: this.createStatusHolderCollection(),
                                [t.Status.Activated]: this.createStatusHolderCollection(),
                                [t.Status.Deactivated]: this.createStatusHolderCollection(),
                                [t.Status.Removed]: this.createStatusHolderCollection()
                            }
                        }
                        static createStatusHolderCollection() {
                            return Object.assign([], Object.assign(Object.assign({
                                ids: []
                            }, this.createStatusHolderSubCollections(t.MODES)), this.createStatusHolderSubCollections(t.TYPES)))
                        }
                        static createStatusHolderSubCollections(e) {
                            return Object.assign({}, e.reduce((e,t)=>(e[t] = [],
                            e), {}))
                        }
                        updateNotificationsCollections() {
                            const e = u.createStatus();
                            this.status.added.ids.forEach(n=>{
                                const i = this.map[n];
                                t.STATUSES.forEach(t=>{
                                    -1 !== this.status[t].ids.indexOf(i.timestamp) && (e[t].push(i),
                                    e[t].ids.push(n),
                                    e[t][i.mode].push(i),
                                    e[t][i.type].push(i))
                                }
                                )
                            }
                            ),
                            this.status = e
                        }
                        setAutoDismiss(e, n=(()=>{}
                        )) {
                            this.prepareUpdateNotifications(e).forEach(e=>{
                                var i;
                                if (e.mode === t.Mode.AutoDismiss) {
                                    const t = ()=>n(e);
                                    this.activeAutoDismissTimeoutRefs[e.timestamp] = window.setTimeout(t, null !== (i = e.options.AUTO_DISMISS_TIMEOUT) && void 0 !== i ? i : this.serviceConfig.AUTO_DISMISS_TIMEOUT)
                                }
                            }
                            )
                        }
                        removeAutoDismiss(e, t=(()=>{}
                        )) {
                            this.prepareUpdateNotifications(e).forEach(e=>{
                                e.timestamp in this.activeAutoDismissTimeoutRefs && (t(e),
                                window.clearTimeout(this.activeAutoDismissTimeoutRefs[e.timestamp]),
                                delete this.activeAutoDismissTimeoutRefs[e.timestamp])
                            }
                            )
                        }
                        update(e, t, n) {
                            const i = Array.isArray(n) ? n : [n];
                            if (i.length) {
                                const n = i.map(e=>e.timestamp);
                                switch (e) {
                                case "add":
                                    i.forEach(e=>this.map[e.timestamp] = e),
                                    this.status.added.ids = o(this.status.added.ids, n, u.sortTimestampsFn);
                                    break;
                                case "pending":
                                    this.status.pended.ids = o(this.status.pended.ids, n, u.sortTimestampsFn),
                                    this.status.activated.ids = a(this.status.activated.ids, n),
                                    this.status.deactivated.ids = a(this.status.deactivated.ids, n);
                                    break;
                                case "activate":
                                    this.status.pended.ids = a(this.status.pended.ids, n),
                                    this.status.activated.ids = o(this.status.activated.ids, n, u.sortTimestampsFn),
                                    this.status.deactivated.ids = a(this.status.deactivated.ids, n);
                                    break;
                                case "deactivate":
                                    this.status.pended.ids = a(this.status.pended.ids, n),
                                    this.status.activated.ids = a(this.status.activated.ids, n),
                                    this.status.deactivated.ids = o(this.status.deactivated.ids, n, u.sortTimestampsFn);
                                    break;
                                case "remove":
                                    this.status.pended.ids = a(this.status.pended.ids, n),
                                    this.status.activated.ids = a(this.status.activated.ids, n),
                                    this.status.deactivated.ids = a(this.status.deactivated.ids, n),
                                    this.status.added.ids = a(this.status.added.ids, n),
                                    this.status.removed.ids = o(this.status.removed.ids, n, u.sortTimestampsFn),
                                    n.forEach(e=>delete this.map[e])
                                }
                                this.updateNotificationsCollections(),
                                this.emit(e, i, t),
                                this.propagate(e, t, i)
                            }
                        }
                        propagate(e, n, i) {
                            const r = Array.isArray(i) ? i : [i];
                            if (r.length)
                                switch (e) {
                                case "add":
                                    this.update("pending", t.PendingEventReason.ServiceAutoPropagate, r);
                                    break;
                                case "pending":
                                    r.forEach(e=>{
                                        this.removeAutoDismiss(e)
                                    }
                                    ),
                                    this.update("activate", t.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                                    break;
                                case "activate":
                                    r.forEach(e=>{
                                        this.setAutoDismiss(e, e=>{
                                            e.mode === t.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", e, t.Status.Pended, t.PendingEventReason.ServiceAutoDismiss)
                                        }
                                        )
                                    }
                                    );
                                    break;
                                case "deactivate":
                                    r.forEach(e=>{
                                        this.removeAutoDismiss(e)
                                    }
                                    ),
                                    this.update("activate", t.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                                    break;
                                case "remove":
                                    this.update("deactivate", t.DeactivateEventReason.UserNegative, r)
                                }
                        }
                        prepareAddNotifications(t) {
                            const n = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((e,t)=>(this.serviceConfig.DISABLED_ITEM_MODE[t] || e.push(t),
                            e), []).map(e=>`"${e}"`).join(", ");
                            return (Array.isArray(t) ? t : [t]).filter(e=>!this.serviceConfig.DISABLED_ITEM_MODE[e.data.mode] || (c.error(`Trying to .add(...) notification mode "${e.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${n} allowed. Ignoring .add(${JSON.stringify(e)}) notification...`),
                            !1)).map(t=>new e.Item(t,this.serviceHubAdapter))
                        }
                        prepareUpdateNotifications(e) {
                            return (Array.isArray(e) ? e : [e]).reduce((e,t)=>(t.timestamp in this.map ? e.push(t) : c.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(t)),
                            e), [])
                        }
                        prepareActiveCandidatesNotifications(e) {
                            const n = (Array.isArray(e) ? e : [e]).reduce((e,t)=>(this.status.activated[t.mode].length + e[t.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[t.mode] && e[t.mode].push(t),
                            e), u.createStatusHolderSubCollections(t.MODES));
                            return Object.values(n).reduce((e,t)=>e.concat(t), [])
                        }
                        static sortByTimestampsFn(e, t) {
                            return u.sortTimestampsFn(e.timestamp, t.timestamp)
                        }
                        get added() {
                            return this.status.added
                        }
                        get pended() {
                            return this.status.pended
                        }
                        get activated() {
                            return this.status.activated
                        }
                        get deactivated() {
                            return this.status.deactivated
                        }
                        getNotificationStatus(e) {
                            return Object.keys(this.status).filter(e=>e !== t.Status.Added).find(t=>-1 !== this.status[t].ids.indexOf(e.timestamp))
                        }
                        get config() {
                            return Object.freeze(this.serviceConfig)
                        }
                        static validateUpdateConfig(e) {
                            const i = e;
                            if (i.ACTIVATED_ITEM_MODE_LIMIT && i.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge)
                                throw new Error(`\n          Max ${t.Mode.Acknowledge} limit is ${n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}\n        `);
                            if (i.DISABLED_ITEM_MODE) {
                                if (!Object.keys(i.DISABLED_ITEM_MODE).reduce((e,t)=>(i.DISABLED_ITEM_MODE[t] && e++,
                                e), 0))
                                    throw new Error("At least one notifications mode should be allowed in service instance");
                                Object.keys(i.ACTIVATED_ITEM_MODE_LIMIT).forEach(e=>{
                                    e in i.DISABLED_ITEM_MODE && i.DISABLED_ITEM_MODE[e] && c.warn(`Changing configuration limit count for mode "${e}" won't have any effect, because this mode is disabled in notifications service instance`)
                                }
                                ),
                                "AUTO_DISMISS_TIMEOUT"in i && i.DISABLED_ITEM_MODE[t.Mode.AutoDismiss] && c.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${t.Mode.AutoDismiss}" mode is disabled in notifications service instance`)
                            }
                            return !0
                        }
                        updateConfig(e) {
                            u.validateUpdateConfig(e) && (this.serviceConfig = u.mergeConfig({}, this.serviceConfig, e),
                            c.info("Updated notifications service configuration: ", this.config))
                        }
                        add(e) {
                            const n = this.prepareAddNotifications(e);
                            return this.update("add", t.AddEventReason.User, n),
                            n
                        }
                        pending(e) {
                            const n = this.prepareUpdateNotifications(e);
                            return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n, t.Status.Pended, t.PendingEventReason.UserSilent),
                            n
                        }
                        deactivate(e, n) {
                            const i = this.prepareUpdateNotifications(e);
                            return this.serviceHubAdapter.emit("statusServiceUpdateRequest", i, t.Status.Deactivated, n),
                            i
                        }
                        remove(e) {
                            const n = this.prepareUpdateNotifications(e);
                            return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n, t.Status.Removed, t.RemoveEventReason.User),
                            n
                        }
                        pendingAllActivated() {
                            return this.pending(this.status.activated)
                        }
                        pendingAll() {
                            return this.pending([...this.status.pended, ...this.status.activated])
                        }
                        deactivateAllActivated(e) {
                            return this.deactivate(this.status.activated, e)
                        }
                        deactivateAll(e) {
                            return this.deactivate([...this.status.pended, ...this.status.activated], e)
                        }
                        removeAllDeactivated() {
                            return this.remove(this.status.deactivated)
                        }
                        removeAll() {
                            return this.remove(this.status.added)
                        }
                        addEventListener(e, t) {
                            this.emitter.on(e, t)
                        }
                        removeEventListener(e, t) {
                            this.emitter.off(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this.emitter.once(e, t)
                        }
                        removeAllEventListeners() {
                            C()(this.emitter)
                        }
                        emit(e, ...t) {
                            this.emitter.emit(e, ...t)
                        }
                        bindServiceHubEvents() {
                            this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", (e,n,i)=>{
                                const r = Array.isArray(e) ? e : [e]
                                  , s = r.reduce((e,t)=>(e[t.timestamp] = this.getNotificationStatus(t),
                                e), {});
                                {
                                    const e = r.filter(e=>(s[e.timestamp] === t.Status.Activated || e.mode !== t.Mode.Silent) && n === t.Status.Pended);
                                    {
                                        const n = e.filter(e=>e.mode !== t.Mode.Silent);
                                        n.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", n.reduce((e,t)=>(e[t.timestamp] = t,
                                        e), {}), t.Mode.Silent)
                                    }
                                    e.length && this.update("pending", i, e)
                                }
                                {
                                    const e = r.filter(e=>{
                                        const i = s[e.timestamp];
                                        return (i === t.Status.Pended || i === t.Status.Activated) && n === t.Status.Deactivated
                                    }
                                    );
                                    e.length && this.update("deactivate", i, e)
                                }
                                r.filter(e=>{
                                    const i = s[e.timestamp];
                                    return (i === t.Status.Pended || i === t.Status.Activated || i === t.Status.Deactivated) && n === t.Status.Removed
                                }
                                ).length && this.update("remove", i, e)
                            }
                            ),
                            n.STATUS_EVENTS.forEach(e=>{
                                this.addEventListener(e, (t,i)=>{
                                    const r = n.STATUS_EVENT_MAP[e]
                                      , s = t.reduce((e,t)=>(e[t.timestamp] = t,
                                    e), {});
                                    this.serviceHubAdapter.emit("statusServiceUpdateResponse", s, r, i)
                                }
                                )
                            }
                            )
                        }
                    }
                    u.sortTimestampsFn = (e,t)=>e > t ? 1 : e < t ? -1 : 0,
                    e.Service = u
                }(E || (E = {})),
                function(e) {
                    class t {
                        constructor() {
                            this.listeners = [],
                            this.listenersOnce = [],
                            this.listen = e=>(this.listeners.push(e),
                            {
                                stopListen: ()=>this.stopListen(e)
                            }),
                            this.listenOnce = e=>(this.listenersOnce.push(e),
                            {
                                stopListenOnce: ()=>this.stopListenOnce(e)
                            }),
                            this.stopListen = e=>{
                                const t = this.listeners.indexOf(e, 0);
                                return t > -1 && (this.listeners.splice(t, 1),
                                !0)
                            }
                            ,
                            this.stopListenOnce = e=>{
                                const t = this.listenersOnce.indexOf(e, 0);
                                return t > -1 && (this.listenersOnce.splice(t, 1),
                                !0)
                            }
                            ,
                            this.stopListenAll = ()=>{
                                this.listeners = [],
                                this.listenersOnce = []
                            }
                            ,
                            this.send = e=>{
                                this.listeners.forEach(t=>t(e)),
                                this.listenersOnce.forEach(t=>t(e)),
                                this.listenersOnce = []
                            }
                        }
                    }
                    class n {
                        constructor() {
                            this.listeners = [],
                            this.listenersOnce = [],
                            this.listen = e=>(this.listeners.push(e),
                            {
                                stopListen: ()=>this.stopListen(e)
                            }),
                            this.listenOnce = e=>(this.listenersOnce.push(e),
                            {
                                stopListenOnce: ()=>this.stopListenOnce(e)
                            }),
                            this.stopListen = e=>{
                                const t = this.listeners.indexOf(e, 0);
                                return t > -1 && (this.listeners.splice(t, 1),
                                !0)
                            }
                            ,
                            this.stopListenOnce = e=>{
                                const t = this.listenersOnce.indexOf(e, 0);
                                return t > -1 && (this.listenersOnce.splice(t, 1),
                                !0)
                            }
                            ,
                            this.stopListenAll = ()=>{
                                this.listeners = [],
                                this.listenersOnce = []
                            }
                            ,
                            this.send = ()=>{
                                this.listeners.forEach(e=>e()),
                                this.listenersOnce.forEach(e=>e()),
                                this.listenersOnce = []
                            }
                        }
                    }
                    e.create = new class {
                        withData() {
                            const e = new t;
                            return {
                                signal: e,
                                send: e.send,
                                stopListenAll: e.stopListenAll
                            }
                        }
                        empty() {
                            const e = new n;
                            return {
                                signal: e,
                                send: e.send,
                                stopListenAll: e.stopListenAll
                            }
                        }
                    }
                }(k || (k = {}));
                var T, L, _ = n(5), A = n.n(_), I = n(6), N = n.n(I), R = n(7), M = n.n(R);
                (L = T || (T = {})).createService = e=>{
                    const t = A.a.createInstance();
                    {
                        const n = e && e.backend ? e.backend : new N.a;
                        t.use(n)
                    }
                    {
                        const n = e && e.languageDetector ? e.languageDetector : new M.a;
                        t.use(n)
                    }
                    return e && e.logger && t.use({
                        log: "log"in e.logger ? e.logger.log : e.logger.info,
                        warn: e.logger.warn,
                        error: e.logger.error,
                        type: "logger"
                    }),
                    t
                }
                ,
                L.mergeServiceInitOptions = (...e)=>Object.assign.call(null, {}, ...e),
                L.createMixin = e=>{
                    const t = "i18n"in e ? e.i18n : L.createService()
                      , n = "i18nInitOptions"in e ? e.i18nInitOptions : null;
                    n || c.info("i18n mixin instance waiting service initialization outside...");
                    let i = !1;
                    return e=>class extends e {
                        constructor() {
                            super(...arguments),
                            this.onI18NInitialized = e=>this.requestUpdate(),
                            this.onI18NLanguageChanged = e=>this.requestUpdate()
                        }
                        connectedCallback() {
                            super.connectedCallback && super.connectedCallback(),
                            t.on("initialized", this.onI18NInitialized),
                            t.on("languageChanged", this.onI18NLanguageChanged),
                            t.isInitialized || i || !n || (i = !0,
                            t.init(n).finally(()=>i = !1))
                        }
                        disconnectedCallback() {
                            t.off("initialized", this.onI18NInitialized),
                            t.off("languageChanged", this.onI18NLanguageChanged),
                            super.disconnectedCallback && super.disconnectedCallback()
                        }
                        t(...e) {
                            return t.t(...e)
                        }
                    }
                }
            }
            ])
        }
        , function(e, t, n) {
            "use strict";
            var i = n(10)
              , r = Object.prototype.toString;
            function s(e) {
                return "[object Array]" === r.call(e)
            }
            function o(e) {
                return void 0 === e
            }
            function a(e) {
                return null !== e && "object" == typeof e
            }
            function u(e) {
                return "[object Function]" === r.call(e)
            }
            function c(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    s(e))
                        for (var n = 0, i = e.length; n < i; n++)
                            t.call(null, e[n], n, e);
                    else
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
            }
            e.exports = {
                isArray: s,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === r.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: a,
                isUndefined: o,
                isDate: function(e) {
                    return "[object Date]" === r.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === r.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === r.call(e)
                },
                isFunction: u,
                isStream: function(e) {
                    return a(e) && u(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: c,
                merge: function e() {
                    var t = {};
                    function n(n, i) {
                        "object" == typeof t[i] && "object" == typeof n ? t[i] = e(t[i], n) : t[i] = n
                    }
                    for (var i = 0, r = arguments.length; i < r; i++)
                        c(arguments[i], n);
                    return t
                },
                deepMerge: function e() {
                    var t = {};
                    function n(n, i) {
                        "object" == typeof t[i] && "object" == typeof n ? t[i] = e(t[i], n) : t[i] = "object" == typeof n ? e({}, n) : n
                    }
                    for (var i = 0, r = arguments.length; i < r; i++)
                        c(arguments[i], n);
                    return t
                },
                extend: function(e, t, n) {
                    return c(t, (function(t, r) {
                        e[r] = n && "function" == typeof t ? i(t, n) : t
                    }
                    )),
                    e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", (function() {
                return i
            }
            ))
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            function r(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
            n.d(t, "a", (function() {
                return r
            }
            ))
        }
        , function(e, t, n) {
            "use strict";
            var i, r, s, o, a, u, c, l = n(20), d = n(37), h = Function.prototype.apply, f = Function.prototype.call, p = Object.create, v = Object.defineProperty, g = Object.defineProperties, m = Object.prototype.hasOwnProperty, y = {
                configurable: !0,
                enumerable: !1,
                writable: !0
            };
            r = function(e, t) {
                var n, r;
                return d(t),
                r = this,
                i.call(this, e, n = function() {
                    s.call(r, e, n),
                    h.call(t, this, arguments)
                }
                ),
                n.__eeOnceListener__ = t,
                this
            }
            ,
            a = {
                on: i = function(e, t) {
                    var n;
                    return d(t),
                    m.call(this, "__ee__") ? n = this.__ee__ : (n = y.value = p(null),
                    v(this, "__ee__", y),
                    y.value = null),
                    n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t,
                    this
                }
                ,
                once: r,
                off: s = function(e, t) {
                    var n, i, r, s;
                    if (d(t),
                    !m.call(this, "__ee__"))
                        return this;
                    if (!(n = this.__ee__)[e])
                        return this;
                    if ("object" == typeof (i = n[e]))
                        for (s = 0; r = i[s]; ++s)
                            r !== t && r.__eeOnceListener__ !== t || (2 === i.length ? n[e] = i[s ? 0 : 1] : i.splice(s, 1));
                    else
                        i !== t && i.__eeOnceListener__ !== t || delete n[e];
                    return this
                }
                ,
                emit: o = function(e) {
                    var t, n, i, r, s;
                    if (m.call(this, "__ee__") && (r = this.__ee__[e]))
                        if ("object" == typeof r) {
                            for (n = arguments.length,
                            s = new Array(n - 1),
                            t = 1; t < n; ++t)
                                s[t - 1] = arguments[t];
                            for (r = r.slice(),
                            t = 0; i = r[t]; ++t)
                                h.call(i, this, s)
                        } else
                            switch (arguments.length) {
                            case 1:
                                f.call(r, this);
                                break;
                            case 2:
                                f.call(r, this, arguments[1]);
                                break;
                            case 3:
                                f.call(r, this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (n = arguments.length,
                                s = new Array(n - 1),
                                t = 1; t < n; ++t)
                                    s[t - 1] = arguments[t];
                                h.call(r, this, s)
                            }
                }
            },
            u = {
                on: l(i),
                once: l(r),
                off: l(s),
                emit: l(o)
            },
            c = g({}, u),
            e.exports = t = function(e) {
                return null == e ? p(c) : g(Object(e), u)
            }
            ,
            t.methods = a
        }
        , function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }
            ));
            var i = []
              , r = i.forEach
              , s = i.slice;
            function o(e) {
                return r.call(s.call(arguments, 1), (function(t) {
                    if (t)
                        for (var n in t)
                            void 0 === e[n] && (e[n] = t[n])
                }
                )),
                e
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(31)();
            e.exports = function(e) {
                return e !== i && null !== e
            }
        }
        , function(e, t, n) {
            (function(i) {
                var r;
                if ("function" == typeof fetch && (void 0 !== i && i.fetch ? r = i.fetch : "undefined" != typeof window && window.fetch && (r = window.fetch)),
                "undefined" == typeof window || void 0 === window.document) {
                    var s = r || n(60);
                    s.default && (s = s.default),
                    t.default = s,
                    e.exports = t.default
                }
            }
            ).call(this, n(18))
        }
        , function(e, t, n) {
            "use strict";
            var i = n(39)
              , r = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t, n = arguments[1];
                if (i(e),
                void 0 === n)
                    r.call(e, "__ee__") && delete e.__ee__;
                else {
                    if (!(t = r.call(e, "__ee__") && e.__ee__))
                        return;
                    t[n] && delete t[n]
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return null != e
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
                        n[i] = arguments[i];
                    return e.apply(t, n)
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            function r(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t)
                    return e;
                var s;
                if (n)
                    s = n(t);
                else if (i.isURLSearchParams(t))
                    s = t.toString();
                else {
                    var o = [];
                    i.forEach(t, (function(e, t) {
                        null != e && (i.isArray(e) ? t += "[]" : e = [e],
                        i.forEach(e, (function(e) {
                            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
                            o.push(r(t) + "=" + r(e))
                        }
                        )))
                    }
                    )),
                    s = o.join("&")
                }
                if (s) {
                    var a = e.indexOf("#");
                    -1 !== a && (e = e.slice(0, a)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + s
                }
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        }
        , function(e, t, n) {
            "use strict";
            (function(t) {
                var i = n(1)
                  , r = n(48)
                  , s = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                function o(e, t) {
                    !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var a, u = {
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (a = n(14)),
                    a),
                    transformRequest: [function(e, t) {
                        return r(t, "Accept"),
                        r(t, "Content-Type"),
                        i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                        e.toString()) : i.isObject(e) ? (o(t, "application/json;charset=utf-8"),
                        JSON.stringify(e)) : e
                    }
                    ],
                    transformResponse: [function(e) {
                        if ("string" == typeof e)
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                        return e
                    }
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                i.forEach(["delete", "get", "head"], (function(e) {
                    u.headers[e] = {}
                }
                )),
                i.forEach(["post", "put", "patch"], (function(e) {
                    u.headers[e] = i.merge(s)
                }
                )),
                e.exports = u
            }
            ).call(this, n(47))
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , r = n(49)
              , s = n(11)
              , o = n(51)
              , a = n(54)
              , u = n(55)
              , c = n(15);
            e.exports = function(e) {
                return new Promise((function(t, l) {
                    var d = e.data
                      , h = e.headers;
                    i.isFormData(d) && delete h["Content-Type"];
                    var f = new XMLHttpRequest;
                    if (e.auth) {
                        var p = e.auth.username || ""
                          , v = e.auth.password || "";
                        h.Authorization = "Basic " + btoa(p + ":" + v)
                    }
                    var g = o(e.baseURL, e.url);
                    if (f.open(e.method.toUpperCase(), s(g, e.params, e.paramsSerializer), !0),
                    f.timeout = e.timeout,
                    f.onreadystatechange = function() {
                        if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                            var n = "getAllResponseHeaders"in f ? a(f.getAllResponseHeaders()) : null
                              , i = {
                                data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                                status: f.status,
                                statusText: f.statusText,
                                headers: n,
                                config: e,
                                request: f
                            };
                            r(t, l, i),
                            f = null
                        }
                    }
                    ,
                    f.onabort = function() {
                        f && (l(c("Request aborted", e, "ECONNABORTED", f)),
                        f = null)
                    }
                    ,
                    f.onerror = function() {
                        l(c("Network Error", e, null, f)),
                        f = null
                    }
                    ,
                    f.ontimeout = function() {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        l(c(t, e, "ECONNABORTED", f)),
                        f = null
                    }
                    ,
                    i.isStandardBrowserEnv()) {
                        var m = n(56)
                          , y = (e.withCredentials || u(g)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                        y && (h[e.xsrfHeaderName] = y)
                    }
                    if ("setRequestHeader"in f && i.forEach(h, (function(e, t) {
                        void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e)
                    }
                    )),
                    i.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
                    e.responseType)
                        try {
                            f.responseType = e.responseType
                        } catch (t) {
                            if ("json" !== e.responseType)
                                throw t
                        }
                    "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken && e.cancelToken.promise.then((function(e) {
                        f && (f.abort(),
                        l(e),
                        f = null)
                    }
                    )),
                    void 0 === d && (d = null),
                    f.send(d)
                }
                ))
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(50);
            e.exports = function(e, t, n, r, s) {
                var o = new Error(e);
                return i(o, t, n, r, s)
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            e.exports = function(e, t) {
                t = t || {};
                var n = {}
                  , r = ["url", "method", "params", "data"]
                  , s = ["headers", "auth", "proxy"]
                  , o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                i.forEach(r, (function(e) {
                    void 0 !== t[e] && (n[e] = t[e])
                }
                )),
                i.forEach(s, (function(r) {
                    i.isObject(t[r]) ? n[r] = i.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : i.isObject(e[r]) ? n[r] = i.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r])
                }
                )),
                i.forEach(o, (function(i) {
                    void 0 !== t[i] ? n[i] = t[i] : void 0 !== e[i] && (n[i] = e[i])
                }
                ));
                var a = r.concat(s).concat(o)
                  , u = Object.keys(t).filter((function(e) {
                    return -1 === a.indexOf(e)
                }
                ));
                return i.forEach(u, (function(i) {
                    void 0 !== t[i] ? n[i] = t[i] : void 0 !== e[i] && (n[i] = e[i])
                }
                )),
                n
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                this.message = e
            }
            i.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }
            ,
            i.prototype.__CANCEL__ = !0,
            e.exports = i
        }
        , function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
        , function(e, t, n) {
            "use strict";
            (function(e) {
                var i, r, s, o = n(5), a = n(7), u = n.n(a);
                function c(e) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    )(e)
                }
                "function" == typeof fetch && (void 0 !== e && e.fetch ? i = e.fetch : "undefined" != typeof window && window.fetch && (i = window.fetch)),
                "function" == typeof XMLHttpRequest && (void 0 !== e && e.XMLHttpRequest ? r = e.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (r = window.XMLHttpRequest)),
                "function" == typeof ActiveXObject && (void 0 !== e && e.ActiveXObject ? s = e.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (s = window.ActiveXObject)),
                i || !a || r || s || (i = u.a || a),
                "function" != typeof i && (i = void 0);
                var l = function(e, t) {
                    if (t && "object" === c(t)) {
                        var n = "";
                        for (var i in t)
                            n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
                        if (!n)
                            return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
                    }
                    return e
                };
                t.a = function(e, t, n, a) {
                    return "function" == typeof n && (a = n,
                    n = void 0),
                    a = a || function() {}
                    ,
                    i ? function(e, t, n, r) {
                        e.queryStringParams && (t = l(t, e.queryStringParams));
                        var s = Object(o.a)({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                        n && (s["Content-Type"] = "application/json"),
                        i(t, Object(o.a)({
                            method: n ? "POST" : "GET",
                            body: n ? e.stringify(n) : void 0,
                            headers: s
                        }, "function" == typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions)).then((function(e) {
                            if (!e.ok)
                                return r(e.statusText || "Error", {
                                    status: e.status
                                });
                            e.text().then((function(t) {
                                r(null, {
                                    status: e.status,
                                    data: t
                                })
                            }
                            )).catch(r)
                        }
                        )).catch(r)
                    }(e, t, n, a) : "function" == typeof XMLHttpRequest || "function" == typeof ActiveXObject ? function(e, t, n, i) {
                        n && "object" === c(n) && (n = l("", n).slice(1)),
                        e.queryStringParams && (t = l(t, e.queryStringParams));
                        try {
                            var o;
                            (o = r ? new r : new s("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", t, 1),
                            e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                            o.withCredentials = !!e.withCredentials,
                            n && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            o.overrideMimeType && o.overrideMimeType("application/json");
                            var a = e.customHeaders;
                            if (a = "function" == typeof a ? a() : a)
                                for (var u in a)
                                    o.setRequestHeader(u, a[u]);
                            o.onreadystatechange = function() {
                                o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
                                    status: o.status,
                                    data: o.responseText
                                })
                            }
                            ,
                            o.send(n)
                        } catch (e) {
                            console && console.log(e)
                        }
                    }(e, t, n, a) : void 0
                }
            }
            ).call(this, n(18))
        }
        , function(e, t, n) {
            "use strict";
            var i = n(9)
              , r = n(21)
              , s = n(25)
              , o = n(33)
              , a = n(34);
            (e.exports = function(e, t) {
                var n, r, u, c, l;
                return arguments.length < 2 || "string" != typeof e ? (c = t,
                t = e,
                e = null) : c = arguments[2],
                i(e) ? (n = a.call(e, "c"),
                r = a.call(e, "e"),
                u = a.call(e, "w")) : (n = u = !0,
                r = !1),
                l = {
                    value: t,
                    configurable: n,
                    enumerable: r,
                    writable: u
                },
                c ? s(o(c), l) : l
            }
            ).gs = function(e, t, n) {
                var u, c, l, d;
                return "string" != typeof e ? (l = n,
                n = t,
                t = e,
                e = null) : l = arguments[3],
                i(t) ? r(t) ? i(n) ? r(n) || (l = n,
                n = void 0) : n = void 0 : (l = t,
                t = n = void 0) : t = void 0,
                i(e) ? (u = a.call(e, "c"),
                c = a.call(e, "e")) : (u = !0,
                c = !1),
                d = {
                    get: t,
                    set: n,
                    configurable: u,
                    enumerable: c
                },
                l ? s(o(l), d) : d
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(22)
              , r = /^\s*class[\s{/}]/
              , s = Function.prototype.toString;
            e.exports = function(e) {
                return !!i(e) && !r.test(s.call(e))
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(23);
            e.exports = function(e) {
                if ("function" != typeof e)
                    return !1;
                if (!hasOwnProperty.call(e, "length"))
                    return !1;
                try {
                    if ("number" != typeof e.length)
                        return !1;
                    if ("function" != typeof e.call)
                        return !1;
                    if ("function" != typeof e.apply)
                        return !1
                } catch (e) {
                    return !1
                }
                return !i(e)
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(24);
            e.exports = function(e) {
                if (!i(e))
                    return !1;
                try {
                    return !!e.constructor && e.constructor.prototype === e
                } catch (e) {
                    return !1
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(9)
              , r = {
                object: !0,
                function: !0,
                undefined: !0
            };
            e.exports = function(e) {
                return !!i(e) && hasOwnProperty.call(r, typeof e)
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(26)() ? Object.assign : n(27)
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (t(e = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }),
                e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(28)
              , r = n(32)
              , s = Math.max;
            e.exports = function(e, t) {
                var n, o, a, u = s(arguments.length, 2);
                for (e = Object(r(e)),
                a = function(i) {
                    try {
                        e[i] = t[i]
                    } catch (e) {
                        n || (n = e)
                    }
                }
                ,
                o = 1; o < u; ++o)
                    i(t = arguments[o]).forEach(a);
                if (void 0 !== n)
                    throw n;
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(29)() ? Object.keys : n(30)
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function() {
                try {
                    return Object.keys("primitive"),
                    !0
                } catch (e) {
                    return !1
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(6)
              , r = Object.keys;
            e.exports = function(e) {
                return r(i(e) ? Object(e) : e)
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function() {}
        }
        , function(e, t, n) {
            "use strict";
            var i = n(6);
            e.exports = function(e) {
                if (!i(e))
                    throw new TypeError("Cannot use null or undefined");
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(6)
              , r = Array.prototype.forEach
              , s = Object.create
              , o = function(e, t) {
                var n;
                for (n in e)
                    t[n] = e[n]
            };
            e.exports = function(e) {
                var t = s(null);
                return r.call(arguments, (function(e) {
                    i(e) && o(Object(e), t)
                }
                )),
                t
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = n(35)() ? String.prototype.contains : n(36)
        }
        , function(e, t, n) {
            "use strict";
            var i = "razdwatrzy";
            e.exports = function() {
                return "function" == typeof i.contains && !0 === i.contains("dwa") && !1 === i.contains("foo")
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = String.prototype.indexOf;
            e.exports = function(e) {
                return i.call(this, e, arguments[1]) > -1
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            function r(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
            function s(e, t) {
                e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e.__proto__ = t
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }
            function c(e, t, n) {
                return (c = u() ? Reflect.construct : function(e, t, n) {
                    var i = [null];
                    i.push.apply(i, t);
                    var r = new (Function.bind.apply(e, i));
                    return n && a(r, n.prototype),
                    r
                }
                ).apply(null, arguments)
            }
            function l(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (l = function(e) {
                    if (null === e || (n = e,
                    -1 === Function.toString.call(n).indexOf("[native code]")))
                        return e;
                    var n;
                    if ("function" != typeof e)
                        throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e))
                            return t.get(e);
                        t.set(e, i)
                    }
                    function i() {
                        return c(e, arguments, o(this).constructor)
                    }
                    return i.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    a(i, e)
                }
                )(e)
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++)
                    i[n] = e[n];
                return i
            }
            function h(e) {
                var t = 0;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return d(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                        }
                    }(e)))
                        return function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        }
                        ;
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (t = e[Symbol.iterator]()).next.bind(t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return s(t, e),
                t
            }(l(Error))
              , p = function(e) {
                function t(t) {
                    return e.call(this, "Invalid DateTime: " + t.toMessage()) || this
                }
                return s(t, e),
                t
            }(f)
              , v = function(e) {
                function t(t) {
                    return e.call(this, "Invalid Interval: " + t.toMessage()) || this
                }
                return s(t, e),
                t
            }(f)
              , g = function(e) {
                function t(t) {
                    return e.call(this, "Invalid Duration: " + t.toMessage()) || this
                }
                return s(t, e),
                t
            }(f)
              , m = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return s(t, e),
                t
            }(f)
              , y = function(e) {
                function t(t) {
                    return e.call(this, "Invalid unit " + t) || this
                }
                return s(t, e),
                t
            }(f)
              , S = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return s(t, e),
                t
            }(f)
              , w = function(e) {
                function t() {
                    return e.call(this, "Zone is an abstract class") || this
                }
                return s(t, e),
                t
            }(f)
              , b = "numeric"
              , E = "short"
              , k = "long"
              , O = {
                year: b,
                month: b,
                day: b
            }
              , C = {
                year: b,
                month: E,
                day: b
            }
              , x = {
                year: b,
                month: E,
                day: b,
                weekday: E
            }
              , T = {
                year: b,
                month: k,
                day: b
            }
              , L = {
                year: b,
                month: k,
                day: b,
                weekday: k
            }
              , _ = {
                hour: b,
                minute: b
            }
              , A = {
                hour: b,
                minute: b,
                second: b
            }
              , I = {
                hour: b,
                minute: b,
                second: b,
                timeZoneName: E
            }
              , N = {
                hour: b,
                minute: b,
                second: b,
                timeZoneName: k
            }
              , R = {
                hour: b,
                minute: b,
                hour12: !1
            }
              , M = {
                hour: b,
                minute: b,
                second: b,
                hour12: !1
            }
              , D = {
                hour: b,
                minute: b,
                second: b,
                hour12: !1,
                timeZoneName: E
            }
              , P = {
                hour: b,
                minute: b,
                second: b,
                hour12: !1,
                timeZoneName: k
            }
              , V = {
                year: b,
                month: b,
                day: b,
                hour: b,
                minute: b
            }
              , j = {
                year: b,
                month: b,
                day: b,
                hour: b,
                minute: b,
                second: b
            }
              , U = {
                year: b,
                month: E,
                day: b,
                hour: b,
                minute: b
            }
              , q = {
                year: b,
                month: E,
                day: b,
                hour: b,
                minute: b,
                second: b
            }
              , F = {
                year: b,
                month: E,
                day: b,
                weekday: E,
                hour: b,
                minute: b
            }
              , H = {
                year: b,
                month: k,
                day: b,
                hour: b,
                minute: b,
                timeZoneName: E
            }
              , z = {
                year: b,
                month: k,
                day: b,
                hour: b,
                minute: b,
                second: b,
                timeZoneName: E
            }
              , $ = {
                year: b,
                month: k,
                day: b,
                weekday: k,
                hour: b,
                minute: b,
                timeZoneName: k
            }
              , B = {
                year: b,
                month: k,
                day: b,
                weekday: k,
                hour: b,
                minute: b,
                second: b,
                timeZoneName: k
            };
            function Z(e) {
                return void 0 === e
            }
            function J(e) {
                return "number" == typeof e
            }
            function W(e) {
                return "number" == typeof e && e % 1 == 0
            }
            function G() {
                try {
                    return "undefined" != typeof Intl && Intl.DateTimeFormat
                } catch (e) {
                    return !1
                }
            }
            function K() {
                return !Z(Intl.DateTimeFormat.prototype.formatToParts)
            }
            function Y() {
                try {
                    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
                } catch (e) {
                    return !1
                }
            }
            function X(e, t, n) {
                if (0 !== e.length)
                    return e.reduce((function(e, i) {
                        var r = [t(i), i];
                        return e && n(e[0], r[0]) === e[0] ? e : r
                    }
                    ), null)[1]
            }
            function Q(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e[n],
                    t
                }
                ), {})
            }
            function ee(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function te(e, t, n) {
                return W(e) && e >= t && e <= n
            }
            function ne(e, t) {
                return void 0 === t && (t = 2),
                e.toString().length < t ? ("0".repeat(t) + e).slice(-t) : e.toString()
            }
            function ie(e) {
                return Z(e) || null === e || "" === e ? void 0 : parseInt(e, 10)
            }
            function re(e) {
                if (!Z(e) && null !== e && "" !== e) {
                    var t = 1e3 * parseFloat("0." + e);
                    return Math.floor(t)
                }
            }
            function se(e, t, n) {
                void 0 === n && (n = !1);
                var i = Math.pow(10, t);
                return (n ? Math.trunc : Math.round)(e * i) / i
            }
            function oe(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            }
            function ae(e) {
                return oe(e) ? 366 : 365
            }
            function ue(e, t) {
                var n = function(e, t) {
                    return e - 12 * Math.floor(e / 12)
                }(t - 1) + 1;
                return 2 === n ? oe(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]
            }
            function ce(e) {
                var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
                return e.year < 100 && e.year >= 0 && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
                +t
            }
            function le(e) {
                var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7
                  , n = e - 1
                  , i = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
                return 4 === t || 3 === i ? 53 : 52
            }
            function de(e) {
                return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e
            }
            function he(e, t, n, i) {
                void 0 === i && (i = null);
                var r = new Date(e)
                  , s = {
                    hour12: !1,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                };
                i && (s.timeZone = i);
                var o = Object.assign({
                    timeZoneName: t
                }, s)
                  , a = G();
                if (a && K()) {
                    var u = new Intl.DateTimeFormat(n,o).formatToParts(r).find((function(e) {
                        return "timezonename" === e.type.toLowerCase()
                    }
                    ));
                    return u ? u.value : null
                }
                if (a) {
                    var c = new Intl.DateTimeFormat(n,s).format(r);
                    return new Intl.DateTimeFormat(n,o).format(r).substring(c.length).replace(/^[, \u200e]+/, "")
                }
                return null
            }
            function fe(e, t) {
                var n = parseInt(e, 10);
                Number.isNaN(n) && (n = 0);
                var i = parseInt(t, 10) || 0;
                return 60 * n + (n < 0 || Object.is(n, -0) ? -i : i)
            }
            function pe(e) {
                var t = Number(e);
                if ("boolean" == typeof e || "" === e || Number.isNaN(t))
                    throw new S("Invalid unit value " + e);
                return t
            }
            function ve(e, t, n) {
                var i = {};
                for (var r in e)
                    if (ee(e, r)) {
                        if (n.indexOf(r) >= 0)
                            continue;
                        var s = e[r];
                        if (null == s)
                            continue;
                        i[t(r)] = pe(s)
                    }
                return i
            }
            function ge(e, t) {
                var n = Math.trunc(Math.abs(e / 60))
                  , i = Math.trunc(Math.abs(e % 60))
                  , r = e >= 0 ? "+" : "-";
                switch (t) {
                case "short":
                    return "" + r + ne(n, 2) + ":" + ne(i, 2);
                case "narrow":
                    return "" + r + n + (i > 0 ? ":" + i : "");
                case "techie":
                    return "" + r + ne(n, 2) + ne(i, 2);
                default:
                    throw new RangeError("Value format " + t + " is out of range for property format")
                }
            }
            function me(e) {
                return Q(e, ["hour", "minute", "second", "millisecond"])
            }
            var ye = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
            function Se(e) {
                return JSON.stringify(e, Object.keys(e).sort())
            }
            var we = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
              , be = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
              , Ee = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
            function ke(e) {
                switch (e) {
                case "narrow":
                    return Ee;
                case "short":
                    return be;
                case "long":
                    return we;
                case "numeric":
                    return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
                case "2-digit":
                    return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                default:
                    return null
                }
            }
            var Oe = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
              , Ce = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
              , xe = ["M", "T", "W", "T", "F", "S", "S"];
            function Te(e) {
                switch (e) {
                case "narrow":
                    return xe;
                case "short":
                    return Ce;
                case "long":
                    return Oe;
                case "numeric":
                    return ["1", "2", "3", "4", "5", "6", "7"];
                default:
                    return null
                }
            }
            var Le = ["AM", "PM"]
              , _e = ["Before Christ", "Anno Domini"]
              , Ae = ["BC", "AD"]
              , Ie = ["B", "A"];
            function Ne(e) {
                switch (e) {
                case "narrow":
                    return Ie;
                case "short":
                    return Ae;
                case "long":
                    return _e;
                default:
                    return null
                }
            }
            function Re(e, t) {
                for (var n, i = "", r = h(e); !(n = r()).done; ) {
                    var s = n.value;
                    s.literal ? i += s.val : i += t(s.val)
                }
                return i
            }
            var Me = {
                D: O,
                DD: C,
                DDD: T,
                DDDD: L,
                t: _,
                tt: A,
                ttt: I,
                tttt: N,
                T: R,
                TT: M,
                TTT: D,
                TTTT: P,
                f: V,
                ff: U,
                fff: H,
                ffff: $,
                F: j,
                FF: q,
                FFF: z,
                FFFF: B
            }
              , De = function() {
                function e(e, t) {
                    this.opts = t,
                    this.loc = e,
                    this.systemLoc = null
                }
                e.create = function(t, n) {
                    return void 0 === n && (n = {}),
                    new e(t,n)
                }
                ,
                e.parseFormat = function(e) {
                    for (var t = null, n = "", i = !1, r = [], s = 0; s < e.length; s++) {
                        var o = e.charAt(s);
                        "'" === o ? (n.length > 0 && r.push({
                            literal: i,
                            val: n
                        }),
                        t = null,
                        n = "",
                        i = !i) : i || o === t ? n += o : (n.length > 0 && r.push({
                            literal: !1,
                            val: n
                        }),
                        n = o,
                        t = o)
                    }
                    return n.length > 0 && r.push({
                        literal: i,
                        val: n
                    }),
                    r
                }
                ,
                e.macroTokenToFormatOpts = function(e) {
                    return Me[e]
                }
                ;
                var t = e.prototype;
                return t.formatWithSystemDefault = function(e, t) {
                    return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()),
                    this.systemLoc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
                }
                ,
                t.formatDateTime = function(e, t) {
                    return void 0 === t && (t = {}),
                    this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
                }
                ,
                t.formatDateTimeParts = function(e, t) {
                    return void 0 === t && (t = {}),
                    this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).formatToParts()
                }
                ,
                t.resolvedOptions = function(e, t) {
                    return void 0 === t && (t = {}),
                    this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).resolvedOptions()
                }
                ,
                t.num = function(e, t) {
                    if (void 0 === t && (t = 0),
                    this.opts.forceSimple)
                        return ne(e, t);
                    var n = Object.assign({}, this.opts);
                    return t > 0 && (n.padTo = t),
                    this.loc.numberFormatter(n).format(e)
                }
                ,
                t.formatDateTimeFromString = function(t, n) {
                    var i = this
                      , r = "en" === this.loc.listingMode()
                      , s = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar && K()
                      , o = function(e, n) {
                        return i.loc.extract(t, e, n)
                    }
                      , a = function(e) {
                        return t.isOffsetFixed && 0 === t.offset && e.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, e.format) : ""
                    }
                      , u = function(e, n) {
                        return r ? function(e, t) {
                            return ke(t)[e.month - 1]
                        }(t, e) : o(n ? {
                            month: e
                        } : {
                            month: e,
                            day: "numeric"
                        }, "month")
                    }
                      , c = function(e, n) {
                        return r ? function(e, t) {
                            return Te(t)[e.weekday - 1]
                        }(t, e) : o(n ? {
                            weekday: e
                        } : {
                            weekday: e,
                            month: "long",
                            day: "numeric"
                        }, "weekday")
                    }
                      , l = function(e) {
                        return r ? function(e, t) {
                            return Ne(t)[e.year < 0 ? 0 : 1]
                        }(t, e) : o({
                            era: e
                        }, "era")
                    };
                    return Re(e.parseFormat(n), (function(n) {
                        switch (n) {
                        case "S":
                            return i.num(t.millisecond);
                        case "u":
                        case "SSS":
                            return i.num(t.millisecond, 3);
                        case "s":
                            return i.num(t.second);
                        case "ss":
                            return i.num(t.second, 2);
                        case "m":
                            return i.num(t.minute);
                        case "mm":
                            return i.num(t.minute, 2);
                        case "h":
                            return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                        case "hh":
                            return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                        case "H":
                            return i.num(t.hour);
                        case "HH":
                            return i.num(t.hour, 2);
                        case "Z":
                            return a({
                                format: "narrow",
                                allowZ: i.opts.allowZ
                            });
                        case "ZZ":
                            return a({
                                format: "short",
                                allowZ: i.opts.allowZ
                            });
                        case "ZZZ":
                            return a({
                                format: "techie",
                                allowZ: i.opts.allowZ
                            });
                        case "ZZZZ":
                            return t.zone.offsetName(t.ts, {
                                format: "short",
                                locale: i.loc.locale
                            });
                        case "ZZZZZ":
                            return t.zone.offsetName(t.ts, {
                                format: "long",
                                locale: i.loc.locale
                            });
                        case "z":
                            return t.zoneName;
                        case "a":
                            return r ? function(e) {
                                return Le[e.hour < 12 ? 0 : 1]
                            }(t) : o({
                                hour: "numeric",
                                hour12: !0
                            }, "dayperiod");
                        case "d":
                            return s ? o({
                                day: "numeric"
                            }, "day") : i.num(t.day);
                        case "dd":
                            return s ? o({
                                day: "2-digit"
                            }, "day") : i.num(t.day, 2);
                        case "c":
                            return i.num(t.weekday);
                        case "ccc":
                            return c("short", !0);
                        case "cccc":
                            return c("long", !0);
                        case "ccccc":
                            return c("narrow", !0);
                        case "E":
                            return i.num(t.weekday);
                        case "EEE":
                            return c("short", !1);
                        case "EEEE":
                            return c("long", !1);
                        case "EEEEE":
                            return c("narrow", !1);
                        case "L":
                            return s ? o({
                                month: "numeric",
                                day: "numeric"
                            }, "month") : i.num(t.month);
                        case "LL":
                            return s ? o({
                                month: "2-digit",
                                day: "numeric"
                            }, "month") : i.num(t.month, 2);
                        case "LLL":
                            return u("short", !0);
                        case "LLLL":
                            return u("long", !0);
                        case "LLLLL":
                            return u("narrow", !0);
                        case "M":
                            return s ? o({
                                month: "numeric"
                            }, "month") : i.num(t.month);
                        case "MM":
                            return s ? o({
                                month: "2-digit"
                            }, "month") : i.num(t.month, 2);
                        case "MMM":
                            return u("short", !1);
                        case "MMMM":
                            return u("long", !1);
                        case "MMMMM":
                            return u("narrow", !1);
                        case "y":
                            return s ? o({
                                year: "numeric"
                            }, "year") : i.num(t.year);
                        case "yy":
                            return s ? o({
                                year: "2-digit"
                            }, "year") : i.num(t.year.toString().slice(-2), 2);
                        case "yyyy":
                            return s ? o({
                                year: "numeric"
                            }, "year") : i.num(t.year, 4);
                        case "yyyyyy":
                            return s ? o({
                                year: "numeric"
                            }, "year") : i.num(t.year, 6);
                        case "G":
                            return l("short");
                        case "GG":
                            return l("long");
                        case "GGGGG":
                            return l("narrow");
                        case "kk":
                            return i.num(t.weekYear.toString().slice(-2), 2);
                        case "kkkk":
                            return i.num(t.weekYear, 4);
                        case "W":
                            return i.num(t.weekNumber);
                        case "WW":
                            return i.num(t.weekNumber, 2);
                        case "o":
                            return i.num(t.ordinal);
                        case "ooo":
                            return i.num(t.ordinal, 3);
                        case "q":
                            return i.num(t.quarter);
                        case "qq":
                            return i.num(t.quarter, 2);
                        case "X":
                            return i.num(Math.floor(t.ts / 1e3));
                        case "x":
                            return i.num(t.ts);
                        default:
                            return function(n) {
                                var r = e.macroTokenToFormatOpts(n);
                                return r ? i.formatWithSystemDefault(t, r) : n
                            }(n)
                        }
                    }
                    ))
                }
                ,
                t.formatDurationFromString = function(t, n) {
                    var i, r = this, s = function(e) {
                        switch (e[0]) {
                        case "S":
                            return "millisecond";
                        case "s":
                            return "second";
                        case "m":
                            return "minute";
                        case "h":
                            return "hour";
                        case "d":
                            return "day";
                        case "M":
                            return "month";
                        case "y":
                            return "year";
                        default:
                            return null
                        }
                    }, o = e.parseFormat(n), a = o.reduce((function(e, t) {
                        var n = t.literal
                          , i = t.val;
                        return n ? e : e.concat(i)
                    }
                    ), []), u = t.shiftTo.apply(t, a.map(s).filter((function(e) {
                        return e
                    }
                    )));
                    return Re(o, (i = u,
                    function(e) {
                        var t = s(e);
                        return t ? r.num(i.get(t), e.length) : e
                    }
                    ))
                }
                ,
                e
            }()
              , Pe = function() {
                function e(e, t) {
                    this.reason = e,
                    this.explanation = t
                }
                return e.prototype.toMessage = function() {
                    return this.explanation ? this.reason + ": " + this.explanation : this.reason
                }
                ,
                e
            }()
              , Ve = function() {
                function e() {}
                var t = e.prototype;
                return t.offsetName = function(e, t) {
                    throw new w
                }
                ,
                t.formatOffset = function(e, t) {
                    throw new w
                }
                ,
                t.offset = function(e) {
                    throw new w
                }
                ,
                t.equals = function(e) {
                    throw new w
                }
                ,
                r(e, [{
                    key: "type",
                    get: function() {
                        throw new w
                    }
                }, {
                    key: "name",
                    get: function() {
                        throw new w
                    }
                }, {
                    key: "universal",
                    get: function() {
                        throw new w
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        throw new w
                    }
                }]),
                e
            }()
              , je = null
              , Ue = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                s(t, e);
                var n = t.prototype;
                return n.offsetName = function(e, t) {
                    return he(e, t.format, t.locale)
                }
                ,
                n.formatOffset = function(e, t) {
                    return ge(this.offset(e), t)
                }
                ,
                n.offset = function(e) {
                    return -new Date(e).getTimezoneOffset()
                }
                ,
                n.equals = function(e) {
                    return "local" === e.type
                }
                ,
                r(t, [{
                    key: "type",
                    get: function() {
                        return "local"
                    }
                }, {
                    key: "name",
                    get: function() {
                        return G() ? (new Intl.DateTimeFormat).resolvedOptions().timeZone : "local"
                    }
                }, {
                    key: "universal",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return !0
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return null === je && (je = new t),
                        je
                    }
                }]),
                t
            }(Ve)
              , qe = RegExp("^" + ye.source + "$")
              , Fe = {}
              , He = {
                year: 0,
                month: 1,
                day: 2,
                hour: 3,
                minute: 4,
                second: 5
            }
              , ze = {}
              , $e = function(e) {
                function t(n) {
                    var i;
                    return (i = e.call(this) || this).zoneName = n,
                    i.valid = t.isValidZone(n),
                    i
                }
                s(t, e),
                t.create = function(e) {
                    return ze[e] || (ze[e] = new t(e)),
                    ze[e]
                }
                ,
                t.resetCache = function() {
                    ze = {},
                    Fe = {}
                }
                ,
                t.isValidSpecifier = function(e) {
                    return !(!e || !e.match(qe))
                }
                ,
                t.isValidZone = function(e) {
                    try {
                        return new Intl.DateTimeFormat("en-US",{
                            timeZone: e
                        }).format(),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                ,
                t.parseGMTOffset = function(e) {
                    if (e) {
                        var t = e.match(/^Etc\/GMT([+-]\d{1,2})$/i);
                        if (t)
                            return -60 * parseInt(t[1])
                    }
                    return null
                }
                ;
                var n = t.prototype;
                return n.offsetName = function(e, t) {
                    return he(e, t.format, t.locale, this.name)
                }
                ,
                n.formatOffset = function(e, t) {
                    return ge(this.offset(e), t)
                }
                ,
                n.offset = function(e) {
                    var t, n = new Date(e), i = (t = this.name,
                    Fe[t] || (Fe[t] = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: t,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                    })),
                    Fe[t]), r = i.formatToParts ? function(e, t) {
                        for (var n = e.formatToParts(t), i = [], r = 0; r < n.length; r++) {
                            var s = n[r]
                              , o = s.type
                              , a = s.value
                              , u = He[o];
                            Z(u) || (i[u] = parseInt(a, 10))
                        }
                        return i
                    }(i, n) : function(e, t) {
                        var n = e.format(t).replace(/\u200E/g, "")
                          , i = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n)
                          , r = i[1]
                          , s = i[2];
                        return [i[3], r, s, i[4], i[5], i[6]]
                    }(i, n), s = r[0], o = r[1], a = r[2], u = r[3], c = +n, l = c % 1e3;
                    return (ce({
                        year: s,
                        month: o,
                        day: a,
                        hour: 24 === u ? 0 : u,
                        minute: r[4],
                        second: r[5],
                        millisecond: 0
                    }) - (c -= l >= 0 ? l : 1e3 + l)) / 6e4
                }
                ,
                n.equals = function(e) {
                    return "iana" === e.type && e.name === this.name
                }
                ,
                r(t, [{
                    key: "type",
                    get: function() {
                        return "iana"
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this.zoneName
                    }
                }, {
                    key: "universal",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return this.valid
                    }
                }]),
                t
            }(Ve)
              , Be = null
              , Ze = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this) || this).fixed = t,
                    n
                }
                s(t, e),
                t.instance = function(e) {
                    return 0 === e ? t.utcInstance : new t(e)
                }
                ,
                t.parseSpecifier = function(e) {
                    if (e) {
                        var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                        if (n)
                            return new t(fe(n[1], n[2]))
                    }
                    return null
                }
                ,
                r(t, null, [{
                    key: "utcInstance",
                    get: function() {
                        return null === Be && (Be = new t(0)),
                        Be
                    }
                }]);
                var n = t.prototype;
                return n.offsetName = function() {
                    return this.name
                }
                ,
                n.formatOffset = function(e, t) {
                    return ge(this.fixed, t)
                }
                ,
                n.offset = function() {
                    return this.fixed
                }
                ,
                n.equals = function(e) {
                    return "fixed" === e.type && e.fixed === this.fixed
                }
                ,
                r(t, [{
                    key: "type",
                    get: function() {
                        return "fixed"
                    }
                }, {
                    key: "name",
                    get: function() {
                        return 0 === this.fixed ? "UTC" : "UTC" + ge(this.fixed, "narrow")
                    }
                }, {
                    key: "universal",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return !0
                    }
                }]),
                t
            }(Ve)
              , Je = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this) || this).zoneName = t,
                    n
                }
                s(t, e);
                var n = t.prototype;
                return n.offsetName = function() {
                    return null
                }
                ,
                n.formatOffset = function() {
                    return ""
                }
                ,
                n.offset = function() {
                    return NaN
                }
                ,
                n.equals = function() {
                    return !1
                }
                ,
                r(t, [{
                    key: "type",
                    get: function() {
                        return "invalid"
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this.zoneName
                    }
                }, {
                    key: "universal",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return !1
                    }
                }]),
                t
            }(Ve);
            function We(e, t) {
                var n;
                if (Z(e) || null === e)
                    return t;
                if (e instanceof Ve)
                    return e;
                if ("string" == typeof e) {
                    var i = e.toLowerCase();
                    return "local" === i ? t : "utc" === i || "gmt" === i ? Ze.utcInstance : null != (n = $e.parseGMTOffset(e)) ? Ze.instance(n) : $e.isValidSpecifier(i) ? $e.create(e) : Ze.parseSpecifier(i) || new Je(e)
                }
                return J(e) ? Ze.instance(e) : "object" == typeof e && e.offset && "number" == typeof e.offset ? e : new Je(e)
            }
            var Ge = function() {
                return Date.now()
            }
              , Ke = null
              , Ye = null
              , Xe = null
              , Qe = null
              , et = !1
              , tt = function() {
                function e() {}
                return e.resetCaches = function() {
                    dt.resetCache(),
                    $e.resetCache()
                }
                ,
                r(e, null, [{
                    key: "now",
                    get: function() {
                        return Ge
                    },
                    set: function(e) {
                        Ge = e
                    }
                }, {
                    key: "defaultZoneName",
                    get: function() {
                        return e.defaultZone.name
                    },
                    set: function(e) {
                        Ke = e ? We(e) : null
                    }
                }, {
                    key: "defaultZone",
                    get: function() {
                        return Ke || Ue.instance
                    }
                }, {
                    key: "defaultLocale",
                    get: function() {
                        return Ye
                    },
                    set: function(e) {
                        Ye = e
                    }
                }, {
                    key: "defaultNumberingSystem",
                    get: function() {
                        return Xe
                    },
                    set: function(e) {
                        Xe = e
                    }
                }, {
                    key: "defaultOutputCalendar",
                    get: function() {
                        return Qe
                    },
                    set: function(e) {
                        Qe = e
                    }
                }, {
                    key: "throwOnInvalid",
                    get: function() {
                        return et
                    },
                    set: function(e) {
                        et = e
                    }
                }]),
                e
            }()
              , nt = {};
            function it(e, t) {
                void 0 === t && (t = {});
                var n = JSON.stringify([e, t])
                  , i = nt[n];
                return i || (i = new Intl.DateTimeFormat(e,t),
                nt[n] = i),
                i
            }
            var rt = {}
              , st = {}
              , ot = null;
            function at(e, t, n, i, r) {
                var s = e.listingMode(n);
                return "error" === s ? null : "en" === s ? i(t) : r(t)
            }
            var ut = function() {
                function e(e, t, n) {
                    if (this.padTo = n.padTo || 0,
                    this.floor = n.floor || !1,
                    !t && G()) {
                        var i = {
                            useGrouping: !1
                        };
                        n.padTo > 0 && (i.minimumIntegerDigits = n.padTo),
                        this.inf = function(e, t) {
                            void 0 === t && (t = {});
                            var n = JSON.stringify([e, t])
                              , i = rt[n];
                            return i || (i = new Intl.NumberFormat(e,t),
                            rt[n] = i),
                            i
                        }(e, i)
                    }
                }
                return e.prototype.format = function(e) {
                    if (this.inf) {
                        var t = this.floor ? Math.floor(e) : e;
                        return this.inf.format(t)
                    }
                    return ne(this.floor ? Math.floor(e) : se(e, 3), this.padTo)
                }
                ,
                e
            }()
              , ct = function() {
                function e(e, t, n) {
                    var i;
                    if (this.opts = n,
                    this.hasIntl = G(),
                    e.zone.universal && this.hasIntl ? (i = "UTC",
                    n.timeZoneName ? this.dt = e : this.dt = 0 === e.offset ? e : ri.fromMillis(e.ts + 60 * e.offset * 1e3)) : "local" === e.zone.type ? this.dt = e : (this.dt = e,
                    i = e.zone.name),
                    this.hasIntl) {
                        var r = Object.assign({}, this.opts);
                        i && (r.timeZone = i),
                        this.dtf = it(t, r)
                    }
                }
                var t = e.prototype;
                return t.format = function() {
                    if (this.hasIntl)
                        return this.dtf.format(this.dt.toJSDate());
                    var e = function(e) {
                        switch (Se(Q(e, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
                        case Se(O):
                            return "M/d/yyyy";
                        case Se(C):
                            return "LLL d, yyyy";
                        case Se(x):
                            return "EEE, LLL d, yyyy";
                        case Se(T):
                            return "LLLL d, yyyy";
                        case Se(L):
                            return "EEEE, LLLL d, yyyy";
                        case Se(_):
                            return "h:mm a";
                        case Se(A):
                            return "h:mm:ss a";
                        case Se(I):
                        case Se(N):
                            return "h:mm a";
                        case Se(R):
                            return "HH:mm";
                        case Se(M):
                            return "HH:mm:ss";
                        case Se(D):
                        case Se(P):
                            return "HH:mm";
                        case Se(V):
                            return "M/d/yyyy, h:mm a";
                        case Se(U):
                            return "LLL d, yyyy, h:mm a";
                        case Se(H):
                            return "LLLL d, yyyy, h:mm a";
                        case Se($):
                            return "EEEE, LLLL d, yyyy, h:mm a";
                        case Se(j):
                            return "M/d/yyyy, h:mm:ss a";
                        case Se(q):
                            return "LLL d, yyyy, h:mm:ss a";
                        case Se(F):
                            return "EEE, d LLL yyyy, h:mm a";
                        case Se(z):
                            return "LLLL d, yyyy, h:mm:ss a";
                        case Se(B):
                            return "EEEE, LLLL d, yyyy, h:mm:ss a";
                        default:
                            return "EEEE, LLLL d, yyyy, h:mm a"
                        }
                    }(this.opts)
                      , t = dt.create("en-US");
                    return De.create(t).formatDateTimeFromString(this.dt, e)
                }
                ,
                t.formatToParts = function() {
                    return this.hasIntl && K() ? this.dtf.formatToParts(this.dt.toJSDate()) : []
                }
                ,
                t.resolvedOptions = function() {
                    return this.hasIntl ? this.dtf.resolvedOptions() : {
                        locale: "en-US",
                        numberingSystem: "latn",
                        outputCalendar: "gregory"
                    }
                }
                ,
                e
            }()
              , lt = function() {
                function e(e, t, n) {
                    this.opts = Object.assign({
                        style: "long"
                    }, n),
                    !t && Y() && (this.rtf = function(e, t) {
                        void 0 === t && (t = {});
                        var n = t
                          , i = (n.base,
                        function(e, t) {
                            if (null == e)
                                return {};
                            var n, i, r = {}, s = Object.keys(e);
                            for (i = 0; i < s.length; i++)
                                n = s[i],
                                t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(n, ["base"]))
                          , r = JSON.stringify([e, i])
                          , s = st[r];
                        return s || (s = new Intl.RelativeTimeFormat(e,t),
                        st[r] = s),
                        s
                    }(e, n))
                }
                var t = e.prototype;
                return t.format = function(e, t) {
                    return this.rtf ? this.rtf.format(e, t) : function(e, t, n, i) {
                        void 0 === n && (n = "always"),
                        void 0 === i && (i = !1);
                        var r = {
                            years: ["year", "yr."],
                            quarters: ["quarter", "qtr."],
                            months: ["month", "mo."],
                            weeks: ["week", "wk."],
                            days: ["day", "day", "days"],
                            hours: ["hour", "hr."],
                            minutes: ["minute", "min."],
                            seconds: ["second", "sec."]
                        }
                          , s = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                        if ("auto" === n && s) {
                            var o = "days" === e;
                            switch (t) {
                            case 1:
                                return o ? "tomorrow" : "next " + r[e][0];
                            case -1:
                                return o ? "yesterday" : "last " + r[e][0];
                            case 0:
                                return o ? "today" : "this " + r[e][0]
                            }
                        }
                        var a = Object.is(t, -0) || t < 0
                          , u = Math.abs(t)
                          , c = 1 === u
                          , l = r[e]
                          , d = i ? c ? l[1] : l[2] || l[1] : c ? r[e][0] : e;
                        return a ? u + " " + d + " ago" : "in " + u + " " + d
                    }(t, e, this.opts.numeric, "long" !== this.opts.style)
                }
                ,
                t.formatToParts = function(e, t) {
                    return this.rtf ? this.rtf.formatToParts(e, t) : []
                }
                ,
                e
            }()
              , dt = function() {
                function e(e, t, n, i) {
                    var r = function(e) {
                        var t = e.indexOf("-u-");
                        if (-1 === t)
                            return [e];
                        var n, i = e.substring(0, t);
                        try {
                            n = it(e).resolvedOptions()
                        } catch (e) {
                            n = it(i).resolvedOptions()
                        }
                        var r = n;
                        return [i, r.numberingSystem, r.calendar]
                    }(e)
                      , s = r[0]
                      , o = r[1]
                      , a = r[2];
                    this.locale = s,
                    this.numberingSystem = t || o || null,
                    this.outputCalendar = n || a || null,
                    this.intl = function(e, t, n) {
                        return G() ? n || t ? (e += "-u",
                        n && (e += "-ca-" + n),
                        t && (e += "-nu-" + t),
                        e) : e : []
                    }(this.locale, this.numberingSystem, this.outputCalendar),
                    this.weekdaysCache = {
                        format: {},
                        standalone: {}
                    },
                    this.monthsCache = {
                        format: {},
                        standalone: {}
                    },
                    this.meridiemCache = null,
                    this.eraCache = {},
                    this.specifiedLocale = i,
                    this.fastNumbersCached = null
                }
                e.fromOpts = function(t) {
                    return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN)
                }
                ,
                e.create = function(t, n, i, r) {
                    void 0 === r && (r = !1);
                    var s = t || tt.defaultLocale;
                    return new e(s || (r ? "en-US" : function() {
                        if (ot)
                            return ot;
                        if (G()) {
                            var e = (new Intl.DateTimeFormat).resolvedOptions().locale;
                            return ot = e && "und" !== e ? e : "en-US"
                        }
                        return ot = "en-US"
                    }()),n || tt.defaultNumberingSystem,i || tt.defaultOutputCalendar,s)
                }
                ,
                e.resetCache = function() {
                    ot = null,
                    nt = {},
                    rt = {},
                    st = {}
                }
                ,
                e.fromObject = function(t) {
                    var n = void 0 === t ? {} : t
                      , i = n.locale
                      , r = n.numberingSystem
                      , s = n.outputCalendar;
                    return e.create(i, r, s)
                }
                ;
                var t = e.prototype;
                return t.listingMode = function(e) {
                    void 0 === e && (e = !0);
                    var t = G() && K()
                      , n = this.isEnglish()
                      , i = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
                    return t || n && i || e ? !t || n && i ? "en" : "intl" : "error"
                }
                ,
                t.clone = function(t) {
                    return t && 0 !== Object.getOwnPropertyNames(t).length ? e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1) : this
                }
                ,
                t.redefaultToEN = function(e) {
                    return void 0 === e && (e = {}),
                    this.clone(Object.assign({}, e, {
                        defaultToEN: !0
                    }))
                }
                ,
                t.redefaultToSystem = function(e) {
                    return void 0 === e && (e = {}),
                    this.clone(Object.assign({}, e, {
                        defaultToEN: !1
                    }))
                }
                ,
                t.months = function(e, t, n) {
                    var i = this;
                    return void 0 === t && (t = !1),
                    void 0 === n && (n = !0),
                    at(this, e, n, ke, (function() {
                        var n = t ? {
                            month: e,
                            day: "numeric"
                        } : {
                            month: e
                        }
                          , r = t ? "format" : "standalone";
                        return i.monthsCache[r][e] || (i.monthsCache[r][e] = function(e) {
                            for (var t = [], n = 1; n <= 12; n++) {
                                var i = ri.utc(2016, n, 1);
                                t.push(e(i))
                            }
                            return t
                        }((function(e) {
                            return i.extract(e, n, "month")
                        }
                        ))),
                        i.monthsCache[r][e]
                    }
                    ))
                }
                ,
                t.weekdays = function(e, t, n) {
                    var i = this;
                    return void 0 === t && (t = !1),
                    void 0 === n && (n = !0),
                    at(this, e, n, Te, (function() {
                        var n = t ? {
                            weekday: e,
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        } : {
                            weekday: e
                        }
                          , r = t ? "format" : "standalone";
                        return i.weekdaysCache[r][e] || (i.weekdaysCache[r][e] = function(e) {
                            for (var t = [], n = 1; n <= 7; n++) {
                                var i = ri.utc(2016, 11, 13 + n);
                                t.push(e(i))
                            }
                            return t
                        }((function(e) {
                            return i.extract(e, n, "weekday")
                        }
                        ))),
                        i.weekdaysCache[r][e]
                    }
                    ))
                }
                ,
                t.meridiems = function(e) {
                    var t = this;
                    return void 0 === e && (e = !0),
                    at(this, void 0, e, (function() {
                        return Le
                    }
                    ), (function() {
                        if (!t.meridiemCache) {
                            var e = {
                                hour: "numeric",
                                hour12: !0
                            };
                            t.meridiemCache = [ri.utc(2016, 11, 13, 9), ri.utc(2016, 11, 13, 19)].map((function(n) {
                                return t.extract(n, e, "dayperiod")
                            }
                            ))
                        }
                        return t.meridiemCache
                    }
                    ))
                }
                ,
                t.eras = function(e, t) {
                    var n = this;
                    return void 0 === t && (t = !0),
                    at(this, e, t, Ne, (function() {
                        var t = {
                            era: e
                        };
                        return n.eraCache[e] || (n.eraCache[e] = [ri.utc(-40, 1, 1), ri.utc(2017, 1, 1)].map((function(e) {
                            return n.extract(e, t, "era")
                        }
                        ))),
                        n.eraCache[e]
                    }
                    ))
                }
                ,
                t.extract = function(e, t, n) {
                    var i = this.dtFormatter(e, t).formatToParts().find((function(e) {
                        return e.type.toLowerCase() === n
                    }
                    ));
                    return i ? i.value : null
                }
                ,
                t.numberFormatter = function(e) {
                    return void 0 === e && (e = {}),
                    new ut(this.intl,e.forceSimple || this.fastNumbers,e)
                }
                ,
                t.dtFormatter = function(e, t) {
                    return void 0 === t && (t = {}),
                    new ct(e,this.intl,t)
                }
                ,
                t.relFormatter = function(e) {
                    return void 0 === e && (e = {}),
                    new lt(this.intl,this.isEnglish(),e)
                }
                ,
                t.isEnglish = function() {
                    return "en" === this.locale || "en-us" === this.locale.toLowerCase() || G() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
                }
                ,
                t.equals = function(e) {
                    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
                }
                ,
                r(e, [{
                    key: "fastNumbers",
                    get: function() {
                        var e;
                        return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e = this).numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || G() && "latn" === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),
                        this.fastNumbersCached
                    }
                }]),
                e
            }();
            function ht() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = t.reduce((function(e, t) {
                    return e + t.source
                }
                ), "");
                return RegExp("^" + i + "$")
            }
            function ft() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return t.reduce((function(t, n) {
                        var i = t[0]
                          , r = t[1]
                          , s = t[2]
                          , o = n(e, s)
                          , a = o[0]
                          , u = o[1]
                          , c = o[2];
                        return [Object.assign(i, a), r || u, c]
                    }
                    ), [{}, null, 1]).slice(0, 2)
                }
            }
            function pt(e) {
                if (null == e)
                    return [null, null];
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    n[i - 1] = arguments[i];
                for (var r = 0, s = n; r < s.length; r++) {
                    var o = s[r]
                      , a = o[0]
                      , u = o[1]
                      , c = a.exec(e);
                    if (c)
                        return u(c)
                }
                return [null, null]
            }
            function vt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e, n) {
                    var i, r = {};
                    for (i = 0; i < t.length; i++)
                        r[t[i]] = ie(e[n + i]);
                    return [r, null, n + i]
                }
            }
            var gt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/
              , mt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/
              , yt = RegExp("" + mt.source + gt.source + "?")
              , St = RegExp("(?:T" + yt.source + ")?")
              , wt = vt("weekYear", "weekNumber", "weekDay")
              , bt = vt("year", "ordinal")
              , Et = RegExp(mt.source + " ?(?:" + gt.source + "|(" + ye.source + "))?")
              , kt = RegExp("(?: " + Et.source + ")?");
            function Ot(e, t, n) {
                var i = e[t];
                return Z(i) ? n : ie(i)
            }
            function Ct(e, t) {
                return [{
                    year: Ot(e, t),
                    month: Ot(e, t + 1, 1),
                    day: Ot(e, t + 2, 1)
                }, null, t + 3]
            }
            function xt(e, t) {
                return [{
                    hour: Ot(e, t, 0),
                    minute: Ot(e, t + 1, 0),
                    second: Ot(e, t + 2, 0),
                    millisecond: re(e[t + 3])
                }, null, t + 4]
            }
            function Tt(e, t) {
                var n = !e[t] && !e[t + 1]
                  , i = fe(e[t + 1], e[t + 2]);
                return [{}, n ? null : Ze.instance(i), t + 3]
            }
            function Lt(e, t) {
                return [{}, e[t] ? $e.create(e[t]) : null, t + 1]
            }
            var _t = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
            function At(e) {
                var t = e[0]
                  , n = e[1]
                  , i = e[2]
                  , r = e[3]
                  , s = e[4]
                  , o = e[5]
                  , a = e[6]
                  , u = e[7]
                  , c = e[8]
                  , l = "-" === t[0]
                  , d = function(e) {
                    return e && l ? -e : e
                };
                return [{
                    years: d(ie(n)),
                    months: d(ie(i)),
                    weeks: d(ie(r)),
                    days: d(ie(s)),
                    hours: d(ie(o)),
                    minutes: d(ie(a)),
                    seconds: d(ie(u)),
                    milliseconds: d(re(c))
                }]
            }
            var It = {
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function Nt(e, t, n, i, r, s, o) {
                var a = {
                    year: 2 === t.length ? de(ie(t)) : ie(t),
                    month: be.indexOf(n) + 1,
                    day: ie(i),
                    hour: ie(r),
                    minute: ie(s)
                };
                return o && (a.second = ie(o)),
                e && (a.weekday = e.length > 3 ? Oe.indexOf(e) + 1 : Ce.indexOf(e) + 1),
                a
            }
            var Rt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
            function Mt(e) {
                var t, n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], u = e[7], c = e[8], l = e[9], d = e[10], h = e[11], f = Nt(n, s, r, i, o, a, u);
                return t = c ? It[c] : l ? 0 : fe(d, h),
                [f, new Ze(t)]
            }
            var Dt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/
              , Pt = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/
              , Vt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
            function jt(e) {
                var t = e[1]
                  , n = e[2]
                  , i = e[3];
                return [Nt(t, e[4], i, n, e[5], e[6], e[7]), Ze.utcInstance]
            }
            function Ut(e) {
                var t = e[1]
                  , n = e[2]
                  , i = e[3]
                  , r = e[4]
                  , s = e[5]
                  , o = e[6];
                return [Nt(t, e[7], n, i, r, s, o), Ze.utcInstance]
            }
            var qt = ht(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, St)
              , Ft = ht(/(\d{4})-?W(\d\d)(?:-?(\d))?/, St)
              , Ht = ht(/(\d{4})-?(\d{3})/, St)
              , zt = ht(yt)
              , $t = ft(Ct, xt, Tt)
              , Bt = ft(wt, xt, Tt)
              , Zt = ft(bt, xt)
              , Jt = ft(xt, Tt)
              , Wt = ht(/(\d{4})-(\d\d)-(\d\d)/, kt)
              , Gt = ht(Et)
              , Kt = ft(Ct, xt, Tt, Lt)
              , Yt = ft(xt, Tt, Lt)
              , Xt = {
                weeks: {
                    days: 7,
                    hours: 168,
                    minutes: 10080,
                    seconds: 604800,
                    milliseconds: 6048e5
                },
                days: {
                    hours: 24,
                    minutes: 1440,
                    seconds: 86400,
                    milliseconds: 864e5
                },
                hours: {
                    minutes: 60,
                    seconds: 3600,
                    milliseconds: 36e5
                },
                minutes: {
                    seconds: 60,
                    milliseconds: 6e4
                },
                seconds: {
                    milliseconds: 1e3
                }
            }
              , Qt = Object.assign({
                years: {
                    quarters: 4,
                    months: 12,
                    weeks: 52,
                    days: 365,
                    hours: 8760,
                    minutes: 525600,
                    seconds: 31536e3,
                    milliseconds: 31536e6
                },
                quarters: {
                    months: 3,
                    weeks: 13,
                    days: 91,
                    hours: 2184,
                    minutes: 131040,
                    seconds: 7862400,
                    milliseconds: 78624e5
                },
                months: {
                    weeks: 4,
                    days: 30,
                    hours: 720,
                    minutes: 43200,
                    seconds: 2592e3,
                    milliseconds: 2592e6
                }
            }, Xt)
              , en = Object.assign({
                years: {
                    quarters: 4,
                    months: 12,
                    weeks: 52.1775,
                    days: 365.2425,
                    hours: 8765.82,
                    minutes: 525949.2,
                    seconds: 525949.2 * 60,
                    milliseconds: 525949.2 * 60 * 1e3
                },
                quarters: {
                    months: 3,
                    weeks: 13.044375,
                    days: 91.310625,
                    hours: 2191.455,
                    minutes: 131487.3,
                    seconds: 525949.2 * 60 / 4,
                    milliseconds: 7889237999.999999
                },
                months: {
                    weeks: 30.436875 / 7,
                    days: 30.436875,
                    hours: 730.485,
                    minutes: 43829.1,
                    seconds: 2629746,
                    milliseconds: 2629746e3
                }
            }, Xt)
              , tn = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"]
              , nn = tn.slice(0).reverse();
            function rn(e, t, n) {
                void 0 === n && (n = !1);
                var i = {
                    values: n ? t.values : Object.assign({}, e.values, t.values || {}),
                    loc: e.loc.clone(t.loc),
                    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
                };
                return new on(i)
            }
            function sn(e, t, n, i, r) {
                var s = e[r][n]
                  , o = t[n] / s
                  , a = Math.sign(o) !== Math.sign(i[r]) && 0 !== i[r] && Math.abs(o) <= 1 ? function(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }(o) : Math.trunc(o);
                i[r] += a,
                t[n] -= a * s
            }
            var on = function() {
                function e(e) {
                    var t = "longterm" === e.conversionAccuracy || !1;
                    this.values = e.values,
                    this.loc = e.loc || dt.create(),
                    this.conversionAccuracy = t ? "longterm" : "casual",
                    this.invalid = e.invalid || null,
                    this.matrix = t ? en : Qt,
                    this.isLuxonDuration = !0
                }
                e.fromMillis = function(t, n) {
                    return e.fromObject(Object.assign({
                        milliseconds: t
                    }, n))
                }
                ,
                e.fromObject = function(t) {
                    if (null == t || "object" != typeof t)
                        throw new S("Duration.fromObject: argument expected to be an object, got " + (null === t ? "null" : typeof t));
                    return new e({
                        values: ve(t, e.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone"]),
                        loc: dt.fromObject(t),
                        conversionAccuracy: t.conversionAccuracy
                    })
                }
                ,
                e.fromISO = function(t, n) {
                    var i = function(e) {
                        return pt(e, [_t, At])
                    }(t)[0];
                    if (i) {
                        var r = Object.assign(i, n);
                        return e.fromObject(r)
                    }
                    return e.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
                }
                ,
                e.invalid = function(t, n) {
                    if (void 0 === n && (n = null),
                    !t)
                        throw new S("need to specify a reason the Duration is invalid");
                    var i = t instanceof Pe ? t : new Pe(t,n);
                    if (tt.throwOnInvalid)
                        throw new g(i);
                    return new e({
                        invalid: i
                    })
                }
                ,
                e.normalizeUnit = function(e) {
                    var t = {
                        year: "years",
                        years: "years",
                        quarter: "quarters",
                        quarters: "quarters",
                        month: "months",
                        months: "months",
                        week: "weeks",
                        weeks: "weeks",
                        day: "days",
                        days: "days",
                        hour: "hours",
                        hours: "hours",
                        minute: "minutes",
                        minutes: "minutes",
                        second: "seconds",
                        seconds: "seconds",
                        millisecond: "milliseconds",
                        milliseconds: "milliseconds"
                    }[e ? e.toLowerCase() : e];
                    if (!t)
                        throw new y(e);
                    return t
                }
                ,
                e.isDuration = function(e) {
                    return e && e.isLuxonDuration || !1
                }
                ;
                var t = e.prototype;
                return t.toFormat = function(e, t) {
                    void 0 === t && (t = {});
                    var n = Object.assign({}, t, {
                        floor: !1 !== t.round && !1 !== t.floor
                    });
                    return this.isValid ? De.create(this.loc, n).formatDurationFromString(this, e) : "Invalid Duration"
                }
                ,
                t.toObject = function(e) {
                    if (void 0 === e && (e = {}),
                    !this.isValid)
                        return {};
                    var t = Object.assign({}, this.values);
                    return e.includeConfig && (t.conversionAccuracy = this.conversionAccuracy,
                    t.numberingSystem = this.loc.numberingSystem,
                    t.locale = this.loc.locale),
                    t
                }
                ,
                t.toISO = function() {
                    if (!this.isValid)
                        return null;
                    var e = "P";
                    return 0 !== this.years && (e += this.years + "Y"),
                    0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"),
                    0 !== this.weeks && (e += this.weeks + "W"),
                    0 !== this.days && (e += this.days + "D"),
                    0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"),
                    0 !== this.hours && (e += this.hours + "H"),
                    0 !== this.minutes && (e += this.minutes + "M"),
                    0 === this.seconds && 0 === this.milliseconds || (e += se(this.seconds + this.milliseconds / 1e3, 3) + "S"),
                    "P" === e && (e += "T0S"),
                    e
                }
                ,
                t.toJSON = function() {
                    return this.toISO()
                }
                ,
                t.toString = function() {
                    return this.toISO()
                }
                ,
                t.valueOf = function() {
                    return this.as("milliseconds")
                }
                ,
                t.plus = function(e) {
                    if (!this.isValid)
                        return this;
                    for (var t, n = an(e), i = {}, r = h(tn); !(t = r()).done; ) {
                        var s = t.value;
                        (ee(n.values, s) || ee(this.values, s)) && (i[s] = n.get(s) + this.get(s))
                    }
                    return rn(this, {
                        values: i
                    }, !0)
                }
                ,
                t.minus = function(e) {
                    if (!this.isValid)
                        return this;
                    var t = an(e);
                    return this.plus(t.negate())
                }
                ,
                t.mapUnits = function(e) {
                    if (!this.isValid)
                        return this;
                    for (var t = {}, n = 0, i = Object.keys(this.values); n < i.length; n++) {
                        var r = i[n];
                        t[r] = pe(e(this.values[r], r))
                    }
                    return rn(this, {
                        values: t
                    }, !0)
                }
                ,
                t.get = function(t) {
                    return this[e.normalizeUnit(t)]
                }
                ,
                t.set = function(t) {
                    return this.isValid ? rn(this, {
                        values: Object.assign(this.values, ve(t, e.normalizeUnit, []))
                    }) : this
                }
                ,
                t.reconfigure = function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.locale
                      , i = t.numberingSystem
                      , r = t.conversionAccuracy
                      , s = {
                        loc: this.loc.clone({
                            locale: n,
                            numberingSystem: i
                        })
                    };
                    return r && (s.conversionAccuracy = r),
                    rn(this, s)
                }
                ,
                t.as = function(e) {
                    return this.isValid ? this.shiftTo(e).get(e) : NaN
                }
                ,
                t.normalize = function() {
                    if (!this.isValid)
                        return this;
                    var e = this.toObject();
                    return function(e, t) {
                        nn.reduce((function(n, i) {
                            return Z(t[i]) ? n : (n && sn(e, t, n, t, i),
                            i)
                        }
                        ), null)
                    }(this.matrix, e),
                    rn(this, {
                        values: e
                    }, !0)
                }
                ,
                t.shiftTo = function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    if (!this.isValid)
                        return this;
                    if (0 === n.length)
                        return this;
                    n = n.map((function(t) {
                        return e.normalizeUnit(t)
                    }
                    ));
                    for (var r, s, o = {}, a = {}, u = this.toObject(), c = h(tn); !(s = c()).done; ) {
                        var l = s.value;
                        if (n.indexOf(l) >= 0) {
                            r = l;
                            var d = 0;
                            for (var f in a)
                                d += this.matrix[f][l] * a[f],
                                a[f] = 0;
                            J(u[l]) && (d += u[l]);
                            var p = Math.trunc(d);
                            for (var v in o[l] = p,
                            a[l] = d - p,
                            u)
                                tn.indexOf(v) > tn.indexOf(l) && sn(this.matrix, u, v, o, l)
                        } else
                            J(u[l]) && (a[l] = u[l])
                    }
                    for (var g in a)
                        0 !== a[g] && (o[r] += g === r ? a[g] : a[g] / this.matrix[r][g]);
                    return rn(this, {
                        values: o
                    }, !0).normalize()
                }
                ,
                t.negate = function() {
                    if (!this.isValid)
                        return this;
                    for (var e = {}, t = 0, n = Object.keys(this.values); t < n.length; t++) {
                        var i = n[t];
                        e[i] = -this.values[i]
                    }
                    return rn(this, {
                        values: e
                    }, !0)
                }
                ,
                t.equals = function(e) {
                    if (!this.isValid || !e.isValid)
                        return !1;
                    if (!this.loc.equals(e.loc))
                        return !1;
                    for (var t, n = h(tn); !(t = n()).done; ) {
                        var i = t.value;
                        if (this.values[i] !== e.values[i])
                            return !1
                    }
                    return !0
                }
                ,
                r(e, [{
                    key: "locale",
                    get: function() {
                        return this.isValid ? this.loc.locale : null
                    }
                }, {
                    key: "numberingSystem",
                    get: function() {
                        return this.isValid ? this.loc.numberingSystem : null
                    }
                }, {
                    key: "years",
                    get: function() {
                        return this.isValid ? this.values.years || 0 : NaN
                    }
                }, {
                    key: "quarters",
                    get: function() {
                        return this.isValid ? this.values.quarters || 0 : NaN
                    }
                }, {
                    key: "months",
                    get: function() {
                        return this.isValid ? this.values.months || 0 : NaN
                    }
                }, {
                    key: "weeks",
                    get: function() {
                        return this.isValid ? this.values.weeks || 0 : NaN
                    }
                }, {
                    key: "days",
                    get: function() {
                        return this.isValid ? this.values.days || 0 : NaN
                    }
                }, {
                    key: "hours",
                    get: function() {
                        return this.isValid ? this.values.hours || 0 : NaN
                    }
                }, {
                    key: "minutes",
                    get: function() {
                        return this.isValid ? this.values.minutes || 0 : NaN
                    }
                }, {
                    key: "seconds",
                    get: function() {
                        return this.isValid ? this.values.seconds || 0 : NaN
                    }
                }, {
                    key: "milliseconds",
                    get: function() {
                        return this.isValid ? this.values.milliseconds || 0 : NaN
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return null === this.invalid
                    }
                }, {
                    key: "invalidReason",
                    get: function() {
                        return this.invalid ? this.invalid.reason : null
                    }
                }, {
                    key: "invalidExplanation",
                    get: function() {
                        return this.invalid ? this.invalid.explanation : null
                    }
                }]),
                e
            }();
            function an(e) {
                if (J(e))
                    return on.fromMillis(e);
                if (on.isDuration(e))
                    return e;
                if ("object" == typeof e)
                    return on.fromObject(e);
                throw new S("Unknown duration argument " + e + " of type " + typeof e)
            }
            var un = "Invalid Interval"
              , cn = function() {
                function e(e) {
                    this.s = e.start,
                    this.e = e.end,
                    this.invalid = e.invalid || null,
                    this.isLuxonInterval = !0
                }
                e.invalid = function(t, n) {
                    if (void 0 === n && (n = null),
                    !t)
                        throw new S("need to specify a reason the Interval is invalid");
                    var i = t instanceof Pe ? t : new Pe(t,n);
                    if (tt.throwOnInvalid)
                        throw new v(i);
                    return new e({
                        invalid: i
                    })
                }
                ,
                e.fromDateTimes = function(t, n) {
                    var i = si(t)
                      , r = si(n)
                      , s = function(e, t) {
                        return e && e.isValid ? t && t.isValid ? t < e ? cn.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e.toISO() + " and end=" + t.toISO()) : null : cn.invalid("missing or invalid end") : cn.invalid("missing or invalid start")
                    }(i, r);
                    return null == s ? new e({
                        start: i,
                        end: r
                    }) : s
                }
                ,
                e.after = function(t, n) {
                    var i = an(n)
                      , r = si(t);
                    return e.fromDateTimes(r, r.plus(i))
                }
                ,
                e.before = function(t, n) {
                    var i = an(n)
                      , r = si(t);
                    return e.fromDateTimes(r.minus(i), r)
                }
                ,
                e.fromISO = function(t, n) {
                    var i = (t || "").split("/", 2)
                      , r = i[0]
                      , s = i[1];
                    if (r && s) {
                        var o, a, u, c;
                        try {
                            a = (o = ri.fromISO(r, n)).isValid
                        } catch (s) {
                            a = !1
                        }
                        try {
                            c = (u = ri.fromISO(s, n)).isValid
                        } catch (s) {
                            c = !1
                        }
                        if (a && c)
                            return e.fromDateTimes(o, u);
                        if (a) {
                            var l = on.fromISO(s, n);
                            if (l.isValid)
                                return e.after(o, l)
                        } else if (c) {
                            var d = on.fromISO(r, n);
                            if (d.isValid)
                                return e.before(u, d)
                        }
                    }
                    return e.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
                }
                ,
                e.isInterval = function(e) {
                    return e && e.isLuxonInterval || !1
                }
                ;
                var t = e.prototype;
                return t.length = function(e) {
                    return void 0 === e && (e = "milliseconds"),
                    this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
                }
                ,
                t.count = function(e) {
                    if (void 0 === e && (e = "milliseconds"),
                    !this.isValid)
                        return NaN;
                    var t = this.start.startOf(e)
                      , n = this.end.startOf(e);
                    return Math.floor(n.diff(t, e).get(e)) + 1
                }
                ,
                t.hasSame = function(e) {
                    return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
                }
                ,
                t.isEmpty = function() {
                    return this.s.valueOf() === this.e.valueOf()
                }
                ,
                t.isAfter = function(e) {
                    return !!this.isValid && this.s > e
                }
                ,
                t.isBefore = function(e) {
                    return !!this.isValid && this.e <= e
                }
                ,
                t.contains = function(e) {
                    return !!this.isValid && this.s <= e && this.e > e
                }
                ,
                t.set = function(t) {
                    var n = void 0 === t ? {} : t
                      , i = n.start
                      , r = n.end;
                    return this.isValid ? e.fromDateTimes(i || this.s, r || this.e) : this
                }
                ,
                t.splitAt = function() {
                    var t = this;
                    if (!this.isValid)
                        return [];
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    for (var s = i.map(si).filter((function(e) {
                        return t.contains(e)
                    }
                    )).sort(), o = [], a = this.s, u = 0; a < this.e; ) {
                        var c = s[u] || this.e
                          , l = +c > +this.e ? this.e : c;
                        o.push(e.fromDateTimes(a, l)),
                        a = l,
                        u += 1
                    }
                    return o
                }
                ,
                t.splitBy = function(t) {
                    var n = an(t);
                    if (!this.isValid || !n.isValid || 0 === n.as("milliseconds"))
                        return [];
                    for (var i, r, s = this.s, o = []; s < this.e; )
                        r = +(i = s.plus(n)) > +this.e ? this.e : i,
                        o.push(e.fromDateTimes(s, r)),
                        s = r;
                    return o
                }
                ,
                t.divideEqually = function(e) {
                    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
                }
                ,
                t.overlaps = function(e) {
                    return this.e > e.s && this.s < e.e
                }
                ,
                t.abutsStart = function(e) {
                    return !!this.isValid && +this.e == +e.s
                }
                ,
                t.abutsEnd = function(e) {
                    return !!this.isValid && +e.e == +this.s
                }
                ,
                t.engulfs = function(e) {
                    return !!this.isValid && this.s <= e.s && this.e >= e.e
                }
                ,
                t.equals = function(e) {
                    return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
                }
                ,
                t.intersection = function(t) {
                    if (!this.isValid)
                        return this;
                    var n = this.s > t.s ? this.s : t.s
                      , i = this.e < t.e ? this.e : t.e;
                    return n > i ? null : e.fromDateTimes(n, i)
                }
                ,
                t.union = function(t) {
                    if (!this.isValid)
                        return this;
                    var n = this.s < t.s ? this.s : t.s
                      , i = this.e > t.e ? this.e : t.e;
                    return e.fromDateTimes(n, i)
                }
                ,
                e.merge = function(e) {
                    var t = e.sort((function(e, t) {
                        return e.s - t.s
                    }
                    )).reduce((function(e, t) {
                        var n = e[0]
                          , i = e[1];
                        return i ? i.overlaps(t) || i.abutsStart(t) ? [n, i.union(t)] : [n.concat([i]), t] : [n, t]
                    }
                    ), [[], null])
                      , n = t[0]
                      , i = t[1];
                    return i && n.push(i),
                    n
                }
                ,
                e.xor = function(t) {
                    for (var n, i, r = null, s = 0, o = [], a = t.map((function(e) {
                        return [{
                            time: e.s,
                            type: "s"
                        }, {
                            time: e.e,
                            type: "e"
                        }]
                    }
                    )), u = h((n = Array.prototype).concat.apply(n, a).sort((function(e, t) {
                        return e.time - t.time
                    }
                    ))); !(i = u()).done; ) {
                        var c = i.value;
                        1 === (s += "s" === c.type ? 1 : -1) ? r = c.time : (r && +r != +c.time && o.push(e.fromDateTimes(r, c.time)),
                        r = null)
                    }
                    return e.merge(o)
                }
                ,
                t.difference = function() {
                    for (var t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    return e.xor([this].concat(i)).map((function(e) {
                        return t.intersection(e)
                    }
                    )).filter((function(e) {
                        return e && !e.isEmpty()
                    }
                    ))
                }
                ,
                t.toString = function() {
                    return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : un
                }
                ,
                t.toISO = function(e) {
                    return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : un
                }
                ,
                t.toISODate = function() {
                    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : un
                }
                ,
                t.toISOTime = function(e) {
                    return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : un
                }
                ,
                t.toFormat = function(e, t) {
                    var n = (void 0 === t ? {} : t).separator
                      , i = void 0 === n ? " – " : n;
                    return this.isValid ? "" + this.s.toFormat(e) + i + this.e.toFormat(e) : un
                }
                ,
                t.toDuration = function(e, t) {
                    return this.isValid ? this.e.diff(this.s, e, t) : on.invalid(this.invalidReason)
                }
                ,
                t.mapEndpoints = function(t) {
                    return e.fromDateTimes(t(this.s), t(this.e))
                }
                ,
                r(e, [{
                    key: "start",
                    get: function() {
                        return this.isValid ? this.s : null
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.isValid ? this.e : null
                    }
                }, {
                    key: "isValid",
                    get: function() {
                        return null === this.invalidReason
                    }
                }, {
                    key: "invalidReason",
                    get: function() {
                        return this.invalid ? this.invalid.reason : null
                    }
                }, {
                    key: "invalidExplanation",
                    get: function() {
                        return this.invalid ? this.invalid.explanation : null
                    }
                }]),
                e
            }()
              , ln = function() {
                function e() {}
                return e.hasDST = function(e) {
                    void 0 === e && (e = tt.defaultZone);
                    var t = ri.local().setZone(e).set({
                        month: 12
                    });
                    return !e.universal && t.offset !== t.set({
                        month: 6
                    }).offset
                }
                ,
                e.isValidIANAZone = function(e) {
                    return $e.isValidSpecifier(e) && $e.isValidZone(e)
                }
                ,
                e.normalizeZone = function(e) {
                    return We(e, tt.defaultZone)
                }
                ,
                e.months = function(e, t) {
                    void 0 === e && (e = "long");
                    var n = void 0 === t ? {} : t
                      , i = n.locale
                      , r = void 0 === i ? null : i
                      , s = n.numberingSystem
                      , o = void 0 === s ? null : s
                      , a = n.outputCalendar
                      , u = void 0 === a ? "gregory" : a;
                    return dt.create(r, o, u).months(e)
                }
                ,
                e.monthsFormat = function(e, t) {
                    void 0 === e && (e = "long");
                    var n = void 0 === t ? {} : t
                      , i = n.locale
                      , r = void 0 === i ? null : i
                      , s = n.numberingSystem
                      , o = void 0 === s ? null : s
                      , a = n.outputCalendar
                      , u = void 0 === a ? "gregory" : a;
                    return dt.create(r, o, u).months(e, !0)
                }
                ,
                e.weekdays = function(e, t) {
                    void 0 === e && (e = "long");
                    var n = void 0 === t ? {} : t
                      , i = n.locale
                      , r = void 0 === i ? null : i
                      , s = n.numberingSystem
                      , o = void 0 === s ? null : s;
                    return dt.create(r, o, null).weekdays(e)
                }
                ,
                e.weekdaysFormat = function(e, t) {
                    void 0 === e && (e = "long");
                    var n = void 0 === t ? {} : t
                      , i = n.locale
                      , r = void 0 === i ? null : i
                      , s = n.numberingSystem
                      , o = void 0 === s ? null : s;
                    return dt.create(r, o, null).weekdays(e, !0)
                }
                ,
                e.meridiems = function(e) {
                    var t = (void 0 === e ? {} : e).locale
                      , n = void 0 === t ? null : t;
                    return dt.create(n).meridiems()
                }
                ,
                e.eras = function(e, t) {
                    void 0 === e && (e = "short");
                    var n = (void 0 === t ? {} : t).locale
                      , i = void 0 === n ? null : n;
                    return dt.create(i, null, "gregory").eras(e)
                }
                ,
                e.features = function() {
                    var e = !1
                      , t = !1
                      , n = !1
                      , i = !1;
                    if (G()) {
                        e = !0,
                        t = K(),
                        i = Y();
                        try {
                            n = "America/New_York" === new Intl.DateTimeFormat("en",{
                                timeZone: "America/New_York"
                            }).resolvedOptions().timeZone
                        } catch (e) {
                            n = !1
                        }
                    }
                    return {
                        intl: e,
                        intlTokens: t,
                        zones: n,
                        relative: i
                    }
                }
                ,
                e
            }();
            function dn(e, t) {
                var n = function(e) {
                    return e.toUTC(0, {
                        keepLocalTime: !0
                    }).startOf("day").valueOf()
                }
                  , i = n(t) - n(e);
                return Math.floor(on.fromMillis(i).as("days"))
            }
            var hn = {
                arab: "[٠-٩]",
                arabext: "[۰-۹]",
                bali: "[᭐-᭙]",
                beng: "[০-৯]",
                deva: "[०-९]",
                fullwide: "[０-９]",
                gujr: "[૦-૯]",
                hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
                khmr: "[០-៩]",
                knda: "[೦-೯]",
                laoo: "[໐-໙]",
                limb: "[᥆-᥏]",
                mlym: "[൦-൯]",
                mong: "[᠐-᠙]",
                mymr: "[၀-၉]",
                orya: "[୦-୯]",
                tamldec: "[௦-௯]",
                telu: "[౦-౯]",
                thai: "[๐-๙]",
                tibt: "[༠-༩]",
                latn: "\\d"
            }
              , fn = {
                arab: [1632, 1641],
                arabext: [1776, 1785],
                bali: [6992, 7001],
                beng: [2534, 2543],
                deva: [2406, 2415],
                fullwide: [65296, 65303],
                gujr: [2790, 2799],
                khmr: [6112, 6121],
                knda: [3302, 3311],
                laoo: [3792, 3801],
                limb: [6470, 6479],
                mlym: [3430, 3439],
                mong: [6160, 6169],
                mymr: [4160, 4169],
                orya: [2918, 2927],
                tamldec: [3046, 3055],
                telu: [3174, 3183],
                thai: [3664, 3673],
                tibt: [3872, 3881]
            }
              , pn = hn.hanidec.replace(/[\[|\]]/g, "").split("");
            function vn(e, t) {
                var n = e.numberingSystem;
                return void 0 === t && (t = ""),
                new RegExp("" + hn[n || "latn"] + t)
            }
            function gn(e, t) {
                return void 0 === t && (t = function(e) {
                    return e
                }
                ),
                {
                    regex: e,
                    deser: function(e) {
                        var n = e[0];
                        return t(function(e) {
                            var t = parseInt(e, 10);
                            if (isNaN(t)) {
                                t = "";
                                for (var n = 0; n < e.length; n++) {
                                    var i = e.charCodeAt(n);
                                    if (-1 !== e[n].search(hn.hanidec))
                                        t += pn.indexOf(e[n]);
                                    else
                                        for (var r in fn) {
                                            var s = fn[r]
                                              , o = s[0]
                                              , a = s[1];
                                            i >= o && i <= a && (t += i - o)
                                        }
                                }
                                return parseInt(t, 10)
                            }
                            return t
                        }(n))
                    }
                }
            }
            var mn = "( |" + String.fromCharCode(160) + ")"
              , yn = new RegExp(mn,"g");
            function Sn(e) {
                return e.replace(/\./g, "\\.?").replace(yn, mn)
            }
            function wn(e) {
                return e.replace(/\./g, "").replace(yn, " ").toLowerCase()
            }
            function bn(e, t) {
                return null === e ? null : {
                    regex: RegExp(e.map(Sn).join("|")),
                    deser: function(n) {
                        var i = n[0];
                        return e.findIndex((function(e) {
                            return wn(i) === wn(e)
                        }
                        )) + t
                    }
                }
            }
            function En(e, t) {
                return {
                    regex: e,
                    deser: function(e) {
                        return fe(e[1], e[2])
                    },
                    groups: t
                }
            }
            function kn(e) {
                return {
                    regex: e,
                    deser: function(e) {
                        return e[0]
                    }
                }
            }
            var On = {
                year: {
                    "2-digit": "yy",
                    numeric: "yyyyy"
                },
                month: {
                    numeric: "M",
                    "2-digit": "MM",
                    short: "MMM",
                    long: "MMMM"
                },
                day: {
                    numeric: "d",
                    "2-digit": "dd"
                },
                weekday: {
                    short: "EEE",
                    long: "EEEE"
                },
                dayperiod: "a",
                dayPeriod: "a",
                hour: {
                    numeric: "h",
                    "2-digit": "hh"
                },
                minute: {
                    numeric: "m",
                    "2-digit": "mm"
                },
                second: {
                    numeric: "s",
                    "2-digit": "ss"
                }
            }
              , Cn = null;
            function xn(e, t, n) {
                var i = function(e, t) {
                    var n;
                    return (n = Array.prototype).concat.apply(n, e.map((function(e) {
                        return function(e, t) {
                            if (e.literal)
                                return e;
                            var n = De.macroTokenToFormatOpts(e.val);
                            if (!n)
                                return e;
                            var i = De.create(t, n).formatDateTimeParts((Cn || (Cn = ri.fromMillis(1555555555555)),
                            Cn)).map((function(e) {
                                return function(e, t, n) {
                                    var i = e.type
                                      , r = e.value;
                                    if ("literal" === i)
                                        return {
                                            literal: !0,
                                            val: r
                                        };
                                    var s = n[i]
                                      , o = On[i];
                                    return "object" == typeof o && (o = o[s]),
                                    o ? {
                                        literal: !1,
                                        val: o
                                    } : void 0
                                }(e, 0, n)
                            }
                            ));
                            return i.includes(void 0) ? e : i
                        }(e, t)
                    }
                    )))
                }(De.parseFormat(n), e)
                  , r = i.map((function(t) {
                    return n = t,
                    r = vn(i = e),
                    s = vn(i, "{2}"),
                    o = vn(i, "{3}"),
                    a = vn(i, "{4}"),
                    u = vn(i, "{6}"),
                    c = vn(i, "{1,2}"),
                    l = vn(i, "{1,3}"),
                    d = vn(i, "{1,6}"),
                    h = vn(i, "{1,9}"),
                    f = vn(i, "{2,4}"),
                    p = vn(i, "{4,6}"),
                    v = function(e) {
                        return {
                            regex: RegExp((t = e.val,
                            t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))),
                            deser: function(e) {
                                return e[0]
                            },
                            literal: !0
                        };
                        var t
                    }
                    ,
                    (g = function(e) {
                        if (n.literal)
                            return v(e);
                        switch (e.val) {
                        case "G":
                            return bn(i.eras("short", !1), 0);
                        case "GG":
                            return bn(i.eras("long", !1), 0);
                        case "y":
                            return gn(d);
                        case "yy":
                            return gn(f, de);
                        case "yyyy":
                            return gn(a);
                        case "yyyyy":
                            return gn(p);
                        case "yyyyyy":
                            return gn(u);
                        case "M":
                            return gn(c);
                        case "MM":
                            return gn(s);
                        case "MMM":
                            return bn(i.months("short", !0, !1), 1);
                        case "MMMM":
                            return bn(i.months("long", !0, !1), 1);
                        case "L":
                            return gn(c);
                        case "LL":
                            return gn(s);
                        case "LLL":
                            return bn(i.months("short", !1, !1), 1);
                        case "LLLL":
                            return bn(i.months("long", !1, !1), 1);
                        case "d":
                            return gn(c);
                        case "dd":
                            return gn(s);
                        case "o":
                            return gn(l);
                        case "ooo":
                            return gn(o);
                        case "HH":
                            return gn(s);
                        case "H":
                            return gn(c);
                        case "hh":
                            return gn(s);
                        case "h":
                            return gn(c);
                        case "mm":
                            return gn(s);
                        case "m":
                        case "q":
                            return gn(c);
                        case "qq":
                            return gn(s);
                        case "s":
                            return gn(c);
                        case "ss":
                            return gn(s);
                        case "S":
                            return gn(l);
                        case "SSS":
                            return gn(o);
                        case "u":
                            return kn(h);
                        case "a":
                            return bn(i.meridiems(), 0);
                        case "kkkk":
                            return gn(a);
                        case "kk":
                            return gn(f, de);
                        case "W":
                            return gn(c);
                        case "WW":
                            return gn(s);
                        case "E":
                        case "c":
                            return gn(r);
                        case "EEE":
                            return bn(i.weekdays("short", !1, !1), 1);
                        case "EEEE":
                            return bn(i.weekdays("long", !1, !1), 1);
                        case "ccc":
                            return bn(i.weekdays("short", !0, !1), 1);
                        case "cccc":
                            return bn(i.weekdays("long", !0, !1), 1);
                        case "Z":
                        case "ZZ":
                            return En(new RegExp("([+-]" + c.source + ")(?::(" + s.source + "))?"), 2);
                        case "ZZZ":
                            return En(new RegExp("([+-]" + c.source + ")(" + s.source + ")?"), 2);
                        case "z":
                            return kn(/[a-z_+-/]{1,256}?/i);
                        default:
                            return v(e)
                        }
                    }(n) || {
                        invalidReason: "missing Intl.DateTimeFormat.formatToParts support"
                    }).token = n,
                    g;
                    var n, i, r, s, o, a, u, c, l, d, h, f, p, v, g
                }
                ))
                  , s = r.find((function(e) {
                    return e.invalidReason
                }
                ));
                if (s)
                    return {
                        input: t,
                        tokens: i,
                        invalidReason: s.invalidReason
                    };
                var o = function(e) {
                    return ["^" + e.map((function(e) {
                        return e.regex
                    }
                    )).reduce((function(e, t) {
                        return e + "(" + t.source + ")"
                    }
                    ), "") + "$", e]
                }(r)
                  , a = o[0]
                  , u = o[1]
                  , c = RegExp(a, "i")
                  , l = function(e, t, n) {
                    var i = e.match(t);
                    if (i) {
                        var r = {}
                          , s = 1;
                        for (var o in n)
                            if (ee(n, o)) {
                                var a = n[o]
                                  , u = a.groups ? a.groups + 1 : 1;
                                !a.literal && a.token && (r[a.token.val[0]] = a.deser(i.slice(s, s + u))),
                                s += u
                            }
                        return [i, r]
                    }
                    return [i, {}]
                }(t, c, u)
                  , d = l[0]
                  , h = l[1]
                  , f = h ? function(e) {
                    var t;
                    return t = Z(e.Z) ? Z(e.z) ? null : $e.create(e.z) : new Ze(e.Z),
                    Z(e.q) || (e.M = 3 * (e.q - 1) + 1),
                    Z(e.h) || (e.h < 12 && 1 === e.a ? e.h += 12 : 12 === e.h && 0 === e.a && (e.h = 0)),
                    0 === e.G && e.y && (e.y = -e.y),
                    Z(e.u) || (e.S = re(e.u)),
                    [Object.keys(e).reduce((function(t, n) {
                        var i = function(e) {
                            switch (e) {
                            case "S":
                                return "millisecond";
                            case "s":
                                return "second";
                            case "m":
                                return "minute";
                            case "h":
                            case "H":
                                return "hour";
                            case "d":
                                return "day";
                            case "o":
                                return "ordinal";
                            case "L":
                            case "M":
                                return "month";
                            case "y":
                                return "year";
                            case "E":
                            case "c":
                                return "weekday";
                            case "W":
                                return "weekNumber";
                            case "k":
                                return "weekYear";
                            case "q":
                                return "quarter";
                            default:
                                return null
                            }
                        }(n);
                        return i && (t[i] = e[n]),
                        t
                    }
                    ), {}), t]
                }(h) : [null, null]
                  , p = f[0]
                  , v = f[1];
                if (ee(h, "a") && ee(h, "H"))
                    throw new m("Can't include meridiem when specifying 24-hour format");
                return {
                    input: t,
                    tokens: i,
                    regex: c,
                    rawMatches: d,
                    matches: h,
                    result: p,
                    zone: v
                }
            }
            var Tn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
              , Ln = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
            function _n(e, t) {
                return new Pe("unit out of range","you specified " + t + " (of type " + typeof t + ") as a " + e + ", which is invalid")
            }
            function An(e, t, n) {
                var i = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
                return 0 === i ? 7 : i
            }
            function In(e, t, n) {
                return n + (oe(e) ? Ln : Tn)[t - 1]
            }
            function Nn(e, t) {
                var n = oe(e) ? Ln : Tn
                  , i = n.findIndex((function(e) {
                    return e < t
                }
                ));
                return {
                    month: i + 1,
                    day: t - n[i]
                }
            }
            function Rn(e) {
                var t, n = e.year, i = e.month, r = e.day, s = In(n, i, r), o = An(n, i, r), a = Math.floor((s - o + 10) / 7);
                return a < 1 ? a = le(t = n - 1) : a > le(n) ? (t = n + 1,
                a = 1) : t = n,
                Object.assign({
                    weekYear: t,
                    weekNumber: a,
                    weekday: o
                }, me(e))
            }
            function Mn(e) {
                var t, n = e.weekYear, i = e.weekNumber, r = e.weekday, s = An(n, 1, 4), o = ae(n), a = 7 * i + r - s - 3;
                a < 1 ? a += ae(t = n - 1) : a > o ? (t = n + 1,
                a -= ae(n)) : t = n;
                var u = Nn(t, a)
                  , c = u.month
                  , l = u.day;
                return Object.assign({
                    year: t,
                    month: c,
                    day: l
                }, me(e))
            }
            function Dn(e) {
                var t = e.year
                  , n = In(t, e.month, e.day);
                return Object.assign({
                    year: t,
                    ordinal: n
                }, me(e))
            }
            function Pn(e) {
                var t = e.year
                  , n = Nn(t, e.ordinal)
                  , i = n.month
                  , r = n.day;
                return Object.assign({
                    year: t,
                    month: i,
                    day: r
                }, me(e))
            }
            function Vn(e) {
                var t = W(e.year)
                  , n = te(e.month, 1, 12)
                  , i = te(e.day, 1, ue(e.year, e.month));
                return t ? n ? !i && _n("day", e.day) : _n("month", e.month) : _n("year", e.year)
            }
            function jn(e) {
                var t = e.hour
                  , n = e.minute
                  , i = e.second
                  , r = e.millisecond
                  , s = te(t, 0, 23) || 24 === t && 0 === n && 0 === i && 0 === r
                  , o = te(n, 0, 59)
                  , a = te(i, 0, 59)
                  , u = te(r, 0, 999);
                return s ? o ? a ? !u && _n("millisecond", r) : _n("second", i) : _n("minute", n) : _n("hour", t)
            }
            function Un(e) {
                return new Pe("unsupported zone",'the zone "' + e.name + '" is not supported')
            }
            function qn(e) {
                return null === e.weekData && (e.weekData = Rn(e.c)),
                e.weekData
            }
            function Fn(e, t) {
                var n = {
                    ts: e.ts,
                    zone: e.zone,
                    c: e.c,
                    o: e.o,
                    loc: e.loc,
                    invalid: e.invalid
                };
                return new ri(Object.assign({}, n, t, {
                    old: n
                }))
            }
            function Hn(e, t, n) {
                var i = e - 60 * t * 1e3
                  , r = n.offset(i);
                if (t === r)
                    return [i, t];
                i -= 60 * (r - t) * 1e3;
                var s = n.offset(i);
                return r === s ? [i, r] : [e - 60 * Math.min(r, s) * 1e3, Math.max(r, s)]
            }
            function zn(e, t) {
                var n = new Date(e += 60 * t * 1e3);
                return {
                    year: n.getUTCFullYear(),
                    month: n.getUTCMonth() + 1,
                    day: n.getUTCDate(),
                    hour: n.getUTCHours(),
                    minute: n.getUTCMinutes(),
                    second: n.getUTCSeconds(),
                    millisecond: n.getUTCMilliseconds()
                }
            }
            function $n(e, t, n) {
                return Hn(ce(e), t, n)
            }
            function Bn(e, t) {
                var n = e.o
                  , i = e.c.year + Math.trunc(t.years)
                  , r = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters)
                  , s = Object.assign({}, e.c, {
                    year: i,
                    month: r,
                    day: Math.min(e.c.day, ue(i, r)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
                })
                  , o = on.fromObject({
                    years: t.years - Math.trunc(t.years),
                    quarters: t.quarters - Math.trunc(t.quarters),
                    months: t.months - Math.trunc(t.months),
                    weeks: t.weeks - Math.trunc(t.weeks),
                    days: t.days - Math.trunc(t.days),
                    hours: t.hours,
                    minutes: t.minutes,
                    seconds: t.seconds,
                    milliseconds: t.milliseconds
                }).as("milliseconds")
                  , a = Hn(ce(s), n, e.zone)
                  , u = a[0]
                  , c = a[1];
                return 0 !== o && (u += o,
                c = e.zone.offset(u)),
                {
                    ts: u,
                    o: c
                }
            }
            function Zn(e, t, n, i, r) {
                var s = n.setZone
                  , o = n.zone;
                if (e && 0 !== Object.keys(e).length) {
                    var a = t || o
                      , u = ri.fromObject(Object.assign(e, n, {
                        zone: a,
                        setZone: void 0
                    }));
                    return s ? u : u.setZone(o)
                }
                return ri.invalid(new Pe("unparsable",'the input "' + r + "\" can't be parsed as " + i))
            }
            function Jn(e, t, n) {
                return void 0 === n && (n = !0),
                e.isValid ? De.create(dt.create("en-US"), {
                    allowZ: n,
                    forceSimple: !0
                }).formatDateTimeFromString(e, t) : null
            }
            function Wn(e, t) {
                var n = t.suppressSeconds
                  , i = void 0 !== n && n
                  , r = t.suppressMilliseconds
                  , s = void 0 !== r && r
                  , o = t.includeOffset
                  , a = t.includeZone
                  , u = void 0 !== a && a
                  , c = t.spaceZone
                  , l = void 0 !== c && c
                  , d = t.format
                  , h = void 0 === d ? "extended" : d
                  , f = "basic" === h ? "HHmm" : "HH:mm";
                return i && 0 === e.second && 0 === e.millisecond || (f += "basic" === h ? "ss" : ":ss",
                s && 0 === e.millisecond || (f += ".SSS")),
                (u || o) && l && (f += " "),
                u ? f += "z" : o && (f += "basic" === h ? "ZZZ" : "ZZ"),
                Jn(e, f)
            }
            var Gn = {
                month: 1,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            }
              , Kn = {
                weekNumber: 1,
                weekday: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            }
              , Yn = {
                ordinal: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            }
              , Xn = ["year", "month", "day", "hour", "minute", "second", "millisecond"]
              , Qn = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"]
              , ei = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
            function ti(e) {
                var t = {
                    year: "year",
                    years: "year",
                    month: "month",
                    months: "month",
                    day: "day",
                    days: "day",
                    hour: "hour",
                    hours: "hour",
                    minute: "minute",
                    minutes: "minute",
                    quarter: "quarter",
                    quarters: "quarter",
                    second: "second",
                    seconds: "second",
                    millisecond: "millisecond",
                    milliseconds: "millisecond",
                    weekday: "weekday",
                    weekdays: "weekday",
                    weeknumber: "weekNumber",
                    weeksnumber: "weekNumber",
                    weeknumbers: "weekNumber",
                    weekyear: "weekYear",
                    weekyears: "weekYear",
                    ordinal: "ordinal"
                }[e.toLowerCase()];
                if (!t)
                    throw new y(e);
                return t
            }
            function ni(e, t) {
                for (var n, i = h(Xn); !(n = i()).done; ) {
                    var r = n.value;
                    Z(e[r]) && (e[r] = Gn[r])
                }
                var s = Vn(e) || jn(e);
                if (s)
                    return ri.invalid(s);
                var o = tt.now()
                  , a = $n(e, t.offset(o), t)
                  , u = a[0]
                  , c = a[1];
                return new ri({
                    ts: u,
                    zone: t,
                    o: c
                })
            }
            function ii(e, t, n) {
                var i = !!Z(n.round) || n.round
                  , r = function(e, r) {
                    return e = se(e, i || n.calendary ? 0 : 2, !0),
                    t.loc.clone(n).relFormatter(n).format(e, r)
                }
                  , s = function(i) {
                    return n.calendary ? t.hasSame(e, i) ? 0 : t.startOf(i).diff(e.startOf(i), i).get(i) : t.diff(e, i).get(i)
                };
                if (n.unit)
                    return r(s(n.unit), n.unit);
                for (var o, a = h(n.units); !(o = a()).done; ) {
                    var u = o.value
                      , c = s(u);
                    if (Math.abs(c) >= 1)
                        return r(c, u)
                }
                return r(0, n.units[n.units.length - 1])
            }
            var ri = function() {
                function e(e) {
                    var t = e.zone || tt.defaultZone
                      , n = e.invalid || (Number.isNaN(e.ts) ? new Pe("invalid input") : null) || (t.isValid ? null : Un(t));
                    this.ts = Z(e.ts) ? tt.now() : e.ts;
                    var i = null
                      , r = null;
                    if (!n)
                        if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
                            var s = [e.old.c, e.old.o];
                            i = s[0],
                            r = s[1]
                        } else {
                            var o = t.offset(this.ts);
                            i = zn(this.ts, o),
                            i = (n = Number.isNaN(i.year) ? new Pe("invalid input") : null) ? null : i,
                            r = n ? null : o
                        }
                    this._zone = t,
                    this.loc = e.loc || dt.create(),
                    this.invalid = n,
                    this.weekData = null,
                    this.c = i,
                    this.o = r,
                    this.isLuxonDateTime = !0
                }
                e.local = function(t, n, i, r, s, o, a) {
                    return Z(t) ? new e({
                        ts: tt.now()
                    }) : ni({
                        year: t,
                        month: n,
                        day: i,
                        hour: r,
                        minute: s,
                        second: o,
                        millisecond: a
                    }, tt.defaultZone)
                }
                ,
                e.utc = function(t, n, i, r, s, o, a) {
                    return Z(t) ? new e({
                        ts: tt.now(),
                        zone: Ze.utcInstance
                    }) : ni({
                        year: t,
                        month: n,
                        day: i,
                        hour: r,
                        minute: s,
                        second: o,
                        millisecond: a
                    }, Ze.utcInstance)
                }
                ,
                e.fromJSDate = function(t, n) {
                    void 0 === n && (n = {});
                    var i, r = (i = t,
                    "[object Date]" === Object.prototype.toString.call(i) ? t.valueOf() : NaN);
                    if (Number.isNaN(r))
                        return e.invalid("invalid input");
                    var s = We(n.zone, tt.defaultZone);
                    return s.isValid ? new e({
                        ts: r,
                        zone: s,
                        loc: dt.fromObject(n)
                    }) : e.invalid(Un(s))
                }
                ,
                e.fromMillis = function(t, n) {
                    if (void 0 === n && (n = {}),
                    J(t))
                        return t < -864e13 || t > 864e13 ? e.invalid("Timestamp out of range") : new e({
                            ts: t,
                            zone: We(n.zone, tt.defaultZone),
                            loc: dt.fromObject(n)
                        });
                    throw new S("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t)
                }
                ,
                e.fromSeconds = function(t, n) {
                    if (void 0 === n && (n = {}),
                    J(t))
                        return new e({
                            ts: 1e3 * t,
                            zone: We(n.zone, tt.defaultZone),
                            loc: dt.fromObject(n)
                        });
                    throw new S("fromSeconds requires a numerical input")
                }
                ,
                e.fromObject = function(t) {
                    var n = We(t.zone, tt.defaultZone);
                    if (!n.isValid)
                        return e.invalid(Un(n));
                    var i = tt.now()
                      , r = n.offset(i)
                      , s = ve(t, ti, ["zone", "locale", "outputCalendar", "numberingSystem"])
                      , o = !Z(s.ordinal)
                      , a = !Z(s.year)
                      , u = !Z(s.month) || !Z(s.day)
                      , c = a || u
                      , l = s.weekYear || s.weekNumber
                      , d = dt.fromObject(t);
                    if ((c || o) && l)
                        throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                    if (u && o)
                        throw new m("Can't mix ordinal dates with month/day");
                    var f, p, v = l || s.weekday && !c, g = zn(i, r);
                    v ? (f = Qn,
                    p = Kn,
                    g = Rn(g)) : o ? (f = ei,
                    p = Yn,
                    g = Dn(g)) : (f = Xn,
                    p = Gn);
                    for (var y, S = !1, w = h(f); !(y = w()).done; ) {
                        var b = y.value;
                        Z(s[b]) ? s[b] = S ? p[b] : g[b] : S = !0
                    }
                    var E = (v ? function(e) {
                        var t = W(e.weekYear)
                          , n = te(e.weekNumber, 1, le(e.weekYear))
                          , i = te(e.weekday, 1, 7);
                        return t ? n ? !i && _n("weekday", e.weekday) : _n("week", e.week) : _n("weekYear", e.weekYear)
                    }(s) : o ? function(e) {
                        var t = W(e.year)
                          , n = te(e.ordinal, 1, ae(e.year));
                        return t ? !n && _n("ordinal", e.ordinal) : _n("year", e.year)
                    }(s) : Vn(s)) || jn(s);
                    if (E)
                        return e.invalid(E);
                    var k = $n(v ? Mn(s) : o ? Pn(s) : s, r, n)
                      , O = new e({
                        ts: k[0],
                        zone: n,
                        o: k[1],
                        loc: d
                    });
                    return s.weekday && c && t.weekday !== O.weekday ? e.invalid("mismatched weekday", "you can't specify both a weekday of " + s.weekday + " and a date of " + O.toISO()) : O
                }
                ,
                e.fromISO = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function(e) {
                        return pt(e, [qt, $t], [Ft, Bt], [Ht, Zt], [zt, Jt])
                    }(e);
                    return Zn(n[0], n[1], t, "ISO 8601", e)
                }
                ,
                e.fromRFC2822 = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function(e) {
                        return pt(function(e) {
                            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
                        }(e), [Rt, Mt])
                    }(e);
                    return Zn(n[0], n[1], t, "RFC 2822", e)
                }
                ,
                e.fromHTTP = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function(e) {
                        return pt(e, [Dt, jt], [Pt, jt], [Vt, Ut])
                    }(e);
                    return Zn(n[0], n[1], t, "HTTP", t)
                }
                ,
                e.fromFormat = function(t, n, i) {
                    if (void 0 === i && (i = {}),
                    Z(t) || Z(n))
                        throw new S("fromFormat requires an input string and a format");
                    var r = i
                      , s = r.locale
                      , o = void 0 === s ? null : s
                      , a = r.numberingSystem
                      , u = void 0 === a ? null : a
                      , c = function(e, t, n) {
                        var i = xn(e, t, n);
                        return [i.result, i.zone, i.invalidReason]
                    }(dt.fromOpts({
                        locale: o,
                        numberingSystem: u,
                        defaultToEN: !0
                    }), t, n)
                      , l = c[0]
                      , d = c[1]
                      , h = c[2];
                    return h ? e.invalid(h) : Zn(l, d, i, "format " + n, t)
                }
                ,
                e.fromString = function(t, n, i) {
                    return void 0 === i && (i = {}),
                    e.fromFormat(t, n, i)
                }
                ,
                e.fromSQL = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function(e) {
                        return pt(e, [Wt, Kt], [Gt, Yt])
                    }(e);
                    return Zn(n[0], n[1], t, "SQL", e)
                }
                ,
                e.invalid = function(t, n) {
                    if (void 0 === n && (n = null),
                    !t)
                        throw new S("need to specify a reason the DateTime is invalid");
                    var i = t instanceof Pe ? t : new Pe(t,n);
                    if (tt.throwOnInvalid)
                        throw new p(i);
                    return new e({
                        invalid: i
                    })
                }
                ,
                e.isDateTime = function(e) {
                    return e && e.isLuxonDateTime || !1
                }
                ;
                var t = e.prototype;
                return t.get = function(e) {
                    return this[e]
                }
                ,
                t.resolvedLocaleOpts = function(e) {
                    void 0 === e && (e = {});
                    var t = De.create(this.loc.clone(e), e).resolvedOptions(this);
                    return {
                        locale: t.locale,
                        numberingSystem: t.numberingSystem,
                        outputCalendar: t.calendar
                    }
                }
                ,
                t.toUTC = function(e, t) {
                    return void 0 === e && (e = 0),
                    void 0 === t && (t = {}),
                    this.setZone(Ze.instance(e), t)
                }
                ,
                t.toLocal = function() {
                    return this.setZone(tt.defaultZone)
                }
                ,
                t.setZone = function(t, n) {
                    var i = void 0 === n ? {} : n
                      , r = i.keepLocalTime
                      , s = void 0 !== r && r
                      , o = i.keepCalendarTime
                      , a = void 0 !== o && o;
                    if ((t = We(t, tt.defaultZone)).equals(this.zone))
                        return this;
                    if (t.isValid) {
                        var u = this.ts;
                        if (s || a) {
                            var c = t.offset(this.ts);
                            u = $n(this.toObject(), c, t)[0]
                        }
                        return Fn(this, {
                            ts: u,
                            zone: t
                        })
                    }
                    return e.invalid(Un(t))
                }
                ,
                t.reconfigure = function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.locale
                      , i = t.numberingSystem
                      , r = t.outputCalendar;
                    return Fn(this, {
                        loc: this.loc.clone({
                            locale: n,
                            numberingSystem: i,
                            outputCalendar: r
                        })
                    })
                }
                ,
                t.setLocale = function(e) {
                    return this.reconfigure({
                        locale: e
                    })
                }
                ,
                t.set = function(e) {
                    if (!this.isValid)
                        return this;
                    var t, n = ve(e, ti, []);
                    Z(n.weekYear) && Z(n.weekNumber) && Z(n.weekday) ? Z(n.ordinal) ? (t = Object.assign(this.toObject(), n),
                    Z(n.day) && (t.day = Math.min(ue(t.year, t.month), t.day))) : t = Pn(Object.assign(Dn(this.c), n)) : t = Mn(Object.assign(Rn(this.c), n));
                    var i = $n(t, this.o, this.zone);
                    return Fn(this, {
                        ts: i[0],
                        o: i[1]
                    })
                }
                ,
                t.plus = function(e) {
                    return this.isValid ? Fn(this, Bn(this, an(e))) : this
                }
                ,
                t.minus = function(e) {
                    return this.isValid ? Fn(this, Bn(this, an(e).negate())) : this
                }
                ,
                t.startOf = function(e) {
                    if (!this.isValid)
                        return this;
                    var t = {}
                      , n = on.normalizeUnit(e);
                    switch (n) {
                    case "years":
                        t.month = 1;
                    case "quarters":
                    case "months":
                        t.day = 1;
                    case "weeks":
                    case "days":
                        t.hour = 0;
                    case "hours":
                        t.minute = 0;
                    case "minutes":
                        t.second = 0;
                    case "seconds":
                        t.millisecond = 0
                    }
                    if ("weeks" === n && (t.weekday = 1),
                    "quarters" === n) {
                        var i = Math.ceil(this.month / 3);
                        t.month = 3 * (i - 1) + 1
                    }
                    return this.set(t)
                }
                ,
                t.endOf = function(e) {
                    var t;
                    return this.isValid ? this.plus((t = {},
                    t[e] = 1,
                    t)).startOf(e).minus(1) : this
                }
                ,
                t.toFormat = function(e, t) {
                    return void 0 === t && (t = {}),
                    this.isValid ? De.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : "Invalid DateTime"
                }
                ,
                t.toLocaleString = function(e) {
                    return void 0 === e && (e = O),
                    this.isValid ? De.create(this.loc.clone(e), e).formatDateTime(this) : "Invalid DateTime"
                }
                ,
                t.toLocaleParts = function(e) {
                    return void 0 === e && (e = {}),
                    this.isValid ? De.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
                }
                ,
                t.toISO = function(e) {
                    return void 0 === e && (e = {}),
                    this.isValid ? this.toISODate(e) + "T" + this.toISOTime(e) : null
                }
                ,
                t.toISODate = function(e) {
                    var t = (void 0 === e ? {} : e).format
                      , n = "basic" === (void 0 === t ? "extended" : t) ? "yyyyMMdd" : "yyyy-MM-dd";
                    return this.year > 9999 && (n = "+" + n),
                    Jn(this, n)
                }
                ,
                t.toISOWeekDate = function() {
                    return Jn(this, "kkkk-'W'WW-c")
                }
                ,
                t.toISOTime = function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.suppressMilliseconds
                      , i = void 0 !== n && n
                      , r = t.suppressSeconds
                      , s = void 0 !== r && r
                      , o = t.includeOffset
                      , a = void 0 === o || o
                      , u = t.format;
                    return Wn(this, {
                        suppressSeconds: s,
                        suppressMilliseconds: i,
                        includeOffset: a,
                        format: void 0 === u ? "extended" : u
                    })
                }
                ,
                t.toRFC2822 = function() {
                    return Jn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
                }
                ,
                t.toHTTP = function() {
                    return Jn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
                }
                ,
                t.toSQLDate = function() {
                    return Jn(this, "yyyy-MM-dd")
                }
                ,
                t.toSQLTime = function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.includeOffset
                      , i = void 0 === n || n
                      , r = t.includeZone;
                    return Wn(this, {
                        includeOffset: i,
                        includeZone: void 0 !== r && r,
                        spaceZone: !0
                    })
                }
                ,
                t.toSQL = function(e) {
                    return void 0 === e && (e = {}),
                    this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null
                }
                ,
                t.toString = function() {
                    return this.isValid ? this.toISO() : "Invalid DateTime"
                }
                ,
                t.valueOf = function() {
                    return this.toMillis()
                }
                ,
                t.toMillis = function() {
                    return this.isValid ? this.ts : NaN
                }
                ,
                t.toSeconds = function() {
                    return this.isValid ? this.ts / 1e3 : NaN
                }
                ,
                t.toJSON = function() {
                    return this.toISO()
                }
                ,
                t.toBSON = function() {
                    return this.toJSDate()
                }
                ,
                t.toObject = function(e) {
                    if (void 0 === e && (e = {}),
                    !this.isValid)
                        return {};
                    var t = Object.assign({}, this.c);
                    return e.includeConfig && (t.outputCalendar = this.outputCalendar,
                    t.numberingSystem = this.loc.numberingSystem,
                    t.locale = this.loc.locale),
                    t
                }
                ,
                t.toJSDate = function() {
                    return new Date(this.isValid ? this.ts : NaN)
                }
                ,
                t.diff = function(e, t, n) {
                    if (void 0 === t && (t = "milliseconds"),
                    void 0 === n && (n = {}),
                    !this.isValid || !e.isValid)
                        return on.invalid(this.invalid || e.invalid, "created by diffing an invalid DateTime");
                    var i, r = Object.assign({
                        locale: this.locale,
                        numberingSystem: this.numberingSystem
                    }, n), s = (i = t,
                    Array.isArray(i) ? i : [i]).map(on.normalizeUnit), o = e.valueOf() > this.valueOf(), a = function(e, t, n, i) {
                        var r, s = function(e, t, n) {
                            for (var i, r, s = {}, o = 0, a = [["years", function(e, t) {
                                return t.year - e.year
                            }
                            ], ["months", function(e, t) {
                                return t.month - e.month + 12 * (t.year - e.year)
                            }
                            ], ["weeks", function(e, t) {
                                var n = dn(e, t);
                                return (n - n % 7) / 7
                            }
                            ], ["days", dn]]; o < a.length; o++) {
                                var u = a[o]
                                  , c = u[0]
                                  , l = u[1];
                                if (n.indexOf(c) >= 0) {
                                    var d;
                                    i = c;
                                    var h, f = l(e, t);
                                    (r = e.plus(((d = {})[c] = f,
                                    d))) > t ? (e = e.plus(((h = {})[c] = f - 1,
                                    h)),
                                    f -= 1) : e = r,
                                    s[c] = f
                                }
                            }
                            return [e, s, r, i]
                        }(e, t, n), o = s[0], a = s[1], u = s[2], c = s[3], l = t - o, d = n.filter((function(e) {
                            return ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0
                        }
                        ));
                        0 === d.length && (u < t && (u = o.plus(((r = {})[c] = 1,
                        r))),
                        u !== o && (a[c] = (a[c] || 0) + l / (u - o)));
                        var h, f = on.fromObject(Object.assign(a, i));
                        return d.length > 0 ? (h = on.fromMillis(l, i)).shiftTo.apply(h, d).plus(f) : f
                    }(o ? this : e, o ? e : this, s, r);
                    return o ? a.negate() : a
                }
                ,
                t.diffNow = function(t, n) {
                    return void 0 === t && (t = "milliseconds"),
                    void 0 === n && (n = {}),
                    this.diff(e.local(), t, n)
                }
                ,
                t.until = function(e) {
                    return this.isValid ? cn.fromDateTimes(this, e) : this
                }
                ,
                t.hasSame = function(e, t) {
                    if (!this.isValid)
                        return !1;
                    if ("millisecond" === t)
                        return this.valueOf() === e.valueOf();
                    var n = e.valueOf();
                    return this.startOf(t) <= n && n <= this.endOf(t)
                }
                ,
                t.equals = function(e) {
                    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
                }
                ,
                t.toRelative = function(t) {
                    if (void 0 === t && (t = {}),
                    !this.isValid)
                        return null;
                    var n = t.base || e.fromObject({
                        zone: this.zone
                    })
                      , i = t.padding ? this < n ? -t.padding : t.padding : 0;
                    return ii(n, this.plus(i), Object.assign(t, {
                        numeric: "always",
                        units: ["years", "months", "days", "hours", "minutes", "seconds"]
                    }))
                }
                ,
                t.toRelativeCalendar = function(t) {
                    return void 0 === t && (t = {}),
                    this.isValid ? ii(t.base || e.fromObject({
                        zone: this.zone
                    }), this, Object.assign(t, {
                        numeric: "auto",
                        units: ["years", "months", "days"],
                        calendary: !0
                    })) : null
                }
                ,
                e.min = function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    if (!n.every(e.isDateTime))
                        throw new S("min requires all arguments be DateTimes");
                    return X(n, (function(e) {
                        return e.valueOf()
                    }
                    ), Math.min)
                }
                ,
                e.max = function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    if (!n.every(e.isDateTime))
                        throw new S("max requires all arguments be DateTimes");
                    return X(n, (function(e) {
                        return e.valueOf()
                    }
                    ), Math.max)
                }
                ,
                e.fromFormatExplain = function(e, t, n) {
                    void 0 === n && (n = {});
                    var i = n
                      , r = i.locale
                      , s = void 0 === r ? null : r
                      , o = i.numberingSystem
                      , a = void 0 === o ? null : o;
                    return xn(dt.fromOpts({
                        locale: s,
                        numberingSystem: a,
                        defaultToEN: !0
                    }), e, t)
                }
                ,
                e.fromStringExplain = function(t, n, i) {
                    return void 0 === i && (i = {}),
                    e.fromFormatExplain(t, n, i)
                }
                ,
                r(e, [{
                    key: "isValid",
                    get: function() {
                        return null === this.invalid
                    }
                }, {
                    key: "invalidReason",
                    get: function() {
                        return this.invalid ? this.invalid.reason : null
                    }
                }, {
                    key: "invalidExplanation",
                    get: function() {
                        return this.invalid ? this.invalid.explanation : null
                    }
                }, {
                    key: "locale",
                    get: function() {
                        return this.isValid ? this.loc.locale : null
                    }
                }, {
                    key: "numberingSystem",
                    get: function() {
                        return this.isValid ? this.loc.numberingSystem : null
                    }
                }, {
                    key: "outputCalendar",
                    get: function() {
                        return this.isValid ? this.loc.outputCalendar : null
                    }
                }, {
                    key: "zone",
                    get: function() {
                        return this._zone
                    }
                }, {
                    key: "zoneName",
                    get: function() {
                        return this.isValid ? this.zone.name : null
                    }
                }, {
                    key: "year",
                    get: function() {
                        return this.isValid ? this.c.year : NaN
                    }
                }, {
                    key: "quarter",
                    get: function() {
                        return this.isValid ? Math.ceil(this.c.month / 3) : NaN
                    }
                }, {
                    key: "month",
                    get: function() {
                        return this.isValid ? this.c.month : NaN
                    }
                }, {
                    key: "day",
                    get: function() {
                        return this.isValid ? this.c.day : NaN
                    }
                }, {
                    key: "hour",
                    get: function() {
                        return this.isValid ? this.c.hour : NaN
                    }
                }, {
                    key: "minute",
                    get: function() {
                        return this.isValid ? this.c.minute : NaN
                    }
                }, {
                    key: "second",
                    get: function() {
                        return this.isValid ? this.c.second : NaN
                    }
                }, {
                    key: "millisecond",
                    get: function() {
                        return this.isValid ? this.c.millisecond : NaN
                    }
                }, {
                    key: "weekYear",
                    get: function() {
                        return this.isValid ? qn(this).weekYear : NaN
                    }
                }, {
                    key: "weekNumber",
                    get: function() {
                        return this.isValid ? qn(this).weekNumber : NaN
                    }
                }, {
                    key: "weekday",
                    get: function() {
                        return this.isValid ? qn(this).weekday : NaN
                    }
                }, {
                    key: "ordinal",
                    get: function() {
                        return this.isValid ? Dn(this.c).ordinal : NaN
                    }
                }, {
                    key: "monthShort",
                    get: function() {
                        return this.isValid ? ln.months("short", {
                            locale: this.locale
                        })[this.month - 1] : null
                    }
                }, {
                    key: "monthLong",
                    get: function() {
                        return this.isValid ? ln.months("long", {
                            locale: this.locale
                        })[this.month - 1] : null
                    }
                }, {
                    key: "weekdayShort",
                    get: function() {
                        return this.isValid ? ln.weekdays("short", {
                            locale: this.locale
                        })[this.weekday - 1] : null
                    }
                }, {
                    key: "weekdayLong",
                    get: function() {
                        return this.isValid ? ln.weekdays("long", {
                            locale: this.locale
                        })[this.weekday - 1] : null
                    }
                }, {
                    key: "offset",
                    get: function() {
                        return this.isValid ? +this.o : NaN
                    }
                }, {
                    key: "offsetNameShort",
                    get: function() {
                        return this.isValid ? this.zone.offsetName(this.ts, {
                            format: "short",
                            locale: this.locale
                        }) : null
                    }
                }, {
                    key: "offsetNameLong",
                    get: function() {
                        return this.isValid ? this.zone.offsetName(this.ts, {
                            format: "long",
                            locale: this.locale
                        }) : null
                    }
                }, {
                    key: "isOffsetFixed",
                    get: function() {
                        return this.isValid ? this.zone.universal : null
                    }
                }, {
                    key: "isInDST",
                    get: function() {
                        return !this.isOffsetFixed && (this.offset > this.set({
                            month: 1
                        }).offset || this.offset > this.set({
                            month: 5
                        }).offset)
                    }
                }, {
                    key: "isInLeapYear",
                    get: function() {
                        return oe(this.year)
                    }
                }, {
                    key: "daysInMonth",
                    get: function() {
                        return ue(this.year, this.month)
                    }
                }, {
                    key: "daysInYear",
                    get: function() {
                        return this.isValid ? ae(this.year) : NaN
                    }
                }, {
                    key: "weeksInWeekYear",
                    get: function() {
                        return this.isValid ? le(this.weekYear) : NaN
                    }
                }], [{
                    key: "DATE_SHORT",
                    get: function() {
                        return O
                    }
                }, {
                    key: "DATE_MED",
                    get: function() {
                        return C
                    }
                }, {
                    key: "DATE_MED_WITH_WEEKDAY",
                    get: function() {
                        return x
                    }
                }, {
                    key: "DATE_FULL",
                    get: function() {
                        return T
                    }
                }, {
                    key: "DATE_HUGE",
                    get: function() {
                        return L
                    }
                }, {
                    key: "TIME_SIMPLE",
                    get: function() {
                        return _
                    }
                }, {
                    key: "TIME_WITH_SECONDS",
                    get: function() {
                        return A
                    }
                }, {
                    key: "TIME_WITH_SHORT_OFFSET",
                    get: function() {
                        return I
                    }
                }, {
                    key: "TIME_WITH_LONG_OFFSET",
                    get: function() {
                        return N
                    }
                }, {
                    key: "TIME_24_SIMPLE",
                    get: function() {
                        return R
                    }
                }, {
                    key: "TIME_24_WITH_SECONDS",
                    get: function() {
                        return M
                    }
                }, {
                    key: "TIME_24_WITH_SHORT_OFFSET",
                    get: function() {
                        return D
                    }
                }, {
                    key: "TIME_24_WITH_LONG_OFFSET",
                    get: function() {
                        return P
                    }
                }, {
                    key: "DATETIME_SHORT",
                    get: function() {
                        return V
                    }
                }, {
                    key: "DATETIME_SHORT_WITH_SECONDS",
                    get: function() {
                        return j
                    }
                }, {
                    key: "DATETIME_MED",
                    get: function() {
                        return U
                    }
                }, {
                    key: "DATETIME_MED_WITH_SECONDS",
                    get: function() {
                        return q
                    }
                }, {
                    key: "DATETIME_MED_WITH_WEEKDAY",
                    get: function() {
                        return F
                    }
                }, {
                    key: "DATETIME_FULL",
                    get: function() {
                        return H
                    }
                }, {
                    key: "DATETIME_FULL_WITH_SECONDS",
                    get: function() {
                        return z
                    }
                }, {
                    key: "DATETIME_HUGE",
                    get: function() {
                        return $
                    }
                }, {
                    key: "DATETIME_HUGE_WITH_SECONDS",
                    get: function() {
                        return B
                    }
                }]),
                e
            }();
            function si(e) {
                if (ri.isDateTime(e))
                    return e;
                if (e && e.valueOf && J(e.valueOf()))
                    return ri.fromJSDate(e);
                if (e && "object" == typeof e)
                    return ri.fromObject(e);
                throw new S("Unknown datetime argument: " + e + ", of type " + typeof e)
            }
            t.DateTime = ri,
            t.Duration = on,
            t.FixedOffsetZone = Ze,
            t.IANAZone = $e,
            t.Info = ln,
            t.Interval = cn,
            t.InvalidZone = Je,
            t.LocalZone = Ue,
            t.Settings = tt,
            t.Zone = Ve
        }
        , function(e, t, n) {
            "use strict";
            var i = n(40);
            e.exports = function(e) {
                if (!i(e))
                    throw new TypeError(e + " is not an Object");
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(6)
              , r = {
                function: !0,
                object: !0
            };
            e.exports = function(e) {
                return i(e) && r[typeof e] || !1
            }
        }
        , function(e, t, n) {
            e.exports = n(42)
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , r = n(10)
              , s = n(43)
              , o = n(16);
            function a(e) {
                var t = new s(e)
                  , n = r(s.prototype.request, t);
                return i.extend(n, s.prototype, t),
                i.extend(n, t),
                n
            }
            var u = a(n(13));
            u.Axios = s,
            u.create = function(e) {
                return a(o(u.defaults, e))
            }
            ,
            u.Cancel = n(17),
            u.CancelToken = n(57),
            u.isCancel = n(12),
            u.all = function(e) {
                return Promise.all(e)
            }
            ,
            u.spread = n(58),
            e.exports = u,
            e.exports.default = u
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , r = n(11)
              , s = n(44)
              , o = n(45)
              , a = n(16);
            function u(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new s,
                    response: new s
                }
            }
            u.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
                (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [o, void 0]
                  , n = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }
                )),
                this.interceptors.response.forEach((function(e) {
                    t.push(e.fulfilled, e.rejected)
                }
                )); t.length; )
                    n = n.then(t.shift(), t.shift());
                return n
            }
            ,
            u.prototype.getUri = function(e) {
                return e = a(this.defaults, e),
                r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            i.forEach(["delete", "get", "head", "options"], (function(e) {
                u.prototype[e] = function(t, n) {
                    return this.request(i.merge(n || {}, {
                        method: e,
                        url: t
                    }))
                }
            }
            )),
            i.forEach(["post", "put", "patch"], (function(e) {
                u.prototype[e] = function(t, n, r) {
                    return this.request(i.merge(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            }
            )),
            e.exports = u
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            function r() {
                this.handlers = []
            }
            r.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }),
                this.handlers.length - 1
            }
            ,
            r.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            r.prototype.forEach = function(e) {
                i.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = r
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , r = n(46)
              , s = n(12)
              , o = n(13);
            function a(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return a(e),
                e.headers = e.headers || {},
                e.data = r(e.data, e.headers, e.transformRequest),
                e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || o.adapter)(e).then((function(t) {
                    return a(e),
                    t.data = r(t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function(t) {
                    return s(t) || (a(e),
                    t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            e.exports = function(e, t, n) {
                return i.forEach(n, (function(n) {
                    e = n(e, t)
                }
                )),
                e
            }
        }
        , function(e, t) {
            var n, i, r = e.exports = {};
            function s() {
                throw new Error("setTimeout has not been defined")
            }
            function o() {
                throw new Error("clearTimeout has not been defined")
            }
            function a(e) {
                if (n === setTimeout)
                    return setTimeout(e, 0);
                if ((n === s || !n) && setTimeout)
                    return n = setTimeout,
                    setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }
            !function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    n = s
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    i = o
                }
            }();
            var u, c = [], l = !1, d = -1;
            function h() {
                l && u && (l = !1,
                u.length ? c = u.concat(c) : d = -1,
                c.length && f())
            }
            function f() {
                if (!l) {
                    var e = a(h);
                    l = !0;
                    for (var t = c.length; t; ) {
                        for (u = c,
                        c = []; ++d < t; )
                            u && u[d].run();
                        d = -1,
                        t = c.length
                    }
                    u = null,
                    l = !1,
                    function(e) {
                        if (i === clearTimeout)
                            return clearTimeout(e);
                        if ((i === o || !i) && clearTimeout)
                            return i = clearTimeout,
                            clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(e)
                }
            }
            function p(e, t) {
                this.fun = e,
                this.array = t
            }
            function v() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                c.push(new p(e,t)),
                1 !== c.length || l || a(f)
            }
            ,
            p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            r.title = "browser",
            r.browser = !0,
            r.env = {},
            r.argv = [],
            r.version = "",
            r.versions = {},
            r.on = v,
            r.addListener = v,
            r.once = v,
            r.off = v,
            r.removeListener = v,
            r.removeAllListeners = v,
            r.emit = v,
            r.prependListener = v,
            r.prependOnceListener = v,
            r.listeners = function(e) {
                return []
            }
            ,
            r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            r.cwd = function() {
                return "/"
            }
            ,
            r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            r.umask = function() {
                return 0
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            e.exports = function(e, t) {
                i.forEach(e, (function(n, i) {
                    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n,
                    delete e[i])
                }
                ))
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(15);
            e.exports = function(e, t, n) {
                var r = n.config.validateStatus;
                !r || r(n.status) ? e(n) : t(i("Request failed with status code " + n.status, n.config, null, n.request, n))
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, i, r) {
                return e.config = t,
                n && (e.code = n),
                e.request = i,
                e.response = r,
                e.isAxiosError = !0,
                e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }
                ,
                e
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(52)
              , r = n(53);
            e.exports = function(e, t) {
                return e && !i(t) ? r(e, t) : t
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1)
              , r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, s, o = {};
                return e ? (i.forEach(e.split("\n"), (function(e) {
                    if (s = e.indexOf(":"),
                    t = i.trim(e.substr(0, s)).toLowerCase(),
                    n = i.trim(e.substr(s + 1)),
                    t) {
                        if (o[t] && r.indexOf(t) >= 0)
                            return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                    }
                }
                )),
                o) : o
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            e.exports = i.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
                function r(e) {
                    var i = e;
                    return t && (n.setAttribute("href", i),
                    i = n.href),
                    n.setAttribute("href", i),
                    {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = r(window.location.href),
                function(t) {
                    var n = i.isString(t) ? r(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
            }() : function() {
                return !0
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(1);
            e.exports = i.isStandardBrowserEnv() ? {
                write: function(e, t, n, r, s, o) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                    i.isString(r) && a.push("path=" + r),
                    i.isString(s) && a.push("domain=" + s),
                    !0 === o && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }
        , function(e, t, n) {
            "use strict";
            var i = n(17);
            function r(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                var n = this;
                e((function(e) {
                    n.reason || (n.reason = new i(e),
                    t(n.reason))
                }
                ))
            }
            r.prototype.throwIfRequested = function() {
                if (this.reason)
                    throw this.reason
            }
            ,
            r.source = function() {
                var e;
                return {
                    token: new r((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
            ,
            e.exports = r
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(5)
              , r = n(19);
            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            var a = function() {
                return {
                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                    addPath: "/locales/add/{{lng}}/{{ns}}",
                    allowMultiLoading: !1,
                    parse: function(e) {
                        return JSON.parse(e)
                    },
                    stringify: JSON.stringify,
                    parsePayload: function(e, t, n) {
                        return function(e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                            e
                        }({}, t, n || "")
                    },
                    request: r.a,
                    reloadInterval: "undefined" == typeof window && 36e5,
                    customHeaders: {},
                    queryStringParams: {},
                    crossDomain: !1,
                    withCredentials: !1,
                    overrideMimeType: !1,
                    requestOptions: {
                        mode: "cors",
                        credentials: "same-origin",
                        cache: "default"
                    }
                }
            }
              , u = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    s(this, e),
                    this.services = t,
                    this.options = n,
                    this.allOptions = i,
                    this.type = "backend",
                    this.init(t, n, i)
                }
                var t, n;
                return t = e,
                (n = [{
                    key: "init",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e,
                        this.options = Object(i.a)(n, this.options || {}, a()),
                        this.allOptions = r,
                        this.options.reloadInterval && setInterval((function() {
                            return t.reload()
                        }
                        ), this.options.reloadInterval)
                    }
                }, {
                    key: "readMulti",
                    value: function(e, t, n) {
                        var i = this.options.loadPath;
                        "function" == typeof this.options.loadPath && (i = this.options.loadPath(e, t));
                        var r = this.services.interpolator.interpolate(i, {
                            lng: e.join("+"),
                            ns: t.join("+")
                        });
                        this.loadUrl(r, n, e, t)
                    }
                }, {
                    key: "read",
                    value: function(e, t, n) {
                        var i = this.options.loadPath;
                        "function" == typeof this.options.loadPath && (i = this.options.loadPath([e], [t]));
                        var r = this.services.interpolator.interpolate(i, {
                            lng: e,
                            ns: t
                        });
                        this.loadUrl(r, n, e, t)
                    }
                }, {
                    key: "loadUrl",
                    value: function(e, t, n, i) {
                        var r = this;
                        this.options.request(this.options, e, void 0, (function(s, o) {
                            if (o && (o.status >= 500 && o.status < 600 || !o.status))
                                return t("failed loading " + e, !0);
                            if (o && o.status >= 400 && o.status < 500)
                                return t("failed loading " + e, !1);
                            if (!o && s && s.message && s.message.indexOf("Failed to fetch") > -1)
                                return t("failed loading " + e, !0);
                            if (s)
                                return t(s, !1);
                            var a, u;
                            try {
                                a = "string" == typeof o.data ? r.options.parse(o.data, n, i) : o.data
                            } catch (t) {
                                u = "failed parsing " + e + " to json"
                            }
                            if (u)
                                return t(u, !1);
                            t(null, a)
                        }
                        ))
                    }
                }, {
                    key: "create",
                    value: function(e, t, n, i) {
                        var r = this;
                        if (this.options.addPath) {
                            "string" == typeof e && (e = [e]);
                            var s = this.options.parsePayload(t, n, i);
                            e.forEach((function(e) {
                                var n = r.services.interpolator.interpolate(r.options.addPath, {
                                    lng: e,
                                    ns: t
                                });
                                r.options.request(r.options, n, s, (function(e, t) {}
                                ))
                            }
                            ))
                        }
                    }
                }, {
                    key: "reload",
                    value: function() {
                        var e = this
                          , t = this.services
                          , n = t.backendConnector
                          , i = t.languageUtils
                          , r = t.logger
                          , s = n.language;
                        if (!s || "cimode" !== s.toLowerCase()) {
                            var o = []
                              , a = function(e) {
                                i.toResolveHierarchy(e).forEach((function(e) {
                                    o.indexOf(e) < 0 && o.push(e)
                                }
                                ))
                            };
                            a(s),
                            this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                return a(e)
                            }
                            )),
                            o.forEach((function(t) {
                                e.allOptions.ns.forEach((function(e) {
                                    n.read(t, e, "read", null, null, (function(i, s) {
                                        i && r.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), i),
                                        !i && s && r.log("loaded namespace ".concat(e, " for language ").concat(t), s),
                                        n.loaded("".concat(t, "|").concat(e), i, s)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                    }
                }]) && o(t.prototype, n),
                e
            }();
            u.type = "backend",
            t.default = u
        }
        , function(e, t, n) {
            "use strict";
            var i = function() {
                if ("undefined" != typeof self)
                    return self;
                if ("undefined" != typeof window)
                    return window;
                if (void 0 !== i)
                    return i;
                throw new Error("unable to locate global object")
            }();
            e.exports = t = i.fetch,
            i.fetch && (t.default = i.fetch.bind(i)),
            t.Headers = i.Headers,
            t.Request = i.Request,
            t.Response = i.Response
        }
        , function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(2)
              , r = n(3)
              , s = []
              , o = s.forEach
              , a = s.slice;
            function u(e) {
                return o.call(a.call(arguments, 1), (function(t) {
                    if (t)
                        for (var n in t)
                            void 0 === e[n] && (e[n] = t[n])
                }
                )),
                e
            }
            var c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
              , l = function(e, t, n) {
                var i = n || {};
                i.path = i.path || "/";
                var r = e + "=" + encodeURIComponent(t);
                if (i.maxAge > 0) {
                    var s = i.maxAge - 0;
                    if (isNaN(s))
                        throw new Error("maxAge should be a Number");
                    r += "; Max-Age=" + Math.floor(s)
                }
                if (i.domain) {
                    if (!c.test(i.domain))
                        throw new TypeError("option domain is invalid");
                    r += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!c.test(i.path))
                        throw new TypeError("option path is invalid");
                    r += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" != typeof i.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                    r += "; Expires=" + i.expires.toUTCString()
                }
                if (i.httpOnly && (r += "; HttpOnly"),
                i.secure && (r += "; Secure"),
                i.sameSite)
                    switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                    case !0:
                        r += "; SameSite=Strict";
                        break;
                    case "lax":
                        r += "; SameSite=Lax";
                        break;
                    case "strict":
                        r += "; SameSite=Strict";
                        break;
                    case "none":
                        r += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                    }
                return r
            }
              , d = {
                name: "cookie",
                lookup: function(e) {
                    var t;
                    if (e.lookupCookie && "undefined" != typeof document) {
                        var n = function(e) {
                            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                for (var r = n[i]; " " === r.charAt(0); )
                                    r = r.substring(1, r.length);
                                if (0 === r.indexOf(t))
                                    return r.substring(t.length, r.length)
                            }
                            return null
                        }(e.lookupCookie);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function(e, t) {
                    t.lookupCookie && "undefined" != typeof document && function(e, t, n, i) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            path: "/",
                            sameSite: "strict"
                        };
                        n && (r.expires = new Date,
                        r.expires.setTime(r.expires.getTime() + 60 * n * 1e3)),
                        i && (r.domain = i),
                        document.cookie = l(e, encodeURIComponent(t), r)
                    }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                }
            }
              , h = {
                name: "querystring",
                lookup: function(e) {
                    var t;
                    if ("undefined" != typeof window)
                        for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                            var r = n[i].indexOf("=");
                            r > 0 && n[i].substring(0, r) === e.lookupQuerystring && (t = n[i].substring(r + 1))
                        }
                    return t
                }
            }
              , f = null
              , p = function() {
                if (null !== f)
                    return f;
                try {
                    f = "undefined" !== window && null !== window.localStorage,
                    window.localStorage.setItem("i18next.translate.boo", "foo"),
                    window.localStorage.removeItem("i18next.translate.boo")
                } catch (e) {
                    f = !1
                }
                return f
            }
              , v = {
                name: "localStorage",
                lookup: function(e) {
                    var t;
                    if (e.lookupLocalStorage && p()) {
                        var n = window.localStorage.getItem(e.lookupLocalStorage);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function(e, t) {
                    t.lookupLocalStorage && p() && window.localStorage.setItem(t.lookupLocalStorage, e)
                }
            }
              , g = null
              , m = function() {
                if (null !== g)
                    return g;
                try {
                    g = "undefined" !== window && null !== window.sessionStorage,
                    window.sessionStorage.setItem("i18next.translate.boo", "foo"),
                    window.sessionStorage.removeItem("i18next.translate.boo")
                } catch (e) {
                    g = !1
                }
                return g
            }
              , y = {
                name: "sessionStorage",
                lookup: function(e) {
                    var t;
                    if (e.lookupSessionStorage && m()) {
                        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function(e, t) {
                    t.lookupSessionStorage && m() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                }
            }
              , S = {
                name: "navigator",
                lookup: function(e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                        if (navigator.languages)
                            for (var n = 0; n < navigator.languages.length; n++)
                                t.push(navigator.languages[n]);
                        navigator.userLanguage && t.push(navigator.userLanguage),
                        navigator.language && t.push(navigator.language)
                    }
                    return t.length > 0 ? t : void 0
                }
            }
              , w = {
                name: "htmlTag",
                lookup: function(e) {
                    var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                    return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")),
                    t
                }
            }
              , b = {
                name: "path",
                lookup: function(e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                        if (n instanceof Array)
                            if ("number" == typeof e.lookupFromPathIndex) {
                                if ("string" != typeof n[e.lookupFromPathIndex])
                                    return;
                                t = n[e.lookupFromPathIndex].replace("/", "")
                            } else
                                t = n[0].replace("/", "")
                    }
                    return t
                }
            }
              , E = {
                name: "subdomain",
                lookup: function(e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                        n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                    }
                    return t
                }
            }
              , k = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(i.a)(this, e),
                    this.type = "languageDetector",
                    this.detectors = {},
                    this.init(t, n)
                }
                return Object(r.a)(e, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e,
                        this.options = u(t, this.options || {}, {
                            order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                            lookupQuerystring: "lng",
                            lookupCookie: "i18next",
                            lookupLocalStorage: "i18nextLng",
                            lookupSessionStorage: "i18nextLng",
                            caches: ["localStorage"],
                            excludeCacheFor: ["cimode"]
                        }),
                        this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                        this.i18nOptions = n,
                        this.addDetector(d),
                        this.addDetector(h),
                        this.addDetector(v),
                        this.addDetector(y),
                        this.addDetector(S),
                        this.addDetector(w),
                        this.addDetector(b),
                        this.addDetector(E)
                    }
                }, {
                    key: "addDetector",
                    value: function(e) {
                        this.detectors[e.name] = e
                    }
                }, {
                    key: "detect",
                    value: function(e) {
                        var t = this;
                        e || (e = this.options.order);
                        var n = [];
                        return e.forEach((function(e) {
                            if (t.detectors[e]) {
                                var i = t.detectors[e].lookup(t.options);
                                i && "string" == typeof i && (i = [i]),
                                i && (n = n.concat(i))
                            }
                        }
                        )),
                        this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                    }
                }, {
                    key: "cacheUserLanguage",
                    value: function(e, t) {
                        var n = this;
                        t || (t = this.options.caches),
                        t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) {
                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                        }
                        )))
                    }
                }]),
                e
            }();
            k.type = "languageDetector",
            t.default = k
        }
        , function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, "Desktop", (function() {
                return oe
            }
            ));
            var i = n(0);
            const r = Object(i.createLogger)("agentx-js-api")
              , s = (e,t)=>({
                info: (...n)=>e.info(t, ...n),
                warn: (...n)=>e.warn(t, ...n),
                error: (...n)=>e.error(t, ...n)
            });
            class o {
                constructor(e) {
                    this.logger = e.logger
                }
                check(e) {
                    return e ? !!e.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."),
                    !1) : (this.logger.error("SERVICE is not defined..."),
                    !1)
                }
            }
            const a = e=>new o(e);
            var u = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                }
                ))
            };
            const c = {
                rps: 120,
                tag: "jsapi"
            }
              , l = {
                rps: 0,
                tag: "jsapi"
            }
              , d = {
                tag: "jsapi"
            }
              , h = e=>e.actionsChannels.createSource("fireGeneralSilentNotification/Req", c)
              , f = e=>e.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", l)
              , p = e=>e.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", l)
              , v = e=>e.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", l)
              , g = e=>e.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", l)
              , m = e=>e.actionsChannels.createSource("addCustomTask", c)
              , y = e=>e.actionsChannels.createSource("getToken/Req", l)
              , S = e=>e.actionsChannels.createDestination("getToken/Res", d)
              , w = e=>e.actionsChannels.createSource("getTaskMap/Req", l)
              , b = e=>e.actionsChannels.createDestination("getTaskMap/Res", d)
              , E = e=>e.actionsChannels.createSource("getMediaTypeQueue/Req", l)
              , k = e=>e.actionsChannels.createDestination("getMediaTypeQueue/Res", d)
              , O = e=>e.actionsChannels.createSource("getIdleCodes/Req", l)
              , C = e=>e.actionsChannels.createDestination("getIdleCodes/Res", d)
              , x = e=>e.actionsChannels.createSource("getWrapUpCodes/Req", l)
              , T = e=>e.actionsChannels.createDestination("getWrapUpCodes/Res", d);
            class L {
                constructor(e) {
                    this.lastReqTs = Date.now(),
                    this.lastReqN = 0,
                    this.logger = e.logger,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                getNextReqId() {
                    const e = Date.now();
                    return this.lastReqTs !== e ? (this.lastReqTs = e,
                    this.lastReqN = 0) : this.lastReqN++,
                    `${this.lastReqTs}_${this.lastReqN}`
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && (this.sourceActionsChannels = {
                        fireGeneralSilentNotification: h(this.SERVICE),
                        fireGeneralAutoDismissNotification: f(this.SERVICE),
                        fireGeneralAcknowledgeNotification: v(this.SERVICE),
                        addCustomTask: m(this.SERVICE),
                        getToken: y(this.SERVICE),
                        getTaskMap: w(this.SERVICE),
                        getMediaTypeQueue: E(this.SERVICE),
                        getIdleCodes: O(this.SERVICE),
                        getWrapUpCodes: x(this.SERVICE)
                    },
                    this.destinationActionsChannels = {
                        fireGeneralAutoDismissNotification: p(this.SERVICE),
                        fireGeneralAcknowledgeNotification: g(this.SERVICE),
                        getToken: S(this.SERVICE),
                        getTaskMap: b(this.SERVICE),
                        getMediaTypeQueue: k(this.SERVICE),
                        getIdleCodes: C(this.SERVICE),
                        getWrapUpCodes: T(this.SERVICE)
                    },
                    this.logger.info("Inited"))
                }
                cleanup() {
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                fireGeneralSilentNotification(...e) {
                    this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...e)
                }
                fireGeneralAutoDismissNotification(...e) {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(t=>{
                                const n = this.getNextReqId()
                                  , r = ({args: [e,s,o,a]})=>{
                                    a === n && (o !== i.Notifications.ItemMeta.Mode.AutoDismiss && o !== i.Notifications.ItemMeta.Mode.Silent || e === i.Notifications.ItemMeta.Status.Deactivated && (t([e, s, o]),
                                    this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(r)))
                                }
                                ;
                                this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(r),
                                this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...e)
                            }
                            )
                    }
                    ))
                }
                fireGeneralAcknowledgeNotification(...e) {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(t=>{
                                const n = this.getNextReqId()
                                  , r = ({args: [e,s,o,a]})=>{
                                    a === n && (o !== i.Notifications.ItemMeta.Mode.Acknowledge && o !== i.Notifications.ItemMeta.Mode.Silent || e === i.Notifications.ItemMeta.Status.Deactivated && (t([e, s, o]),
                                    this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(r)))
                                }
                                ;
                                this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(r),
                                this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...e)
                            }
                            )
                    }
                    ))
                }
                addCustomTask(...e) {
                    this.checkService() && this.sourceActionsChannels.addCustomTask.send(...e)
                }
                getTaskMap() {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(e=>{
                                const t = this.getNextReqId()
                                  , n = ({args: [i,r]})=>{
                                    r === t && (e(i),
                                    this.destinationActionsChannels.getTaskMap.removeListener(n))
                                }
                                ;
                                this.destinationActionsChannels.getTaskMap.addListener(n),
                                this.sourceActionsChannels.getTaskMap.send(t)
                            }
                            )
                    }
                    ))
                }
                getMediaTypeQueue(e) {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(t=>{
                                const n = this.getNextReqId()
                                  , i = ({args: [e,r]})=>{
                                    r === n && (t(e),
                                    this.destinationActionsChannels.getMediaTypeQueue.removeListener(i))
                                }
                                ;
                                this.destinationActionsChannels.getMediaTypeQueue.addListener(i),
                                this.sourceActionsChannels.getMediaTypeQueue.send(e, n)
                            }
                            )
                    }
                    ))
                }
                getToken() {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(e=>{
                                const t = this.getNextReqId()
                                  , n = ({args: [i,r]})=>{
                                    r === t && (e(i),
                                    this.destinationActionsChannels.getToken.removeListener(n))
                                }
                                ;
                                this.destinationActionsChannels.getToken.addListener(n),
                                this.sourceActionsChannels.getToken.send(t)
                            }
                            )
                    }
                    ))
                }
                getIdleCodes() {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(e=>{
                                const t = this.getNextReqId()
                                  , n = ({args: [i,r]})=>{
                                    r === t && (e(i),
                                    this.destinationActionsChannels.getIdleCodes.removeListener(n))
                                }
                                ;
                                this.destinationActionsChannels.getIdleCodes.addListener(n),
                                this.sourceActionsChannels.getIdleCodes.send(t)
                            }
                            )
                    }
                    ))
                }
                getWrapUpCodes() {
                    return u(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return yield new Promise(e=>{
                                const t = this.getNextReqId()
                                  , n = ({args: [i,r]})=>{
                                    r === t && (e(i),
                                    this.destinationActionsChannels.getWrapUpCodes.removeListener(n))
                                }
                                ;
                                this.destinationActionsChannels.getWrapUpCodes.addListener(n),
                                this.sourceActionsChannels.getWrapUpCodes.send(t)
                            }
                            )
                    }
                    ))
                }
            }
            const _ = s(r, "[Actions JSAPI] =>");
            class A {
                constructor(e) {
                    this.isInited = !1,
                    this.listeners = new Map,
                    this.listenersOnce = new Map,
                    this.logger = e.logger
                }
                init(e) {
                    this.aqmServiceEntity = e.aqmServiceEntity,
                    this.aqmServiceEntityString = e.aqmServiceEntityString,
                    this.isInited = !0
                }
                cleanup() {
                    this.removeAllEventListeners(),
                    this.aqmServiceEntity = void 0,
                    this.aqmServiceEntityString = void 0,
                    this.isInited = !1
                }
                _addEventListener(e, t, n) {
                    var i, r, s;
                    const o = n ? "listenersOnce" : "listeners";
                    this[o].has(e) || this[o].set(e, new Map);
                    const a = this[o].get(e)
                      , u = n ? "listenOnce" : "listen"
                      , c = i=>{
                        let r = null;
                        return n && (r = this.aqmServiceEntity[e].listenOnce(()=>this.removeOnceEventListener(e, t))),
                        ()=>{
                            var t;
                            if (i) {
                                n ? (i.stopListenOnce(),
                                r && r.stopListenOnce()) : i.stopListen();
                                const s = [];
                                s.push(`UnBound "${e}"`),
                                n && s.push("Once"),
                                this.aqmServiceEntityString && s.push(`from "${this.aqmServiceEntityString}"`),
                                null === (t = this.logger) || void 0 === t || t.info(s.join(" "))
                            }
                        }
                    }
                    ;
                    if (this.aqmServiceEntity)
                        if (e in this.aqmServiceEntity && u in this.aqmServiceEntity[e]) {
                            const r = this.aqmServiceEntity[e][u](t);
                            a.set(t, c(r));
                            const s = [];
                            s.push(`Bound "${e}"`),
                            n && s.push("Once"),
                            this.aqmServiceEntityString && s.push(`to "${this.aqmServiceEntityString}"`),
                            null === (i = this.logger) || void 0 === i || i.info(s.join(" "))
                        } else
                            null === (r = this.logger) || void 0 === r || r.warn(`EventName "${e}" is not recognized, so won't be subscribed...`);
                    else
                        null === (s = this.logger) || void 0 === s || s.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`)
                }
                _removeEventListener(e, t, n) {
                    const i = n ? "listenersOnce" : "listeners";
                    if (this[i].has(e)) {
                        const n = this[i].get(e);
                        n && (n.has(t) && (n.get(t)(),
                        n.delete(t)),
                        n.size < 1 && this[i].delete(e))
                    }
                }
                addEventListener(e, t) {
                    this._addEventListener(e, t, !1)
                }
                addOnceEventListener(e, t) {
                    this._addEventListener(e, t, !0)
                }
                removeEventListener(e, t) {
                    this._removeEventListener(e, t, !1)
                }
                removeOnceEventListener(e, t) {
                    this._removeEventListener(e, t, !0)
                }
                removeAllEventListeners() {
                    ["listeners", "listenersOnce"].forEach(e=>{
                        this[e].forEach((e,t)=>{
                            e.forEach((e,t)=>e()),
                            e.clear()
                        }
                        ),
                        this[e].clear()
                    }
                    )
                }
            }
            const I = e=>new A(e);
            var N = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class R {
                constructor(e) {
                    this.logger = e.logger,
                    this.aqmEvents = e.aqmEvents,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && (this.aqmEvents.init({
                        aqmServiceEntity: this.SERVICE.aqm.contact,
                        aqmServiceEntityString: "SERVICE.aqm.contact"
                    }),
                    this.logger.info("Inited"))
                }
                cleanup() {
                    this.aqmEvents.cleanup(),
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                accept(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.accept(e)
                    }
                    ))
                }
                consultAccept(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultAccept(e)
                    }
                    ))
                }
                buddyAgents(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.buddyAgents(e)
                    }
                    ))
                }
                end(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.end(e)
                    }
                    ))
                }
                consultEnd(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultEnd(e)
                    }
                    ))
                }
                cancelCtq(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.cancelCtq(e)
                    }
                    ))
                }
                wrapup(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.wrapup(e)
                    }
                    ))
                }
                vteamTransfer(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.vteamTransfer(e)
                    }
                    ))
                }
                blindTransfer(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.blindTransfer(e)
                    }
                    ))
                }
                hold(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.hold(e)
                    }
                    ))
                }
                unHold(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.unHold(e)
                    }
                    ))
                }
                consult(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consult(e)
                    }
                    ))
                }
                consultConference(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultConference(e)
                    }
                    ))
                }
                decline(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.decline(e)
                    }
                    ))
                }
                consultTransfer(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultTransfer(e)
                    }
                    ))
                }
                vteamList(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.vteamList(e)
                    }
                    ))
                }
                pauseRecording(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.pauseRecording(e)
                    }
                    ))
                }
                resumeRecording(e) {
                    var t;
                    return N(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.resumeRecording(e)
                    }
                    ))
                }
                addEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addEventListener(e, t)
                }
                addOnceEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                }
                removeEventListener(e, t) {
                    this.aqmEvents.removeEventListener(e, t)
                }
                removeOnceEventListener(e, t) {
                    this.aqmEvents.removeOnceEventListener(e, t)
                }
                removeAllEventListeners() {
                    this.aqmEvents.removeAllEventListeners()
                }
            }
            const M = s(r, "[AgentContact JSAPI] =>")
              , D = s(M, "[AqmServiceEvents: Contact] => ");
            var P = n(4)
              , V = n.n(P)
              , j = n(8)
              , U = n.n(j)
              , q = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                }
                ))
            };
            const F = {
                agentName: void 0,
                agentProfileID: void 0,
                agentSessionId: void 0,
                teamId: void 0,
                teamName: void 0,
                dn: void 0,
                status: void 0,
                subStatus: void 0,
                idleCodes: void 0,
                wrapupCodes: void 0,
                outDialRegex: void 0,
                isOutboundEnabledForTenant: void 0,
                isOutboundEnabledForAgent: void 0
            };
            class H {
                constructor(e) {
                    this.emitter = V()(),
                    this.listeners = new Set,
                    this.teams = [],
                    this.latestData = JSON.parse(JSON.stringify(F)),
                    this.logger = e.logger,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                emit(e, ...t) {
                    this.emitter.emit(e, ...t)
                }
                update(e) {
                    const t = Object.keys(e).reduce((t,n)=>{
                        const i = e[n]
                          , r = this.latestData[n];
                        return JSON.stringify(i) !== JSON.stringify(r) && t.push({
                            name: n,
                            value: i,
                            oldValue: r
                        }),
                        t
                    }
                    , []);
                    t.length && (t.forEach(e=>this.latestData[e.name] = e.value),
                    this.emit("updated", t))
                }
                static getOutdialRegex(e) {
                    if (e && e.dialPlanEntity) {
                        const t = e.dialPlanEntity.find(e=>"Any Format" === e.name);
                        if (t)
                            return t.regex
                    }
                    return ""
                }
                static findTeamName(e, t) {
                    const n = e.find(e=>e.teamId === t);
                    return (null == n ? void 0 : n.teamName) || ""
                }
                init(e) {
                    return q(this, void 0, void 0, (function*() {
                        e && (this.SERVICE = e),
                        this.checkService() && (yield this.fetchLatestData(),
                        this.subscribeSelfDataEvents(),
                        this.logger.info("Inited"))
                    }
                    ))
                }
                cleanup() {
                    this.unsubscribeSelfDataEvents(),
                    this.removeAllEventListeners(),
                    this.SERVICE = void 0,
                    this.update(JSON.parse(JSON.stringify(F))),
                    this.logger.info("Cleaned")
                }
                fetchLatestData() {
                    var e, t, n;
                    return q(this, void 0, void 0, (function*() {
                        const i = (null === (e = this.SERVICE) || void 0 === e ? void 0 : e.conf.profile) ? null === (t = this.SERVICE) || void 0 === t ? void 0 : t.conf.profile : yield null === (n = this.SERVICE) || void 0 === n ? void 0 : n.conf.fetchProfile();
                        if (i) {
                            const {teams: e, agentName: t, agentProfileID: n, defaultDn: r, defaultIdleName: s, agentSubStatus: o, idleCodes: a, wrapupCodes: u, dialPlan: c, isOutboundEnabledForTenant: l, isOutboundEnabledForAgent: d} = i;
                            this.teams = e;
                            const h = r
                              , f = s
                              , p = o
                              , v = H.getOutdialRegex(c);
                            this.update({
                                agentName: t,
                                agentProfileID: n,
                                dn: h,
                                status: f,
                                subStatus: p,
                                idleCodes: a,
                                wrapupCodes: u,
                                outDialRegex: v,
                                isOutboundEnabledForTenant: l,
                                isOutboundEnabledForAgent: d
                            })
                        }
                    }
                    ))
                }
                subscribeSelfDataEvents() {
                    var e, t, n, i;
                    if (this.checkService()) {
                        {
                            const t = null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.eAgentReloginSuccess.listen(({data: e})=>{
                                const {agentSessionId: t, teamId: n, dn: i, status: r, subStatus: s} = e
                                  , o = H.findTeamName(this.teams, n);
                                this.update({
                                    agentSessionId: t,
                                    teamId: n,
                                    teamName: o,
                                    dn: i,
                                    status: r,
                                    subStatus: s
                                })
                            }
                            );
                            this.listeners.add(()=>null == t ? void 0 : t.stopListen())
                        }
                        {
                            const e = null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.agent.eAgentStationLoginSuccess.listen(({data: e})=>{
                                const {agentSessionId: t, teamId: n, status: i, subStatus: r} = e
                                  , s = H.findTeamName(this.teams, n);
                                this.update({
                                    agentSessionId: t,
                                    teamId: n,
                                    teamName: s,
                                    status: i,
                                    subStatus: r
                                })
                            }
                            );
                            this.listeners.add(()=>null == e ? void 0 : e.stopListen())
                        }
                        {
                            const e = null === (n = this.SERVICE) || void 0 === n ? void 0 : n.aqm.agent.eAgentStateChangeSuccess.listen(({data: e})=>{
                                const {agentSessionId: t, status: n, subStatus: i} = e;
                                this.update({
                                    agentSessionId: t,
                                    status: n,
                                    subStatus: i
                                })
                            }
                            );
                            this.listeners.add(()=>null == e ? void 0 : e.stopListen())
                        }
                        {
                            const e = null === (i = this.SERVICE) || void 0 === i ? void 0 : i.aqm.agent.eAgentDNRegistered.listen(({data: e})=>{
                                const {dn: t} = e;
                                this.update({
                                    dn: t
                                })
                            }
                            );
                            this.listeners.add(()=>null == e ? void 0 : e.stopListen())
                        }
                    }
                }
                unsubscribeSelfDataEvents() {
                    this.listeners.forEach(e=>e()),
                    this.listeners.clear()
                }
                stateChange(e) {
                    var t;
                    return q(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.agent.stateChange({
                                data: e
                            })
                    }
                    ))
                }
                mockOutdialAniList() {
                    var e;
                    return q(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.mockOutdialAniList({
                                p: null
                            })
                    }
                    ))
                }
                fetchAddressBooks() {
                    var e;
                    return q(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.fetchAddressBooks({
                                p: null
                            })
                    }
                    ))
                }
                addEventListener(e, t) {
                    this.checkService() && this.emitter.on(e, t)
                }
                removeEventListener(e, t) {
                    this.checkService() && this.emitter.off(e, t)
                }
                removeAllEventListeners() {
                    U()(this.emitter)
                }
            }
            const z = s(r, "[AgentInfo JSAPI] =>");
            var $ = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class B {
                constructor(e) {
                    this.emitter = V()(),
                    this.logger = e.logger,
                    this.agentxSERVICE = e.SERVICE
                }
                waitUntil(e) {
                    return $(this, void 0, void 0, (function*() {
                        "function" == typeof e && (yield new Promise(e=>setTimeout(e, 1e3 / 30)),
                        !e() && (yield this.waitUntil(e)))
                    }
                    ))
                }
                checkService(e) {
                    return $(this, void 0, void 0, (function*() {
                        e ? (e.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."),
                        yield this.waitUntil(()=>e.isInited)),
                        this.logger.info("SERVICE is inited. Continuing..."),
                        this.emit("inited")) : this.logger.error("SERVICE is not defiend...")
                    }
                    ))
                }
                emit(e, ...t) {
                    this.emitter.emit(e, ...t)
                }
                init() {
                    return $(this, void 0, void 0, (function*() {
                        this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE) : this.logger.error("SERVICE is not defined...")
                    }
                    ))
                }
                cleanup() {
                    this.agentxSERVICE = void 0,
                    this.emit("cleaned"),
                    this.logger.info("Cleaned")
                }
                get clientLocale() {
                    return null != window.navigator.languages ? window.navigator.languages[0] : window.navigator.language
                }
                addEventListener(e, t) {
                    this.emitter.on(e, t)
                }
                removeEventListener(e, t) {
                    this.emitter.off(e, t)
                }
            }
            const Z = s(r, "[Config JSAPI] =>");
            var J = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class W {
                constructor(e) {
                    this.logger = e.logger,
                    this.aqmEvents = e.aqmEvents,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && (this.aqmEvents.init({
                        aqmServiceEntity: this.SERVICE.aqm.dialer,
                        aqmServiceEntityString: "SERVICE.aqm.dialer"
                    }),
                    this.logger.info("Inited"))
                }
                cleanup() {
                    this.aqmEvents.cleanup(),
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                startOutdial(e) {
                    var t;
                    return J(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.dialer.startOutdial(e)
                    }
                    ))
                }
                updateCadVariables(e) {
                    var t;
                    return J(this, void 0, void 0, (function*() {
                        if (this.checkService())
                            return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.dialer.updateCadVariables(e)
                    }
                    ))
                }
                addEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addEventListener(e, t)
                }
                addOnceEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                }
                removeEventListener(e, t) {
                    this.aqmEvents.removeEventListener(e, t)
                }
                removeOnceEventListener(e, t) {
                    this.aqmEvents.removeOnceEventListener(e, t)
                }
                removeAllEventListeners() {
                    this.aqmEvents.removeAllEventListeners()
                }
            }
            const G = s(r, "[Dialer JSAPI] =>")
              , K = s(G, "[AqmServiceEvents: Dialer] =>");
            class Y {
                constructor(e) {
                    this.logger = e.logger,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && this.logger.info("Inited")
                }
                cleanup() {
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                createInstance(e) {
                    return i.I18N.createService(e)
                }
                createMixin(e) {
                    return i.I18N.createMixin(e)
                }
                get DEFAULT_INIT_OPTIONS() {
                    var e;
                    if (this.checkService())
                        return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.i18n.DEFAULT_INIT_OPTIONS
                }
                getMergedInitOptions(...e) {
                    return i.I18N.mergeServiceInitOptions(...e)
                }
            }
            const X = s(r, "[I18N JSAPI] =>");
            class Q {
                constructor(e) {
                    this.clientLoggers = new Map,
                    this.logger = e.logger
                }
                createLogger(e) {
                    const t = Object(i.createLogger)(e);
                    return this.clientLoggers.set(e, t),
                    this.logger.info(`Client logger created: "${e}"`),
                    t
                }
                cleanupLogs(e) {
                    this.clientLoggers.has(e) && i.Logger.POOL.cleanupPrefixedLogs(e)
                }
                browserDownloadLogsJson(e) {
                    this.clientLoggers.has(e) && i.Logger.POOL.browserDownloadPrefixedLogsJson(e)
                }
                browserDownloadLogsText(e) {
                    this.clientLoggers.has(e) && i.Logger.POOL.browserDownloadPrefixedLogsText(e)
                }
                getLogsCollection(e) {
                    if (this.clientLoggers.has(e))
                        return i.Logger.POOL.getPrefixedLogsCollection(e)
                }
                getLogsJsonUrl(e) {
                    if (this.clientLoggers.has(e))
                        return i.Logger.POOL.getPrefixedLogsJsonUrl(e)
                }
                getLogsTextUrl(e) {
                    if (this.clientLoggers.has(e))
                        return i.Logger.POOL.getPrefixedLogsTextUrl(e)
                }
            }
            const ee = s(r, "[Logger JSAPI] =>");
            class te {
                constructor(e) {
                    this.logger = e.logger,
                    this.aqmEvents = e.aqmEvents,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && (this.aqmEvents.init({
                        aqmServiceEntity: this.SERVICE.aqm.screenpop,
                        aqmServiceEntityString: "SERVICE.aqm.screenpop"
                    }),
                    this.logger.info("Inited"))
                }
                cleanup() {
                    this.aqmEvents.cleanup(),
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                addEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addEventListener(e, t)
                }
                addOnceEventListener(e, t) {
                    this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                }
                removeEventListener(e, t) {
                    this.aqmEvents.removeEventListener(e, t)
                }
                removeOnceEventListener(e, t) {
                    this.aqmEvents.removeOnceEventListener(e, t)
                }
                removeAllEventListeners() {
                    this.aqmEvents.removeAllEventListeners()
                }
            }
            const ne = s(r, "[ScreenPop JSAPI] =>")
              , ie = s(ne, "[AqmServiceEvents: ScreenPop] =>");
            class re {
                constructor(e) {
                    this.logger = e.logger,
                    this.serviceChecker = e.serviceChecker
                }
                checkService() {
                    return this.serviceChecker.check(this.SERVICE)
                }
                init(e) {
                    e && (this.SERVICE = e),
                    this.checkService() && this.logger.info("Inited")
                }
                cleanup() {
                    this.SERVICE = void 0,
                    this.logger.info("Cleaned")
                }
                listenKeyPress(...e) {
                    var t;
                    this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenKeyPress(...e))
                }
                listenKeyConflict(...e) {
                    var t;
                    this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenKeyConflict(...e))
                }
                listenConflictResolved(...e) {
                    var t;
                    this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenConflictResolved(...e))
                }
                register(...e) {
                    var t;
                    this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.register(...e))
                }
                unregisterKeys(...e) {
                    var t;
                    this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.unregisterKeys(...e))
                }
                getRegisteredKeys() {
                    var e;
                    if (this.checkService())
                        return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.getRegisteredKeys()
                }
                get DEFAULT_SHORTCUT_KEYS() {
                    var e;
                    return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.DEFAULT_SHORTCUT_KEYS
                }
                get MODIFIERS() {
                    var e;
                    return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.MODIFIERS
                }
                get REGISTERED_KEYS() {
                    var e;
                    return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.REGISTERED_KEYS
                }
            }
            const se = s(r, "[ShortcutKey JSAPI] =>")
              , oe = (()=>{
                AGENTX_SERVICE ? r.info('Found global "AGENTX_SERVICE"!') : r.error('Missed global "AGENTX_SERVICE"...');
                const e = (t = AGENTX_SERVICE,
                new B({
                    logger: Z,
                    SERVICE: t
                }));
                var t;
                const n = new Q({
                    logger: ee
                })
                  , i = new re({
                    logger: se,
                    serviceChecker: a({
                        logger: se
                    })
                })
                  , s = new L({
                    logger: _,
                    serviceChecker: a({
                        logger: _
                    })
                })
                  , o = new H({
                    logger: z,
                    serviceChecker: a({
                        logger: z
                    })
                })
                  , u = new R({
                    logger: M,
                    serviceChecker: a({
                        logger: M
                    }),
                    aqmEvents: I({
                        logger: D
                    })
                })
                  , c = new W({
                    logger: G,
                    aqmEvents: I({
                        logger: K
                    }),
                    serviceChecker: a({
                        logger: G
                    })
                })
                  , l = new te({
                    logger: ne,
                    aqmEvents: I({
                        logger: ie
                    }),
                    serviceChecker: a({
                        logger: ne
                    })
                })
                  , d = new Y({
                    logger: X,
                    serviceChecker: a({
                        logger: X
                    })
                });
                return e.addEventListener("inited", ()=>{
                    u.init(AGENTX_SERVICE),
                    o.init(AGENTX_SERVICE),
                    c.init(AGENTX_SERVICE),
                    l.init(AGENTX_SERVICE),
                    i.init(AGENTX_SERVICE),
                    s.init(AGENTX_SERVICE),
                    d.init(AGENTX_SERVICE)
                }
                ),
                e.addEventListener("cleaned", ()=>{
                    u.cleanup(),
                    o.cleanup(),
                    c.cleanup(),
                    l.cleanup(),
                    i.cleanup(),
                    d.cleanup(),
                    s.cleanup()
                }
                ),
                {
                    config: e,
                    logger: n,
                    shortcutKey: i,
                    actions: s,
                    agentContact: u,
                    agentStateInfo: o,
                    dialer: c,
                    screenpop: l,
                    i18n: d
                }
            }
            )()
        }
        , function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, "v1", (function() {
                return f
            }
            )),
            n.d(t, "v3", (function() {
                return b
            }
            )),
            n.d(t, "v4", (function() {
                return E
            }
            )),
            n.d(t, "v5", (function() {
                return C
            }
            ));
            var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)
              , r = new Uint8Array(16);
            function s() {
                if (!i)
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return i(r)
            }
            for (var o = [], a = 0; a < 256; ++a)
                o[a] = (a + 256).toString(16).substr(1);
            var u, c, l = function(e, t) {
                var n = t || 0
                  , i = o;
                return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
            }, d = 0, h = 0, f = function(e, t, n) {
                var i = t && n || 0
                  , r = t || []
                  , o = (e = e || {}).node || u
                  , a = void 0 !== e.clockseq ? e.clockseq : c;
                if (null == o || null == a) {
                    var f = e.random || (e.rng || s)();
                    null == o && (o = u = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
                    null == a && (a = c = 16383 & (f[6] << 8 | f[7]))
                }
                var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
                  , v = void 0 !== e.nsecs ? e.nsecs : h + 1
                  , g = p - d + (v - h) / 1e4;
                if (g < 0 && void 0 === e.clockseq && (a = a + 1 & 16383),
                (g < 0 || p > d) && void 0 === e.nsecs && (v = 0),
                v >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                d = p,
                h = v,
                c = a;
                var m = (1e4 * (268435455 & (p += 122192928e5)) + v) % 4294967296;
                r[i++] = m >>> 24 & 255,
                r[i++] = m >>> 16 & 255,
                r[i++] = m >>> 8 & 255,
                r[i++] = 255 & m;
                var y = p / 4294967296 * 1e4 & 268435455;
                r[i++] = y >>> 8 & 255,
                r[i++] = 255 & y,
                r[i++] = y >>> 24 & 15 | 16,
                r[i++] = y >>> 16 & 255,
                r[i++] = a >>> 8 | 128,
                r[i++] = 255 & a;
                for (var S = 0; S < 6; ++S)
                    r[i + S] = o[S];
                return t || l(r)
            }, p = function(e, t, n) {
                var i = function(e, i, r, s) {
                    var o = r && s || 0;
                    if ("string" == typeof e && (e = function(e) {
                        e = unescape(encodeURIComponent(e));
                        for (var t = new Array(e.length), n = 0; n < e.length; n++)
                            t[n] = e.charCodeAt(n);
                        return t
                    }(e)),
                    "string" == typeof i && (i = function(e) {
                        var t = [];
                        return e.replace(/[a-fA-F0-9]{2}/g, (function(e) {
                            t.push(parseInt(e, 16))
                        }
                        )),
                        t
                    }(i)),
                    !Array.isArray(e))
                        throw TypeError("value must be an array of bytes");
                    if (!Array.isArray(i) || 16 !== i.length)
                        throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                    var a = n(i.concat(e));
                    if (a[6] = 15 & a[6] | t,
                    a[8] = 63 & a[8] | 128,
                    r)
                        for (var u = 0; u < 16; ++u)
                            r[o + u] = a[u];
                    return r || l(a)
                };
                try {
                    i.name = e
                } catch (e) {}
                return i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
                i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
                i
            };
            function v(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function g(e, t, n, i, r, s) {
                return v((o = v(v(t, e), v(i, s))) << (a = r) | o >>> 32 - a, n);
                var o, a
            }
            function m(e, t, n, i, r, s, o) {
                return g(t & n | ~t & i, e, t, r, s, o)
            }
            function y(e, t, n, i, r, s, o) {
                return g(t & i | n & ~i, e, t, r, s, o)
            }
            function S(e, t, n, i, r, s, o) {
                return g(t ^ n ^ i, e, t, r, s, o)
            }
            function w(e, t, n, i, r, s, o) {
                return g(n ^ (t | ~i), e, t, r, s, o)
            }
            var b = p("v3", 48, (function(e) {
                if ("string" == typeof e) {
                    var t = unescape(encodeURIComponent(e));
                    e = new Array(t.length);
                    for (var n = 0; n < t.length; n++)
                        e[n] = t.charCodeAt(n)
                }
                return function(e) {
                    var t, n, i, r = [], s = 32 * e.length;
                    for (t = 0; t < s; t += 8)
                        n = e[t >> 5] >>> t % 32 & 255,
                        i = parseInt("0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n), 16),
                        r.push(i);
                    return r
                }(function(e, t) {
                    var n, i, r, s, o;
                    e[t >> 5] |= 128 << t % 32,
                    e[14 + (t + 64 >>> 9 << 4)] = t;
                    var a = 1732584193
                      , u = -271733879
                      , c = -1732584194
                      , l = 271733878;
                    for (n = 0; n < e.length; n += 16)
                        i = a,
                        r = u,
                        s = c,
                        o = l,
                        a = m(a, u, c, l, e[n], 7, -680876936),
                        l = m(l, a, u, c, e[n + 1], 12, -389564586),
                        c = m(c, l, a, u, e[n + 2], 17, 606105819),
                        u = m(u, c, l, a, e[n + 3], 22, -1044525330),
                        a = m(a, u, c, l, e[n + 4], 7, -176418897),
                        l = m(l, a, u, c, e[n + 5], 12, 1200080426),
                        c = m(c, l, a, u, e[n + 6], 17, -1473231341),
                        u = m(u, c, l, a, e[n + 7], 22, -45705983),
                        a = m(a, u, c, l, e[n + 8], 7, 1770035416),
                        l = m(l, a, u, c, e[n + 9], 12, -1958414417),
                        c = m(c, l, a, u, e[n + 10], 17, -42063),
                        u = m(u, c, l, a, e[n + 11], 22, -1990404162),
                        a = m(a, u, c, l, e[n + 12], 7, 1804603682),
                        l = m(l, a, u, c, e[n + 13], 12, -40341101),
                        c = m(c, l, a, u, e[n + 14], 17, -1502002290),
                        a = y(a, u = m(u, c, l, a, e[n + 15], 22, 1236535329), c, l, e[n + 1], 5, -165796510),
                        l = y(l, a, u, c, e[n + 6], 9, -1069501632),
                        c = y(c, l, a, u, e[n + 11], 14, 643717713),
                        u = y(u, c, l, a, e[n], 20, -373897302),
                        a = y(a, u, c, l, e[n + 5], 5, -701558691),
                        l = y(l, a, u, c, e[n + 10], 9, 38016083),
                        c = y(c, l, a, u, e[n + 15], 14, -660478335),
                        u = y(u, c, l, a, e[n + 4], 20, -405537848),
                        a = y(a, u, c, l, e[n + 9], 5, 568446438),
                        l = y(l, a, u, c, e[n + 14], 9, -1019803690),
                        c = y(c, l, a, u, e[n + 3], 14, -187363961),
                        u = y(u, c, l, a, e[n + 8], 20, 1163531501),
                        a = y(a, u, c, l, e[n + 13], 5, -1444681467),
                        l = y(l, a, u, c, e[n + 2], 9, -51403784),
                        c = y(c, l, a, u, e[n + 7], 14, 1735328473),
                        a = S(a, u = y(u, c, l, a, e[n + 12], 20, -1926607734), c, l, e[n + 5], 4, -378558),
                        l = S(l, a, u, c, e[n + 8], 11, -2022574463),
                        c = S(c, l, a, u, e[n + 11], 16, 1839030562),
                        u = S(u, c, l, a, e[n + 14], 23, -35309556),
                        a = S(a, u, c, l, e[n + 1], 4, -1530992060),
                        l = S(l, a, u, c, e[n + 4], 11, 1272893353),
                        c = S(c, l, a, u, e[n + 7], 16, -155497632),
                        u = S(u, c, l, a, e[n + 10], 23, -1094730640),
                        a = S(a, u, c, l, e[n + 13], 4, 681279174),
                        l = S(l, a, u, c, e[n], 11, -358537222),
                        c = S(c, l, a, u, e[n + 3], 16, -722521979),
                        u = S(u, c, l, a, e[n + 6], 23, 76029189),
                        a = S(a, u, c, l, e[n + 9], 4, -640364487),
                        l = S(l, a, u, c, e[n + 12], 11, -421815835),
                        c = S(c, l, a, u, e[n + 15], 16, 530742520),
                        a = w(a, u = S(u, c, l, a, e[n + 2], 23, -995338651), c, l, e[n], 6, -198630844),
                        l = w(l, a, u, c, e[n + 7], 10, 1126891415),
                        c = w(c, l, a, u, e[n + 14], 15, -1416354905),
                        u = w(u, c, l, a, e[n + 5], 21, -57434055),
                        a = w(a, u, c, l, e[n + 12], 6, 1700485571),
                        l = w(l, a, u, c, e[n + 3], 10, -1894986606),
                        c = w(c, l, a, u, e[n + 10], 15, -1051523),
                        u = w(u, c, l, a, e[n + 1], 21, -2054922799),
                        a = w(a, u, c, l, e[n + 8], 6, 1873313359),
                        l = w(l, a, u, c, e[n + 15], 10, -30611744),
                        c = w(c, l, a, u, e[n + 6], 15, -1560198380),
                        u = w(u, c, l, a, e[n + 13], 21, 1309151649),
                        a = w(a, u, c, l, e[n + 4], 6, -145523070),
                        l = w(l, a, u, c, e[n + 11], 10, -1120210379),
                        c = w(c, l, a, u, e[n + 2], 15, 718787259),
                        u = w(u, c, l, a, e[n + 9], 21, -343485551),
                        a = v(a, i),
                        u = v(u, r),
                        c = v(c, s),
                        l = v(l, o);
                    return [a, u, c, l]
                }(function(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0,
                    t = 0; t < n.length; t += 1)
                        n[t] = 0;
                    var i = 8 * e.length;
                    for (t = 0; t < i; t += 8)
                        n[t >> 5] |= (255 & e[t / 8]) << t % 32;
                    return n
                }(e), 8 * e.length))
            }
            ))
              , E = function(e, t, n) {
                var i = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null,
                e = null);
                var r = (e = e || {}).random || (e.rng || s)();
                if (r[6] = 15 & r[6] | 64,
                r[8] = 63 & r[8] | 128,
                t)
                    for (var o = 0; o < 16; ++o)
                        t[i + o] = r[o];
                return t || l(r)
            };
            function k(e, t, n, i) {
                switch (e) {
                case 0:
                    return t & n ^ ~t & i;
                case 1:
                    return t ^ n ^ i;
                case 2:
                    return t & n ^ t & i ^ n & i;
                case 3:
                    return t ^ n ^ i
                }
            }
            function O(e, t) {
                return e << t | e >>> 32 - t
            }
            var C = p("v5", 80, (function(e) {
                var t = [1518500249, 1859775393, 2400959708, 3395469782]
                  , n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof e) {
                    var i = unescape(encodeURIComponent(e));
                    e = new Array(i.length);
                    for (var r = 0; r < i.length; r++)
                        e[r] = i.charCodeAt(r)
                }
                e.push(128);
                var s = e.length / 4 + 2
                  , o = Math.ceil(s / 16)
                  , a = new Array(o);
                for (r = 0; r < o; r++) {
                    a[r] = new Array(16);
                    for (var u = 0; u < 16; u++)
                        a[r][u] = e[64 * r + 4 * u] << 24 | e[64 * r + 4 * u + 1] << 16 | e[64 * r + 4 * u + 2] << 8 | e[64 * r + 4 * u + 3]
                }
                for (a[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
                a[o - 1][14] = Math.floor(a[o - 1][14]),
                a[o - 1][15] = 8 * (e.length - 1) & 4294967295,
                r = 0; r < o; r++) {
                    for (var c = new Array(80), l = 0; l < 16; l++)
                        c[l] = a[r][l];
                    for (l = 16; l < 80; l++)
                        c[l] = O(c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16], 1);
                    var d = n[0]
                      , h = n[1]
                      , f = n[2]
                      , p = n[3]
                      , v = n[4];
                    for (l = 0; l < 80; l++) {
                        var g = Math.floor(l / 20)
                          , m = O(d, 5) + k(g, h, f, p) + v + t[g] + c[l] >>> 0;
                        v = p,
                        p = f,
                        f = O(h, 30) >>> 0,
                        h = d,
                        d = m
                    }
                    n[0] = n[0] + d >>> 0,
                    n[1] = n[1] + h >>> 0,
                    n[2] = n[2] + f >>> 0,
                    n[3] = n[3] + p >>> 0,
                    n[4] = n[4] + v >>> 0
                }
                return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
            }
            ))
        }
        , function(e, t, n) {
            "use strict";
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {}
                      , i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    i.forEach((function(t) {
                        r(e, t, n[t])
                    }
                    ))
                }
                return e
            }
            n.r(t);
            var o = n(2)
              , a = n(3);
            function u(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function c(e, t) {
                return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function h(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }
            var f = {
                type: "logger",
                log: function(e) {
                    this.output("log", e)
                },
                warn: function(e) {
                    this.output("warn", e)
                },
                error: function(e) {
                    this.output("error", e)
                },
                output: function(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            }
              , p = new (function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(o.a)(this, e),
                    this.init(t, n)
                }
                return Object(a.a)(e, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = t.prefix || "i18next:",
                        this.logger = e || f,
                        this.options = t,
                        this.debug = t.debug
                    }
                }, {
                    key: "setDebug",
                    value: function(e) {
                        this.debug = e
                    }
                }, {
                    key: "log",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return this.forward(t, "log", "", !0)
                    }
                }, {
                    key: "warn",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return this.forward(t, "warn", "", !0)
                    }
                }, {
                    key: "error",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return this.forward(t, "error", "")
                    }
                }, {
                    key: "deprecate",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                    }
                }, {
                    key: "forward",
                    value: function(e, t, n, i) {
                        return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                        this.logger[t](e))
                    }
                }, {
                    key: "create",
                    value: function(t) {
                        return new e(this.logger,s({}, {
                            prefix: "".concat(this.prefix, ":").concat(t, ":")
                        }, this.options))
                    }
                }]),
                e
            }())
              , v = function() {
                function e() {
                    Object(o.a)(this, e),
                    this.observers = {}
                }
                return Object(a.a)(e, [{
                    key: "on",
                    value: function(e, t) {
                        var n = this;
                        return e.split(" ").forEach((function(e) {
                            n.observers[e] = n.observers[e] || [],
                            n.observers[e].push(t)
                        }
                        )),
                        this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                            return e !== t
                        }
                        )) : delete this.observers[e])
                    }
                }, {
                    key: "emit",
                    value: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                            n[i - 1] = arguments[i];
                        if (this.observers[e]) {
                            var r = [].concat(this.observers[e]);
                            r.forEach((function(e) {
                                e.apply(void 0, n)
                            }
                            ))
                        }
                        if (this.observers["*"]) {
                            var s = [].concat(this.observers["*"]);
                            s.forEach((function(t) {
                                t.apply(t, [e].concat(n))
                            }
                            ))
                        }
                    }
                }]),
                e
            }();
            function g() {
                var e, t, n = new Promise((function(n, i) {
                    e = n,
                    t = i
                }
                ));
                return n.resolve = e,
                n.reject = t,
                n
            }
            function m(e) {
                return null == e ? "" : "" + e
            }
            function y(e, t, n) {
                e.forEach((function(e) {
                    t[e] && (n[e] = t[e])
                }
                ))
            }
            function S(e, t, n) {
                function i(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }
                function r() {
                    return !e || "string" == typeof e
                }
                for (var s = "string" != typeof t ? [].concat(t) : t.split("."); s.length > 1; ) {
                    if (r())
                        return {};
                    var o = i(s.shift());
                    !e[o] && n && (e[o] = new n),
                    e = e[o]
                }
                return r() ? {} : {
                    obj: e,
                    k: i(s.shift())
                }
            }
            function w(e, t, n) {
                var i = S(e, t, Object);
                i.obj[i.k] = n
            }
            function b(e, t) {
                var n = S(e, t)
                  , i = n.obj
                  , r = n.k;
                if (i)
                    return i[r]
            }
            function E(e, t, n) {
                var i = b(e, n);
                return void 0 !== i ? i : b(t, n)
            }
            function k(e, t, n) {
                for (var i in t)
                    "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i]instanceof String || "string" == typeof t[i] || t[i]instanceof String ? n && (e[i] = t[i]) : k(e[i], t[i], n) : e[i] = t[i]);
                return e
            }
            function O(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var C = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            function x(e) {
                return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return C[e]
                }
                )) : e
            }
            var T = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
              , L = function(e) {
                function t(e) {
                    var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    return Object(o.a)(this, t),
                    n = c(this, l(t).call(this)),
                    T && v.call(u(n)),
                    n.data = e || {},
                    n.options = i,
                    void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                    n
                }
                return h(t, e),
                Object(a.a)(t, [{
                    key: "addNamespaces",
                    value: function(e) {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }
                }, {
                    key: "removeNamespaces",
                    value: function(e) {
                        var t = this.options.ns.indexOf(e);
                        t > -1 && this.options.ns.splice(t, 1)
                    }
                }, {
                    key: "getResource",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                          , r = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator
                          , s = [e, t];
                        return n && "string" != typeof n && (s = s.concat(n)),
                        n && "string" == typeof n && (s = s.concat(r ? n.split(r) : n)),
                        e.indexOf(".") > -1 && (s = e.split(".")),
                        b(this.data, s)
                    }
                }, {
                    key: "addResource",
                    value: function(e, t, n, i) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        }
                          , s = this.options.keySeparator;
                        void 0 === s && (s = ".");
                        var o = [e, t];
                        n && (o = o.concat(s ? n.split(s) : n)),
                        e.indexOf(".") > -1 && (i = t,
                        t = (o = e.split("."))[1]),
                        this.addNamespaces(t),
                        w(this.data, o, i),
                        r.silent || this.emit("added", e, t, n, i)
                    }
                }, {
                    key: "addResources",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (var r in n)
                            "string" != typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(e, t, r, n[r], {
                                silent: !0
                            });
                        i.silent || this.emit("added", e, t, n)
                    }
                }, {
                    key: "addResourceBundle",
                    value: function(e, t, n, i, r) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1
                        }
                          , a = [e, t];
                        e.indexOf(".") > -1 && (i = n,
                        n = t,
                        t = (a = e.split("."))[1]),
                        this.addNamespaces(t);
                        var u = b(this.data, a) || {};
                        i ? k(u, n, r) : u = s({}, u, n),
                        w(this.data, a, u),
                        o.silent || this.emit("added", e, t, n)
                    }
                }, {
                    key: "removeResourceBundle",
                    value: function(e, t) {
                        this.hasResourceBundle(e, t) && delete this.data[e][t],
                        this.removeNamespaces(t),
                        this.emit("removed", e, t)
                    }
                }, {
                    key: "hasResourceBundle",
                    value: function(e, t) {
                        return void 0 !== this.getResource(e, t)
                    }
                }, {
                    key: "getResourceBundle",
                    value: function(e, t) {
                        return t || (t = this.options.defaultNS),
                        "v1" === this.options.compatibilityAPI ? s({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                    }
                }, {
                    key: "getDataByLanguage",
                    value: function(e) {
                        return this.data[e]
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return this.data
                    }
                }]),
                t
            }(v)
              , _ = {
                processors: {},
                addPostProcessor: function(e) {
                    this.processors[e.name] = e
                },
                handle: function(e, t, n, i, r) {
                    var s = this;
                    return e.forEach((function(e) {
                        s.processors[e] && (t = s.processors[e].process(t, n, i, r))
                    }
                    )),
                    t
                }
            }
              , A = {}
              , I = function(e) {
                function t(e) {
                    var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(o.a)(this, t),
                    n = c(this, l(t).call(this)),
                    T && v.call(u(n)),
                    y(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, u(n)),
                    n.options = i,
                    void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                    n.logger = p.create("translator"),
                    n
                }
                return h(t, e),
                Object(a.a)(t, [{
                    key: "changeLanguage",
                    value: function(e) {
                        e && (this.language = e)
                    }
                }, {
                    key: "exists",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        }
                          , n = this.resolve(e, t);
                        return n && void 0 !== n.res
                    }
                }, {
                    key: "extractFromKey",
                    value: function(e, t) {
                        var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                        void 0 === n && (n = ":");
                        var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                          , r = t.ns || this.options.defaultNS;
                        if (n && e.indexOf(n) > -1) {
                            var s = e.match(this.interpolator.nestingRegexp);
                            if (s && s.length > 0)
                                return {
                                    key: e,
                                    namespaces: r
                                };
                            var o = e.split(n);
                            (n !== i || n === i && this.options.ns.indexOf(o[0]) > -1) && (r = o.shift()),
                            e = o.join(i)
                        }
                        return "string" == typeof r && (r = [r]),
                        {
                            key: e,
                            namespaces: r
                        }
                    }
                }, {
                    key: "translate",
                    value: function(e, t, n) {
                        var r = this;
                        if ("object" !== i(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                        t || (t = {}),
                        null == e)
                            return "";
                        Array.isArray(e) || (e = [String(e)]);
                        var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                          , a = this.extractFromKey(e[e.length - 1], t)
                          , u = a.key
                          , c = a.namespaces
                          , l = c[c.length - 1]
                          , d = t.lng || this.language
                          , h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                        if (d && "cimode" === d.toLowerCase()) {
                            if (h) {
                                var f = t.nsSeparator || this.options.nsSeparator;
                                return l + f + u
                            }
                            return u
                        }
                        var p = this.resolve(e, t)
                          , v = p && p.res
                          , g = p && p.usedKey || u
                          , m = p && p.exactUsedKey || u
                          , y = Object.prototype.toString.apply(v)
                          , S = ["[object Number]", "[object Function]", "[object RegExp]"]
                          , w = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                          , b = !this.i18nFormat || this.i18nFormat.handleAsObject
                          , E = "string" != typeof v && "boolean" != typeof v && "number" != typeof v;
                        if (b && v && E && S.indexOf(y) < 0 && ("string" != typeof w || "[object Array]" !== y)) {
                            if (!t.returnObjects && !this.options.returnObjects)
                                return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                                this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, v, t) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                            if (o) {
                                var k = "[object Array]" === y
                                  , O = k ? [] : {}
                                  , C = k ? m : g;
                                for (var x in v)
                                    if (Object.prototype.hasOwnProperty.call(v, x)) {
                                        var T = "".concat(C).concat(o).concat(x);
                                        O[x] = this.translate(T, s({}, t, {
                                            joinArrays: !1,
                                            ns: c
                                        })),
                                        O[x] === T && (O[x] = v[x])
                                    }
                                v = O
                            }
                        } else if (b && "string" == typeof w && "[object Array]" === y)
                            (v = v.join(w)) && (v = this.extendTranslation(v, e, t, n));
                        else {
                            var L = !1
                              , _ = !1;
                            if (!this.isValidLookup(v) && void 0 !== t.defaultValue) {
                                if (L = !0,
                                void 0 !== t.count) {
                                    var A = this.pluralResolver.getSuffix(d, t.count);
                                    v = t["defaultValue".concat(A)]
                                }
                                v || (v = t.defaultValue)
                            }
                            this.isValidLookup(v) || (_ = !0,
                            v = u);
                            var I = t.defaultValue && t.defaultValue !== v && this.options.updateMissing;
                            if (_ || L || I) {
                                if (this.logger.log(I ? "updateKey" : "missingKey", d, l, u, I ? t.defaultValue : v),
                                o) {
                                    var N = this.resolve(u, s({}, t, {
                                        keySeparator: !1
                                    }));
                                    N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                }
                                var R = []
                                  , M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                if ("fallback" === this.options.saveMissingTo && M && M[0])
                                    for (var D = 0; D < M.length; D++)
                                        R.push(M[D]);
                                else
                                    "all" === this.options.saveMissingTo ? R = this.languageUtils.toResolveHierarchy(t.lng || this.language) : R.push(t.lng || this.language);
                                var P = function(e, n) {
                                    r.options.missingKeyHandler ? r.options.missingKeyHandler(e, l, n, I ? t.defaultValue : v, I, t) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, l, n, I ? t.defaultValue : v, I, t),
                                    r.emit("missingKey", e, l, n, v)
                                };
                                if (this.options.saveMissing) {
                                    var V = void 0 !== t.count && "string" != typeof t.count;
                                    this.options.saveMissingPlurals && V ? R.forEach((function(e) {
                                        r.pluralResolver.getPluralFormsOfKey(e, u).forEach((function(t) {
                                            return P([e], t)
                                        }
                                        ))
                                    }
                                    )) : P(R, u)
                                }
                            }
                            v = this.extendTranslation(v, e, t, p, n),
                            _ && v === u && this.options.appendNamespaceToMissingKey && (v = "".concat(l, ":").concat(u)),
                            _ && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
                        }
                        return v
                    }
                }, {
                    key: "extendTranslation",
                    value: function(e, t, n, i, r) {
                        var o = this;
                        if (this.i18nFormat && this.i18nFormat.parse)
                            e = this.i18nFormat.parse(e, n, i.usedLng, i.usedNS, i.usedKey, {
                                resolved: i
                            });
                        else if (!n.skipInterpolation) {
                            n.interpolation && this.interpolator.init(s({}, n, {
                                interpolation: s({}, this.options.interpolation, n.interpolation)
                            }));
                            var a, u = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                            if (u) {
                                var c = e.match(this.interpolator.nestingRegexp);
                                a = c && c.length
                            }
                            var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                            if (this.options.interpolation.defaultVariables && (l = s({}, this.options.interpolation.defaultVariables, l)),
                            e = this.interpolator.interpolate(e, l, n.lng || this.language, n),
                            u) {
                                var d = e.match(this.interpolator.nestingRegexp);
                                a < (d && d.length) && (n.nest = !1)
                            }
                            !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                                for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                                    i[s] = arguments[s];
                                return r && r[0] === i[0] && !n.context ? (o.logger.warn("It seems you are nesting recursively key: ".concat(i[0], " in key: ").concat(t[0])),
                                null) : o.translate.apply(o, i.concat([t]))
                            }
                            ), n)),
                            n.interpolation && this.interpolator.reset()
                        }
                        var h = n.postProcess || this.options.postProcess
                          , f = "string" == typeof h ? [h] : h;
                        return null != e && f && f.length && !1 !== n.applyPostProcessor && (e = _.handle(f, e, t, this.options && this.options.postProcessPassResolved ? s({
                            i18nResolved: i
                        }, n) : n, this)),
                        e
                    }
                }, {
                    key: "resolve",
                    value: function(e) {
                        var t, n, i, r, s, o = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e && (e = [e]),
                        e.forEach((function(e) {
                            if (!o.isValidLookup(t)) {
                                var u = o.extractFromKey(e, a)
                                  , c = u.key;
                                n = c;
                                var l = u.namespaces;
                                o.options.fallbackNS && (l = l.concat(o.options.fallbackNS));
                                var d = void 0 !== a.count && "string" != typeof a.count
                                  , h = void 0 !== a.context && "string" == typeof a.context && "" !== a.context
                                  , f = a.lngs ? a.lngs : o.languageUtils.toResolveHierarchy(a.lng || o.language, a.fallbackLng);
                                l.forEach((function(e) {
                                    o.isValidLookup(t) || (s = e,
                                    !A["".concat(f[0], "-").concat(e)] && o.utils && o.utils.hasLoadedNamespace && !o.utils.hasLoadedNamespace(s) && (A["".concat(f[0], "-").concat(e)] = !0,
                                    o.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(s, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                    f.forEach((function(n) {
                                        if (!o.isValidLookup(t)) {
                                            r = n;
                                            var s, u, l = c, f = [l];
                                            for (o.i18nFormat && o.i18nFormat.addLookupKeys ? o.i18nFormat.addLookupKeys(f, c, n, e, a) : (d && (s = o.pluralResolver.getSuffix(n, a.count)),
                                            d && h && f.push(l + s),
                                            h && f.push(l += "".concat(o.options.contextSeparator).concat(a.context)),
                                            d && f.push(l += s)); u = f.pop(); )
                                                o.isValidLookup(t) || (i = u,
                                                t = o.getResource(n, e, u, a))
                                        }
                                    }
                                    )))
                                }
                                ))
                            }
                        }
                        )),
                        {
                            res: t,
                            usedKey: n,
                            exactUsedKey: i,
                            usedLng: r,
                            usedNS: s
                        }
                    }
                }, {
                    key: "isValidLookup",
                    value: function(e) {
                        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                    }
                }, {
                    key: "getResource",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
                    }
                }]),
                t
            }(v);
            function N(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var R = function() {
                function e(t) {
                    Object(o.a)(this, e),
                    this.options = t,
                    this.whitelist = this.options.supportedLngs || !1,
                    this.supportedLngs = this.options.supportedLngs || !1,
                    this.logger = p.create("languageUtils")
                }
                return Object(a.a)(e, [{
                    key: "getScriptPartFromCode",
                    value: function(e) {
                        if (!e || e.indexOf("-") < 0)
                            return null;
                        var t = e.split("-");
                        return 2 === t.length ? null : (t.pop(),
                        "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                    }
                }, {
                    key: "getLanguagePartFromCode",
                    value: function(e) {
                        if (!e || e.indexOf("-") < 0)
                            return e;
                        var t = e.split("-");
                        return this.formatLanguageCode(t[0])
                    }
                }, {
                    key: "formatLanguageCode",
                    value: function(e) {
                        if ("string" == typeof e && e.indexOf("-") > -1) {
                            var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                              , n = e.split("-");
                            return this.options.lowerCaseLng ? n = n.map((function(e) {
                                return e.toLowerCase()
                            }
                            )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                            n[1] = n[1].toUpperCase(),
                            t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                            2 === n[1].length && (n[1] = n[1].toUpperCase()),
                            "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                            t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase())),
                            t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = N(n[2].toLowerCase()))),
                            n.join("-")
                        }
                        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                    }
                }, {
                    key: "isWhitelisted",
                    value: function(e) {
                        return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                        this.isSupportedCode(e)
                    }
                }, {
                    key: "isSupportedCode",
                    value: function(e) {
                        return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                    }
                }, {
                    key: "getBestMatchFromCodes",
                    value: function(e) {
                        var t, n = this;
                        return e ? (e.forEach((function(e) {
                            if (!t) {
                                var i = n.formatLanguageCode(e);
                                n.options.supportedLngs && !n.isSupportedCode(i) || (t = i)
                            }
                        }
                        )),
                        !t && this.options.supportedLngs && e.forEach((function(e) {
                            if (!t) {
                                var i = n.getLanguagePartFromCode(e);
                                if (n.isSupportedCode(i))
                                    return t = i;
                                t = n.options.supportedLngs.find((function(e) {
                                    if (0 === e.indexOf(i))
                                        return e
                                }
                                ))
                            }
                        }
                        )),
                        t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                        t) : null
                    }
                }, {
                    key: "getFallbackCodes",
                    value: function(e, t) {
                        if (!e)
                            return [];
                        if ("function" == typeof e && (e = e(t)),
                        "string" == typeof e && (e = [e]),
                        "[object Array]" === Object.prototype.toString.apply(e))
                            return e;
                        if (!t)
                            return e.default || [];
                        var n = e[t];
                        return n || (n = e[this.getScriptPartFromCode(t)]),
                        n || (n = e[this.formatLanguageCode(t)]),
                        n || (n = e[this.getLanguagePartFromCode(t)]),
                        n || (n = e.default),
                        n || []
                    }
                }, {
                    key: "toResolveHierarchy",
                    value: function(e, t) {
                        var n = this
                          , i = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                          , r = []
                          , s = function(e) {
                            e && (n.isSupportedCode(e) ? r.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                        };
                        return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(e))) : "string" == typeof e && s(this.formatLanguageCode(e)),
                        i.forEach((function(e) {
                            r.indexOf(e) < 0 && s(n.formatLanguageCode(e))
                        }
                        )),
                        r
                    }
                }]),
                e
            }()
              , M = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }, {
                lngs: ["he", "iw"],
                nr: [1, 2, 20, 21],
                fc: 22
            }]
              , D = {
                1: function(e) {
                    return Number(e > 1)
                },
                2: function(e) {
                    return Number(1 != e)
                },
                3: function(e) {
                    return 0
                },
                4: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                5: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                },
                6: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                },
                7: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                8: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                },
                9: function(e) {
                    return Number(e >= 2)
                },
                10: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                },
                11: function(e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                },
                12: function(e) {
                    return Number(e % 10 != 1 || e % 100 == 11)
                },
                13: function(e) {
                    return Number(0 !== e)
                },
                14: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                },
                15: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                16: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                },
                17: function(e) {
                    return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                },
                18: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                },
                19: function(e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                },
                20: function(e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                },
                21: function(e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                },
                22: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                }
            };
            function P() {
                var e = {};
                return M.forEach((function(t) {
                    t.lngs.forEach((function(n) {
                        e[n] = {
                            numbers: t.nr,
                            plurals: D[t.fc]
                        }
                    }
                    ))
                }
                )),
                e
            }
            var V = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(o.a)(this, e),
                    this.languageUtils = t,
                    this.options = n,
                    this.logger = p.create("pluralResolver"),
                    this.rules = P()
                }
                return Object(a.a)(e, [{
                    key: "addRule",
                    value: function(e, t) {
                        this.rules[e] = t
                    }
                }, {
                    key: "getRule",
                    value: function(e) {
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }
                }, {
                    key: "needsPlural",
                    value: function(e) {
                        var t = this.getRule(e);
                        return t && t.numbers.length > 1
                    }
                }, {
                    key: "getPluralFormsOfKey",
                    value: function(e, t) {
                        var n = this
                          , i = []
                          , r = this.getRule(e);
                        return r ? (r.numbers.forEach((function(r) {
                            var s = n.getSuffix(e, r);
                            i.push("".concat(t).concat(s))
                        }
                        )),
                        i) : i
                    }
                }, {
                    key: "getSuffix",
                    value: function(e, t) {
                        var n = this
                          , i = this.getRule(e);
                        if (i) {
                            var r = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t))
                              , s = i.numbers[r];
                            this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === s ? s = "plural" : 1 === s && (s = ""));
                            var o = function() {
                                return n.options.prepend && s.toString() ? n.options.prepend + s.toString() : s.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === s ? "" : "number" == typeof s ? "_plural_".concat(s.toString()) : o() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                        }
                        return this.logger.warn("no plural rule found for: ".concat(e)),
                        ""
                    }
                }]),
                e
            }()
              , j = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(o.a)(this, e),
                    this.logger = p.create("interpolator"),
                    this.options = t,
                    this.format = t.interpolation && t.interpolation.format || function(e) {
                        return e
                    }
                    ,
                    this.init(t)
                }
                return Object(a.a)(e, [{
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        var t = e.interpolation;
                        this.escape = void 0 !== t.escape ? t.escape : x,
                        this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                        this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                        this.prefix = t.prefix ? O(t.prefix) : t.prefixEscaped || "{{",
                        this.suffix = t.suffix ? O(t.suffix) : t.suffixEscaped || "}}",
                        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                        this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                        this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                        this.nestingPrefix = t.nestingPrefix ? O(t.nestingPrefix) : t.nestingPrefixEscaped || O("$t("),
                        this.nestingSuffix = t.nestingSuffix ? O(t.nestingSuffix) : t.nestingSuffixEscaped || O(")"),
                        this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                        this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                        this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                        this.resetRegExp()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.options && this.init(this.options)
                    }
                }, {
                    key: "resetRegExp",
                    value: function() {
                        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                        this.regexp = new RegExp(e,"g");
                        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                        this.regexpUnescape = new RegExp(t,"g");
                        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                        this.nestingRegexp = new RegExp(n,"g")
                    }
                }, {
                    key: "interpolate",
                    value: function(e, t, n, i) {
                        var r, s, o, a = this, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                        function c(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        var l = function(e) {
                            if (e.indexOf(a.formatSeparator) < 0) {
                                var r = E(t, u, e);
                                return a.alwaysFormat ? a.format(r, void 0, n) : r
                            }
                            var s = e.split(a.formatSeparator)
                              , o = s.shift().trim()
                              , c = s.join(a.formatSeparator).trim();
                            return a.format(E(t, u, o), c, n, i)
                        };
                        this.resetRegExp();
                        var d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler
                          , h = i && i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                        return [{
                            regex: this.regexpUnescape,
                            safeValue: function(e) {
                                return c(e)
                            }
                        }, {
                            regex: this.regexp,
                            safeValue: function(e) {
                                return a.escapeValue ? c(a.escape(e)) : c(e)
                            }
                        }].forEach((function(t) {
                            for (o = 0; r = t.regex.exec(e); ) {
                                if (void 0 === (s = l(r[1].trim())))
                                    if ("function" == typeof d) {
                                        var n = d(e, r, i);
                                        s = "string" == typeof n ? n : ""
                                    } else {
                                        if (h) {
                                            s = r[0];
                                            continue
                                        }
                                        a.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)),
                                        s = ""
                                    }
                                else
                                    "string" == typeof s || a.useRawValueToEscape || (s = m(s));
                                if (e = e.replace(r[0], t.safeValue(s)),
                                t.regex.lastIndex = 0,
                                ++o >= a.maxReplaces)
                                    break
                            }
                        }
                        )),
                        e
                    }
                }, {
                    key: "nest",
                    value: function(e, t) {
                        var n, i, r = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = s({}, o);
                        function u(e, t) {
                            var n = this.nestingOptionsSeparator;
                            if (e.indexOf(n) < 0)
                                return e;
                            var i = e.split(new RegExp("".concat(n, "[ ]*{")))
                              , r = "{".concat(i[1]);
                            e = i[0],
                            r = (r = this.interpolate(r, a)).replace(/'/g, '"');
                            try {
                                a = JSON.parse(r),
                                t && (a = s({}, t, a))
                            } catch (t) {
                                return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t),
                                "".concat(e).concat(n).concat(r)
                            }
                            return delete a.defaultValue,
                            e
                        }
                        for (a.applyPostProcessor = !1,
                        delete a.defaultValue; n = this.nestingRegexp.exec(e); ) {
                            var c = []
                              , l = !1;
                            if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                var d = n[1].split(this.formatSeparator).map((function(e) {
                                    return e.trim()
                                }
                                ));
                                n[1] = d.shift(),
                                c = d,
                                l = !0
                            }
                            if ((i = t(u.call(this, n[1].trim(), a), a)) && n[0] === e && "string" != typeof i)
                                return i;
                            "string" != typeof i && (i = m(i)),
                            i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                            i = ""),
                            l && (i = c.reduce((function(e, t) {
                                return r.format(e, t, o.lng, o)
                            }
                            ), i.trim())),
                            e = e.replace(n[0], i),
                            this.regexp.lastIndex = 0
                        }
                        return e
                    }
                }]),
                e
            }()
              , U = function(e) {
                function t(e, n, i) {
                    var r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return Object(o.a)(this, t),
                    r = c(this, l(t).call(this)),
                    T && v.call(u(r)),
                    r.backend = e,
                    r.store = n,
                    r.services = i,
                    r.languageUtils = i.languageUtils,
                    r.options = s,
                    r.logger = p.create("backendConnector"),
                    r.state = {},
                    r.queue = [],
                    r.backend && r.backend.init && r.backend.init(i, s.backend, s),
                    r
                }
                return h(t, e),
                Object(a.a)(t, [{
                    key: "queueLoad",
                    value: function(e, t, n, i) {
                        var r = this
                          , s = []
                          , o = []
                          , a = []
                          , u = [];
                        return e.forEach((function(e) {
                            var i = !0;
                            t.forEach((function(t) {
                                var a = "".concat(e, "|").concat(t);
                                !n.reload && r.store.hasResourceBundle(e, t) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? o.indexOf(a) < 0 && o.push(a) : (r.state[a] = 1,
                                i = !1,
                                o.indexOf(a) < 0 && o.push(a),
                                s.indexOf(a) < 0 && s.push(a),
                                u.indexOf(t) < 0 && u.push(t)))
                            }
                            )),
                            i || a.push(e)
                        }
                        )),
                        (s.length || o.length) && this.queue.push({
                            pending: o,
                            loaded: {},
                            errors: [],
                            callback: i
                        }),
                        {
                            toLoad: s,
                            pending: o,
                            toLoadLanguages: a,
                            toLoadNamespaces: u
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(e, t, n) {
                        var i = e.split("|")
                          , r = i[0]
                          , s = i[1];
                        t && this.emit("failedLoading", r, s, t),
                        n && this.store.addResourceBundle(r, s, n),
                        this.state[e] = t ? -1 : 2;
                        var o = {};
                        this.queue.forEach((function(n) {
                            var i, a, u, c, l;
                            i = n.loaded,
                            a = s,
                            (c = (u = S(i, [r], Object)).obj)[l = u.k] = c[l] || [],
                            c[l].push(a),
                            function(e, t) {
                                for (var n = e.indexOf(t); -1 !== n; )
                                    e.splice(n, 1),
                                    n = e.indexOf(t)
                            }(n.pending, e),
                            t && n.errors.push(t),
                            0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                                o[e] || (o[e] = []),
                                n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                    o[e].indexOf(t) < 0 && o[e].push(t)
                                }
                                ))
                            }
                            )),
                            n.done = !0,
                            n.errors.length ? n.callback(n.errors) : n.callback())
                        }
                        )),
                        this.emit("loaded", o),
                        this.queue = this.queue.filter((function(e) {
                            return !e.done
                        }
                        ))
                    }
                }, {
                    key: "read",
                    value: function(e, t, n) {
                        var i = this
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                          , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350
                          , o = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[n](e, t, (function(a, u) {
                            a && u && r < 5 ? setTimeout((function() {
                                i.read.call(i, e, t, n, r + 1, 2 * s, o)
                            }
                            ), s) : o(a, u)
                        }
                        )) : o(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function(e, t) {
                        var n = this
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , r = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend)
                            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                            r && r();
                        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                        "string" == typeof t && (t = [t]);
                        var s = this.queueLoad(e, t, i, r);
                        if (!s.toLoad.length)
                            return s.pending.length || r(),
                            null;
                        s.toLoad.forEach((function(e) {
                            n.loadOne(e)
                        }
                        ))
                    }
                }, {
                    key: "load",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, {}, n)
                    }
                }, {
                    key: "reload",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, n)
                    }
                }, {
                    key: "loadOne",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                          , i = e.split("|")
                          , r = i[0]
                          , s = i[1];
                        this.read(r, s, "read", void 0, void 0, (function(i, o) {
                            i && t.logger.warn("".concat(n, "loading namespace ").concat(s, " for language ").concat(r, " failed"), i),
                            !i && o && t.logger.log("".concat(n, "loaded namespace ").concat(s, " for language ").concat(r), o),
                            t.loaded(e, i, o)
                        }
                        ))
                    }
                }, {
                    key: "saveMissing",
                    value: function(e, t, n, i, r) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, i, null, s({}, o, {
                            isUpdate: r
                        })),
                        e && e[0] && this.store.addResource(e[0], t, n, i))
                    }
                }]),
                t
            }(v);
            function q() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        var t = {};
                        if ("object" === i(e[1]) && (t = e[1]),
                        "string" == typeof e[1] && (t.defaultValue = e[1]),
                        "string" == typeof e[2] && (t.tDescription = e[2]),
                        "object" === i(e[2]) || "object" === i(e[3])) {
                            var n = e[3] || e[2];
                            Object.keys(n).forEach((function(e) {
                                t[e] = n[e]
                            }
                            ))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(e, t, n, i) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1
                    }
                }
            }
            function F(e) {
                return "string" == typeof e.ns && (e.ns = [e.ns]),
                "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
                "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
                e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])),
                e.supportedLngs = e.whitelist),
                e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
                e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                e
            }
            function H() {}
            var z = new (function(e) {
                function t() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
                    if (Object(o.a)(this, t),
                    e = c(this, l(t).call(this)),
                    T && v.call(u(e)),
                    e.options = F(n),
                    e.services = {},
                    e.logger = p,
                    e.modules = {
                        external: []
                    },
                    i && !e.isInitialized && !n.isClone) {
                        if (!e.options.initImmediate)
                            return e.init(n, i),
                            c(e, u(e));
                        setTimeout((function() {
                            e.init(n, i)
                        }
                        ), 0)
                    }
                    return e
                }
                return h(t, e),
                Object(a.a)(t, [{
                    key: "init",
                    value: function() {
                        var e = this
                          , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = arguments.length > 1 ? arguments[1] : void 0;
                        function i(e) {
                            return e ? "function" == typeof e ? new e : e : null
                        }
                        if ("function" == typeof t && (n = t,
                        t = {}),
                        t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                        t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                        this.options = s({}, q(), this.options, F(t)),
                        this.format = this.options.interpolation.format,
                        n || (n = H),
                        !this.options.isClone) {
                            this.modules.logger ? p.init(i(this.modules.logger), this.options) : p.init(null, this.options);
                            var r = new R(this.options);
                            this.store = new L(this.options.resources,this.options);
                            var o = this.services;
                            o.logger = p,
                            o.resourceStore = this.store,
                            o.languageUtils = r,
                            o.pluralResolver = new V(r,{
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }),
                            o.interpolator = new j(this.options),
                            o.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            },
                            o.backendConnector = new U(i(this.modules.backend),o.resourceStore,o,this.options),
                            o.backendConnector.on("*", (function(t) {
                                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                    i[r - 1] = arguments[r];
                                e.emit.apply(e, [t].concat(i))
                            }
                            )),
                            this.modules.languageDetector && (o.languageDetector = i(this.modules.languageDetector),
                            o.languageDetector.init(o, this.options.detection, this.options)),
                            this.modules.i18nFormat && (o.i18nFormat = i(this.modules.i18nFormat),
                            o.i18nFormat.init && o.i18nFormat.init(this)),
                            this.translator = new I(this.services,this.options),
                            this.translator.on("*", (function(t) {
                                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                    i[r - 1] = arguments[r];
                                e.emit.apply(e, [t].concat(i))
                            }
                            )),
                            this.modules.external.forEach((function(t) {
                                t.init && t.init(e)
                            }
                            ))
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        var a = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                        a.forEach((function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments)
                            }
                        }
                        ));
                        var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                        u.forEach((function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments),
                                e
                            }
                        }
                        ));
                        var c = g()
                          , l = function() {
                            e.changeLanguage(e.options.lng, (function(t, i) {
                                e.isInitialized = !0,
                                e.options.isClone || e.logger.log("initialized", e.options),
                                e.emit("initialized", e.options),
                                c.resolve(i),
                                n(t, i)
                            }
                            ))
                        };
                        return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                        c
                    }
                }, {
                    key: "loadResources",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
                          , i = n
                          , r = "string" == typeof e ? e : this.language;
                        if ("function" == typeof e && (i = e),
                        !this.options.resources || this.options.partialBundledLanguages) {
                            if (r && "cimode" === r.toLowerCase())
                                return i();
                            var s = []
                              , o = function(e) {
                                e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                    s.indexOf(e) < 0 && s.push(e)
                                }
                                ))
                            };
                            if (r)
                                o(r);
                            else {
                                var a = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                a.forEach((function(e) {
                                    return o(e)
                                }
                                ))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return o(e)
                            }
                            )),
                            this.services.backendConnector.load(s, this.options.ns, i)
                        } else
                            i(null)
                    }
                }, {
                    key: "reloadResources",
                    value: function(e, t, n) {
                        var i = g();
                        return e || (e = this.languages),
                        t || (t = this.options.ns),
                        n || (n = H),
                        this.services.backendConnector.reload(e, t, (function(e) {
                            i.resolve(),
                            n(e)
                        }
                        )),
                        i
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e)
                            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type)
                            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e),
                        ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                        "languageDetector" === e.type && (this.modules.languageDetector = e),
                        "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                        "postProcessor" === e.type && _.addPostProcessor(e),
                        "3rdParty" === e.type && this.modules.external.push(e),
                        this
                    }
                }, {
                    key: "changeLanguage",
                    value: function(e, t) {
                        var n = this;
                        this.isLanguageChangingTo = e;
                        var i = g();
                        this.emit("languageChanging", e);
                        var r = function(e) {
                            var r = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                            r && (n.language || (n.language = r,
                            n.languages = n.services.languageUtils.toResolveHierarchy(r)),
                            n.translator.language || n.translator.changeLanguage(r),
                            n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(r)),
                            n.loadResources(r, (function(e) {
                                !function(e, r) {
                                    r ? (n.language = r,
                                    n.languages = n.services.languageUtils.toResolveHierarchy(r),
                                    n.translator.changeLanguage(r),
                                    n.isLanguageChangingTo = void 0,
                                    n.emit("languageChanged", r),
                                    n.logger.log("languageChanged", r)) : n.isLanguageChangingTo = void 0,
                                    i.resolve((function() {
                                        return n.t.apply(n, arguments)
                                    }
                                    )),
                                    t && t(e, (function() {
                                        return n.t.apply(n, arguments)
                                    }
                                    ))
                                }(e, r)
                            }
                            ))
                        };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()),
                        i
                    }
                }, {
                    key: "getFixedT",
                    value: function(e, t) {
                        var n = this
                          , r = function e(t, r) {
                            var o;
                            if ("object" !== i(r)) {
                                for (var a = arguments.length, u = new Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++)
                                    u[c - 2] = arguments[c];
                                o = n.options.overloadTranslationOptionHandler([t, r].concat(u))
                            } else
                                o = s({}, r);
                            return o.lng = o.lng || e.lng,
                            o.lngs = o.lngs || e.lngs,
                            o.ns = o.ns || e.ns,
                            n.t(t, o)
                        };
                        return "string" == typeof e ? r.lng = e : r.lngs = e,
                        r.ns = t,
                        r
                    }
                }, {
                    key: "t",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments)
                    }
                }, {
                    key: "exists",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments)
                    }
                }, {
                    key: "setDefaultNamespace",
                    value: function(e) {
                        this.options.defaultNS = e
                    }
                }, {
                    key: "hasLoadedNamespace",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized)
                            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                            !1;
                        if (!this.languages || !this.languages.length)
                            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                            !1;
                        var i = this.languages[0]
                          , r = !!this.options && this.options.fallbackLng
                          , s = this.languages[this.languages.length - 1];
                        if ("cimode" === i.toLowerCase())
                            return !0;
                        var o = function(e, n) {
                            var i = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                            return -1 === i || 2 === i
                        };
                        if (n.precheck) {
                            var a = n.precheck(this, o);
                            if (void 0 !== a)
                                return a
                        }
                        return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!o(i, e) || r && !o(s, e))
                    }
                }, {
                    key: "loadNamespaces",
                    value: function(e, t) {
                        var n = this
                          , i = g();
                        return this.options.ns ? ("string" == typeof e && (e = [e]),
                        e.forEach((function(e) {
                            n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                        }
                        )),
                        this.loadResources((function(e) {
                            i.resolve(),
                            t && t(e)
                        }
                        )),
                        i) : (t && t(),
                        Promise.resolve())
                    }
                }, {
                    key: "loadLanguages",
                    value: function(e, t) {
                        var n = g();
                        "string" == typeof e && (e = [e]);
                        var i = this.options.preload || []
                          , r = e.filter((function(e) {
                            return i.indexOf(e) < 0
                        }
                        ));
                        return r.length ? (this.options.preload = i.concat(r),
                        this.loadResources((function(e) {
                            n.resolve(),
                            t && t(e)
                        }
                        )),
                        n) : (t && t(),
                        Promise.resolve())
                    }
                }, {
                    key: "dir",
                    value: function(e) {
                        return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                        e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                    }
                }, {
                    key: "createInstance",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = arguments.length > 1 ? arguments[1] : void 0;
                        return new t(e,n)
                    }
                }, {
                    key: "cloneInstance",
                    value: function() {
                        var e = this
                          , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
                          , r = s({}, this.options, n, {
                            isClone: !0
                        })
                          , o = new t(r)
                          , a = ["store", "services", "language"];
                        return a.forEach((function(t) {
                            o[t] = e[t]
                        }
                        )),
                        o.services = s({}, this.services),
                        o.services.utils = {
                            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                        },
                        o.translator = new I(o.services,o.options),
                        o.translator.on("*", (function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                                n[i - 1] = arguments[i];
                            o.emit.apply(o, [e].concat(n))
                        }
                        )),
                        o.init(r, i),
                        o.translator.options = o.options,
                        o.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                        },
                        o
                    }
                }]),
                t
            }(v));
            t.default = z
        }
        ])
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const i = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
          , r = (e,t,n=null)=>{
            for (; t !== n; ) {
                const n = t.nextSibling;
                e.removeChild(t),
                t = n
            }
        }
          , s = `{{lit-${String(Math.random()).slice(2)}}}`
          , o = `\x3c!--${s}--\x3e`
          , a = new RegExp(`${s}|${o}`);
        class u {
            constructor(e, t) {
                this.parts = [],
                this.element = t;
                const n = []
                  , i = []
                  , r = document.createTreeWalker(t.content, 133, null, !1);
                let o = 0
                  , u = -1
                  , l = 0;
                const {strings: f, values: {length: p}} = e;
                for (; l < p; ) {
                    const e = r.nextNode();
                    if (null !== e) {
                        if (u++,
                        1 === e.nodeType) {
                            if (e.hasAttributes()) {
                                const t = e.attributes
                                  , {length: n} = t;
                                let i = 0;
                                for (let e = 0; e < n; e++)
                                    c(t[e].name, "$lit$") && i++;
                                for (; i-- > 0; ) {
                                    const t = f[l]
                                      , n = h.exec(t)[2]
                                      , i = n.toLowerCase() + "$lit$"
                                      , r = e.getAttribute(i);
                                    e.removeAttribute(i);
                                    const s = r.split(a);
                                    this.parts.push({
                                        type: "attribute",
                                        index: u,
                                        name: n,
                                        strings: s
                                    }),
                                    l += s.length - 1
                                }
                            }
                            "TEMPLATE" === e.tagName && (i.push(e),
                            r.currentNode = e.content)
                        } else if (3 === e.nodeType) {
                            const t = e.data;
                            if (t.indexOf(s) >= 0) {
                                const i = e.parentNode
                                  , r = t.split(a)
                                  , s = r.length - 1;
                                for (let t = 0; t < s; t++) {
                                    let n, s = r[t];
                                    if ("" === s)
                                        n = d();
                                    else {
                                        const e = h.exec(s);
                                        null !== e && c(e[2], "$lit$") && (s = s.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]),
                                        n = document.createTextNode(s)
                                    }
                                    i.insertBefore(n, e),
                                    this.parts.push({
                                        type: "node",
                                        index: ++u
                                    })
                                }
                                "" === r[s] ? (i.insertBefore(d(), e),
                                n.push(e)) : e.data = r[s],
                                l += s
                            }
                        } else if (8 === e.nodeType)
                            if (e.data === s) {
                                const t = e.parentNode;
                                null !== e.previousSibling && u !== o || (u++,
                                t.insertBefore(d(), e)),
                                o = u,
                                this.parts.push({
                                    type: "node",
                                    index: u
                                }),
                                null === e.nextSibling ? e.data = "" : (n.push(e),
                                u--),
                                l++
                            } else {
                                let t = -1;
                                for (; -1 !== (t = e.data.indexOf(s, t + 1)); )
                                    this.parts.push({
                                        type: "node",
                                        index: -1
                                    }),
                                    l++
                            }
                    } else
                        r.currentNode = i.pop()
                }
                for (const e of n)
                    e.parentNode.removeChild(e)
            }
        }
        const c = (e,t)=>{
            const n = e.length - t.length;
            return n >= 0 && e.slice(n) === t
        }
          , l = e=>-1 !== e.index
          , d = ()=>document.createComment("")
          , h = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        function f(e, t) {
            const {element: {content: n}, parts: i} = e
              , r = document.createTreeWalker(n, 133, null, !1);
            let s = v(i)
              , o = i[s]
              , a = -1
              , u = 0;
            const c = [];
            let l = null;
            for (; r.nextNode(); ) {
                a++;
                const e = r.currentNode;
                for (e.previousSibling === l && (l = null),
                t.has(e) && (c.push(e),
                null === l && (l = e)),
                null !== l && u++; void 0 !== o && o.index === a; )
                    o.index = null !== l ? -1 : o.index - u,
                    s = v(i, s),
                    o = i[s]
            }
            c.forEach(e=>e.parentNode.removeChild(e))
        }
        const p = e=>{
            let t = 11 === e.nodeType ? 0 : 1;
            const n = document.createTreeWalker(e, 133, null, !1);
            for (; n.nextNode(); )
                t++;
            return t
        }
          , v = (e,t=-1)=>{
            for (let n = t + 1; n < e.length; n++) {
                const t = e[n];
                if (l(t))
                    return n
            }
            return -1
        }
        ;
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const g = new WeakMap
          , m = e=>"function" == typeof e && g.has(e)
          , y = {}
          , S = {};
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        class w {
            constructor(e, t, n) {
                this.__parts = [],
                this.template = e,
                this.processor = t,
                this.options = n
            }
            update(e) {
                let t = 0;
                for (const n of this.__parts)
                    void 0 !== n && n.setValue(e[t]),
                    t++;
                for (const e of this.__parts)
                    void 0 !== e && e.commit()
            }
            _clone() {
                const e = i ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                  , t = []
                  , n = this.template.parts
                  , r = document.createTreeWalker(e, 133, null, !1);
                let s, o = 0, a = 0, u = r.nextNode();
                for (; o < n.length; )
                    if (s = n[o],
                    l(s)) {
                        for (; a < s.index; )
                            a++,
                            "TEMPLATE" === u.nodeName && (t.push(u),
                            r.currentNode = u.content),
                            null === (u = r.nextNode()) && (r.currentNode = t.pop(),
                            u = r.nextNode());
                        if ("node" === s.type) {
                            const e = this.processor.handleTextExpression(this.options);
                            e.insertAfterNode(u.previousSibling),
                            this.__parts.push(e)
                        } else
                            this.__parts.push(...this.processor.handleAttributeExpressions(u, s.name, s.strings, this.options));
                        o++
                    } else
                        this.__parts.push(void 0),
                        o++;
                return i && (document.adoptNode(e),
                customElements.upgrade(e)),
                e
            }
        }
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const b = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: e=>e
        })
          , E = ` ${s} `;
        class k {
            constructor(e, t, n, i) {
                this.strings = e,
                this.values = t,
                this.type = n,
                this.processor = i
            }
            getHTML() {
                const e = this.strings.length - 1;
                let t = ""
                  , n = !1;
                for (let i = 0; i < e; i++) {
                    const e = this.strings[i]
                      , r = e.lastIndexOf("\x3c!--");
                    n = (r > -1 || n) && -1 === e.indexOf("--\x3e", r + 1);
                    const a = h.exec(e);
                    t += null === a ? e + (n ? E : o) : e.substr(0, a.index) + a[1] + a[2] + "$lit$" + a[3] + s
                }
                return t += this.strings[e],
                t
            }
            getTemplateElement() {
                const e = document.createElement("template");
                let t = this.getHTML();
                return void 0 !== b && (t = b.createHTML(t)),
                e.innerHTML = t,
                e
            }
        }
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const O = e=>null === e || !("object" == typeof e || "function" == typeof e)
          , C = e=>Array.isArray(e) || !(!e || !e[Symbol.iterator]);
        class x {
            constructor(e, t, n) {
                this.dirty = !0,
                this.element = e,
                this.name = t,
                this.strings = n,
                this.parts = [];
                for (let e = 0; e < n.length - 1; e++)
                    this.parts[e] = this._createPart()
            }
            _createPart() {
                return new T(this)
            }
            _getValue() {
                const e = this.strings
                  , t = e.length - 1
                  , n = this.parts;
                if (1 === t && "" === e[0] && "" === e[1]) {
                    const e = n[0].value;
                    if ("symbol" == typeof e)
                        return String(e);
                    if ("string" == typeof e || !C(e))
                        return e
                }
                let i = "";
                for (let r = 0; r < t; r++) {
                    i += e[r];
                    const t = n[r];
                    if (void 0 !== t) {
                        const e = t.value;
                        if (O(e) || !C(e))
                            i += "string" == typeof e ? e : String(e);
                        else
                            for (const t of e)
                                i += "string" == typeof t ? t : String(t)
                    }
                }
                return i += e[t],
                i
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class T {
            constructor(e) {
                this.value = void 0,
                this.committer = e
            }
            setValue(e) {
                e === y || O(e) && e === this.value || (this.value = e,
                m(e) || (this.committer.dirty = !0))
            }
            commit() {
                for (; m(this.value); ) {
                    const e = this.value;
                    this.value = y,
                    e(this)
                }
                this.value !== y && this.committer.commit()
            }
        }
        class L {
            constructor(e) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.options = e
            }
            appendInto(e) {
                this.startNode = e.appendChild(d()),
                this.endNode = e.appendChild(d())
            }
            insertAfterNode(e) {
                this.startNode = e,
                this.endNode = e.nextSibling
            }
            appendIntoPart(e) {
                e.__insert(this.startNode = d()),
                e.__insert(this.endNode = d())
            }
            insertAfterPart(e) {
                e.__insert(this.startNode = d()),
                this.endNode = e.endNode,
                e.endNode = this.startNode
            }
            setValue(e) {
                this.__pendingValue = e
            }
            commit() {
                if (null === this.startNode.parentNode)
                    return;
                for (; m(this.__pendingValue); ) {
                    const e = this.__pendingValue;
                    this.__pendingValue = y,
                    e(this)
                }
                const e = this.__pendingValue;
                e !== y && (O(e) ? e !== this.value && this.__commitText(e) : e instanceof k ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : C(e) ? this.__commitIterable(e) : e === S ? (this.value = S,
                this.clear()) : this.__commitText(e))
            }
            __insert(e) {
                this.endNode.parentNode.insertBefore(e, this.endNode)
            }
            __commitNode(e) {
                this.value !== e && (this.clear(),
                this.__insert(e),
                this.value = e)
            }
            __commitText(e) {
                const t = this.startNode.nextSibling
                  , n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
                t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = n : this.__commitNode(document.createTextNode(n)),
                this.value = e
            }
            __commitTemplateResult(e) {
                const t = this.options.templateFactory(e);
                if (this.value instanceof w && this.value.template === t)
                    this.value.update(e.values);
                else {
                    const n = new w(t,e.processor,this.options)
                      , i = n._clone();
                    n.update(e.values),
                    this.__commitNode(i),
                    this.value = n
                }
            }
            __commitIterable(e) {
                Array.isArray(this.value) || (this.value = [],
                this.clear());
                const t = this.value;
                let n, i = 0;
                for (const r of e)
                    n = t[i],
                    void 0 === n && (n = new L(this.options),
                    t.push(n),
                    0 === i ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])),
                    n.setValue(r),
                    n.commit(),
                    i++;
                i < t.length && (t.length = i,
                this.clear(n && n.endNode))
            }
            clear(e=this.startNode) {
                r(this.startNode.parentNode, e.nextSibling, this.endNode)
            }
        }
        class _ {
            constructor(e, t, n) {
                if (this.value = void 0,
                this.__pendingValue = void 0,
                2 !== n.length || "" !== n[0] || "" !== n[1])
                    throw new Error("Boolean attributes can only contain a single expression");
                this.element = e,
                this.name = t,
                this.strings = n
            }
            setValue(e) {
                this.__pendingValue = e
            }
            commit() {
                for (; m(this.__pendingValue); ) {
                    const e = this.__pendingValue;
                    this.__pendingValue = y,
                    e(this)
                }
                if (this.__pendingValue === y)
                    return;
                const e = !!this.__pendingValue;
                this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = e),
                this.__pendingValue = y
            }
        }
        class A extends x {
            constructor(e, t, n) {
                super(e, t, n),
                this.single = 2 === n.length && "" === n[0] && "" === n[1]
            }
            _createPart() {
                return new I(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1,
                this.element[this.name] = this._getValue())
            }
        }
        class I extends T {
        }
        let N = !1;
        (()=>{
            try {
                const e = {
                    get capture() {
                        return N = !0,
                        !1
                    }
                };
                window.addEventListener("test", e, e),
                window.removeEventListener("test", e, e)
            } catch (e) {}
        }
        )();
        class R {
            constructor(e, t, n) {
                this.value = void 0,
                this.__pendingValue = void 0,
                this.element = e,
                this.eventName = t,
                this.eventContext = n,
                this.__boundHandleEvent = e=>this.handleEvent(e)
            }
            setValue(e) {
                this.__pendingValue = e
            }
            commit() {
                for (; m(this.__pendingValue); ) {
                    const e = this.__pendingValue;
                    this.__pendingValue = y,
                    e(this)
                }
                if (this.__pendingValue === y)
                    return;
                const e = this.__pendingValue
                  , t = this.value
                  , n = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive)
                  , i = null != e && (null == t || n);
                n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                i && (this.__options = M(e),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                this.value = e,
                this.__pendingValue = y
            }
            handleEvent(e) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
            }
        }
        const M = e=>e && (N ? {
            capture: e.capture,
            passive: e.passive,
            once: e.once
        } : e.capture)/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        ;
        function D(e) {
            let t = P.get(e.type);
            void 0 === t && (t = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            P.set(e.type, t));
            let n = t.stringsArray.get(e.strings);
            if (void 0 !== n)
                return n;
            const i = e.strings.join(s);
            return n = t.keyString.get(i),
            void 0 === n && (n = new u(e,e.getTemplateElement()),
            t.keyString.set(i, n)),
            t.stringsArray.set(e.strings, n),
            n
        }
        const P = new Map
          , V = new WeakMap;
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const j = new /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        class {
            handleAttributeExpressions(e, t, n, i) {
                const r = t[0];
                if ("." === r) {
                    return new A(e,t.slice(1),n).parts
                }
                if ("@" === r)
                    return [new R(e,t.slice(1),i.eventContext)];
                if ("?" === r)
                    return [new _(e,t.slice(1),n)];
                return new x(e,t,n).parts
            }
            handleTextExpression(e) {
                return new L(e)
            }
        }
        ;
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        const U = (e,...t)=>new k(e,t,"html",j)
          , q = (e,t)=>`${e}--${t}`;
        let F = !0;
        void 0 === window.ShadyCSS ? F = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
        F = !1);
        const H = e=>t=>{
            const n = q(t.type, e);
            let i = P.get(n);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            },
            P.set(n, i));
            let r = i.stringsArray.get(t.strings);
            if (void 0 !== r)
                return r;
            const o = t.strings.join(s);
            if (r = i.keyString.get(o),
            void 0 === r) {
                const n = t.getTemplateElement();
                F && window.ShadyCSS.prepareTemplateDom(n, e),
                r = new u(t,n),
                i.keyString.set(o, r)
            }
            return i.stringsArray.set(t.strings, r),
            r
        }
          , z = ["html", "svg"]
          , $ = new Set
          , B = (e,t,n)=>{
            $.add(e);
            const i = n ? n.element : document.createElement("template")
              , r = t.querySelectorAll("style")
              , {length: s} = r;
            if (0 === s)
                return void window.ShadyCSS.prepareTemplateStyles(i, e);
            const o = document.createElement("style");
            for (let e = 0; e < s; e++) {
                const t = r[e];
                t.parentNode.removeChild(t),
                o.textContent += t.textContent
            }
            (e=>{
                z.forEach(t=>{
                    const n = P.get(q(t, e));
                    void 0 !== n && n.keyString.forEach(e=>{
                        const {element: {content: t}} = e
                          , n = new Set;
                        Array.from(t.querySelectorAll("style")).forEach(e=>{
                            n.add(e)
                        }
                        ),
                        f(e, n)
                    }
                    )
                }
                )
            }
            )(e);
            const a = i.content;
            n ? function(e, t, n=null) {
                const {element: {content: i}, parts: r} = e;
                if (null == n)
                    return void i.appendChild(t);
                const s = document.createTreeWalker(i, 133, null, !1);
                let o = v(r)
                  , a = 0
                  , u = -1;
                for (; s.nextNode(); ) {
                    u++;
                    for (s.currentNode === n && (a = p(t),
                    n.parentNode.insertBefore(t, n)); -1 !== o && r[o].index === u; ) {
                        if (a > 0) {
                            for (; -1 !== o; )
                                r[o].index += a,
                                o = v(r, o);
                            return
                        }
                        o = v(r, o)
                    }
                }
            }(n, o, a.firstChild) : a.insertBefore(o, a.firstChild),
            window.ShadyCSS.prepareTemplateStyles(i, e);
            const u = a.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== u)
                t.insertBefore(u.cloneNode(!0), t.firstChild);
            else if (n) {
                a.insertBefore(o, a.firstChild);
                const e = new Set;
                e.add(o),
                f(n, e)
            }
        }
        ;
        window.JSCompiler_renameProperty = (e,t)=>e;
        const Z = {
            toAttribute(e, t) {
                switch (t) {
                case Boolean:
                    return e ? "" : null;
                case Object:
                case Array:
                    return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                case Boolean:
                    return null !== e;
                case Number:
                    return null === e ? null : Number(e);
                case Object:
                case Array:
                    return JSON.parse(e)
                }
                return e
            }
        }
          , J = (e,t)=>t !== e && (t == t || e == e)
          , W = {
            attribute: !0,
            type: String,
            converter: Z,
            reflect: !1,
            hasChanged: J
        };
        class G extends HTMLElement {
            constructor() {
                super(),
                this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const e = [];
                return this._classProperties.forEach((t,n)=>{
                    const i = this._attributeNameForProperty(n, t);
                    void 0 !== i && (this._attributeToPropertyMap.set(i, n),
                    e.push(i))
                }
                ),
                e
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const e = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== e && e.forEach((e,t)=>this._classProperties.set(t, e))
                }
            }
            static createProperty(e, t=W) {
                if (this._ensureClassProperties(),
                this._classProperties.set(e, t),
                t.noAccessor || this.prototype.hasOwnProperty(e))
                    return;
                const n = "symbol" == typeof e ? Symbol() : "__" + e
                  , i = this.getPropertyDescriptor(e, n, t);
                void 0 !== i && Object.defineProperty(this.prototype, e, i)
            }
            static getPropertyDescriptor(e, t, n) {
                return {
                    get() {
                        return this[t]
                    },
                    set(i) {
                        const r = this[e];
                        this[t] = i,
                        this.requestUpdateInternal(e, r, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this._classProperties && this._classProperties.get(e) || W
            }
            static finalize() {
                const e = Object.getPrototypeOf(this);
                if (e.hasOwnProperty("finalized") || e.finalize(),
                this.finalized = !0,
                this._ensureClassProperties(),
                this._attributeToPropertyMap = new Map,
                this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    const e = this.properties
                      , t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                    for (const n of t)
                        this.createProperty(n, e[n])
                }
            }
            static _attributeNameForProperty(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            static _valueHasChanged(e, t, n=J) {
                return n(e, t)
            }
            static _propertyValueFromAttribute(e, t) {
                const n = t.type
                  , i = t.converter || Z
                  , r = "function" == typeof i ? i : i.fromAttribute;
                return r ? r(e, n) : e
            }
            static _propertyValueToAttribute(e, t) {
                if (void 0 === t.reflect)
                    return;
                const n = t.type
                  , i = t.converter;
                return (i && i.toAttribute || Z.toAttribute)(e, n)
            }
            initialize() {
                this._updateState = 0,
                this._updatePromise = new Promise(e=>this._enableUpdatingResolver = e),
                this._changedProperties = new Map,
                this._saveInstanceProperties(),
                this.requestUpdateInternal()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach((e,t)=>{
                    if (this.hasOwnProperty(t)) {
                        const e = this[t];
                        delete this[t],
                        this._instanceProperties || (this._instanceProperties = new Map),
                        this._instanceProperties.set(t, e)
                    }
                }
                )
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach((e,t)=>this[t] = e),
                this._instanceProperties = void 0
            }
            connectedCallback() {
                this.enableUpdating()
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
                this._enableUpdatingResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(e, t, n) {
                t !== n && this._attributeToProperty(e, n)
            }
            _propertyToAttribute(e, t, n=W) {
                const i = this.constructor
                  , r = i._attributeNameForProperty(e, n);
                if (void 0 !== r) {
                    const e = i._propertyValueToAttribute(t, n);
                    if (void 0 === e)
                        return;
                    this._updateState = 8 | this._updateState,
                    null == e ? this.removeAttribute(r) : this.setAttribute(r, e),
                    this._updateState = -9 & this._updateState
                }
            }
            _attributeToProperty(e, t) {
                if (8 & this._updateState)
                    return;
                const n = this.constructor
                  , i = n._attributeToPropertyMap.get(e);
                if (void 0 !== i) {
                    const e = n.getPropertyOptions(i);
                    this._updateState = 16 | this._updateState,
                    this[i] = n._propertyValueFromAttribute(t, e),
                    this._updateState = -17 & this._updateState
                }
            }
            requestUpdateInternal(e, t, n) {
                let i = !0;
                if (void 0 !== e) {
                    const r = this.constructor;
                    n = n || r.getPropertyOptions(e),
                    r._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t),
                    !0 !== n.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
                    this._reflectingProperties.set(e, n))) : i = !1
                }
                !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
            }
            requestUpdate(e, t) {
                return this.requestUpdateInternal(e, t),
                this.updateComplete
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise
                } catch (e) {}
                const e = this.performUpdate();
                return null != e && await e,
                !this._hasRequestedUpdate
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState
            }
            get hasUpdated() {
                return 1 & this._updateState
            }
            performUpdate() {
                if (!this._hasRequestedUpdate)
                    return;
                this._instanceProperties && this._applyInstanceProperties();
                let e = !1;
                const t = this._changedProperties;
                try {
                    e = this.shouldUpdate(t),
                    e ? this.update(t) : this._markUpdated()
                } catch (t) {
                    throw e = !1,
                    this._markUpdated(),
                    t
                }
                e && (1 & this._updateState || (this._updateState = 1 | this._updateState,
                this.firstUpdated(t)),
                this.updated(t))
            }
            _markUpdated() {
                this._changedProperties = new Map,
                this._updateState = -5 & this._updateState
            }
            get updateComplete() {
                return this._getUpdateComplete()
            }
            _getUpdateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._updatePromise
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t, this[t], e)),
                this._reflectingProperties = void 0),
                this._markUpdated()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        G.finalized = !0;
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        const K = e=>t=>"function" == typeof t ? ((e,t)=>(window.customElements.define(e, t),
        t))(e, t) : ((e,t)=>{
            const {kind: n, elements: i} = t;
            return {
                kind: n,
                elements: i,
                finisher(t) {
                    window.customElements.define(e, t)
                }
            }
        }
        )(e, t)
          , Y = (e,t)=>"method" === t.kind && t.descriptor && !("value"in t.descriptor) ? Object.assign(Object.assign({}, t), {
            finisher(n) {
                n.createProperty(t.key, e)
            }
        }) : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            initializer() {
                "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
            },
            finisher(n) {
                n.createProperty(t.key, e)
            }
        };
        function X(e) {
            return (t,n)=>void 0 !== n ? ((e,t,n)=>{
                t.constructor.createProperty(n, e)
            }
            )(e, t, n) : Y(e, t)
        }
        function Q(e) {
            return X({
                attribute: !1,
                hasChanged: null == e ? void 0 : e.hasChanged
            })
        }
        const ee = Element.prototype;
        ee.msMatchesSelector || ee.webkitMatchesSelector;
        /**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
        const te = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , ne = Symbol();
        class ie {
            constructor(e, t) {
                if (t !== ne)
                    throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (te ? (this._styleSheet = new CSSStyleSheet,
                this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
                this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const re = (e,...t)=>{
            const n = t.reduce((t,n,i)=>t + (e=>{
                if (e instanceof ie)
                    return e.cssText;
                if ("number" == typeof e)
                    return e;
                throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(n) + e[i + 1], e[0]);
            return new ie(n,ne)
        }
        ;
        /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        const se = {};
        class oe extends G {
            static getStyles() {
                return this.styles
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
                    return;
                const e = this.getStyles();
                if (Array.isArray(e)) {
                    const t = (e,n)=>e.reduceRight((e,n)=>Array.isArray(n) ? t(n, e) : (e.add(n),
                    e), n)
                      , n = t(e, new Set)
                      , i = [];
                    n.forEach(e=>i.unshift(e)),
                    this._styles = i
                } else
                    this._styles = void 0 === e ? [] : [e];
                this._styles = this._styles.map(e=>{
                    if (e instanceof CSSStyleSheet && !te) {
                        const t = Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e + t.cssText, "");
                        return new ie(String(t),ne)
                    }
                    return e
                }
                )
            }
            initialize() {
                super.initialize(),
                this.constructor._getUniqueStyles(),
                this.renderRoot = this.createRenderRoot(),
                window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions)
            }
            adoptStyles() {
                const e = this.constructor._styles;
                0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? te ? this.renderRoot.adoptedStyleSheets = e.map(e=>e instanceof CSSStyleSheet ? e : e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
            }
            update(e) {
                const t = this.render();
                super.update(e),
                t !== se && this.constructor.render(t, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }),
                this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
                this.constructor._styles.forEach(e=>{
                    const t = document.createElement("style");
                    t.textContent = e.cssText,
                    this.renderRoot.appendChild(t)
                }
                ))
            }
            render() {
                return se
            }
        }
        oe.finalized = !0,
        oe.render = (e,t,n)=>{
            if (!n || "object" != typeof n || !n.scopeName)
                throw new Error("The `scopeName` option is required.");
            const i = n.scopeName
              , s = V.has(t)
              , o = F && 11 === t.nodeType && !!t.host
              , a = o && !$.has(i)
              , u = a ? document.createDocumentFragment() : t;
            if (((e,t,n)=>{
                let i = V.get(t);
                void 0 === i && (r(t, t.firstChild),
                V.set(t, i = new L(Object.assign({
                    templateFactory: D
                }, n))),
                i.appendInto(t)),
                i.setValue(e),
                i.commit()
            }
            )(e, u, Object.assign({
                templateFactory: H(i)
            }, n)),
            a) {
                const e = V.get(u);
                V.delete(u);
                const n = e.value instanceof w ? e.value.template : void 0;
                B(i, u, n),
                r(t, t.firstChild),
                t.appendChild(u),
                V.set(t, e)
            }
            !s && o && window.ShadyCSS.styleElement(t.host)
        }
        ,
        oe.shadowRootOptions = {
            mode: "open"
        };
        /**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        const ae = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , ue = Symbol();
        class ce {
            constructor(e, t) {
                if (t !== ue)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e
            }
            get styleSheet() {
                return ae && void 0 === this.t && (this.t = new CSSStyleSheet,
                this.t.replaceSync(this.cssText)),
                this.t
            }
            toString() {
                return this.cssText
            }
        }
        const le = new Map
          , de = e=>{
            let t = le.get(e);
            return void 0 === t && le.set(e, t = new ce(e,ue)),
            t
        }
          , he = ae ? e=>e : e=>e instanceof CSSStyleSheet ? (e=>{
            let t = "";
            for (const n of e.cssRules)
                t += n.cssText;
            return (e=>de("string" == typeof e ? e : e + ""))(t)
        }
        )(e) : e /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        ;
        var fe, pe, ve, ge;
        const me = {
            toAttribute(e, t) {
                switch (t) {
                case Boolean:
                    e = e ? "" : null;
                    break;
                case Object:
                case Array:
                    e = null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                let n = e;
                switch (t) {
                case Boolean:
                    n = null !== e;
                    break;
                case Number:
                    n = null === e ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                        n = null
                    }
                }
                return n
            }
        }
          , ye = (e,t)=>t !== e && (t == t || e == e)
          , Se = {
            attribute: !0,
            type: String,
            converter: me,
            reflect: !1,
            hasChanged: ye
        };
        class we extends HTMLElement {
            constructor() {
                super(),
                this.Πi = new Map,
                this.Πo = void 0,
                this.Πl = void 0,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this.Πh = null,
                this.u()
            }
            static addInitializer(e) {
                var t;
                null !== (t = this.v) && void 0 !== t || (this.v = []),
                this.v.push(e)
            }
            static get observedAttributes() {
                this.finalize();
                const e = [];
                return this.elementProperties.forEach((t,n)=>{
                    const i = this.Πp(n, t);
                    void 0 !== i && (this.Πm.set(i, n),
                    e.push(i))
                }
                ),
                e
            }
            static createProperty(e, t=Se) {
                if (t.state && (t.attribute = !1),
                this.finalize(),
                this.elementProperties.set(e, t),
                !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                    const n = "symbol" == typeof e ? Symbol() : "__" + e
                      , i = this.getPropertyDescriptor(e, n, t);
                    void 0 !== i && Object.defineProperty(this.prototype, e, i)
                }
            }
            static getPropertyDescriptor(e, t, n) {
                return {
                    get() {
                        return this[t]
                    },
                    set(i) {
                        const r = this[e];
                        this[t] = i,
                        this.requestUpdate(e, r, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) || Se
            }
            static finalize() {
                if (this.hasOwnProperty("finalized"))
                    return !1;
                this.finalized = !0;
                const e = Object.getPrototypeOf(this);
                if (e.finalize(),
                this.elementProperties = new Map(e.elementProperties),
                this.Πm = new Map,
                this.hasOwnProperty("properties")) {
                    const e = this.properties
                      , t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                    for (const n of t)
                        this.createProperty(n, e[n])
                }
                return this.elementStyles = this.finalizeStyles(this.styles),
                !0
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const n = new Set(e.flat(1 / 0).reverse());
                    for (const e of n)
                        t.unshift(he(e))
                } else
                    void 0 !== e && t.push(he(e));
                return t
            }
            static "Πp"(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            u() {
                var e;
                this.Πg = new Promise(e=>this.enableUpdating = e),
                this.L = new Map,
                this.Π_(),
                this.requestUpdate(),
                null === (e = this.constructor.v) || void 0 === e || e.forEach(e=>e(this))
            }
            addController(e) {
                var t, n;
                (null !== (t = this.ΠU) && void 0 !== t ? t : this.ΠU = []).push(e),
                void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
            }
            removeController(e) {
                var t;
                null === (t = this.ΠU) || void 0 === t || t.splice(this.ΠU.indexOf(e) >>> 0, 1)
            }
            "Π_"() {
                this.constructor.elementProperties.forEach((e,t)=>{
                    this.hasOwnProperty(t) && (this.Πi.set(t, this[t]),
                    delete this[t])
                }
                )
            }
            createRenderRoot() {
                var e;
                const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                return ((e,t)=>{
                    ae ? e.adoptedStyleSheets = t.map(e=>e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t=>{
                        const n = document.createElement("style");
                        n.textContent = t.cssText,
                        e.appendChild(n)
                    }
                    )
                }
                )(t, this.constructor.elementStyles),
                t
            }
            connectedCallback() {
                var e;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (e = this.ΠU) || void 0 === e || e.forEach(e=>{
                    var t;
                    return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                }
                ),
                this.Πl && (this.Πl(),
                this.Πo = this.Πl = void 0)
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                var e;
                null === (e = this.ΠU) || void 0 === e || e.forEach(e=>{
                    var t;
                    return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                }
                ),
                this.Πo = new Promise(e=>this.Πl = e)
            }
            attributeChangedCallback(e, t, n) {
                this.K(e, n)
            }
            "Πj"(e, t, n=Se) {
                var i, r;
                const s = this.constructor.Πp(e, n);
                if (void 0 !== s && !0 === n.reflect) {
                    const o = (null !== (r = null === (i = n.converter) || void 0 === i ? void 0 : i.toAttribute) && void 0 !== r ? r : me.toAttribute)(t, n.type);
                    this.Πh = e,
                    null == o ? this.removeAttribute(s) : this.setAttribute(s, o),
                    this.Πh = null
                }
            }
            K(e, t) {
                var n, i, r;
                const s = this.constructor
                  , o = s.Πm.get(e);
                if (void 0 !== o && this.Πh !== o) {
                    const e = s.getPropertyOptions(o)
                      , a = e.converter
                      , u = null !== (r = null !== (i = null === (n = a) || void 0 === n ? void 0 : n.fromAttribute) && void 0 !== i ? i : "function" == typeof a ? a : null) && void 0 !== r ? r : me.fromAttribute;
                    this.Πh = o,
                    this[o] = u(t, e.type),
                    this.Πh = null
                }
            }
            requestUpdate(e, t, n) {
                let i = !0;
                void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || ye)(this[e], t) ? (this.L.has(e) || this.L.set(e, t),
                !0 === n.reflect && this.Πh !== e && (void 0 === this.Πk && (this.Πk = new Map),
                this.Πk.set(e, n))) : i = !1),
                !this.isUpdatePending && i && (this.Πg = this.Πq())
            }
            async "Πq"() {
                this.isUpdatePending = !0;
                try {
                    for (await this.Πg; this.Πo; )
                        await this.Πo
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.performUpdate();
                return null != e && await e,
                !this.isUpdatePending
            }
            performUpdate() {
                var e;
                if (!this.isUpdatePending)
                    return;
                this.hasUpdated,
                this.Πi && (this.Πi.forEach((e,t)=>this[t] = e),
                this.Πi = void 0);
                let t = !1;
                const n = this.L;
                try {
                    t = this.shouldUpdate(n),
                    t ? (this.willUpdate(n),
                    null === (e = this.ΠU) || void 0 === e || e.forEach(e=>{
                        var t;
                        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                    }
                    ),
                    this.update(n)) : this.Π$()
                } catch (e) {
                    throw t = !1,
                    this.Π$(),
                    e
                }
                t && this.E(n)
            }
            willUpdate(e) {}
            E(e) {
                var t;
                null === (t = this.ΠU) || void 0 === t || t.forEach(e=>{
                    var t;
                    return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                }
                ),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(e)),
                this.updated(e)
            }
            "Π$"() {
                this.L = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this.Πg
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this.Πk && (this.Πk.forEach((e,t)=>this.Πj(t, this[t], e)),
                this.Πk = void 0),
                this.Π$()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        var be, Ee, ke, Oe;
        we.finalized = !0,
        we.elementProperties = new Map,
        we.elementStyles = [],
        we.shadowRootOptions = {
            mode: "open"
        },
        null === (pe = (fe = globalThis).reactiveElementPlatformSupport) || void 0 === pe || pe.call(fe, {
            ReactiveElement: we
        }),
        (null !== (ve = (ge = globalThis).reactiveElementVersions) && void 0 !== ve ? ve : ge.reactiveElementVersions = []).push("1.0.0-rc.2");
        const Ce = globalThis.trustedTypes
          , xe = Ce ? Ce.createPolicy("lit-html", {
            createHTML: e=>e
        }) : void 0
          , Te = `lit$${(Math.random() + "").slice(9)}$`
          , Le = "?" + Te
          , _e = `<${Le}>`
          , Ae = document
          , Ie = (e="")=>Ae.createComment(e)
          , Ne = e=>null === e || "object" != typeof e && "function" != typeof e
          , Re = Array.isArray
          , Me = e=>{
            var t;
            return Re(e) || "function" == typeof (null === (t = e) || void 0 === t ? void 0 : t[Symbol.iterator])
        }
          , De = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , Pe = /-->/g
          , Ve = />/g
          , je = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g
          , Ue = /'/g
          , qe = /"/g
          , Fe = /^(?:script|style|textarea)$/i
          , He = e=>(t,...n)=>({
            _$litType$: e,
            strings: t,
            values: n
        })
          , ze = (He(1),
        He(2),
        Symbol.for("lit-noChange"))
          , $e = Symbol.for("lit-nothing")
          , Be = new WeakMap
          , Ze = Ae.createTreeWalker(Ae, 129, null, !1)
          , Je = (e,t)=>{
            const n = e.length - 1
              , i = [];
            let r, s = 2 === t ? "<svg>" : "", o = De;
            for (let t = 0; t < n; t++) {
                const n = e[t];
                let a, u, c = -1, l = 0;
                for (; l < n.length && (o.lastIndex = l,
                u = o.exec(n),
                null !== u); )
                    l = o.lastIndex,
                    o === De ? "!--" === u[1] ? o = Pe : void 0 !== u[1] ? o = Ve : void 0 !== u[2] ? (Fe.test(u[2]) && (r = RegExp("</" + u[2], "g")),
                    o = je) : void 0 !== u[3] && (o = je) : o === je ? ">" === u[0] ? (o = null != r ? r : De,
                    c = -1) : void 0 === u[1] ? c = -2 : (c = o.lastIndex - u[2].length,
                    a = u[1],
                    o = void 0 === u[3] ? je : '"' === u[3] ? qe : Ue) : o === qe || o === Ue ? o = je : o === Pe || o === Ve ? o = De : (o = je,
                    r = void 0);
                const d = o === je && e[t + 1].startsWith("/>") ? " " : "";
                s += o === De ? n + _e : c >= 0 ? (i.push(a),
                n.slice(0, c) + "$lit$" + n.slice(c) + Te + d) : n + Te + (-2 === c ? (i.push(void 0),
                t) : d)
            }
            const a = s + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
            return [void 0 !== xe ? xe.createHTML(a) : a, i]
        }
        ;
        class We {
            constructor({strings: e, _$litType$: t}, n) {
                let i;
                this.parts = [];
                let r = 0
                  , s = 0;
                const o = e.length - 1
                  , a = this.parts
                  , [u,c] = Je(e, t);
                if (this.el = We.createElement(u, n),
                Ze.currentNode = this.el.content,
                2 === t) {
                    const e = this.el.content
                      , t = e.firstChild;
                    t.remove(),
                    e.append(...t.childNodes)
                }
                for (; null !== (i = Ze.nextNode()) && a.length < o; ) {
                    if (1 === i.nodeType) {
                        if (i.hasAttributes()) {
                            const e = [];
                            for (const t of i.getAttributeNames())
                                if (t.endsWith("$lit$") || t.startsWith(Te)) {
                                    const n = c[s++];
                                    if (e.push(t),
                                    void 0 !== n) {
                                        const e = i.getAttribute(n.toLowerCase() + "$lit$").split(Te)
                                          , t = /([.?@])?(.*)/.exec(n);
                                        a.push({
                                            type: 1,
                                            index: r,
                                            name: t[2],
                                            strings: e,
                                            ctor: "." === t[1] ? Qe : "?" === t[1] ? et : "@" === t[1] ? tt : Xe
                                        })
                                    } else
                                        a.push({
                                            type: 6,
                                            index: r
                                        })
                                }
                            for (const t of e)
                                i.removeAttribute(t)
                        }
                        if (Fe.test(i.tagName)) {
                            const e = i.textContent.split(Te)
                              , t = e.length - 1;
                            if (t > 0) {
                                i.textContent = Ce ? Ce.emptyScript : "";
                                for (let n = 0; n < t; n++)
                                    i.append(e[n], Ie()),
                                    Ze.nextNode(),
                                    a.push({
                                        type: 2,
                                        index: ++r
                                    });
                                i.append(e[t], Ie())
                            }
                        }
                    } else if (8 === i.nodeType)
                        if (i.data === Le)
                            a.push({
                                type: 2,
                                index: r
                            });
                        else {
                            let e = -1;
                            for (; -1 !== (e = i.data.indexOf(Te, e + 1)); )
                                a.push({
                                    type: 7,
                                    index: r
                                }),
                                e += Te.length - 1
                        }
                    r++
                }
            }
            static createElement(e, t) {
                const n = Ae.createElement("template");
                return n.innerHTML = e,
                n
            }
        }
        function Ge(e, t, n=e, i) {
            var r, s, o, a;
            if (t === ze)
                return t;
            let u = void 0 !== i ? null === (r = n.Σi) || void 0 === r ? void 0 : r[i] : n.Σo;
            const c = Ne(t) ? void 0 : t._$litDirective$;
            return (null == u ? void 0 : u.constructor) !== c && (null === (s = null == u ? void 0 : u.O) || void 0 === s || s.call(u, !1),
            void 0 === c ? u = void 0 : (u = new c(e),
            u.T(e, n, i)),
            void 0 !== i ? (null !== (o = (a = n).Σi) && void 0 !== o ? o : a.Σi = [])[i] = u : n.Σo = u),
            void 0 !== u && (t = Ge(e, u.S(e, t.values), u, i)),
            t
        }
        class Ke {
            constructor(e, t) {
                this.l = [],
                this.N = void 0,
                this.D = e,
                this.M = t
            }
            u(e) {
                var t;
                const {el: {content: n}, parts: i} = this.D
                  , r = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Ae).importNode(n, !0);
                Ze.currentNode = r;
                let s = Ze.nextNode()
                  , o = 0
                  , a = 0
                  , u = i[0];
                for (; void 0 !== u; ) {
                    if (o === u.index) {
                        let t;
                        2 === u.type ? t = new Ye(s,s.nextSibling,this,e) : 1 === u.type ? t = new u.ctor(s,u.name,u.strings,this,e) : 6 === u.type && (t = new nt(s,this,e)),
                        this.l.push(t),
                        u = i[++a]
                    }
                    o !== (null == u ? void 0 : u.index) && (s = Ze.nextNode(),
                    o++)
                }
                return r
            }
            v(e) {
                let t = 0;
                for (const n of this.l)
                    void 0 !== n && (void 0 !== n.strings ? (n.I(e, n, t),
                    t += n.strings.length - 2) : n.I(e[t])),
                    t++
            }
        }
        class Ye {
            constructor(e, t, n, i) {
                this.type = 2,
                this.N = void 0,
                this.A = e,
                this.B = t,
                this.M = n,
                this.options = i
            }
            setConnected(e) {
                var t;
                null === (t = this.P) || void 0 === t || t.call(this, e)
            }
            get parentNode() {
                return this.A.parentNode
            }
            get startNode() {
                return this.A
            }
            get endNode() {
                return this.B
            }
            I(e, t=this) {
                e = Ge(this, e, t),
                Ne(e) ? e === $e || null == e || "" === e ? (this.H !== $e && this.R(),
                this.H = $e) : e !== this.H && e !== ze && this.m(e) : void 0 !== e._$litType$ ? this._(e) : void 0 !== e.nodeType ? this.$(e) : Me(e) ? this.g(e) : this.m(e)
            }
            k(e, t=this.B) {
                return this.A.parentNode.insertBefore(e, t)
            }
            $(e) {
                this.H !== e && (this.R(),
                this.H = this.k(e))
            }
            m(e) {
                const t = this.A.nextSibling;
                null !== t && 3 === t.nodeType && (null === this.B ? null === t.nextSibling : t === this.B.previousSibling) ? t.data = e : this.$(Ae.createTextNode(e)),
                this.H = e
            }
            _(e) {
                var t;
                const {values: n, _$litType$: i} = e
                  , r = "number" == typeof i ? this.C(e) : (void 0 === i.el && (i.el = We.createElement(i.h, this.options)),
                i);
                if ((null === (t = this.H) || void 0 === t ? void 0 : t.D) === r)
                    this.H.v(n);
                else {
                    const e = new Ke(r,this)
                      , t = e.u(this.options);
                    e.v(n),
                    this.$(t),
                    this.H = e
                }
            }
            C(e) {
                let t = Be.get(e.strings);
                return void 0 === t && Be.set(e.strings, t = new We(e)),
                t
            }
            g(e) {
                Re(this.H) || (this.H = [],
                this.R());
                const t = this.H;
                let n, i = 0;
                for (const r of e)
                    i === t.length ? t.push(n = new Ye(this.k(Ie()),this.k(Ie()),this,this.options)) : n = t[i],
                    n.I(r),
                    i++;
                i < t.length && (this.R(n && n.B.nextSibling, i),
                t.length = i)
            }
            R(e=this.A.nextSibling, t) {
                var n;
                for (null === (n = this.P) || void 0 === n || n.call(this, !1, !0, t); e && e !== this.B; ) {
                    const t = e.nextSibling;
                    e.remove(),
                    e = t
                }
            }
        }
        class Xe {
            constructor(e, t, n, i, r) {
                this.type = 1,
                this.H = $e,
                this.N = void 0,
                this.V = void 0,
                this.element = e,
                this.name = t,
                this.M = i,
                this.options = r,
                n.length > 2 || "" !== n[0] || "" !== n[1] ? (this.H = Array(n.length - 1).fill($e),
                this.strings = n) : this.H = $e
            }
            get tagName() {
                return this.element.tagName
            }
            I(e, t=this, n, i) {
                const r = this.strings;
                let s = !1;
                if (void 0 === r)
                    e = Ge(this, e, t, 0),
                    s = !Ne(e) || e !== this.H && e !== ze,
                    s && (this.H = e);
                else {
                    const i = e;
                    let o, a;
                    for (e = r[0],
                    o = 0; o < r.length - 1; o++)
                        a = Ge(this, i[n + o], t, o),
                        a === ze && (a = this.H[o]),
                        s || (s = !Ne(a) || a !== this.H[o]),
                        a === $e ? e = $e : e !== $e && (e += (null != a ? a : "") + r[o + 1]),
                        this.H[o] = a
                }
                s && !i && this.W(e)
            }
            W(e) {
                e === $e ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
            }
        }
        class Qe extends Xe {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            W(e) {
                this.element[this.name] = e === $e ? void 0 : e
            }
        }
        class et extends Xe {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            W(e) {
                e && e !== $e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)
            }
        }
        class tt extends Xe {
            constructor() {
                super(...arguments),
                this.type = 5
            }
            I(e, t=this) {
                var n;
                if ((e = null !== (n = Ge(this, e, t, 0)) && void 0 !== n ? n : $e) === ze)
                    return;
                const i = this.H
                  , r = e === $e && i !== $e || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive
                  , s = e !== $e && (i === $e || r);
                r && this.element.removeEventListener(this.name, this, i),
                s && this.element.addEventListener(this.name, this, e),
                this.H = e
            }
            handleEvent(e) {
                var t, n;
                "function" == typeof this.H ? this.H.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this.H.handleEvent(e)
            }
        }
        class nt {
            constructor(e, t, n) {
                this.element = e,
                this.type = 6,
                this.N = void 0,
                this.V = void 0,
                this.M = t,
                this.options = n
            }
            I(e) {
                Ge(this, e)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        var it, rt, st, ot, at, ut;
        null === (Ee = (be = globalThis).litHtmlPlatformSupport) || void 0 === Ee || Ee.call(be, We, Ye),
        (null !== (ke = (Oe = globalThis).litHtmlVersions) && void 0 !== ke ? ke : Oe.litHtmlVersions = []).push("2.0.0-rc.3");
        (null !== (it = (ut = globalThis).litElementVersions) && void 0 !== it ? it : ut.litElementVersions = []).push("3.0.0-rc.2");
        class ct extends we {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this.Φt = void 0
            }
            createRenderRoot() {
                var e, t;
                const n = super.createRenderRoot();
                return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = n.firstChild),
                n
            }
            update(e) {
                const t = this.render();
                super.update(e),
                this.Φt = ((e,t,n)=>{
                    var i, r;
                    const s = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : t;
                    let o = s._$litPart$;
                    if (void 0 === o) {
                        const e = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : null;
                        s._$litPart$ = o = new Ye(t.insertBefore(Ie(), e),e,void 0,n)
                    }
                    return o.I(e),
                    o
                }
                )(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var e;
                super.connectedCallback(),
                null === (e = this.Φt) || void 0 === e || e.setConnected(!0)
            }
            disconnectedCallback() {
                var e;
                super.disconnectedCallback(),
                null === (e = this.Φt) || void 0 === e || e.setConnected(!1)
            }
            render() {
                return ze
            }
        }
        ct.finalized = !0,
        ct._$litElement$ = !0,
        null === (st = (rt = globalThis).litElementHydrateSupport) || void 0 === st || st.call(rt, {
            LitElement: ct
        }),
        null === (at = (ot = globalThis).litElementPlatformSupport) || void 0 === at || at.call(ot, {
            LitElement: ct
        });
        var lt = ((e,...t)=>{
            const n = 1 === e.length ? e[0] : t.reduce((t,n,i)=>t + (e=>{
                if (e instanceof ce)
                    return e.cssText;
                if ("number" == typeof e)
                    return e;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(n) + e[i + 1], e[0]);
            return de(n)
        }
        )`:host{display:block;background-color:var(--md-primary-bg-color);color:var(--md-primary-text-color)}.container{height:100%;display:flex;flex-direction:column}`
          , dt = n(0)
          , ht = function(e, t, n, i) {
            var r, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, i);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (r = e[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(t, n, o) : r(t, n)) || o);
            return s > 3 && o && Object.defineProperty(t, n, o),
            o
        }
          , ft = function(e, t, n, i) {
            return new (n || (n = Promise))((function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            ))
        };
        const pt = dt.Desktop.logger.createLogger("gurue-sendchannel-component");
        let vt = class extends oe {
            constructor() {
                super(),
                this.sendWebhook = "",
                this.agentDnNumber = "", // The users extension they're logged into Webex CC with
                this.agentName = ""; // The users name
                this.agentEmailId = ""; // The users name
                this.agentId = ""; // The users agent ID on Webex
                this.cadVariables = [],
                this.selectedChannel = "sms", // The the number to send the SMS From
                this.sendChannelValue = "", // The number to send the SMS To
                this.sendMessageValue = "", // The SMS message
                this.sendTransID = "", // Contact Session ID
                this.sendStatus = "", // Outbound SMS status
                this.dn = "",
                this.state = {
                    defaultAuxCode: 0
                },
                this.sendSMS = ()=>ft(this, void 0, void 0, (function*() {
                    return yield fetch(this.sendWebhook, {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json;charset=UTF-8"
                        }),
                        body: JSON.stringify({
                            message: this.sendMessageValue,
                            msisdn: this.sendChannelValue,
                            AgentName: this.agentName,
                            AgentEmail: this.agentEmailId,
                            AgentId: this.agentId,
                            channel: this.selectedChannel
                        })
                    }).then(e=>e.json()).then(e=>{
                        this.sendTransID = e.response[0].transid,
                        this.sendStatus = e.response[0].description
                    }
                    ).catch(e=>console.error(e))
                }
                )),
                this.handleChannelSelection = e=>{
                    var t;
                    this.selectedChannel = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.value,
                    void 0 === this.selectedChannel && (this.selectedChannel = "sms"),
                    this.sendChannelValue = "",
                    this.sendMessageValue = ""
                }
                ,
                this.handleClear = ()=>{
                    this.sendChannelValue = "",
                    this.sendMessageValue = "",
                    this.selectedChannel = "sms"
                }
            }
            static get styles() {
                return lt
            }
            updated(e) {
                const t = Object.create(null, {
                    updated: {
                        get: ()=>super.updated
                    }
                });
                return ft(this, void 0, void 0, (function*() {
                    t.updated.call(this, e)
                }
                ))
            }
            firstUpdated(e) {
                const t = Object.create(null, {
                    firstUpdated: {
                        get: ()=>super.firstUpdated
                    }
                });
                return ft(this, void 0, void 0, (function*() {
                    t.firstUpdated.call(this, e);
                    try {
                        setTimeout(()=>ft(this, void 0, void 0, (function*() {
                            pt.info("initializing sdk from SMS Widget"),
                            yield this.init(),
                            this.getAgentInfo(),
                            pt.info("initialized sdk from SMS Widget")
                        }
                        )), 2e3)
                    } catch (e) {
                        pt.error("error while initializing sdk", e)
                    }
                }
                ))
            }
            init() {
                return ft(this, void 0, void 0, (function*() {
                    yield dt.Desktop.config.init(),
                    pt.info("Desktop.agentStateInfo.latestData ", dt.Desktop.agentStateInfo.latestData),
                    this.dn = dt.Desktop.agentStateInfo.latestData.dn
                }
                ))
            }
            getAgentInfo() {
                const e = dt.Desktop.agentStateInfo.latestData;
                pt.info("Widget latestdata: ", e)
            }
            inputHandler(e) {
                "sendChannelValue" === e.target.id ? this.sendChannelValue = e.target.value : "sendMessageValue" === e.target.id && (this.sendMessageValue = e.target.value)
            }
            sendSMSHandler(e) {
                this.sendSMS()
            }
            render() {
                return U`
      <div>
        <div
          class="container"
          style="padding: 12px; display: flex; flex-direction: row; width: 90%;"
        >
        <div style="flex: 1; padding: 10px">
            <md-label style="padding: 10px">
            Team Name:
            </md-label>
            <md-combobox style="padding: 10px"
                shape="pill"
                class="channel-combobox"
                .searchable="false"
                .options=${["Call Center", "Support Center","PL Service Center","Test SMS"]} placeholder="Select a Team to Send This Text Message From"
                .value=${[this.selectedChannel]}
                @remove-all-selected=${()=>this.handleClear()}
                @change-selected="${e=>this.handleChannelSelection(e)}"
            >
            </md-combobox>
          <md-input style="padding: 10px"
                  label="Send To:",
                  shape="pill"
                  containerSize="small-12"
                  placeholder="Enter the 10 Digit Number to Send This Message To"
                  id="sendChannelValue" 
                  .value=${[this.sendChannelValue]}
                  @input-change=${this.inputHandler}

          >
          </md-input>
          <md-input style="padding: 10px"
                    label="Message"
                    rows="10"
                    shape="pill"
                    containerSize="small-12"
                    placeholder="Enter your text message"
                    multiline
                    id="sendMessageValue"
                    .value=${[this.sendMessageValue]}
                    @input-change=${this.inputHandler}
            >
          </md-input>
          <md-button
                  .disabled="false"
                  color="blue"
                  @click=${this.sendSMSHandler};
                  }}
          >Send Message</md-button><br>
              <md-label style="padding: 10px">
                  Send Response
              </md-label>
              <div>
                  Transaction ID:
                  <b>${this.sendTransID}</b>
              </div>
              <div>
                  Status:
                  <b>${this.sendStatus}</b><br>
              </div>
      </div>

    `
            }
        }
        ;
        ht([X({
            type: String,
            reflect: !0,
            attribute: "send-webhook"
        })], vt.prototype, "sendWebhook", void 0),
        ht([X({
            type: String,
            reflect: !0
        })], vt.prototype, "agentDnNumber", void 0),
        ht([X({
            type: Array,
            reflect: !0
        })], vt.prototype, "cadVariables", void 0),
        ht([Q()], vt.prototype, "selectedChannel", void 0),
        ht([Q()], vt.prototype, "sendChannelValue", void 0),
        ht([Q()], vt.prototype, "sendMessageValue", void 0),
        ht([Q()], vt.prototype, "sendTransID", void 0),
        ht([Q()], vt.prototype, "sendStatus", void 0),
        ht([Q()], vt.prototype, "dn", void 0),
        vt = ht([K("gurue-sendchannel-component")], vt);
        var gt = function(e, t, n, i) {
            var r, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, i);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (r = e[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(t, n, o) : r(t, n)) || o);
            return s > 3 && o && Object.defineProperty(t, n, o),
            o
        };
        let mt = class extends oe {
            constructor() {
                super(...arguments),
                this.selectedCountyState = "Santa Clara County, CA",
                this.apiKey = ""
            }
            static get styles() {
                return re`
      :host {
        display: block;
        height: 100%;
        position: relative;
        overflow: auto;
      }
    `
            }
            render() {
                return U`
      <gurue-sendchannel-component style="height: 100%"></gurue-sendchannel-component>
    `
            }
        }
        ;
        gt([X({
            type: String
        })], mt.prototype, "selectedCountyState", void 0),
        gt([X({
            type: String,
            reflect: !0,
            attribute: "api-key"
        })], mt.prototype, "apiKey", void 0),
        mt = gt([K("gurue-sendchannel-widget")], mt);
        t.default = mt
    }
    ])
}
));
