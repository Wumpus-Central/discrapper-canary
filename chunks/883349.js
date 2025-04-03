n.d(t, { Z: () => u });
var r = n(424706),
    a = n(14160),
    l = n(247123),
    i = n(207662);
let u = {
    id: 'button-name',
    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
    tags: ['wcag2a', 'wcag412', 'section508', 'section508.22.a', 'ACT'],
    metadata: {
        description: 'Ensures buttons have discernible text',
        help: ''
    },
    check: function (e) {
        return '' !== (0, r.AB)(e) || (0, i.Uu)(e) || !(0, a.p)(e) ? l.w : "button's accessible name is empty.";
    }
};
