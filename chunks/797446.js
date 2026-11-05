t.d(n, { Td: () => M, PV: () => _ });
var i = t(477900),
    l = t(582128),
    s = t(435558),
    r = t(192308),
    o = t(513461),
    a = t(503698),
    c = t.n(a),
    d = t(126600),
    u = t(840508),
    m = t(646514),
    x = t(916099),
    h = t(673185),
    f = t(565787),
    v = t(622629),
    j = t(834730),
    g = t(772838),
    p = t(939249),
    P = t(22231),
    E = t(241326),
    b = t(828208),
    w = t(792996),
    I = t(136516);
function y(e) {
    let { type: n } = e,
        t = l.useMemo(() => {
            switch (n) {
                case o.rX.MULTIPLE_CHOICE:
                    return { icon: x.ListBulletsIcon, text: w.intl.string(w.t.ooKh3m) };
                case o.rX.PARAGRAPH:
                    return { icon: h.ChannelListIcon, text: w.intl.string(w.t.gG0JBN) };
                case o.rX.TEXT_INPUT:
                    return { icon: (0, f.k)(b.A), text: w.intl.string(w.t.w6Q9wz) };
                case o.rX.TERMS:
                    return { icon: v.BookCheckIcon, text: w.intl.string(w.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: I.L6,
              children: [
                  (0, i.jsx)(t.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(j.E, { variant: "body-sm/medium", tag: "span", children: t.text }),
              ],
          });
}
function C(e) {
    let { title: n, field: t } = e;
    return (0, i.jsx)("div", {
        className: I._Q,
        children: (0, i.jsxs)("div", {
            className: I.ds,
            children: [
                (0, i.jsx)(j.E, { variant: "body-md/medium", className: I.ID, children: n }),
                (0, i.jsx)(y, { type: t.field_type }),
            ],
        }),
    });
}
let R = "FORM_FIELD";
function T(e) {
    let { index: n, field: t, isDropHovered: r, onDrop: o } = e,
        a = (0, s.debounce)(async (e, n, t) => {
            await o(e, n, t);
        }),
        x = l.useRef(null),
        [, h] = (0, d.i)({
            type: R,
            item: { index: n, field: t },
            end: (e, n) => {
                null == e || n.didDrop() || a(e.field, null, !0);
            },
        }),
        [, f] = (0, u.H)({
            accept: R,
            hover: (e, t) => {
                let { index: i } = e,
                    l = x.current?.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == l || null == s) return;
                let r = (l.bottom - l.top) / 2,
                    o = s.y - l.top;
                (i < n && o < r) || (i > n && o < r) || i === n || a(e.field, n, !1);
            },
            drop: (e) => {
                a(e.field, n, !0);
            },
        });
    return (
        l.useLayoutEffect(
            () => (
                h(f(x)),
                () => {
                    (f(null), h(null));
                }
            ),
            [h, f],
        ),
        (0, i.jsxs)("div", {
            ref: x,
            "data-dnd-name": `field-${n}`,
            className: c()(I.cK, { [I.TG]: r }),
            children: [
                (0, i.jsx)("div", {
                    className: c()(I.VU, I.oE),
                    children: (0, i.jsx)(g.DragIcon, {
                        size: "xs",
                        className: I.co,
                        color: m.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(C, { ...e }),
            ],
        })
    );
}
function A(e) {
    return (0, i.jsxs)("div", {
        className: c()(I.e4, I.oE),
        children: [
            (0, i.jsx)("div", {
                className: I.Th,
                children: e.isDragEnabled ? (0, i.jsx)(T, { ...e }) : (0, i.jsx)(C, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: c()(I.fc, I.oE, { [I.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(p.D, {
                            className: I.hP,
                            onClick: e.onEdit,
                            "aria-label": w.intl.string(w.t.bt75uw),
                            children: (0, i.jsx)(P.PencilIcon, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(p.D, {
                                className: I.hP,
                                onClick: e.onRemove,
                                "aria-label": w.intl.string(w.t.N86XcP),
                                children: (0, i.jsx)(E.TrashIcon, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
let X = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(A, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    D = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(A, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    N = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            title: d,
            actionsLocation: u,
        } = e;
        return (0, i.jsx)(A, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            title: d,
            canRemove: c,
            actionsLocation: u,
        });
    },
    L = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(A, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: s,
            onDrop: r,
            onEdit: o,
            onRemove: a,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    };
function M(e) {
    let {
        dropHoveredIndex: n,
        formField: l,
        guild: a,
        index: c,
        isDragEnabled: d,
        submittedGuildJoinRequestsCount: u,
        removeFormField: m,
        updateFormField: x,
        updateFormFieldOrder: h,
        canRemove: f,
        actionsLocation: v,
    } = e;
    async function j(e) {
        await x(c, e);
    }
    let g = (0, s.uniqueId)(),
        p = n === c,
        P = {
            key: g,
            index: c,
            isDragEnabled: d,
            isDropHovered: p,
            onEdit: function () {
                0 === u
                    ? k(l, j, a)
                    : (0, r.mM)(async () => {
                          let { default: e } = await Promise.all([t.e(868193), t.e(494657)]).then(t.bind(t, 990424));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: a.id,
                                  submittedGuildJoinRequestsCount: u,
                                  onConfirm: () => k(l, j, a),
                              });
                      });
            },
            onRemove: async function () {
                await m(c);
            },
            onDrop: async function (e, n, t) {
                await h(e, n, t);
            },
            canRemove: f,
            actionsLocation: v,
        };
    switch (l.field_type) {
        case o.rX.TERMS:
            return (0, i.jsx)(N, { title: w.intl.string(w.t["55+gic"]), formField: l, ...P });
        case o.rX.PARAGRAPH:
            return (0, i.jsx)(D, { formField: l, ...P });
        case o.rX.TEXT_INPUT:
            return (0, i.jsx)(L, { formField: l, ...P });
        case o.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(X, { formField: l, ...P });
        default:
            return null;
    }
}
function _(e, n, l) {
    switch (e) {
        case o.rX.TERMS:
            return (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    t.e(289789),
                    t.e(977412),
                    t.e(955424),
                    t.e(890152),
                    t.e(78618),
                    t.e(132435),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: l });
            });
        case o.rX.PARAGRAPH:
            return (0, r.mM)(async () => {
                let { ParagraphFormFieldModal: e } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case o.rX.TEXT_INPUT:
            return (0, r.mM)(async () => {
                let { TextInputFormFieldModal: e } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, r.mM)(async () => {
                let { default: e } = await Promise.all([t.e(955424), t.e(78618), t.e(452981)]).then(t.bind(t, 520660));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
    }
}
function k(e, n, l) {
    switch (e.field_type) {
        case o.rX.TERMS:
            return (0, r.mM)(async () => {
                let { default: s } = await Promise.all([
                    t.e(289789),
                    t.e(977412),
                    t.e(955424),
                    t.e(890152),
                    t.e(78618),
                    t.e(132435),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(s, { ...t, field: e, onSave: n, guild: l });
            });
        case o.rX.PARAGRAPH:
            return (0, r.mM)(async () => {
                let { ParagraphFormFieldModal: l } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case o.rX.TEXT_INPUT:
            return (0, r.mM)(async () => {
                let { TextInputFormFieldModal: l } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, r.mM)(async () => {
                let { default: l } = await Promise.all([t.e(955424), t.e(78618), t.e(452981)]).then(t.bind(t, 520660));
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
    }
}
