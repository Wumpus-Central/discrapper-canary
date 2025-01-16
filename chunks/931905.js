n.d(t, {
    h: function () {
        return c;
    },
    m: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(17894),
    a = n(388032),
    l = n(753031);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: c, subtitle: s, confirmCta: d, showOpenDiscord: u = !0 } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c
            }),
            null != s
                ? (0, i.jsx)(r.Text, {
                      className: l.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: s
                  })
                : null,
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    u &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                            children: a.intl.string(a.t['8L5bZG'])
                        }),
                    (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        color: r.Button.Colors.PRIMARY,
                        onClick: t,
                        children: d
                    }),
                    null != n &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: n,
                            children: a.intl.string(a.t.iAfxo6)
                        })
                ]
            })
        ]
    });
};
function s(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.intl.format(a.t['wLFT6+'], { tier: n })
            }),
            (0, i.jsx)(r.Text, {
                className: l.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.OsAK9v, { timestamp: null == c ? void 0 : c.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_openDiscordButton,
                        onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                        children: a.intl.string(a.t['8L5bZG'])
                    }),
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_doneButton,
                        look: r.Button.Looks.BLANK,
                        onClick: t,
                        children: a.intl.string(a.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}
