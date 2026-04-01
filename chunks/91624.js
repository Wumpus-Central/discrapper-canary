n.d(t, { A: () => v }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(665260),
    a = n(311907),
    r = n(843472),
    o = n(155718),
    c = n(355622),
    d = n(133343),
    u = n(961350),
    h = n(580745),
    m = n(71393),
    A = n(576705),
    p = n(203982),
    g = n(460350),
    f = n(145530),
    _ = n(291812),
    E = n(205120),
    x = n(652215);
n(294920);
var C = n(480972);
function S(e) {
    let { value: t, channel: n } = e;
    return (0, g.i)({ type: c.oU.EDIT, content: t, channel: n, restrictMentions: !1, respectCooldown: !1 });
}
function I(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: d } = n,
        p = t.getGuildId(),
        g = (0, a.bG)([m.A], () => m.A.getGuild(p), [p]),
        _ = t.type === x.rbe.GUILD_ANNOUNCEMENT,
        I = null != g && g.features.has(x.GuildFeatures.NEWS),
        v = _ && I,
        {
            editingMessage: N,
            editingTextValue: y,
            editingRichValue: b,
        } = (0, a.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        j = (0, a.bG)([u.default], () => u.default.getId()),
        R = l.useCallback(
            (e, i, l) => {
                let { content: a } = l,
                    c = A.A.can(x.xBc.MANAGE_MESSAGES, t),
                    d = null != N && null != N.author ? N.author.id : null,
                    u = v && (d === j || c),
                    h = { content: a, components: void 0 };
                if (n.hasFlag(x.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: o.I5.TEXT_DISPLAY, content: a, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    u && null != N && (0, s.Lt)(N.flags, x.pr7.CROSSPOSTED)
                        ? f.A.confirmEdit(e, i, h)
                        : r.A.editMessage(e, i, h),
                    Promise.resolve()
                );
            },
            [N, v, j, t, n],
        ),
        M = l.useCallback((e) => (0, l.createElement)(T, { ...e, className: C.gM, key: d }), [d]);
    return null != y && null != b
        ? (0, i.jsx)(E.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: y,
              richValue: b,
              onCancel: r.A.endEditMessage,
              onChange: r.A.updateEditMessage,
              onConfirmDelete: f.A.confirmDelete,
              saveMessage: R,
              validateEdit: S,
              children: M,
          })
        : null;
}
function T(e) {
    let {
            textValue: t,
            richValue: n,
            message: s,
            channel: a,
            onChange: r,
            onSubmit: o,
            onKeyDown: u,
            renderLeftAccessories: h,
        } = e,
        [m, A] = l.useState(!0),
        g = l.useCallback(() => A(!0), []),
        f = l.useCallback(() => A(!1), []);
    return (
        l.useEffect(
            () => (
                p._.subscribe(x.jej.TEXTAREA_FOCUS, g),
                p._.subscribe(x.jej.TEXTAREA_BLUR, f),
                () => {
                    p._.unsubscribe(x.jej.TEXTAREA_FOCUS, g), p._.unsubscribe(x.jej.TEXTAREA_BLUR, f);
                }
            ),
            [g, f],
        ),
        (0, i.jsx)(
            d.Ay,
            {
                className: C.gM,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.oU.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: u,
                focused: m,
                onFocus: g,
                onBlur: f,
                renderLeftAccessories: h,
            },
            s.id,
        )
    );
}
function v(e, t, n) {
    let { message: l, channel: s, compact: a } = e;
    return n
        ? (0, i.jsx)(I, { channel: s, message: l })
        : (0, i.jsx)(_.Ay, { message: l, content: t, compact: a ?? !1 });
}
