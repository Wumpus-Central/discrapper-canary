n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(573435),
    c = n(430452),
    u = n(659974),
    d = n(863089),
    f = n(503434);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
var h = (function (e) {
    return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
})(h || {});

function m(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: p = !1,
            muted: h = !1,
            deafen: m = !1,
            src: g,
            disabled: E = !1,
            ringing: y,
            ringingType: b = 0,
            avatarClassName: O,
            renderIcon: v,
            style: A,
            onClick: I,
            onContextMenu: S,
            className: T,
        } = e,
        C = (0, s.bG)([c.A], () => null != t && c.A.isLocalMute(t)),
        N = (0, d.A)(t),
        w = (0, u.v)({
            isSpeaking: i,
            isLatched: p,
            voiceDb: N,
        }),
        R = () => {
            let e = C ? o.O1p : m ? o.cQT : o.z0P;
            return h || m || C
                ? (0, r.jsx)("div", {
                      className: f.II,
                      children: (0, r.jsx)(
                          e,
                          {
                              className: f.h5,
                              color: o.LU0.colors.WHITE.css,
                          },
                          "status",
                      ),
                  })
                : null;
        },
        P = () =>
            (0, r.jsx)(
                "div",
                {
                    className: f.PQ,
                    style: w,
                },
                "border",
            ),
        D = () =>
            h && i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [P(), R()],
                  })
                : h || m || C
                  ? (0, r.jsx)(r.Fragment, {
                        children: R(),
                    })
                  : (0, r.jsx)(r.Fragment, {
                        children: P(),
                    }),
        x = () => {
            let e = (0, o.FT9)(n),
                t = (0, r.jsx)("img", {
                    src: g,
                    alt: " ",
                    className: a()(f.sb, O, {
                        [f.tb]: y && 0 === b,
                    }),
                });
            if (E) return t;
            let i = l.hW.AVATAR_DEFAULT;
            return (
                null != v
                    ? (i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON)
                    : (h || m || C) && (i = l.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: f.lN,
                    children: [
                        (0, r.jsxs)(l.Ay, {
                            className: f.KQ,
                            width: e,
                            height: e,
                            mask: i,
                            children: [null == v ? void 0 : v(), t],
                        }),
                        D(),
                    ],
                })
            );
        },
        L = a()(
            f.iE,
            {
                [f.vk]: null != I,
                [f.tb]: y && 0 === b,
                [f.hs]: y && 1 === b,
            },
            T,
        ),
        j = (0, o.FT9)(n),
        M = _(
            {
                height: j,
                width: j,
            },
            A,
        );
    return (0, r.jsx)("div", {
        style: M,
        onContextMenu: S,
        className: L,
        children: x(),
    });
}
m.RingingType = h;
let g = m;
