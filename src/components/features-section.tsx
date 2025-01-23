import {Goal, MonitorSmartphone, ShieldCheck} from "lucide-react";
import {FeatureCard} from "@/components/feature-card";

const features = [
    {
        title: "Front To Back Communication ",
        description: "Seamless front-to-back communication. Our platform provides both clinical and finance teams with the clarity they need to make more informed billing decisions.",
        icon: <MonitorSmartphone className={"size-7"} />,
    },
    {
        title: "Optimize Workflows",
        description: "Generates revenue-boosting workflows so staff can offload the heavy lifting to AI Agents.",
        icon: <Goal className={"size-7"} />,
    },
    {
        title: "Automate Appeals and Wipe Away Audit Risk",
        description: "Our AI agents accurately interpret ERAs, generate appeal plans, and only request human assistance for tasks like document uploads—all while keeping your billing aligned with national standards.",
        icon: <ShieldCheck className={"size-7"} />,
    },
]

export function FeaturesSection() {
    return (
        <>
            <div className={"bg-black text-white py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h1 className={"text-5xl sm:text-6xl font-bold text-center tracking-tighter pt-6"}>Everything you need</h1>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-center mt-5 text-xl text-white/70"}>
                        AI-driven risk management, claims optimization, and ambient note transcription— streamline operations and boost claim approvals.
                        </p>
                    </div>
                    <div className={"flex items-center justify-center mt-16"}>
                        <div className={"grid sm:grid-cols-3 gap-5 max-w-5xl"}>
                            {features.map((features, index) => (
                                <FeatureCard
                                    key={index} title={features.title}
                                    description={features.description} icon={features.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
