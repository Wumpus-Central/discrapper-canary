n.d(t, { Z: () => s }), n(47120);
var i = n(818083);
let r = 'bandwidth_estimation',
    a = (0, i.B)({
        kind: 'user',
        id: '2024-06_rtc_pacer__simulcast',
        label: 'RTC Pacer & Golive Simulcast',
        defaultConfig: {
            enabled: !0,
            fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
            simulcastEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Golive Simulcast without prober 720p@500k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/',
                    simulcastEnabled: !0
                }
            },
            {
                id: 2,
                label: 'Golive Simulcast 720p@500k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
                    simulcastEnabled: !0
                }
            },
            {
                id: 3,
                label: 'Golive with pacing',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer',
                    simulcastEnabled: !1
                }
            },
            {
                id: 4,
                label: 'Golive with pacing and probing',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe',
                    simulcastEnabled: !1
                }
            },
            {
                id: 5,
                label: 'Golive Simulcast 720p@750k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k',
                    simulcastEnabled: !0
                }
            },
            {
                id: 6,
                label: 'Golive Simulcast 720p@1000k',
                config: {
                    enabled: !0,
                    fullname: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k',
                    simulcastEnabled: !0
                }
            }
        ]
    }),
    s = {
        getConfig(e, t) {
            let n = a.getCurrentConfig({ location: 'e1c55b_1' }, { autoTrackExposure: e });
            return this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) || (n.enabled = !1), n;
        },
        supportsBandwidthEstimationExperimentFullname(e, t) {
            let n = this.getMediaEngineExperiments(e);
            if (null === n) return !1;
            for (let e of n) if (!t.includes(e)) return !1;
            return !0;
        },
        getMediaEngineExperiments(e) {
            let t = e.split('/');
            return 3 !== t.length || t[0] !== r ? null : t[1].split(',').filter((e) => 0 !== e.length);
        }
    };
