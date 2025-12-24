import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, X, Layers } from "lucide-react";

// Dados simulados
const allTags = ["React", "Next.js", "Tailwind", "Node.js", "TypeScript", "UI/UX", "Mobile"];

const projectsData = [
    { id: 1, title: "Quantum Dashboard", description: "Financial analytics platform with real-time data.", tags: ["React", "Tailwind"] },
    { id: 2, title: "Nebula Mobile", description: "Cross-platform banking application.", tags: ["Mobile", "React"] },
    { id: 3, title: "Void CMS", description: "Headless content management system.", tags: ["Next.js", "TypeScript"] },
    { id: 4, title: "Aero Portfolio", description: "Minimalist portfolio for designers.", tags: ["UI/UX", "React"] },
    { id: 5, title: "Echo API", description: "High-performance backend service.", tags: ["Node.js", "TypeScript"] },
];

export function ProjectsSection() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const clearFilters = () => setSelectedTags([]);

    const filteredProjects = projectsData.filter(project => {
        if (selectedTags.length === 0) return true;
        return project.tags.some(tag => selectedTags.includes(tag));
    });

    return (
        <section className="w-auto px-12 glass-elevated py-12 rounded-4xl m-12">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-20 space-y-4 mt-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                    A curated selection of digital products focusing on interactivity and performance.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">

                {/*Sidebar Filter*/}
                <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-32">

                    {/* Glassy Container*/}
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-6">
                            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
                                <Layers className="size-3" /> Filter by tags
                            </span>

                            {selectedTags.length > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="text-[10px] uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                                >
                                    Reset <X className="size-3" />
                                </button>
                            )}
                        </div>

                        {/* Nuvem de Tags */}
                        <div className="flex flex-wrap gap-2">
                            {allTags.map((tag) => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`
                                            group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 border
                                            ${isSelected
                                                ? "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                                : "bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10 hover:border-white/20 hover:text-foreground"
                                            }
                                        `}
                                    >
                                        {/* Dot indicador de estado */}
                                        <span className={`size-1.5 rounded-full transition-colors ${isSelected ? "bg-blue-400" : "bg-white/20 group-hover:bg-white/40"}`} />

                                        {tag}

                                        {/* Efeito Check sutil */}
                                        {isSelected && <Check className="size-3 animate-in fade-in zoom-in duration-300" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* 3. GRID DE PROJETOS - Estilo Cartões de Vidro */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col rounded-[32px] border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-2xl"
                        >

                            {/* Imagem Container - Arredondamento alto para combinar com o Hero */}
                            <div className="relative h-64 w-full overflow-hidden rounded-[24px] bg-black/20">
                                {/* Gradiente Overlay na Imagem */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />

                                <img
                                    src={`/api/placeholder/600/400`}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />

                                {/* Botão Flutuante (Aparece no Hover) */}
                                <div className="absolute top-4 right-4 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <ArrowUpRight className="size-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="text-xl font-bold tracking-tight text-foreground mb-1 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground/60 border border-white/5 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Empty State Estilizado */}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-[32px]">
                            <p className="font-mono text-sm text-muted-foreground/50 uppercase tracking-widest">
                                System: No projects found in this sector.
                            </p>
                            <Button
                                variant="link"
                                onClick={clearFilters}
                                className="mt-2 text-blue-400"
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}