var n = r(874790),
    i = r(65183),
    o = r(581079),
    a = (0, i.Map)(),
    u = 0;
function s(t, e) {
    console.warn('WARNING: ' + t + ' will be deprecated soon!\nPlease use "' + e + '" instead.');
}
var c = {
    getLastCreatedEntityKey: function () {
        return s('DraftEntity.getLastCreatedEntityKey', 'contentState.getLastCreatedEntityKey'), c.__getLastCreatedEntityKey();
    },
    create: function (t, e, r) {
        return s('DraftEntity.create', 'contentState.createEntity'), c.__create(t, e, r);
    },
    add: function (t) {
        return s('DraftEntity.add', 'contentState.addEntity'), c.__add(t);
    },
    get: function (t) {
        return s('DraftEntity.get', 'contentState.getEntity'), c.__get(t);
    },
    mergeData: function (t, e) {
        return s('DraftEntity.mergeData', 'contentState.mergeEntityData'), c.__mergeData(t, e);
    },
    replaceData: function (t, e) {
        return s('DraftEntity.replaceData', 'contentState.replaceEntityData'), c.__replaceData(t, e);
    },
    __getLastCreatedEntityKey: function () {
        return '' + u;
    },
    __create: function (t, e, r) {
        return c.__add(
            new n({
                type: t,
                mutability: e,
                data: r || {}
            })
        );
    },
    __add: function (t) {
        var e = '' + ++u;
        return (a = a.set(e, t)), e;
    },
    __get: function (t) {
        var e = a.get(t);
        return e || o(!1), e;
    },
    __mergeData: function (t, e) {
        var r = c.__get(t),
            n = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n, i, o;
                            (n = t),
                                (i = e),
                                (o = r[e]),
                                i in n
                                    ? Object.defineProperty(n, i, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (n[i] = o);
                        });
                }
                return t;
            })({}, r.getData(), e),
            i = r.set('data', n);
        return (a = a.set(t, i)), i;
    },
    __replaceData: function (t, e) {
        var r = c.__get(t).set('data', e);
        return (a = a.set(t, r)), r;
    }
};
t.exports = c;
