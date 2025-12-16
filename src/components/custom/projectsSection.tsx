import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react"; // Ícone opcional legal para links

// Simulação de dados
const categories = ["All", "React", "Next.js", "Mobile", "UI/UX"];
const projects = [1, 2, 3, 4, 5];

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section id="projects" className="py-16 bg-background/50">
            <div className="container mx-auto px-4">

                {/* 1. Header da Seção: Centralizado e com hierarquia clara */}
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-lg text-lg">
                        A selection of my work exploring different technologies,
                        focusing on clean code and user experience.
                    </p>
                </div>

                {/* 2. Container Layout: Coluna no mobile, Linha no desktop */}
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* 3. Sidebar de Filtros (Aside) */}
                    <aside className="w-full md:w-48 lg:w-64 flex-shrink-0 md:sticky md:top-24">
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground hidden md:block">
                            Filter by
                        </h3>

                        {/* Wrapper dos botões: Scroll horizontal no mobile, Lista vertical no PC */}
                        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar mask-gradient">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={activeFilter === cat ? "default" : "ghost"}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`justify-start rounded-full md:rounded-md whitespace-nowrap px-6 md:px-4 ${activeFilter === cat ? "shadow-md" : ""
                                        }`}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </aside>

                    {/* 4. Grid de Projetos */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {projects.map((item) => (
                            <Card key={item} className="group flex flex-col h-full overflow-hidden border hover:border-primary/50 transition-colors">

                                {/* Imagem com efeito de zoom suave ao passar o mouse */}
                                <div className="h-48 w-full bg-muted relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />
                                    {/* Simulação de imagem */}
                                    <img
                                        src={`/api/placeholder/400/300`}
                                        alt="Project Preview"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl">Project Name {item}</CardTitle>
                                        {/* Ícone que aparece só no hover (opcional) */}
                                        <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <CardDescription>
                                        A brief but catchy description of what this project solves.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="text-xs">React</Badge>
                                        <Badge variant="secondary" className="text-xs">Tailwind</Badge>
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-0">
                                    <Button className="w-full gap-2" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}