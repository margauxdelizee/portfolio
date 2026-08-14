import vnsMpcCover from '../assets/images/projects/vns-mpc-cover.jpg';
import anesthesiaCover from '../assets/images/projects/anesthesia-cover.jpg';
import gantryModelCover from '../assets/images/projects/gantry-model-cover.jpg';
import gantryValidationCover from '../assets/images/projects/gantry-validation-cover.jpg';
import ecgCover from '../assets/images/projects/ecg-cover.jpg';
import kinematicsCover from '../assets/images/projects/kinematics-cover.jpg';
import vnsBlockDiagram from '../assets/images/projects/vns-mpc-block-diagram.jpg';
import vnsResponseSurfaces from '../assets/images/projects/vns-mpc-response-surfaces.jpg';
import vnsHealthyOutputs from '../assets/images/projects/vns-mpc-healthy-outputs.jpg';
import anesthesiaTargetsTable from '../assets/images/projects/anesthesia-targets-table.jpg';
import anesthesiaSimulatorDiagram from '../assets/images/projects/anesthesia-simulator-diagram.jpg';
import anesthesiaCouplingsTable from '../assets/images/projects/anesthesia-couplings-table.jpg';
import anesthesiaMpcDiagram from '../assets/images/projects/anesthesia-mpc-diagram.jpg';
import anesthesiaOutputsGrid from '../assets/images/projects/anesthesia-outputs-grid.jpg';
import anesthesiaInputsGrid from '../assets/images/projects/anesthesia-inputs-grid.jpg';
import anesthesiaReportPdf from '../assets/documents/anesthesia-mpc-report.pdf';
import gantryTheoreticalModel from '../assets/images/projects/gantry-theoretical-model.jpg';
import gantryStructureDetail from '../assets/images/projects/gantry-structure-detail.jpg';
import gantryPolesPlot from '../assets/images/projects/gantry-poles-plot.jpg';
import gantryBangbangTrajectory from '../assets/images/projects/gantry-bangbang-trajectory.jpg';
import gantryFinalControlLaw from '../assets/images/projects/gantry-final-control-law.jpg';
import gantryReadingPhotos from '../assets/images/projects/gantry-reading-photos.jpg';
import ecgPqrstDiagram from '../assets/images/projects/ecg-pqrst-diagram.jpg';
import ecgInstrumentationAmp from '../assets/images/projects/ecg-instrumentation-amp.jpg';
import ecgBandpassBode from '../assets/images/projects/ecg-bandpass-bode.jpg';
import kinematicsSpacesDiagram from '../assets/images/projects/kinematics-fig1-spaces.jpg';
import kinematicsDhConvention from '../assets/images/projects/kinematics-fig2-dh-convention.jpg';
import kinematicsDhParams from '../assets/images/projects/kinematics-fig3-dh-params.jpg';
import kinematicsWristDecoupling from '../assets/images/projects/kinematics-fig4-wrist.jpg';
import kinematicsResults from '../assets/images/projects/kinematics-fig5-results.jpg';
import davinciConsole from '../assets/images/projects/davinci-console.jpg';
import mmfitCover from '../assets/images/projects/mmfit-cover.jpg';
import nrgQuestCover from '../assets/images/projects/nrg-quest-cover.jpg';
import logSorterCover from '../assets/images/projects/log-sorter-cover.png';
import ibaTrainingCover from '../assets/images/projects/iba-training-cover.png';
import ibaPatientSupportCover from '../assets/images/projects/iba-patient-support-cover.jpg';
import mmfitWiringDiagram from '../assets/images/projects/mmfit-wiring-diagram.png';
import mmfitBreadboard from '../assets/images/projects/mmfit-breadboard-prototype.jpg';
import mmfitDashboard from '../assets/images/projects/mmfit-dashboard.png';
import mmfitSystemDiagram from '../assets/images/projects/mmfit-system-diagram.png';
import mmfitFieldTestVideo from '../assets/videos/mmfit-field-test.mp4';
import nrgQuestCards from '../assets/images/projects/nrg-quest-cards.png';
import nrgQuestEnergyWheel from '../assets/images/projects/nrg-quest-energy-wheel.png';
import nrgQuestScenarioTree from '../assets/images/projects/nrg-quest-scenario-tree.png';
import nrgQuestIconLegend from '../assets/images/projects/nrg-quest-icon-legend.png';
import logSorterSketchV2 from '../assets/images/projects/log-sorter-sketch-v2.png';
import logSorterWheelSketch from '../assets/images/projects/log-sorter-wheel-sketch.png';
import logSorterCadAngle2 from '../assets/images/projects/log-sorter-cad-angle2.png';
import logSorterCadAngle3 from '../assets/images/projects/log-sorter-cad-angle3.png';
import logSorterPrototypeWide from '../assets/images/projects/log-sorter-prototype-wide.png';
import logSorterPrototypeClose from '../assets/images/projects/log-sorter-prototype-close.png';
import logSorterTestVideo from '../assets/videos/log-sorter-test.mp4';
import ibaTrainingEditorView from '../assets/images/projects/iba-training-editor-view.png';
import ibaTrainingHotspots from '../assets/images/projects/iba-training-hotspots.png';

