function r(t, ...e) {
    let a = new String(String.raw(t, ...e));
    return (a.__sentry_template_string__ = t.join('\0').replace(/%/g, '%%').replace(/\0/g, '%s')), (a.__sentry_template_values__ = e), a;
}
a.d(e, { X: () => r });
