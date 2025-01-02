n.d(t, {
    W: function () {
        return j;
    },
    r: function () {
        return p;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(430824),
    a = n(594174),
    o = n(246364),
    d = n(990686),
    u = n(118346),
    c = n(186078),
    m = n(73880),
    f = n(276486),
    g = n(196345),
    x = n(707592),
    h = n(981631);
function v(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        a = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
        d = (e, t) => {
            let l = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...l,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        u = (e, t) => {
            let l = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...l,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        f = (e, t) => {
            let { value: l } = t,
                s = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...s,
                    response: l
                },
                ...n.slice(e + 1)
            ]);
        },
        h = (e, t) => {
            switch (e.field_type) {
                case o.QJ.TERMS:
                    return (0, l.jsx)(
                        g.dd,
                        {
                            channelId: a,
                            formField: e,
                            onChange: (e, n) => d(t, n)
                        },
                        t
                    );
                case o.QJ.TEXT_INPUT:
                    return (0, l.jsx)(
                        x.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case o.QJ.PARAGRAPH:
                    return (0, l.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case o.QJ.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        c.sp,
                        {
                            formField: e,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
            }
        };
    return (0, l.jsx)(l.Fragment, { children: n.map((e, t) => h(e, t)) });
}
function j(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: r, disableVerification: o } = e,
        c = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
        m = (0, d.i)({ guildId: n });
    return ((t = m === h.sFg.NONE ? null : m === h.sFg.VERY_HIGH ? f.l : u.b), null == c)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !o && null != t && (0, l.jsx)(t, {}),
                  (0, l.jsx)(v, {
                      guildId: n,
                      formFields: i,
                      updateFormFields: r
                  })
              ]
          });
}
function p(e) {
    let t,
        { guildId: n, formFields: r, updateFormFields: o, disableVerification: c } = e,
        m = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
        g = (0, d.i)({ guildId: n }),
        x = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        j = (null == m ? void 0 : m.verified) || x,
        p = !1;
    g === h.sFg.NONE ? ((p = !0), (t = null)) : g === h.sFg.VERY_HIGH ? ((p = null != x && x), (t = f.v)) : ((p = null != j && j), (t = u.B));
    let N = i.useRef(p);
    return null == m
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !c && !N.current && null != t && (0, l.jsx)(t, { isUserVerified: p }),
                  (0, l.jsx)(v, {
                      guildId: n,
                      formFields: r,
                      updateFormFields: o
                  })
              ]
          });
}
