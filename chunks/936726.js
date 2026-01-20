n.d(t, { Z: () => E }), n(35282), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(544891),
    s = n(846519),
    c = n(248514),
    d = n(681715),
    u = n(481060),
    m = n(668781),
    b = n(139387),
    p = n(308063),
    g = n(600164),
    f = n(208567),
    h = n(598077),
    x = n(259580),
    j = n(768581),
    v = n(572004),
    O = n(709054),
    y = n(51144),
    C = n(486199),
    N = n(981631),
    S = n(388032),
    I = n(191607);
function T(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, j.ov)({
              id: e.id,
              avatar: t,
              discriminator: N.fo$,
          });
}
function E(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: j,
            isExpanded: E,
            isNew: Z,
            errors: w,
            onToggleExpand: P,
        } = e,
        [_, k] = r.useState(!1),
        [A] = r.useState(new s.V7());
    r.useEffect(() => () => A.stop(), [A]);
    let D = r.useMemo(() => T(n, n.avatar), [n]),
        R = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(N.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, v.JG)(e);
        }, [n]),
        L = r.useCallback(() => {
            (0, c.Z)({
                title: S.intl.formatToPlainString(S.t.QVFjHh, { name: n.name }),
                subtitle: S.intl.format(S.t["rIWe+5"], { name: n.name }),
                confirmText: S.intl.string(S.t["W+K1Fs"]),
                cancelText: S.intl.string(S.t.xNhj0O),
                onConfirm: () => {
                    p.Z.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? m.Z.show({
                                  title: S.intl.string(S.t.N5riYn),
                                  body: S.intl.string(S.t.eAxcCc),
                              })
                            : m.Z.show({
                                  title: S.intl.string(S.t.N5riYn),
                                  body: S.intl.string(S.t["/4TwKf"]),
                              });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        M = [];
    null != n.user
        ? M.push({
              icon: u.T39,
              text: S.intl.formatToPlainString(S.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new h.Z(e);
                      return y.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: O.default.extractTimestamp(n.id),
              }),
          })
        : M.push({
              icon: u.T39,
              text: S.intl.formatToPlainString(S.t["7mv59O"], { timestamp: O.default.extractTimestamp(n.id) }),
          });
    let U = null;
    return (
        E &&
            null != l &&
            (U = (0, i.jsxs)("div", {
                className: I.body,
                children: [
                    (0, i.jsx)(u.izJ, { className: I.topDivider }),
                    (0, i.jsxs)(g.Z, {
                        children: [
                            (0, i.jsx)(g.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(g.Z, {
                                    className: I.avatarWrapper,
                                    direction: g.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                b.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => T(n, e),
                                            imageClassName: I.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != w.avatar && "" !== w.avatar
                                            ? (0, i.jsx)(u.Text, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: w.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(g.Z, {
                                direction: g.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(g.Z, {
                                        children: [
                                            (0, i.jsx)(g.Z.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(u.oil, {
                                                    label: S.intl.string(S.t.ukdxuo),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        b.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: w.name,
                                                }),
                                            }),
                                            (0, i.jsx)(g.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(u.VcW, {
                                                        label: S.intl.string(S.t.GK18KJ),
                                                        value: l.channel_id,
                                                        options: j,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return {
                                                                id: t.toString(),
                                                                value: t,
                                                                label: n,
                                                            };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            b.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: S.intl.string(S.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(u.izJ, { className: I.bottomDivider }),
                                    (0, i.jsxs)(g.Z, {
                                        children: [
                                            (0, i.jsx)(d.u, {
                                                text: S.intl.string(S.t.wwdb3g),
                                                shouldShow: _,
                                                children: (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: I.copyButton,
                                                    children: (0, i.jsx)(u.Button, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: S.intl.string(S.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            k(!0),
                                                                u.uvj.announce(S.intl.string(S.t.wwdb3g)),
                                                                A.start(1000, () => k(!1)),
                                                                R();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(u.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: S.intl.string(S.t.jVrUnC),
                                                onClick: L,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(u.Zbd, {
            editable: !0,
            id: t,
            className: a()(I.card, Z ? I.pulse : null),
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.P3F, {
                        className: I.header,
                        "aria-expanded": E,
                        onClick: P,
                        children: (0, i.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(C.Z, {
                                    name: n.name,
                                    imageSrc: D,
                                    details: M,
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: I.expandIcon,
                                    expanded: E,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    U,
                ],
            }),
        })
    );
}
