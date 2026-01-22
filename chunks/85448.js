n.d(t, {
    A: () => m,
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
    d = n(503434);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
var _ = (function (e) {
    return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
})(_ || {});

function h(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: f = !1,
            voiceDb: _ = -1 / 0,
            muted: h = !1,
            deafen: m = !1,
            src: g,
            disabled: E = !1,
            ringing: b,
            ringingType: y = 0,
            avatarClassName: O,
            renderIcon: A,
            style: v,
            onClick: S,
            onContextMenu: I,
            className: T,
        } = e,
        C = (0, s.bG)([c.A], () => null != t && c.A.isLocalMute(t)),
        N = (0, u.v)({
            isSpeaking: i,
            isLatched: f,
            voiceDb: _,
        }),
        R = () => {
            let e = C ? o.O1p : m ? o.cQT : o.z0P;
            return h || m || C
                ? (0, r.jsx)("div", {
                      className: d.II,
                      children: (0, r.jsx)(
                          e,
                          {
                              className: d.h5,
                              color: o.LU0.colors.WHITE.css,
                          },
                          "status",
                      ),
                  })
                : null;
        },
        w = () =>
            (0, r.jsx)(
                "div",
                {
                    className: d.PQ,
                    style: N,
                },
                "border",
            ),
        P = () =>
            h && i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [w(), R()],
                  })
                : h || m || C
                  ? (0, r.jsx)(r.Fragment, {
                        children: R(),
                    })
                  : (0, r.jsx)(r.Fragment, {
                        children: w(),
                    }),
        D = () => {
            let e = (0, o.FT9)(n),
                t = (0, r.jsx)("img", {
                    src: g,
                    alt: " ",
                    className: a()(d.sb, O, {
                        [d.tb]: b && 0 === y,
                    }),
                });
            if (E) return t;
            let i = l.hW.AVATAR_DEFAULT;
            return (
                null != A
                    ? (i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON)
                    : (h || m || C) && (i = l.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: d.lN,
                    children: [
                        (0, r.jsxs)(l.Ay, {
                            className: d.KQ,
                            width: e,
                            height: e,
                            mask: i,
                            children: [null == A ? void 0 : A(), t],
                        }),
                        P(),
                    ],
                })
            );
        },
        x = a()(
            d.iE,
            {
                [d.vk]: null != S,
                [d.tb]: b && 0 === y,
                [d.hs]: b && 1 === y,
            },
            T,
        ),
        L = (0, o.FT9)(n),
        j = p(
            {
                height: L,
                width: L,
            },
            v,
        );
    return (0, r.jsx)("div", {
        style: j,
        onContextMenu: I,
        className: x,
        children: D(),
    });
}
h.RingingType = _;
let m = h;
