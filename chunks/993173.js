n(47120);
var r = n(485589),
    i = n(247123);
let a = new Set(r.roles.keys());
t.Z = {
    id: 'aria-valid-roles',
    selector: '[role]',
    tags: ['wcag2a', 'wcag412'],
    metadata: {
        description: 'ARIA roles used must conform to valid values',
        help: 'Ensures all elements with a role attribute use a valid value'
    },
    check: function (e) {
        for (let t of e.getAttribute('role').split(' ')) {
            if (!a.has(t)) return "Role '".concat(t, "' is not a valid ARIA role");
        }
        return i.w;
    }
};
