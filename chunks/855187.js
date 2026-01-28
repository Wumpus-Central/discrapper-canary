n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(952572),
    s = n(961350),
    l = n(430452),
    c = n(985018);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
    let u = (0, a.k34)(),
        { videoEnabled: f, hasVideoDevice: _ } = (0, i.cf)([l.A], () => ({
            videoEnabled: l.A.isVideoEnabled(),
            hasVideoDevice: l.A.isVideoAvailable(),
        })),
        h = (0, i.bG)([s.default], () => s.default.getId() === e),
        m = (0, o.A)();

    function g() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("54809"),
                    n.e("87093"),
                    n.e("38939"),
                    n.e("94700"),
                    n.e("3795"),
                    n.e("28936"),
                    n.e("40215"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("62175"),
                    n.e("97283"),
                    n.e("94857"),
                    n.e("7034"),
                    n.e("20941"),
                    n.e("37372"),
                    n.e("67923"),
                    n.e("3183"),
                    n.e("92917"),
                    n.e("2292"),
                    n.e("45586"),
                    n.e("62733"),
                    n.e("83518"),
                    n.e("22726"),
                    n.e("5152"),
                    n.e("52199"),
                    n.e("78572"),
                    n.e("3911"),
                    n.e("34749"),
                    n.e("44667"),
                    n.e("7803"),
                    n.e("84704"),
                    n.e("67646"),
                    n.e("5606"),
                    n.e("44011"),
                    n.e("72450"),
                    n.e("23367"),
                    n.e("98797"),
                    n.e("60449"),
                    n.e("36111"),
                ]).then(n.bind(n, 308229));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(d({}, t), {
                            videoEnabled: f,
                        }),
                    );
            },
            {
                modalKey: "camera-preview",
                contextKey: null != t ? (0, a.TId)(t) : u,
            },
        );
    }
    return (!f || m) && h && _
        ? (0, r.jsx)(a.Drp, {
              id: "change-video-background",
              label: f ? c.intl.string(c.t.mZKxHb) : c.intl.string(c.t["vkV93/"]),
              action: g,
              icon: f ? a.fBX : a.bMW,
              leadingAccessory: {
                  type: "icon",
                  icon: f ? a.fBX : a.bMW,
              },
          })
        : null;
}
