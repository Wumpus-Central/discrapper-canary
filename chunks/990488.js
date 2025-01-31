n.d(t, {
    W: () => I,
    r: () => b
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(430824),
    o = n(594174),
    a = n(63568),
    u = n(246364),
    c = n(990686),
    d = n(118346),
    m = n(186078),
    x = n(73880),
    f = n(276486),
    h = n(196345),
    j = n(707592),
    g = n(23262),
    v = n(483760),
    C = n(465588),
    T = n(842310),
    p = n(644929),
    N = n(814960),
    F = n(981631);
function R(e) {
    let { guildId: t, formFields: n, updateFormFields: l, v2Enabled: o } = e,
        a = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let i = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...i,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        d = (e, t) => {
            let i = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...i,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        f = (e, t) => {
            let { value: i } = t,
                r = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...r,
                    response: i
                },
                ...n.slice(e + 1)
            ]);
        },
        g = (e, t) => {
            switch (e.field_type) {
                case u.QJ.TERMS:
                    return (0, i.jsx)(
                        h.dd,
                        {
                            channelId: a,
                            formField: e,
                            onChange: (e, n) => c(t, n)
                        },
                        t
                    );
                case u.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        j.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case u.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        x.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case u.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        m.sp,
                        {
                            formField: e,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
            }
        },
        T = (e, t) => {
            switch (e.field_type) {
                case u.QJ.TERMS:
                    return (0, i.jsx)(
                        p.dd,
                        {
                            channelId: a,
                            formField: e,
                            onChange: (e, n) => c(t, n)
                        },
                        t
                    );
                case u.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        N.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case u.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        C.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case u.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        v.sp,
                        {
                            formField: e,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
            }
        };
    return (0, i.jsx)(i.Fragment, { children: n.map((e, t) => (o ? T(e, t) : g(e, t))) });
}
function I(e) {
    let t,
        { guildId: n, formFields: l, updateFormFields: s, disableVerification: u } = e,
        m = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        x = (0, c.i)({ guildId: n }),
        h = (0, a.jS)(n, 'PreviewFormRenderer');
    return ((t = x === F.sFg.NONE ? null : x === F.sFg.VERY_HIGH ? (h ? T.l : f.l) : h ? g.b : d.b), null == m)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !u && null != t && (0, i.jsx)(t, {}),
                  (0, i.jsx)(R, {
                      guildId: n,
                      formFields: l,
                      updateFormFields: s,
                      v2Enabled: h
                  })
              ]
          });
}
function b(e) {
    let t,
        { guildId: n, formFields: s, updateFormFields: u, disableVerification: m } = e,
        x = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        h = (0, c.i)({ guildId: n }),
        j = (0, a.jS)(n, 'PreviewFormRenderer'),
        v = (null == x ? void 0 : x.isPhoneVerified()) || (null == x ? void 0 : x.isStaff()),
        C = (null == x ? void 0 : x.verified) || v,
        p = !1;
    h === F.sFg.NONE ? ((p = !0), (t = null)) : h === F.sFg.VERY_HIGH ? ((p = null != v && v), (t = j ? T.v : f.v)) : ((p = null != C && C), (t = j ? g.B : d.B));
    let N = l.useRef(p);
    return null == x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !m && !N.current && null != t && (0, i.jsx)(t, { isUserVerified: p }),
                  (0, i.jsx)(R, {
                      guildId: n,
                      formFields: s,
                      updateFormFields: u,
                      v2Enabled: j
                  })
              ]
          });
}
