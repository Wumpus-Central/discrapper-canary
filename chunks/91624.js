n.d(t, { Ay: () => I, Nr: () => v, R3: () => C }), n(938796);
var s = n(477900),
    i = n(582128),
    l = n(665260),
    a = n(17928),
    o = n(148494),
    r = n(155718),
    c = n(355622),
    u = n(273754),
    d = n(280450),
    h = n(580745),
    p = n(71393),
    g = n(576705),
    m = n(625494),
    E = n(806150),
    A = n(145530),
    f = n(438729),
    S = n(205120),
    _ = n(652215);
n(294920);
var y = n(13673);
function C(e) {
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
function T(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        E = (0, a.bG)([p.A], () => p.A.getGuild(m), [m]),
        f = t.type === _.rbe.GUILD_ANNOUNCEMENT,
        T = null != E && E.features.has(_.GuildFeatures.NEWS),
        I = f && T,
        {
            editingMessage: b,
            editingTextValue: M,
            editingRichValue: N,
        } = (0, a.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        R = (0, a.bG)([d.default], () => d.default.getId()),
        P = i.useCallback(
            (e, s, i) => {
                let { content: a } = i,
                    c = g.A.can(_.xBc.MANAGE_MESSAGES, t),
                    u = null != b && null != b.author ? b.author.id : null,
                    d = I && (u === R || c),
                    h = { content: a, components: void 0 };
                if (n.hasFlag(_.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === r.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== r.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: r.I5.TEXT_DISPLAY, content: a, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    d && null != b && (0, l.Lt)(b.flags, _.pr7.CROSSPOSTED)
                        ? A.A.confirmEdit(e, s, h)
                        : o.A.editMessage(e, s, h),
                    Promise.resolve()
                );
            },
            [b, I, R, t, n],
        ),
        D = i.useCallback((e) => (0, i.createElement)(v, { ...e, className: y.gM, key: u }), [u]);
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
              validateEdit: C,
              children: D,
          })
        : null;
}
function v(e) {
    let {
            textValue: t,
            richValue: n,
            message: l,
            channel: a,
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
                m._.subscribe(_.jej.TEXTAREA_FOCUS, E),
                m._.subscribe(_.jej.TEXTAREA_BLUR, A),
                () => {
                    m._.unsubscribe(_.jej.TEXTAREA_FOCUS, E), m._.unsubscribe(_.jej.TEXTAREA_BLUR, A);
                }
            ),
            [E, A],
        ),
        (0, s.jsx)(
            u.Ay,
            {
                className: y.gM,
                textValue: t,
                richValue: n,
                channel: a,
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
            l.id,
        )
    );
}
function I(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return n
        ? (0, s.jsx)(T, { channel: l, message: i })
        : (0, s.jsx)(f.Ay, { message: i, content: t, compact: a ?? !1 });
}