export interface ProjectSection {
    label: string;
    paragraphs: string[];
    image?: string;
    imageCaption?: string;
    compact?: boolean;
    video?: string;
    videoCaption?: string;
}

export interface ProjectItem {
    slug: string;
    meta: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    lightMedia?: boolean;
    framed?: boolean;
    detail?: ProjectSection[];
    pdf?: string;
    featured?: boolean;
}

export const projects: ProjectItem[] = [
    {
        slug: "vns-mpc-thesis",
        meta: "Feb 2026 – Present · Lehigh University",
        title: "Data-Driven MPC for Cardiovascular Neuromodulation",
        description: "A nonlinear MPC framework using an LSTM-based internal prediction model to control vagal nerve stimulation and regulate cardiovascular response in silico.",
        tags: ["Model Predictive Control", "Data-Driven Modeling (LSTM)", "Physiological Modeling", "Nonlinear Control", "Python", "Technical Writing"],
        image: vnsMpcCover,
        lightMedia: true,
        featured: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "Cardiovascular diseases such as heart failure, hypertension, and atrial fibrillation affect hundreds of millions of people worldwide and share a common root cause: a progressive imbalance between the sympathetic and parasympathetic branches of the autonomic nervous system, marked by sympathetic overactivation and a loss of vagal tone. Vagus nerve stimulation (VNS) addresses this imbalance directly by engaging the parasympathetic pathway, but existing clinical devices deliver fixed, pre-programmed stimulation that cannot adapt to a patient's real-time hemodynamic state, a limitation linked to the underwhelming results of several major cardiovascular VNS trials.",
                    "This project develops a closed-loop control framework that continuously adjusts VNS parameters based on real-time feedback, targeting simultaneous regulation of three hemodynamic variables: heart rate, mean arterial pressure, and stroke volume. It is the first study to combine a validated human cardiovascular model with a data-driven internal predictor for this purpose."
                ],
            },
            {
                label: "Approach",
                paragraphs: [
                    "The framework is built and validated on a pulsatile human cardiovascular-baroreflex simulator, used as the ground-truth plant throughout this work. A systematic open-loop characterization campaign, spanning 140 simulations across a grid of stimulation amplitudes and frequencies, mapped the full hemodynamic response space and validated the simulator against experimental reference data. This characterization extends the \"neural fulcrum\" concept, originally defined for heart rate alone, to mean arterial pressure and stroke volume, identifying the stimulation regions where each variable can be pushed up or down."
                ],
                image: vnsResponseSurfaces,
                imageCaption: "Open-loop response surfaces for heart rate, mean arterial pressure, and stroke volume, with the neural fulcrum locus highlighted in red where applicable.",
            },
            {
                label: "",
                paragraphs: [
                    "Because the physiological simulator is far too slow to run inside a real-time control loop, a two-layer LSTM neural network was trained on 896 simulated stimulation trials to serve as a fast surrogate model, predicting the next heartbeat's hemodynamic response in under 85 ms, more than 10 times faster than the full simulator. This surrogate feeds a nonlinear model predictive controller (NMPC), which computes the optimal stimulation amplitude and frequency at every cardiac cycle, and includes a disturbance-observer extension to stay accurate even when the model doesn't perfectly match the patient."
                ],
                image: vnsBlockDiagram,
                imageCaption: "Block diagram of the closed-loop NMPC framework for vagus nerve stimulation.",
            },
            {
                label: "Results",
                paragraphs: [
                    "The complete framework was validated across three physiological scenarios: a healthy resting patient, a hypertensive patient, and a patient under moderate physical exercise. Under nominal conditions, the controller tracked three consecutive setpoints spanning both bradycardic and tachycardic regimes, converging to near-zero steady-state error (below 0.5 bpm, 1 mmHg, and 0.5 mL) within 9 to 17 heartbeats."
                ],
                image: vnsHealthyOutputs,
                imageCaption: "Closed-loop hemodynamic trajectories for the healthy resting patient across three setpoint segments.",
                compact: true,
            },
            {
                label: "",
                paragraphs: [
                    "The framework also generalized to the hypertensive and exercise scenarios, maintaining accurate tracking despite substantial shifts in the underlying physiology, demonstrating that a single data-driven control strategy can adapt across different cardiovascular conditions. This work will be presented at the Society for Neuroscience (SfN) 2026 annual meeting, and a manuscript is currently in preparation for journal submission."
                ],
            },
        ],
    },
    {
        slug: "anesthesia-infusion-control",
        meta: "Feb – Jun 2026 · University of Mons",
        title: "Multi-Drug Infusion Control for Anesthesia",
        description: "Coordinated feedforward-PI and MPC strategies to regulate multiple anesthetic drug infusions from patient PK-PD models in a closed-loop simulation.",
        tags: ["Model Predictive Control", "Feedforward-PI Control", "PK-PD Modeling", "Multivariable Systems", "MATLAB/Simulink", "Technical Writing"],
        image: anesthesiaCover,
        lightMedia: true,
        featured: true,
        pdf: anesthesiaReportPdf,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "During surgery, anesthesiologists must coordinate several drugs at once, each targeting a different physiological variable, based on experience and observed patient response. This manual titration works well in practice, but it is inherently subjective and can become harder to manage when drug effects interact with one another.",
                    "This project explores computer-controlled drug delivery using an open-source multi-drug patient simulator (Ionescu et al., Ghent University), which models five commonly used anesthetic and hemodynamic drugs and their combined effect on five clinical indicators."
                ],
            },
            {
                label: "",
                paragraphs: [
                    "Five physiological variables define the target state during the procedure: BIS (bispectral index, reflecting depth of consciousness) targeted at 50%, RASS (sedation level) at −4, NMB (neuromuscular blockade) at 15%, MAP (mean arterial pressure) kept above 65 mmHg, and CO (cardiac output) maintained between 5 and 10 L/min."
                ],
                image: anesthesiaTargetsTable,
                imageCaption: "The five physiological targets monitored during the simulated procedure, and their clinical target values.",
            },
            {
                label: "Approach",
                paragraphs: [
                    "The simulator was fully reconstructed in script-based MATLAB to allow direct manipulation outside Simulink. It follows a Wiener structure: a single linear state-space model captures the pharmacokinetic dynamics of all five drugs, and a nonlinear function block then converts these intermediate signals into the five final clinical outputs, reproducing the Hill-function dose-response curves and interaction effects between co-administered drugs."
                ],
                image: anesthesiaSimulatorDiagram,
                imageCaption: "Block structure of the reconstructed simulator: a linear state-space model followed by a nonlinear output mapping.",
            },
            {
                label: "",
                paragraphs: [
                    "Before designing the controller, a steady-state gain analysis was performed to map out how each drug influences each clinical output. This interaction study confirmed several strong couplings, most notably between remifentanil and both BIS and MAP, and highlighted that no drug directly counteracts a rise in cardiac output, informing how the controller's constraints needed to be set."
                ],
                image: anesthesiaCouplingsTable,
                imageCaption: "Summary of the main drug-to-output influences identified through the steady-state gain analysis.",
            },
            {
                label: "",
                paragraphs: [
                    "These couplings motivated a Model Predictive Control (MPC) approach, which explicitly accounts for multivariable interactions rather than treating each drug-output pair independently. The controller tracks fixed setpoints for BIS, RASS, and NMB, while keeping cardiac output and mean arterial pressure within clinically safe ranges, recomputing the optimal infusion rates for all five drugs at every time step."
                ],
                image: anesthesiaMpcDiagram,
                imageCaption: "Block diagram of the closed-loop MPC controller regulating the patient simulator.",
            },
            {
                label: "Results",
                paragraphs: [
                    "The controller successfully tracks all three fixed setpoints: BIS reaches its target in 18.7 seconds, RASS in 23.1 seconds, and NMB in 80 seconds, all clinically acceptable timeframes for reaching surgical conditions. Cardiac output and mean arterial pressure remain within their prescribed safety bounds throughout the simulation."
                ],
                image: anesthesiaOutputsGrid,
                imageCaption: "Closed-loop trajectories of the five physiological outputs (BIS, RASS, CO, MAP, NMB) under MPC.",
            },
            {
                label: "",
                paragraphs: [
                    "The corresponding infusion profiles show that most drugs are administered heavily at the start of the procedure to rapidly bring their target variable into range, then settle into low maintenance doses, a pattern consistent with clinical practice. Atracurium is the exception, requiring a more sustained infusion throughout, consistent with the comparatively weak sensitivity of neuromuscular blockade to this drug identified in the interaction analysis."
                ],
                image: anesthesiaInputsGrid,
                imageCaption: "Optimal infusion profiles computed by the MPC for propofol, remifentanil, dopamine, nitroprusside, and atracurium.",
            },
        ],
    },
    {
        slug: "gantry-dynamic-modeling",
        meta: "Jul – Oct 2025 · IBA",
        title: "Dynamic Modeling of a Proton Therapy Gantry",
        description: "State-space modeling and stability analysis of a rotating gantry structure to characterize its dynamic behavior for control design.",
        tags: ["State-Space Modeling", "Stability Analysis (Routh-Hurwitz)", "Mechanical Systems", "MATLAB"],
        image: gantryModelCover,
        lightMedia: false,
        framed: true,
        featured: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "In proton therapy, precise synchronization between the beam and the motion of the gantry, the massive rotating structure that aims the beam at the patient, is essential to treatment accuracy: too fast, and part of the tumor is under-dosed; too slow, and it is over-dosed, triggering an automatic treatment stop. This internship focused on the exploratory phase of a broader control development effort: building the theoretical and simulation foundation used by the team for further work.",
                    "The gantry studied here (Proteus ONE) weighs up to 70 tonnes and is driven by a 2.2 kW asynchronous motor through a gear reducer and a chain transmission, reaching a slow, high-torque rotation of roughly 8 revolutions per minute."
                ],
            },
            {
                label: "Approach",
                paragraphs: [
                    "The motor and the gantry are coupled through a gear train and a chain drive, and the chain tensioner (present on only one side) introduces a measurable elasticity in the transmission. This motivated modeling the system as two rotating inertias connected by a torsional spring: the motor rotor on one side, the gantry on the other, linked by a torque proportional to the twist angle between them."
                ],
                image: gantryStructureDetail,
                imageCaption: "Structural components of the gantry: dipole magnets, counterweight, and chain-driven rotation mechanism.",
                compact : true,
            },
            {
                label: "",
                paragraphs: [
                    "Applying Lagrangian mechanics to this two-body model yields a pair of coupled differential equations relating the motor angle and the gantry angle through the transmission stiffness. Because the resulting equations are linear, they translate directly into a state-space representation, with the motor and gantry angles and angular velocities as states, and the motor torque as the single input."
                ],
                image: gantryTheoreticalModel,
                imageCaption: "Simplified two-body model of the motor–gantry system, coupled through a torsional spring representing transmission elasticity.",
            },
            {
                label: "Results",
                paragraphs: [
                    "An open-loop stability analysis was performed by computing the eigenvalues of the state-space model. Two of the four eigenvalues are purely imaginary, and the remaining two are exactly zero, meaning the uncontrolled system is only marginally stable: without friction or an active control loop, the motor-gantry pair would oscillate indefinitely rather than settle. This result confirms that a dedicated control loop is required to damp the system's motion and track the treatment trajectory accurately.",
                ],
                image: gantryPolesPlot,
                imageCaption: "Open-loop eigenvalues of the linearized system: two purely imaginary poles and a double pole at the origin indicate marginal stability.",
                compact: true,
            },
        ],
    },
    {
        slug: "gantry-control-validation",
        meta: "Jul – Oct 2025 · IBA",
        title: "Control Design & On-Site Validation of a Gantry System",
        description: "State feedback pole placement design, system identification, and field testing of the control architecture on an operational proton therapy gantry.",
        tags: ["State Feedback / Pole Placement", "System Identification","PD Control", "Industrial Controllers (B&R)", "Field Testing & Diagnostics"],
        image: gantryValidationCover,
        lightMedia: false,
        framed: true,
        featured: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "Building on the theoretical model developed during the modeling phase of this internship, this second part focused on designing and comparing control strategies for the gantry, then validating the resulting insights against real system behavior during a multi-day on-site testing campaign."
                ],
            },
            {
                label: "Approach",
                paragraphs: [
                    "Several control strategies from the literature were compared analytically using a Routh-Hurwitz stability analysis, which ruled out two of them as unstable in closed loop. Among the remaining candidates, a state-feedback pole-placement approach was proposed as an alternative: since the linearized system is fully controllable, its closed-loop poles can be placed exactly, giving direct control over the speed and damping of the response."
                ],
                image: gantryBangbangTrajectory,
                imageCaption: "Bang-bang reference trajectory (position, velocity, acceleration) used to compare control strategies in simulation.",
            },
            {
                label: "",
                paragraphs: [
                    "All stable strategies were tested in simulation against the same reference trajectory. A PD controller combining feedforward compensation of the gantry's inertia with a blended reading from both the motor and gantry encoders gave the best overall tracking accuracy, confirming that fusing the two encoder signals meaningfully reduces residual oscillation."
                ],
                image: gantryFinalControlLaw,
                imageCaption: "Simulated position and velocity tracking under the retained control strategy: a PD controller with inertia feedforward and blended dual-encoder feedback.",
            },
            {
                label: "Results",
                paragraphs: [
                    "The theoretical findings were validated during a three-day on-site testing campaign at the Rutherford Cancer Centre in Reading, UK, on an operational proton therapy gantry running on its industrial B&R motion controller. Blending the two encoder signals, as predicted by the simulations, measurably reduced residual oscillations during constant-velocity phases. The tests also revealed two gantry positions exhibiting audible mechanical noise, flagged for further investigation, and confirmed the need to continue refining the model to fully capture the system's real-world behavior."
                ],
                image: gantryReadingPhotos,
                imageCaption: "On site at the Rutherford Cancer Centre, Reading: the treatment room (left) and the gantry pit, with its multi-tonne counterweight (right).",
            },
        ],
    },
    {
        slug: "ecg-signal-processing",
        meta: "Aug – Dec 2024 · Polytechnique Montréal",
        title: "ECG Acquisition & Signal Processing Chain",
        description: "Design of an analog instrumentation and filtering chain for ECG acquisition, followed by digital processing for R-peak detection and heart rate estimation.",
        tags: ["Analog Circuit Design", "Instrumentation Amplifiers", "Active Filter Design", "Digital Signal Processing", "Biopac/Oscilloscope"],
        image: ecgCover,
        lightMedia: true,
        featured: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "This project, completed over a semester-long lab sequence, traces the full path an ECG signal takes: from the electrical activity of the heart, through custom-built analog electronics, to a clean digital signal ready for automated analysis. Early sessions used a Biopac acquisition system to study how physiological factors such as breathing, posture, and the Valsalva maneuver visibly shift the heart's rhythm, before moving on to designing and building the acquisition electronics from scratch."
                ],
                image: ecgPqrstDiagram,
                imageCaption: "The P-QRS-T waveform of a single heartbeat, with the measurement windows used to quantify the R and T wave amplitudes.",
                compact: true,
            },
            {
                label: "Approach",
                paragraphs: [
                    "An instrumentation amplifier was designed and built from three op-amps to pick up the ECG's weak millivolt-level signal while rejecting common-mode noise, achieving a measured gain of 136 and a common-mode rejection ratio (CMRR) of 103 dB, comfortably suppressing 60 Hz electrical interference alongside a high input impedance (2.94 MΩ) that preserves signal fidelity."
                ],
                image: ecgInstrumentationAmp,
                imageCaption: "Schematic of the three-op-amp instrumentation amplifier built to acquire the ECG signal.",
            },
            {
                label: "",
                paragraphs: [
                    "The amplifier was then paired with a first-order high-pass filter (0.5 Hz) and a second-order low-pass filter (35 Hz) to isolate the ECG's useful frequency band, forming a complete analog band-pass chain. Measured in cascade, the full circuit reached a passband gain of roughly 12 dB with cutoff frequencies at 2.8 Hz and 43.5 Hz, close to the design targets, the small deviations attributable to component tolerances and parasitic effects typical of breadboard prototyping."
                ],
                image: ecgBandpassBode,
                imageCaption: "Measured Bode plot of the complete analog chain (instrumentation amplifier + active filters), confirming the intended band-pass behavior.",
            },
            {
                label: "Results",
                paragraphs: [
                    "The final stage moved from analog to digital: a noisy recorded ECG signal was processed in MATLAB using a 10th-order Chebyshev low-pass filter to suppress 60 Hz mains noise, followed by automated R-peak detection to estimate heart rate. The filtered signal produced a more reliable estimate (68.44 BPM) than the raw signal (71.39 BPM), illustrating how each stage of the chain, from the analog front-end to the digital back-end, contributes to a cleaner, more clinically usable signal."
                ],
            },
        ],
    },
    {
        slug: "robot-kinematics",
        meta: "February – May 2025 · University of Mons",
        title: "Forward & Inverse Kinematics of an Industrial Robot",
        description: "Implementation of the Denavit-Hartenberg convention to derive forward and inverse kinematics for a Staubli TX200 robot, with trajectory planning in C++.",
        tags: ["Denavit-Hartenberg Convention", "Forward/Inverse Kinematics", "C++", "Trajectory Planning"],
        image: kinematicsCover,
        lightMedia: true,
        featured: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "Every robot motion hides a translation problem: joint angles on one side, tool position on the other. This project builds both directions for a Staubli TX200 six-axis robot: forward kinematics to compute where the tool ends up, inverse kinematics to find the joint values needed to place it exactly where intended."
                ],
                image: kinematicsSpacesDiagram,
                imageCaption: "Forward kinematics maps joint space to operational space; inverse kinematics recovers the joint configuration needed to reach a desired end-effector pose.",
            },
            {
                label: "Approach",
                paragraphs: [
                    "The robot's geometry was modeled frame by frame with the Denavit-Hartenberg convention, chaining four parameters per joint into the TX200's full kinematic model, generated symbolically in Python and exported to C++.",
                    "Inverse kinematics exploits the TX200's spherical wrist, where the last three axes meet at one point. The wrist position gives the first three joint angles directly; the residual rotation gives the last three."
                ],
                image: kinematicsDhConvention,
                imageCaption: "Denavit-Hartenberg frame assignment: each link's transformation is fully defined by the parameters θᵢ, dᵢ, aᵢ, and αᵢ.",
            },
            {
                label: "Results",
                paragraphs: [
                    "Forward and inverse models were cross-validated, then used to plan a joint-space interpolation and a 20 cm straight-line milling pass, executed in 100 steps by chaining inverse kinematics along the path."
                ],
                image: kinematicsResults,
                imageCaption: "Simulated milling task: the end-effector follows a straight 20 cm line above the workpiece, generated by chaining inverse kinematics along a linearly interpolated Cartesian path.",
            },
            {
                label: "Application",
                paragraphs: [
                    "The same problem reappears, under tighter constraints, in the da Vinci Surgical System, observed during a robot-assisted prostatectomy at Hôpital Ambroise Paré in Mons. Each arm carries 12 active joints pivoting around a fixed point at the skin incision, protecting the body wall no matter how the arm moves above it.",
                    "At the console, a 7-DOF master controller drives the arm through a computed mapping: translations are scaled down for precision, rotations pass through one to one, and tremor is filtered out. Handling the controllers made that mapping tangible: the same kinematic translation modeled here for the TX200, running on a real surgical robot."
                ],
                image: davinciConsole,
                imageCaption: "Da Vinci Surgical System setup during the observed procedure at Hôpital Ambroise Paré, Mons. The surgeon operates the patient-side arms from a separate console.",
            },
        ],
    },
    {
        slug: "mmfit",
        meta: "Feb – May 2024 · University of Mons",
        title: "MMFit — Wearable Fitness Tracker",
        description: "A wearable fitness tracker built around an ESP8266, integrating heart-rate, motion, and GPS sensors with a self-hosted web dashboard for real-time monitoring.",
        tags: ["Sensor Integration", "Embedded C / Arduino", "Hardware Testing & Calibration", "ESP8266"],
        image: mmfitCover,
        featured: false,
        framed: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "MMFit is a wearable fitness tracker designed to monitor heart rate, body temperature, step count, distance, and GPS location in real time, streaming this data to a self-hosted web dashboard. The project combined an ESP8266 microcontroller with three sensors and a locally hosted website for live visualization, all built and tested from the ground up.",
                    "Within the team, I was responsible for the hardware side of the project: sensor selection, wiring, calibration, and validation against reference devices, while a teammate handled the web interface."
                ],
                image: mmfitSystemDiagram,
                imageCaption: "System architecture: sensor data flows from the ESP8266 through LittleFS storage to the web interface.",
            },
            {
                label: "Approach",
                paragraphs: [
                    "The system integrates three sensors around a NodeMCU ESP8266: a MAX30101 optical sensor for heart rate and skin temperature, a BMA456 accelerometer for step counting, and a TEL0094 GPS module for location tracking. All three communicate with the microcontroller over I2C and UART, sharing a common power and ground bus.",
                    "Getting reliable readings required extensive hands-on calibration. The MAX30101 proved highly sensitive to contact pressure on the infrared detector, so testing protocols had to enforce consistent finger pressure across measurements."
                ],
                image: mmfitWiringDiagram,
                imageCaption: "Full wiring diagram: NodeMCU ESP8266 connected to the MAX30101 (heart rate/temperature), BMA456 (motion), and TEL0094 (GPS) sensors.",
            },
            {
                label: "",
                paragraphs: [
                    "The full sensor array was first assembled and tested on a breadboard prototype before being validated in real-world conditions."
                ],
                image: mmfitBreadboard,
                imageCaption: "Breadboard prototype: ESP8266, MAX30101 heart-rate sensor, BMA456 accelerometer, and TEL0094 GPS module.",
                compact: true,
            },
            {
                label: "Results",
                paragraphs: [
                    "Each sensor was validated against a commercial reference device (a Coros Pace2 watch for heart rate and step count, Google Maps for GPS coordinates) across multiple test series, including live field tests. The heart rate sensor tracked the reference watch's trends closely, with an average deviation of 7.4%, consistent with its known sensitivity to pressure and positioning."
                ],
                video: mmfitFieldTestVideo,
                videoCaption: "Field test: the wearable prototype recording heart rate and motion data during an outdoor run.",
            },
            {
                label: "",
                paragraphs: [
                    "GPS latitude and longitude readings closely matched Google Maps references, while altitude showed larger discrepancies (2.5–12%), attributable to sensor calibration and atmospheric conditions. Step count and distance measurements from the accelerometer were consistently higher than the reference watch, with differences of 18–33% for step count, highlighting the sensor's higher sensitivity to non-standard movements, an area identified for future recalibration.",
                    "All sensor data was displayed live on a self-hosted dashboard, updating automatically every 5 seconds."
                ],
                image: mmfitDashboard,
                imageCaption: "Live web dashboard displaying heart rate, temperature, step count, and GPS data streamed from the device.",
            },
        ],
    },
    {
        slug: "nrg-quest",
        meta: "Feb – May 2023 · University of Mons",
        title: "NRG Quest — Energy Education Board Game",
        description: "Business development of a cooperative board game teaching 13–24 year-olds about Belgium's electricity mix, from market research to financial projections.",
        tags: ["Business Model Canvas", "Market Research", "Financial Projections", "Public Speaking & Pitching"],
        image: nrgQuestCover,
        featured: false,
        framed: true,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "NRG Quest is a cooperative board game designed to teach 13–24 year-olds about Belgium's electricity mix (nuclear, renewable, and gas) through play rather than lecture. The project split the team into a Business track and an R&D track; I worked within the Business team, handling market research, the business model, financial projections, and pitching.",
                    "The core idea: political discourse around energy is often polarized and hard to navigate for young adults. By turning the underlying trade-offs into a game, players engage with the same decisions utilities and policymakers face, building the electricity mix turn by turn while managing cost, environmental impact, and public support."
                ],
            },
            {
                label: "Game Design",
                paragraphs: [
                    "Each round, players draw energy source cards (nuclear, renewable, or gas) representing a percentage increase in that source's share of the electricity mix. Combining certain cards unlocks bonus effects, for instance pairing renewable sources together yields a larger combined boost than playing them separately, encouraging players to think about complementary energy strategies rather than optimizing a single source."
                ],
                image: nrgQuestCards,
                imageCaption: "Example cards: individual energy sources (nuclear, renewable, gas) and a combination card unlocking a bonus effect.",
            },
            {
                label: "",
                paragraphs: [
                    "A rotating wheel divided into the three energy categories tracks the group's cumulative progress toward a balanced electricity mix, while five resource icons (CO2 emissions, cost/benefit balance, environmental health, public support, and available funds) are tracked throughout the game, forcing players to weigh trade-offs rather than simply maximizing one variable."
                ],
                image: nrgQuestEnergyWheel,
                imageCaption: "Prototype spinning wheel tracking the group's cumulative electricity mix across the three energy categories.",
                compact: true,
            },
            {
                label: "Scenario Logic",
                paragraphs: [
                    "Behind the simple card-drawing mechanic sits a full decision tree mapping how each round's choices cascade into later consequences, random events (blackouts, natural disasters), and branching development paths toward 2035. This logic ensured that early-game decisions meaningfully shaped later options, rather than each round being an isolated, disconnected choice."
                ],
                image: nrgQuestScenarioTree,
                imageCaption: "Full scenario decision tree mapping how each round's card choices lead to later events and branching outcomes.",
            },
            {
                label: "Business Development",
                paragraphs: [
                    "Using the Business Model Canvas framework, we identified key partners (illustrators, printers, schools for playtesting), customer segments (schools, universities, companies for team-building, game stores), and multiple revenue streams: direct game sales (targeted at €34.99, with a production cost of roughly €19.70 per unit), paid educational workshops (€50 for a 2-hour session with 8 players), and card-pack expansions (€7.99) introducing new scenarios.",
                    "Market research benchmarked comparable board games in the €35–40 range, and a 48-month financial projection estimated 12 to 24 months to reach profitability, based on production runs of 500–1000 units per order to minimize per-unit cost."
                ],
            },
            {
                label: "Results",
                paragraphs: [
                    "The project placed 2nd among all teams in the StarTech program. Conversations with WWF Belgium confirmed strong market demand, their organization alone facilitates 300–350 educational activities per year in schools, validating the hypothesis that a market exists for this kind of game-based educational activity. A Facebook Ads simulation projected that a €500 budget would reach 11,700 to 33,900 accounts, with an estimated 434 to 1,300 click-throughs to the game's landing page.",
                    "The project also built an initial audience through Instagram, reaching over 200 followers and 1,200 accounts reached within the first three months, with more than 70% of engagement coming from the target 13–24 age demographic."
                ],
            },
        ],
    },
    {
        slug: "automated-log-sorter",
        meta: "Sept – Dec 2021 · University of Mons",
        title: "Automated Log Sorter",
        description: "Design and fabrication of an automated log-sorting machine classifying logs by color and size, from CAD modeling to a fully wooden, laser-cut assembly.",
        tags: ["SolidWorks CAD", "Laser Cutting", "3D Printing", "Mechanical Design"],
        image: logSorterCover,
        lightMedia: true,
        featured: false,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "This first-year engineering project followed the CDIO methodology (Conceive, Design, Implement, Operate) to design and build an automated machine capable of sorting wooden logs: first by health (healthy vs. unhealthy, marked by color), then by height, for the healthy logs. Working in a 9-person team, I served as design engineer, responsible for the machine's structure and its construction techniques, and was later trained in laser cutting and 3D printing to help fabricate the final assembly.",
                    "The project followed a full engineering cycle: dozens of candidate mechanisms were sketched and scored against simplicity, reliability, efficiency, and cost, before converging on a final design validated through cardboard prototyping, then rebuilt in wood."
                ],
            },
            {
                label: "Design Process",
                paragraphs: [
                    "Two complete machine concepts were developed and compared. The first uses a single rotating wheel with a notch: logs slide down an inclined plane onto the wheel, where a color sensor detects healthy (white) logs, triggering a 90° rotation toward the height-sorting circuit, while unhealthy (black) logs continue toward rejection. The second concept used a double-trapdoor airlock system requiring three separate servomotors.",
                    "The single-wheel design was selected for its simplicity (one servomotor vs. three), faster sorting speed, and easier fabrication, all critical given the team's limited prior experience with robotics and electronics."
                ],
                image: logSorterSketchV2,
                imageCaption: "Early 3D concept sketch of the retained design: inclined feed ramp, rotating sorting wheel, and height-sorting circuit. Sketch by Ethan Huart.",
                compact: true,
            },
            {
                label: "",
                paragraphs: [
                    "The core sorting mechanism relies on a rotating wheel with a rectangular notch sized to hold a single log. An infrared color sensor mounted above the wheel detects the log's color; the microcontroller then rotates the wheel 90° toward the appropriate circuit. To reduce misreads from the infrared sensor's imperfect reliability, the detection was doubled: two readings taken half a second apart had to agree before the microcontroller committed to a sorting decision."
                ],
                image: logSorterWheelSketch,
                imageCaption: "Sorting mechanism: a color sensor above the rotating wheel triggers a 90° rotation toward one of two circuits based on detected log color. Sketch by Ethan Huart.",
                compact: true,
            },
            {
                label: "Fabrication",
                paragraphs: [
                    "After extensive cardboard prototyping to validate the mechanism, the final structure was rebuilt in reclaimed wood, chosen for its durability and to keep the project's environmental footprint low, no material was purchased for the main structure. The machine was assembled with screws rather than glue, splitting the design into modular, easily disassembled and adjustable sections.",
                    "Height sorting for the healthy logs uses a second inclined plane fitted with bars at three different heights, taller logs are physically deflected to follow the bar's trajectory and fall into the appropriate collection bin, while shorter logs pass underneath undisturbed."
                ],
                image: logSorterCadAngle2,
                imageCaption: "Final SolidWorks model of the assembled machine, showing the feed ramp, sorting wheel housing, and collection bins.",
            },
            {
                label: "",
                paragraphs: [
                    "The final design integrates all wiring and the microcontroller inside a hollow compartment beneath the wheel, accessible through a hinged front panel bearing the team's engraved logo, keeping the machine's exterior clean with no visible cables."
                ],
            },
            {
                label: "Results",
                paragraphs: [
                    "The finished prototype reliably sorted 10 logs in under 20 seconds without a single sorting error during testing. Built from three independent, screw-assembled modules, the machine proved easy to transport and reconfigure, a deliberate design choice validated through the build process."
                ],
                image: logSorterPrototypeWide,
                imageCaption: "The completed wooden prototype: feed ramp, sorting wheel, height-sorting plane, and collection bins.",
            },
            {
                label: "",
                paragraphs: [
                    "The team documented the entire build process on Instagram, reaching over 1,200 accounts and 700 likes across the project's development."
                ],
                video: logSorterTestVideo,
                videoCaption: "The finished prototype sorting logs during a timed test run.",
                compact: true,
            },
        ],
    },
    {
        slug: "iba-training-module",
        meta: "Aug – Sep 2025 · IBA",
        title: "Interactive E-Learning Module for Patient Positioning System",
        description: "Design of an interactive e-learning module on the Patient Positioning System (PPS) using EasyGenerator, presented to IBA's Application Specialists team.",
        tags: ["EasyGenerator", "Instructional Design", "Technical Writing"],
        image: ibaTrainingCover,
        lightMedia: true,
        featured: false,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "This project involved designing an interactive training module on the Patient Positioning System (PPS), the robotic couch and safety systems used in IBA's proton therapy rooms, using the EasyGenerator e-learning platform. The goal was to pilot a more engaging, easier-to-maintain alternative to the video-based trainings currently used for clinical users, which are difficult to update whenever the underlying system changes.",
                    "Content was built from two main sources: IBA's Proton Therapy Academy training materials for medical physicists, and an internal technical document detailing the PPS's functioning, restructured into an interactive format designed to actively engage the learner rather than passively present information."
                ],
            },
            {
                label: "Approach",
                paragraphs: [
                    "The module was structured into learning sections, each built around a clear learning objective, followed by content pages and short quizzes to reinforce understanding. Topics covered the PPS design, safety features (collision avoidance, load cell, laser scanner), couch and insert compatibility, and emergency patient extraction procedures."
                ],
                image: ibaTrainingEditorView,
                imageCaption: "Course structure in the EasyGenerator editor: each section is built around a defined learning objective, content pages, and assessment questions.",
            },
            {
                label: "",
                paragraphs: [
                    "To make technical diagrams more engaging, key visuals such as the PPS robotic arm were annotated with interactive hotspots, letting learners explore individual components (axes, joints, end effector) at their own pace rather than absorbing a static labeled image all at once."
                ],
                image: ibaTrainingHotspots,
                imageCaption: "Interactive hotspot diagram of the PPS robotic arm, allowing learners to explore individual axes and components.",
            },
            {
                label: "Results",
                paragraphs: [
                    "The completed module was presented to IBA's Application Specialists team, the group responsible for creating clinical trainings, during a Teams session with 15 participants. The presentation included a live walkthrough of the module, feedback on EasyGenerator's capabilities and limitations, and a Q&A session to evaluate the platform's potential for future training development within the company."
                ],
            },
        ],
    },
    {
        slug: "iba-patient-support-feedback",
        meta: "Sep – Oct 2025 · IBA",
        title: "Patient Support Feedback System Analysis",
        description: "Cross-functional analysis of the patient support feedback system across hardware and software layers, consolidating findings for IBA's engineering teams.",
        tags: ["Systems Architecture", "Cross-Team Coordination", "Technical Documentation"],
        image: ibaPatientSupportCover,
        featured: false,
        detail: [
            {
                label: "Overview",
                paragraphs: [
                    "This mission focused on the patient support feedback system used in IBA's proton therapy rooms, the mechanism that informs clinical users, through preparation and status panels, of which patient support (couch or chair) and extension is currently installed, and whether it matches what was prescribed in the treatment plan. The objective was to consolidate a clear functional understanding of this feedback across the system's different software and hardware layers, and to identify gaps between what the interface displays and the underlying system state, for rooms equipped with the Orion robotic arm.",
                ],
            },
            {
                label: "Approach",
                paragraphs: [
                    "The investigation combined several sources: internal technical requirements and documentation, direct analysis of how information flows between the software components responsible for treatment planning, positioning, and room control, and structured discussions with the engineers responsible for each of these components to validate observed behavior against intended design.",
                    "This cross-functional work required acting as a bridge between subsystems that don't typically get analyzed together, tracing how a single piece of information (the type of patient support in use) is captured, transformed, and displayed as it moves through the system."
                ],
            },
            {
                label: "Results",
                paragraphs: [
                    "The main deliverable was a presentation to IBA's engineering teams, consolidating three key contributions. First, a unified vocabulary for describing patient support types and categories, resolving inconsistencies that had built up across different parts of the system's documentation and interfaces. Second, a clear map of how this information originates, gets transformed, and propagates through to what clinical users ultimately see on screen. Third, a documented set of edge cases and inconsistencies where the displayed information could diverge from the actual system state, flagged for further investigation by the relevant engineering teams.",
                    "This mission gave me a broader view of how IBA's software and hardware subsystems interact, and the opportunity to take on a system-expert role, coordinating input across multiple engineering teams to produce a shared reference document. The work now serves as a foundation for ongoing discussions on improving the clarity and reliability of patient support information for clinical users."
                ],
            },
        ],
    },


];