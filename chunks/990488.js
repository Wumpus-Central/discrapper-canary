n.d(t, {
    W: () => z,
    r: () => U
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(430824),
    u = n(594174),
    o = n(63568),
    a = n(246364),
    d = n(990686),
    c = n(118346),
    f = n(186078),
    x = n(73880),
    m = n(276486),
    g = n(196345),
    h = n(707592),
    j = n(223790),
    v = n(483760),
    C = n(465588),
    M = n(842310),
    R = n(644929),
    E = n(814960),
    S = n(981631);
function F(e) {
    let { guildId: t, formFields: n, updateFormFields: l, v2Enabled: u } = e,
        o = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
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
        m = (e, t) => {
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
        j = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, i.jsx)(
                        g.dd,
                        {
                            channelId: o,
                            formField: e,
                            onChange: (e, n) => d(t, n)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        h.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => c(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        x.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => c(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        f.sp,
                        {
                            formField: e,
                            onChange: (e) => m(t, e)
                        },
                        t
                    );
            }
        },
        M = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, i.jsx)(
                        R.dd,
                        {
                            channelId: o,
                            formField: e,
                            onChange: (e, n) => d(t, n)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, i.jsx)(
                        E.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => c(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, i.jsx)(
                        C.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => c(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(
                        v.sp,
                        {
                            formField: e,
                            onChange: (e) => m(t, e)
                        },
                        t
                    );
            }
        };
    return (0, i.jsx)(i.Fragment, { children: n.map((e, t) => (u ? M(e, t) : j(e, t))) });
}
function z(e) {
    let t,
        { guildId: n, formFields: l, updateFormFields: s, disableVerification: a } = e,
        f = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        x = (0, d.i)({ guildId: n }),
        g = (0, o.jS)(n, 'PreviewFormRenderer');
    return ((t = x === S.sFg.NONE ? null : x === S.sFg.VERY_HIGH ? (g ? M.l : m.l) : g ? j.b : c.b), null == f)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !a && null != t && (0, i.jsx)(t, {}),
                  (0, i.jsx)(F, {
                      guildId: n,
                      formFields: l,
                      updateFormFields: s,
                      v2Enabled: g
                  })
              ]
          });
}
function U(e) {
    let t,
        { guildId: n, formFields: s, updateFormFields: a, disableVerification: f } = e,
        x = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        g = (0, d.i)({ guildId: n }),
        h = (0, o.jS)(n, 'PreviewFormRenderer'),
        v = (null == x ? void 0 : x.isPhoneVerified()) || (null == x ? void 0 : x.isStaff()),
        C = (null == x ? void 0 : x.verified) || v,
        R = !1;
    g === S.sFg.NONE ? ((R = !0), (t = null)) : g === S.sFg.VERY_HIGH ? ((R = null != v && v), (t = h ? M.v : m.v)) : ((R = null != C && C), (t = h ? j.B : c.B));
    let E = l.useRef(R);
    return null == x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !f && !E.current && null != t && (0, i.jsx)(t, { isUserVerified: R }),
                  (0, i.jsx)(F, {
                      guildId: n,
                      formFields: s,
                      updateFormFields: a,
                      v2Enabled: h
                  })
              ]
          });
}
