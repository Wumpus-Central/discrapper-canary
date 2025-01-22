var i = r(47120);
var a = r(818083);
let o = 'bandwidth_estimation',
    s = (0, a.B)({
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
    });
n.Z = {
    getConfig(e, n) {
        let r = s.getCurrentConfig({ location: 'e1c55b_1' }, { autoTrackExposure: e });
        return !this.supportsBandwidthEstimationExperimentFullname(r.fullname, n) && (r.enabled = !1), r;
    },
    supportsBandwidthEstimationExperimentFullname(e, n) {
        let r = this.getMediaEngineExperiments(e);
        if (null === r) return !1;
        for (let e of r) if (!n.includes(e)) return !1;
        return !0;
    },
    getMediaEngineExperiments(e) {
        let n = e.split('/');
        return 3 !== n.length || n[0] !== o ? null : n[1].split(',').filter((e) => 0 !== e.length);
    }
};
