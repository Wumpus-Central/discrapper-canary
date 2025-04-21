n.d(t, { G: () => i }), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(981631);
let i = (e) => {
    let { id: t, name: n, locale: i } = e,
        a = 'https://'.concat(r.xr4, '/hc/').concat(i.toLowerCase(), '/requests/new'),
        l = new URLSearchParams();
    return l.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), l.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), l.append('tf_12094971213335', t), l.append('ticket_form_id', '12275528604823'), l.append('tf_subject', 'App Directory Report '.concat(n, ' ').concat(t)), ''.concat(a, '?').concat(l.toString());
};
