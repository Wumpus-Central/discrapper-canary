n.d(t, { Z: () => i }), n(47120), n(301563);
var r = n(485589),
    a = n(247123);
let l = new Set(r.roles.keys()),
    i = {
        id: 'aria-valid-roles',
        selector: '[role]',
        tags: ['wcag2a', 'wcag412'],
        metadata: {
            description: 'ARIA roles used must conform to valid values',
            help: 'Ensures all elements with a role attribute use a valid value'
        },
        check: function (e) {
            for (let t of e.getAttribute('role').split(' ')) if (!l.has(t)) return "Role '".concat(t, "' is not a valid ARIA role");
            return a.w;
        }
    };
