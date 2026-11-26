n(938796);
var s = n(477900),
    i = n(582128),
    a = n(665260),
    l = n(855986),
    o = n(138399),
    r = n(155718),
    c = n(355622),
    u = n(989161),
    d = n(46653),
    h = n(580745),
    p = n(71393),
    g = n(576705),
    m = n(188567),
    A = n(710272),
    E = n(145530),
    f = n(74096),
    S = n(205120),
    b = n(652215),
    y = n(294920),
    T = n(13673);
function _(e) {
    let { value: t, channel: n, message: s } = e;
    return (0, A.i)({
        type: c.oU.EDIT,
        content: t,
        channel: n,
        hasStickers: s.stickerItems.length > 0 || s.stickers.length > 0,
        hasAttachments: s.attachments.length > 0,
        hasComponents: s.components.length > 0,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function v(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        A = (0, l.bG)([p.A], () => p.A.getGuild(m), [m]),
        f = t.type === b.rbe.GUILD_ANNOUNCEMENT,
        v = null != A && A.features.has(b.GuildFeatures.NEWS),
        I = f && v,
        {
            editingMessage: M,
            editingTextValue: N,
            editingRichValue: P,
        } = (0, l.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        R = (0, l.bG)([d.default], () => d.default.getId()),
        k = i.useCallback(
            (e, s, i) => {
                let { content: l } = i,
                    c = g.A.can(b.xBc.MANAGE_MESSAGES, t),
                    u = null != M && null != M.author ? M.author.id : null,
                    d = I && (u === R || c),
                    h = { content: l, components: void 0 };
                if (n.hasFlag(b.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === r.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== r.I5.TEXT_DISPLAY);
                    (t.splice(+!!e, 0, { type: r.I5.TEXT_DISPLAY, content: l, id: y.sm }),
                        (h.content = ""),
                        (h.components = t));
                }
                return (
                    d && null != M && (0, a.Lt)(M.flags, b.pr7.CROSSPOSTED)
                        ? E.A.confirmEdit(e, s, h)
                        : o.A.editMessage(e, s, h),
                    Promise.resolve()
                );
            },
            [M, I, R, t, n],
        ),
        L = i.useCallback((e) => (0, i.createElement)(C, { ...e, className: T.gM, key: u }), [u]);
    return null != N && null != P
        ? (0, s.jsx)(S.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: N,
              richValue: P,
              onCancel: o.A.endEditMessage,
              onChange: o.A.updateEditMessage,
              onConfirmDelete: E.A.confirmDelete,
              saveMessage: k,
              validateEdit: _,
              children: L,
          })
        : null;
}
function C(e) {
    let {
            textValue: t,
            richValue: n,
            message: a,
            channel: l,
            onChange: o,
            onSubmit: r,
            onKeyDown: d,
            renderLeftAccessories: h,
        } = e,
        [p, g] = i.useState(!0),
        A = i.useCallback(() => g(!0), []),
        E = i.useCallback(() => g(!1), []);
    return (
        i.useEffect(
            () => (
                m._.subscribe(b.jej.TEXTAREA_FOCUS, A),
                m._.subscribe(b.jej.TEXTAREA_BLUR, E),
                () => {
                    (m._.unsubscribe(b.jej.TEXTAREA_FOCUS, A), m._.unsubscribe(b.jej.TEXTAREA_BLUR, E));
                }
            ),
            [A, E],
        ),
        (0, s.jsx)(
            u.Ay,
            {
                className: T.gM,
                textValue: t,
                richValue: n,
                channel: l,
                type: c.oU.EDIT,
                onChange: o,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return r(t);
                },
                onKeyDown: d,
                focused: p,
                onFocus: A,
                onBlur: E,
                renderLeftAccessories: h,
            },
            a.id,
        )
    );
}
n.d(
    t,
    {},
    {
        Ay: function (e, t, n) {
            let { message: i, channel: a, compact: l } = e;
            return n
                ? (0, s.jsx)(v, { channel: a, message: i })
                : (0, s.jsx)(f.Ay, { message: i, content: t, compact: l ?? !1 });
        },
        Nr: C,
        R3: _,
    },
);
