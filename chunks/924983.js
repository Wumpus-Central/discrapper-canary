n.d(t, {
    $: () => f,
    Y: () => d,
});
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(31336),
    l = n(358085),
    c = n(388032),
    u = n(745770);
let d = [
    "Hotspot Options",
    "Dismissible Contents",
    "Design Systems",
    "Intl Testing",
    "i18n",
    "Web Setting Tree Tool",
    "Minor Reward Capping Config",
    "Payment Flow Modals",
    "Virtual Currency Configuration",
    "Orbs",
    "Quest Preview Tool",
    "Revenue Storybook",
    "Payment Components",
    "Orb Components",
    "Virtual Currency",
    "Nitro Components",
];
function f(e) {
    let { legacy: t = !0 } = e,
        n = (0, l.isMac)() ? "CMD + OPT + O" : "CTRL + ALT + O";
    return (0, r.jsx)(o.P3F, {
        className: a()(u.container, { [u.legacy]: t }),
        onClick: () => (0, s.d8)(),
        "aria-label": "Open DevTools",
        children: (0, r.jsx)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "currentColor",
            children: c.intl.format(c.t["3EjT81"], {
                keybind: n,
                bugIcon: () =>
                    (0, r.jsx)(o.nnZ, {
                        size: "custom",
                        color: "currentColor",
                        width: 10,
                        height: 10,
                    }),
            }),
        }),
    });
}
