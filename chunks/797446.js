t.d(n, { Td: () => L, PV: () => _ });
var i = t(477900),
    r = t(582128),
    s = t(435558),
    l = t(192308),
    o = t(513461),
    a = t(503698),
    c = t.n(a),
    d = t(126600),
    u = t(840508),
    m = t(646514),
    x = t(916099),
    f = t(673185),
    h = t(565787),
    j = t(622629),
    v = t(834730),
    g = t(772838),
    p = t(939249),
    E = t(22231),
    P = t(241326),
    b = t(828208),
    w = t(792996),
    y = t(136516);
function R(e) {
    let { type: n } = e,
        t = r.useMemo(() => {
            switch (n) {
                case o.rX.MULTIPLE_CHOICE:
                    return { icon: x.ListBulletsIcon, text: w.intl.string(w.t.ooKh3m) };
                case o.rX.PARAGRAPH:
                    return { icon: f.$, text: w.intl.string(w.t.gG0JBN) };
                case o.rX.TEXT_INPUT:
                    return { icon: (0, h.k)(b.A), text: w.intl.string(w.t.w6Q9wz) };
                case o.rX.TERMS:
                    return { icon: j.B, text: w.intl.string(w.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: y.L6,
              children: [
                  (0, i.jsx)(t.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", tag: "span", children: t.text }),
              ],
          });
}
function T(e) {
    let { title: n, field: t } = e;
    return (0, i.jsx)("div", {
        className: y._Q,
        children: (0, i.jsxs)("div", {
            className: y.ds,
            children: [
                (0, i.jsx)(v.E, { variant: "body-md/medium", className: y.ID, children: n }),
                (0, i.jsx)(R, { type: t.field_type }),
            ],
        }),
    });
}
let A = "FORM_FIELD";
function C(e) {
    let { index: n, field: t, isDropHovered: l, onDrop: o } = e,
        a = (0, s.debounce)(async (e, n, t) => {
            await o(e, n, t);
        }),
        x = r.useRef(null),
        [, f] = (0, d.i)({
            type: A,
            item: { index: n, field: t },
            end: (e, n) => {
                null == e || n.didDrop() || a(e.field, null, !0);
            },
        }),
        [, h] = (0, u.H)({
            accept: A,
            hover: (e, t) => {
                let { index: i } = e,
                    r = x.current?.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == r || null == s) return;
                let l = (r.bottom - r.top) / 2,
                    o = s.y - r.top;
                (i < n && o < l) || (i > n && o < l) || i === n || a(e.field, n, !1);
            },
            drop: (e) => {
                a(e.field, n, !0);
            },
        });
    return (
        r.useLayoutEffect(
            () => (
                f(h(x)),
                () => {
                    (h(null), f(null));
                }
            ),
            [f, h],
        ),
        (0, i.jsxs)("div", {
            ref: x,
            "data-dnd-name": `field-${n}`,
            className: c()(y.cK, { [y.TG]: l }),
            children: [
                (0, i.jsx)("div", {
                    className: c()(y.VU, y.oE),
                    children: (0, i.jsx)(g.W, {
                        size: "xs",
                        className: y.co,
                        color: m.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(T, { ...e }),
            ],
        })
    );
}
function I(e) {
    return (0, i.jsxs)("div", {
        className: c()(y.e4, y.oE),
        children: [
            (0, i.jsx)("div", {
                className: y.Th,
                children: e.isDragEnabled ? (0, i.jsx)(C, { ...e }) : (0, i.jsx)(T, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: c()(y.fc, y.oE, { [y.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(p.D, {
                            className: y.hP,
                            onClick: e.onEdit,
                            "aria-label": w.intl.string(w.t.bt75uw),
                            children: (0, i.jsx)(E.PencilIcon, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(p.D, {
                                className: y.hP,
                                onClick: e.onRemove,
                                "aria-label": w.intl.string(w.t.N86XcP),
                                children: (0, i.jsx)(P.TrashIcon, { size: "xs" }),
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
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(I, {
            field: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
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
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(I, {
            field: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
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
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            title: d,
            actionsLocation: u,
        } = e;
        return (0, i.jsx)(I, {
            field: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            title: d,
            canRemove: c,
            actionsLocation: u,
        });
    },
    M = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(I, {
            field: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: s,
            onDrop: l,
            onEdit: o,
            onRemove: a,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    };
function L(e) {
    let {
        dropHoveredIndex: n,
        formField: r,
        guild: a,
        index: c,
        isDragEnabled: d,
        submittedGuildJoinRequestsCount: u,
        removeFormField: m,
        updateFormField: x,
        updateFormFieldOrder: f,
        canRemove: h,
        actionsLocation: j,
    } = e;
    async function v(e) {
        await x(c, e);
    }
    let g = (0, s.uniqueId)(),
        p = n === c,
        E = {
            key: g,
            index: c,
            isDragEnabled: d,
            isDropHovered: p,
            onEdit: function () {
                0 === u
                    ? H(r, v, a)
                    : (0, l.mM)(async () => {
                          let { default: e } = await Promise.all([t.e(868193), t.e(494657)]).then(t.bind(t, 990424));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: a.id,
                                  submittedGuildJoinRequestsCount: u,
                                  onConfirm: () => H(r, v, a),
                              });
                      });
            },
            onRemove: async function () {
                await m(c);
            },
            onDrop: async function (e, n, t) {
                await f(e, n, t);
            },
            canRemove: h,
            actionsLocation: j,
        };
    switch (r.field_type) {
        case o.rX.TERMS:
            return (0, i.jsx)(D, { title: w.intl.string(w.t["55+gic"]), formField: r, ...E });
        case o.rX.PARAGRAPH:
            return (0, i.jsx)(N, { formField: r, ...E });
        case o.rX.TEXT_INPUT:
            return (0, i.jsx)(M, { formField: r, ...E });
        case o.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(X, { formField: r, ...E });
        default:
            return null;
    }
}
function _(e, n, r) {
    switch (e) {
        case o.rX.TERMS:
            return (0, l.mM)(async () => {
                let { default: e } = await Promise.all([
                    t.e(289789),
                    t.e(977412),
                    t.e(955424),
                    t.e(890152),
                    t.e(78618),
                    t.e(132435),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: r });
            });
        case o.rX.PARAGRAPH:
            return (0, l.mM)(async () => {
                let { ParagraphFormFieldModal: e } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case o.rX.TEXT_INPUT:
            return (0, l.mM)(async () => {
                let { TextInputFormFieldModal: e } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, l.mM)(async () => {
                let { default: e } = await Promise.all([t.e(955424), t.e(78618), t.e(452981)]).then(t.bind(t, 520660));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
    }
}
function H(e, n, r) {
    switch (e.field_type) {
        case o.rX.TERMS:
            return (0, l.mM)(async () => {
                let { default: s } = await Promise.all([
                    t.e(289789),
                    t.e(977412),
                    t.e(955424),
                    t.e(890152),
                    t.e(78618),
                    t.e(132435),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(s, { ...t, field: e, onSave: n, guild: r });
            });
        case o.rX.PARAGRAPH:
            return (0, l.mM)(async () => {
                let { ParagraphFormFieldModal: r } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(r, { ...t, field: e, onSave: n });
            });
        case o.rX.TEXT_INPUT:
            return (0, l.mM)(async () => {
                let { TextInputFormFieldModal: r } = await Promise.all([t.e(955424), t.e(78618), t.e(926510)]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(r, { ...t, field: e, onSave: n });
            });
        case o.rX.MULTIPLE_CHOICE:
            return (0, l.mM)(async () => {
                let { default: r } = await Promise.all([t.e(955424), t.e(78618), t.e(452981)]).then(t.bind(t, 520660));
                return (t) => (0, i.jsx)(r, { ...t, field: e, onSave: n });
            });
    }
}
