n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    s = n(311907),
    r = n(843472),
    o = n(155718),
    c = n(355622),
    d = n(133343),
    u = n(961350),
    h = n(580745),
    m = n(71393),
    A = n(576705),
    g = n(203982),
    _ = n(460350),
    p = n(145530),
    f = n(291812),
    E = n(205120),
    C = n(652215);
n(294920);
var x = n(701628);
function S(e) {
    let { value: t, channel: n } = e;
    return (0, _.i)({ type: c.oU.EDIT, content: t, channel: n, restrictMentions: !1, respectCooldown: !1 });
}
function I(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: d } = n,
        g = t.getGuildId(),
        _ = (0, s.bG)([m.A], () => m.A.getGuild(g), [g]),
        f = t.type === C.rbe.GUILD_ANNOUNCEMENT,
        I = null != _ && _.features.has(C.GuildFeatures.NEWS),
        N = f && I,
        {
            editingMessage: T,
            editingTextValue: y,
            editingRichValue: b,
        } = (0, s.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        j = (0, s.bG)([u.default], () => u.default.getId()),
        R = l.useCallback(
            (e, i, l) => {
                let { content: s } = l,
                    c = A.A.can(C.xBc.MANAGE_MESSAGES, t),
                    d = null != T && null != T.author ? T.author.id : null,
                    u = N && (d === j || c),
                    h = { content: s, components: void 0 };
                if (n.hasFlag(C.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: o.I5.TEXT_DISPLAY, content: s, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    u && null != T && (0, a.Lt)(T.flags, C.pr7.CROSSPOSTED)
                        ? p.A.confirmEdit(e, i, h)
                        : r.A.editMessage(e, i, h),
                    Promise.resolve()
                );
            },
            [T, N, j, t, n],
        ),
        M = l.useCallback((e) => (0, l.createElement)(v, { ...e, className: x.gM, key: d }), [d]);
    return null != y && null != b
        ? (0, i.jsx)(E.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: y,
              richValue: b,
              onCancel: r.A.endEditMessage,
              onChange: r.A.updateEditMessage,
              onConfirmDelete: p.A.confirmDelete,
              saveMessage: R,
              validateEdit: S,
              children: M,
          })
        : null;
}
function v(e) {
    let {
            textValue: t,
            richValue: n,
            message: a,
            channel: s,
            onChange: r,
            onSubmit: o,
            onKeyDown: u,
            renderLeftAccessories: h,
        } = e,
        [m, A] = l.useState(!0),
        _ = l.useCallback(() => A(!0), []),
        p = l.useCallback(() => A(!1), []);
    return (
        l.useEffect(
            () => (
                g._.subscribe(C.jej.TEXTAREA_FOCUS, _),
                g._.subscribe(C.jej.TEXTAREA_BLUR, p),
                () => {
                    g._.unsubscribe(C.jej.TEXTAREA_FOCUS, _), g._.unsubscribe(C.jej.TEXTAREA_BLUR, p);
                }
            ),
            [_, p],
        ),
        (0, i.jsx)(
            d.Ay,
            {
                className: x.gM,
                textValue: t,
                richValue: n,
                channel: s,
                type: c.oU.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: u,
                focused: m,
                onFocus: _,
                onBlur: p,
                renderLeftAccessories: h,
            },
            a.id,
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: a, compact: s } = e;
    return n
        ? (0, i.jsx)(I, { channel: a, message: l })
        : (0, i.jsx)(f.Ay, { message: l, content: t, compact: s ?? !1 });
}
