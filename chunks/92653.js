r.d(t, {
    d: () => k,
});
var a = r(1139),
    n = r(106526),
    s = r(26412),
    o = r(658),
    i = r(552932),
    c = r(865977),
    l = r(761847),
    u = r(416886),
    b = r(628006),
    f = r(64700),
    d = r(223108),
    h = r.n(d),
    p = r(380883),
    y = r(724374),
    g = r(190873),
    v = ["data", "keyPath", "postprocessValue", "hideRoot", "theme", "invertTheme"];

function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? m(Object(r), !0).forEach(function (t) {
                  (0, u.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var w = function (e) {
    return e;
};

function O(e) {
    var t,
        r,
        a,
        n =
            ((t = e.theme),
            (a = Object.keys(
                (r = {
                    getArrowStyle: "arrow",
                    getListStyle: "nestedNodeChildren",
                    getItemStringStyle: "nestedNodeItemString",
                    getLabelStyle: "label",
                    getValueStyle: "valueText",
                }),
            ).filter(function (t) {
                return e[t];
            })).length > 0 &&
                ((t =
                    "string" == typeof t
                        ? {
                              extend: t,
                          }
                        : A({}, t)),
                a.forEach(function (a) {
                    console.error('Styling method "'.concat(a, '" is deprecated, use "theme" property instead')),
                        (t[r[a]] = function (t) {
                            for (var r = t.style, n = arguments.length, s = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                s[o - 1] = arguments[o];
                            return {
                                style: A(A({}, r), e[a].apply(e, s)),
                            };
                        });
                })),
            t);
    return (
        e.invertTheme && (n = (0, g.WJ)(n)),
        {
            styling: (0, y.A)(n),
        }
    );
}
var k = (function (e) {
    (0, i.A)(u, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = (0, l.A)(u);
                return (
                    (e = t ? Reflect.construct(r, arguments, (0, l.A)(this).constructor) : r.apply(this, arguments)),
                    (0, c.A)(this, e)
                );
            });

    function u(e) {
        var t;
        return (0, s.A)(this, u), ((t = r.call(this, e)).state = O(e)), t;
    }
    return (
        (0, o.A)(u, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = this;
                    ["theme", "invertTheme"].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(O(e));
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return "keyPath" === r ? e[r].join("/") !== t.props[r].join("/") : e[r] !== t.props[r];
                    });
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        s = e.postprocessValue,
                        o = e.hideRoot,
                        i = (e.theme, e.invertTheme, (0, n.A)(e, v)),
                        c = this.state.styling;
                    return f.createElement(
                        "ul",
                        c("tree"),
                        f.createElement(
                            p.A,
                            (0, a.A)(
                                {},
                                A(
                                    {
                                        postprocessValue: s,
                                        hideRoot: o,
                                        styling: c,
                                    },
                                    i,
                                ),
                                {
                                    keyPath: o ? [] : r,
                                    value: s(t),
                                },
                            ),
                        ),
                    );
                },
            },
        ]),
        u
    );
})(f.Component);
(0, u.A)(k, "propTypes", {
    data: h().any,
    hideRoot: h().bool,
    theme: h().oneOfType([h().object, h().string]),
    invertTheme: h().bool,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])),
    postprocessValue: h().func,
    sortObjectKeys: h().oneOfType([h().func, h().bool]),
}),
    (0, u.A)(k, "defaultProps", {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ["root"],
        getItemString: function (e, t, r, a) {
            return f.createElement("span", null, r, " ", a);
        },
        labelRenderer: function (e) {
            var t = (0, b.A)(e, 1)[0];
            return f.createElement("span", null, t, ":");
        },
        valueRenderer: w,
        postprocessValue: w,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0,
    });
