n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(970683),
    s = n(893776),
    a = n(493773),
    c = n(129293),
    u = n(80206),
    d = n(17894),
    h = n(108427),
    f = n(626135),
    p = n(981631),
    g = n(388032);
function m(e) {
    n.g.location.assign(e);
}
function _(e) {
    let { location: t, transitionTo: n = m } = e,
        [l, _] = i.useState("submitting"),
        x = i.useRef(void 0);
    (0, a.ZP)(() => {
        (0, h.e)("verify_email");
        let e = (0, c.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                let t = await s.Z.verify(e);
                _("succeeded"), (x.current = t);
            } catch (e) {
                _("failed");
            }
        })();
    });
    let v = i.useCallback(() => {
            n(p.Z5c.LOGIN, { source: "verify_email" });
        }, [n]),
        E = i.useCallback(() => {
            f.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: x.current }),
                (0, d.Z)("verify_email");
        }, []);
    return "failed" === l
        ? (0, r.jsx)(u.Z, {
              title: g.intl.string(g.t.PCgG39),
              subtitle: g.intl.string(g.t.tQpeAw),
              buttonText: g.intl.string(g.t.dKhVQE),
              onButtonClick: v,
          })
        : "succeeded" === l
          ? (0, r.jsx)(u.Z, {
                title: g.intl.string(g.t.dAfGb2),
                buttonText: g.intl.string(g.t.uJWIj4),
                onButtonClick: E,
                image: (0, r.jsx)(o.dQ, { alt: g.intl.string(g.t.dAfGb2) }),
            })
          : (0, r.jsx)(u.Z, {
                title: g.intl.string(g.t["0c8+5u"]),
                subtitle: g.intl.string(g.t.ULTCBA),
                loading: !0,
            });
}
l.ZP.initialize();
