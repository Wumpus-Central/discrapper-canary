i.d(n, { default: () => p });
var r = i(200651);
i(192379);
var e = i(442837),
    t = i(481060),
    o = i(812206),
    s = i(600164),
    a = i(922156),
    c = i(63063),
    d = i(388032),
    u = i(490634);
let p = (l) => {
    let { onClose: n, transitionState: i } = l,
        { error: p, applicationName: h } = (0, e.cj)([a.Z, o.Z], () => {
            let l = a.Z.getLastError(),
                n = null;
            if (null != l && null != l.applicationId) {
                let i = o.Z.getApplication(l.applicationId);
                null != i && (n = i.name);
            }
            return {
                error: l,
                applicationName: n
            };
        });
    return (0, r.jsxs)(t.Y0X, {
        transitionState: i,
        size: t.CgR.SMALL,
        'aria-label': d.intl.string(d.t['6kHRYG']),
        children: [
            (0, r.jsxs)(t.xBx, {
                justify: s.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Z.Child, {
                        grow: 1,
                        children: (0, r.jsx)(t.X6q, {
                            variant: 'heading-lg/semibold',
                            children: d.intl.string(d.t['6kHRYG'])
                        })
                    }),
                    (0, r.jsx)(s.Z.Child, {
                        grow: 0,
                        children: (0, r.jsx)(t.olH, { onClick: n })
                    })
                ]
            }),
            (0, r.jsx)(t.hzk, {
                children: (0, r.jsxs)('div', {
                    className: u.body,
                    children: [
                        (0, r.jsx)('div', { children: d.intl.format(d.t['NnE/6O'], { link: 'https://dis.gd/dispatch-error' }) }),
                        (0, r.jsx)('div', {
                            className: u.supportCallToAction,
                            children: d.intl.string(d.t['o+efY2'])
                        }),
                        (0, r.jsx)('div', {
                            className: u.errorLabel,
                            children: d.intl.string(d.t.BiSnZ2)
                        }),
                        (0, r.jsx)('div', {
                            className: u.errorDetails,
                            children: (0, r.jsxs)('div', {
                                children: [null != h ? 'Game: '.concat(h, '\n') : null, (null == p ? void 0 : p.applicationId) != null ? 'Game ID: '.concat(p.applicationId, '\n') : null, (null == p ? void 0 : p.branchId) != null && (null == p ? void 0 : p.applicationId) !== (null == p ? void 0 : p.branchId) ? 'Branch ID: '.concat(null == p ? void 0 : p.branchId, '\n') : null, (null == p ? void 0 : p.code) != null ? 'Error Code: '.concat(null == p ? void 0 : p.code, '\n') : null, (null == p ? void 0 : p.uuid) != null ? 'Unique Case ID: '.concat(null == p ? void 0 : p.uuid) : null]
                            })
                        })
                    ]
                })
            }),
            (0, r.jsxs)(t.mzw, {
                children: [
                    (0, r.jsx)(t.zxk, {
                        onClick: () => {
                            window.open(c.Z.getSubmitRequestURL());
                        },
                        children: d.intl.string(d.t.VdyWmJ)
                    }),
                    (0, r.jsx)(t.zxk, {
                        look: t.zxk.Looks.LINK,
                        onClick: n,
                        color: u.closeLink,
                        children: d.intl.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
};
