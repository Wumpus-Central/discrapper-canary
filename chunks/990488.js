t.d(n, {
    W: function () {
        return b;
    },
    r: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    s = t(430824),
    o = t(594174),
    u = t(63568),
    c = t(246364),
    a = t(990686),
    d = t(118346),
    f = t(186078),
    m = t(73880),
    h = t(276486),
    x = t(196345),
    j = t(707592),
    g = t(23262),
    v = t(483760),
    C = t(465588),
    p = t(842310),
    T = t(644929),
    I = t(814960),
    F = t(981631);
function N(e) {
    let { guildId: n, formFields: t, updateFormFields: r, v2Enabled: o } = e,
        u = (0, l.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getGuild(n)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
        a = (e, n) => {
            let i = t[e];
            r([
                ...t.slice(0, e),
                {
                    ...i,
                    response: n
                },
                ...t.slice(e + 1)
            ]);
        },
        d = (e, n) => {
            let i = t[e];
            r([
                ...t.slice(0, e),
                {
                    ...i,
                    response: n
                },
                ...t.slice(e + 1)
            ]);
        },
        h = (e, n) => {
            let { value: i } = n,
                l = t[e];
            r([
                ...t.slice(0, e),
                {
                    ...l,
                    response: i
                },
                ...t.slice(e + 1)
            ]);
        },
        g = (e, n) => {
            switch (e.field_type) {
                case c.QJ.TERMS:
                    return (0, i.jsx)(
                        x.dd,
                        {
                            channelId: u,
                            formField: e,
                            onChange: (e, t) => a(n, t)
                        },
                        n
                    );
                case c.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        j.zY,
                        {
                            formField: e,
                            autofocus: 0 === n,
                            onChange: (e) => d(n, e)
                        },
                        n
                    );
                case c.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === n,
                            onChange: (e) => d(n, e)
                        },
                        n
                    );
                case c.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        f.sp,
                        {
                            formField: e,
                            onChange: (e) => h(n, e)
                        },
                        n
                    );
            }
        },
        p = (e, n) => {
            switch (e.field_type) {
                case c.QJ.TERMS:
                    return (0, i.jsx)(
                        T.dd,
                        {
                            channelId: u,
                            formField: e,
                            onChange: (e, t) => a(n, t)
                        },
                        n
                    );
                case c.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        I.zY,
                        {
                            formField: e,
                            autofocus: 0 === n,
                            onChange: (e) => d(n, e)
                        },
                        n
                    );
                case c.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        C.lX,
                        {
                            formField: e,
                            autofocus: 0 === n,
                            onChange: (e) => d(n, e)
                        },
                        n
                    );
                case c.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        v.sp,
                        {
                            formField: e,
                            onChange: (e) => h(n, e)
                        },
                        n
                    );
            }
        };
    return (0, i.jsx)(i.Fragment, { children: t.map((e, n) => (o ? p(e, n) : g(e, n))) });
}
function b(e) {
    let n,
        { guildId: t, formFields: r, updateFormFields: s, disableVerification: c } = e,
        f = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        m = (0, a.i)({ guildId: t }),
        x = (0, u.jS)(t, 'PreviewFormRenderer');
    return ((n = m === F.sFg.NONE ? null : m === F.sFg.VERY_HIGH ? (x ? p.l : h.l) : x ? g.b : d.b), null == f)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !c && null != n && (0, i.jsx)(n, {}),
                  (0, i.jsx)(N, {
                      guildId: t,
                      formFields: r,
                      updateFormFields: s,
                      v2Enabled: x
                  })
              ]
          });
}
function E(e) {
    let n,
        { guildId: t, formFields: s, updateFormFields: c, disableVerification: f } = e,
        m = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        x = (0, a.i)({ guildId: t }),
        j = (0, u.jS)(t, 'PreviewFormRenderer'),
        v = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        C = (null == m ? void 0 : m.verified) || v,
        T = !1;
    x === F.sFg.NONE ? ((T = !0), (n = null)) : x === F.sFg.VERY_HIGH ? ((T = null != v && v), (n = j ? p.v : h.v)) : ((T = null != C && C), (n = j ? g.B : d.B));
    let I = r.useRef(T);
    return null == m
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !f && !I.current && null != n && (0, i.jsx)(n, { isUserVerified: T }),
                  (0, i.jsx)(N, {
                      guildId: t,
                      formFields: s,
                      updateFormFields: c,
                      v2Enabled: j
                  })
              ]
          });
}
