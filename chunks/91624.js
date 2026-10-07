(n.d(t, { Ay: () => v, Nr: () => T, R3: () => y }), n(938796));
var s = n(477900),
    i = n(582128),
    a = n(665260),
    l = n(17928),
    o = n(148494),
    r = n(155718),
    c = n(355622),
    u = n(479909),
    d = n(280450),
    h = n(580745),
    p = n(71393),
    g = n(576705),
    m = n(625494),
    E = n(806150),
    A = n(145530),
    f = n(438729),
    S = n(205120),
    b = n(652215);
n(294920);
var _ = n(13673);
function y(e) {
    let { value: t, channel: n, message: s } = e;
    return (0, E.i)({
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
function C(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        E = (0, l.bG)([p.A], () => p.A.getGuild(m), [m]),
        f = t.type === b.rbe.GUILD_ANNOUNCEMENT,
        C = null != E && E.features.has(b.GuildFeatures.NEWS),
        v = f && C,
        {
            editingMessage: I,
            editingTextValue: M,
            editingRichValue: N,
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
        P = i.useCallback(
            (e, s, i) => {
                let { content: l } = i,
                    c = g.A.can(b.xBc.MANAGE_MESSAGES, t),
                    u = null != I && null != I.author ? I.author.id : null,
                    d = v && (u === R || c),
                    h = { content: l, components: void 0 };
                if (n.hasFlag(b.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === r.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== r.I5.TEXT_DISPLAY);
                    (t.splice(+!!e, 0, { type: r.I5.TEXT_DISPLAY, content: l, id: "82744" }),
                        (h.content = ""),
                        (h.components = t));
                }
                return (
                    d && null != I && (0, a.Lt)(I.flags, b.pr7.CROSSPOSTED)
                        ? A.A.confirmEdit(e, s, h)
                        : o.A.editMessage(e, s, h),
                    Promise.resolve()
                );
            },
            [I, v, R, t, n],
        ),
        D = i.useCallback((e) => (0, i.createElement)(T, { ...e, className: _.gM, key: u }), [u]);
    return null != M && null != N
        ? (0, s.jsx)(S.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: M,
              richValue: N,
              onCancel: o.A.endEditMessage,
              onChange: o.A.updateEditMessage,
              onConfirmDelete: A.A.confirmDelete,
              saveMessage: P,
              validateEdit: y,
              children: D,
          })
        : null;
}
function T(e) {
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
        E = i.useCallback(() => g(!0), []),
        A = i.useCallback(() => g(!1), []);
    return (
        i.useEffect(
            () => (
                m._.subscribe(b.jej.TEXTAREA_FOCUS, E),
                m._.subscribe(b.jej.TEXTAREA_BLUR, A),
                () => {
                    (m._.unsubscribe(b.jej.TEXTAREA_FOCUS, E), m._.unsubscribe(b.jej.TEXTAREA_BLUR, A));
                }
            ),
            [E, A],
        ),
        (0, s.jsx)(
            u.Ay,
            {
                className: _.gM,
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
                onFocus: E,
                onBlur: A,
                renderLeftAccessories: h,
            },
            a.id,
        )
    );
}
function v(e, t, n) {
    let { message: i, channel: a, compact: l } = e;
    return n
        ? (0, s.jsx)(C, { channel: a, message: i })
        : (0, s.jsx)(f.Ay, { message: i, content: t, compact: l ?? !1 });
}
