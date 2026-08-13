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

export interface ProjectSection {
    label: string;
    paragraphs: string[];
    image?: string;
    imageCaption?: string;
    compact?: boolean;
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



];