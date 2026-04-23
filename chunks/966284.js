n.d(t, { Z: () => i });
class i {
    static getSiteKey(e) {
        return null != e
            ? e
            : "production" === window.GLOBAL_ENV.PROJECT_ENV
              ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M"
              : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y";
    }
    static loadRecaptchaScript(e, t, n) {
        if (null != document.getElementById(`recaptcha-script-${this.getSiteKey(e)}`)) {
            null != t && (n?.("recaptcha-element-exists-callback"), t());
            return;
        }
        let i = document.createElement("script");
        (i.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.getSiteKey(e)}`),
            (i.id = `recaptcha-script-${this.getSiteKey(e)}`),
            (i.async = !0),
            (i.defer = !0),
            document.body.appendChild(i),
            null != t &&
                (i.onload = () => {
                    n?.("recaptcha-script-onload-callback"), t();
                });
    }
}
