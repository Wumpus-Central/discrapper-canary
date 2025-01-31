n.d(t, { Z: () => o });
var r = n(424706),
    a = n(14160),
    i = n(247123),
    l = n(207662);
let o = {
    id: 'button-name',
    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
    tags: ['wcag2a', 'wcag412', 'section508', 'section508.22.a', 'ACT'],
    metadata: {
        description: 'Ensures buttons have discernible text',
        help: ''
    },
    check: function (e) {
        return '' !== (0, r.AB)(e) || (0, l.Uu)(e) || !(0, a.p)(e) ? i.w : "button's accessible name is empty.";
    }
};
