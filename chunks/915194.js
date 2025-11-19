i.d(n, { default: () => h });
var r = i(54381);
i(473749);
var t = i(442837),
    o = i(755721),
    e = i(481060),
    a = i(812206),
    s = i(600164),
    d = i(922156),
    c = i(63063),
    u = i(388032),
    p = i(534084);
let h = (l) => {
    let { onClose: n, transitionState: i } = l,
        { error: h, applicationName: x } = (0, t.cj)([d.Z, a.Z], () => {
            let l = d.Z.getLastError(),
                n = null;
            if (null != l && null != l.applicationId) {
                let i = a.Z.getApplication(l.applicationId);
                null != i && (n = i.name);
            }
            return {
                error: l,
                applicationName: n,
            };
        });
    return (0, r.jsxs)(e.Y0X, {
        transitionState: i,
        size: e.CgR.SMALL,
        "aria-label": u.intl.string(u.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [
            (0, r.jsxs)(e.xBx, {
                justify: s.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Z.Child, {
                        grow: 1,
                        children: (0, r.jsx)(e.Heading, {
                            variant: "heading-lg/semibold",
                            children: u.intl.string(u.t["6kHRYP"]),
                        }),
                    }),
                    (0, r.jsx)(s.Z.Child, {
                        grow: 0,
                        children: (0, r.jsx)(e.olH, { onClick: n }),
                    }),
                ],
            }),
            (0, r.jsx)(e.hzk, {
                children: (0, r.jsxs)("div", {
                    className: p.body,
                    children: [
                        (0, r.jsx)("div", {
                            children: u.intl.format(u.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                        }),
                        (0, r.jsx)("div", {
                            className: p.supportCallToAction,
                            children: u.intl.string(u.t["o+efY9"]),
                        }),
                        (0, r.jsx)("div", {
                            className: p.errorLabel,
                            children: u.intl.string(u.t.BiSnZ9),
                        }),
                        (0, r.jsx)("div", {
                            className: p.errorDetails,
                            children: (0, r.jsxs)("div", {
                                children: [
                                    null != x ? "Game: ".concat(x, "\n") : null,
                                    (null == h ? void 0 : h.applicationId) != null
                                        ? "Game ID: ".concat(h.applicationId, "\n")
                                        : null,
                                    (null == h ? void 0 : h.branchId) != null &&
                                    (null == h ? void 0 : h.applicationId) !== (null == h ? void 0 : h.branchId)
                                        ? "Branch ID: ".concat(null == h ? void 0 : h.branchId, "\n")
                                        : null,
                                    (null == h ? void 0 : h.code) != null
                                        ? "Error Code: ".concat(null == h ? void 0 : h.code, "\n")
                                        : null,
                                    (null == h ? void 0 : h.uuid) != null
                                        ? "Unique Case ID: ".concat(null == h ? void 0 : h.uuid)
                                        : null,
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(e.mzw, {
                children: [
                    (0, r.jsx)(e.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.VdyWmB),
                        onClick: () => {
                            window.open(c.Z.getSubmitRequestURL());
                        },
                    }),
                    (0, r.jsx)(o.zx, {
                        look: o.zx.Looks.LINK,
                        onClick: n,
                        color: p.closeLink,
                        children: u.intl.string(u.t.cpT0Cq),
                    }),
                ],
            }),
        ],
    });
};
