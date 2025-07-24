import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Play, 
  Brain, 
  Users, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle,
  MessageSquare,
  TrendingUp,
  Sparkles,
  Mic,
  Share2,
  Target,
  Award
} from "lucide-react";
import heroImage from "@/assets/ai-learning-hero.jpg";

const LearningPlatform = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Note Generation",
      description: "Real-time note creation from videos using advanced speech-to-text and AI summarization",
      gradient: "bg-gradient-ai"
    },
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "Adaptive learning journeys based on your progress, performance, and preferences",
      gradient: "bg-gradient-learning"
    },
    {
      icon: Users,
      title: "Social Learning Network",
      description: "Connect with peers, join study groups, and engage in collaborative discussions",
      gradient: "bg-gradient-social"
    },
    {
      icon: HelpCircle,
      title: "Smart Quizzes & Challenges",
      description: "AI-generated personalized quizzes and peer challenges to test your knowledge",
      gradient: "bg-gradient-ai"
    }
  ];

  const stats = [
    { label: "Active Learners", value: "50K+", icon: Users },
    { label: "AI-Generated Notes", value: "2M+", icon: FileText },
    { label: "Learning Hours", value: "100K+", icon: BookOpen },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary-glow/10 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI-Powered Learning Platform
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  Learn Smarter with{" "}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    AI-Powered
                  </span>{" "}
                  Education
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience the future of learning with real-time AI note generation, 
                  personalized study paths, and collaborative social learning powered by 
                  advanced AI technologies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Learning Now
                </Button>
                <Button variant="outline" size="lg">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="AI Learning Platform Interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-ai rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-learning rounded-full blur-xl opacity-40 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Unique Learning Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our AI-powered platform revolutionizes the way you learn and collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              if (feature.title === "AI-Powered Note Generation") {
                return (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="relative overflow-hidden border-0 shadow-smooth hover:shadow-glow transition-all duration-300 group cursor-pointer">
                        <div className={`absolute top-0 left-0 w-full h-1 ${feature.gradient}`} />
                        <CardHeader className="pb-4">
                          <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Brain className="h-6 w-6 text-primary" />
                          AI Notes Generation Repository
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[60vh] pr-4">
                        <div className="space-y-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Repository: mohanrmoni54-collab/ai_notes_generation</h3>
                            <p className="text-muted-foreground">JavaScript-based AI note generation application</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Project Structure</h4>
                              <div className="bg-muted/30 p-3 rounded-lg space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-primary" />
                                  <span>server.js - Main server file</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-primary" />
                                  <span>package.json - Project dependencies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-primary" />
                                  <span>public/ - Static assets directory</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-primary" />
                                  <span>uploads/ - File upload directory</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Technology Stack</h4>
                              <div className="grid grid-cols-3 gap-2">
                                <Badge variant="secondary">JavaScript (64.3%)</Badge>
                                <Badge variant="secondary">CSS (27.7%)</Badge>
                                <Badge variant="secondary">HTML (8.0%)</Badge>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Repository Details</h4>
                              <div className="bg-muted/30 p-3 rounded-lg space-y-2 text-sm">
                                <p><strong>Status:</strong> Public Repository</p>
                                <p><strong>Commits:</strong> 1 Commit</p>
                                <p><strong>Stars:</strong> 0</p>
                                <p><strong>Forks:</strong> 0</p>
                                <p><strong>Language Distribution:</strong> JavaScript (64.3%), CSS (27.7%), HTML (8.0%)</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Key Features</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>Node.js server implementation for AI note processing</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>File upload functionality for document processing</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>Web-based interface for user interaction</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>Real-time AI-powered note generation capabilities</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                              <strong>View Repository:</strong> <a href="https://github.com/mohanrmoni54-collab/ai_notes_generation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/mohanrmoni54-collab/ai_notes_generation</a>
                            </p>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                );
              }
              
              return (
                <Card key={index} className="relative overflow-hidden border-0 shadow-smooth hover:shadow-glow transition-all duration-300 group">
                  <div className={`absolute top-0 left-0 w-full h-1 ${feature.gradient}`} />
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  <Brain className="mr-2 h-4 w-4" />
                  Gen AI Integration
                </Badge>
                <h2 className="text-4xl font-bold">
                  Powered by Advanced{" "}
                  <span className="bg-gradient-ai bg-clip-text text-transparent">
                    AI Technologies
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Built with IBM Watsonx (Granite, RAG, Agentic AI) for intelligent 
                  content generation, personalization, and conversational learning experiences.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mic, title: "Auto-Generated Notes", desc: "Real-time speech-to-text with AI summarization" },
                  { icon: HelpCircle, title: "Personalized Quizzes", desc: "Adaptive assessments based on your learning style" },
                  { icon: MessageSquare, title: "Conversational AI Tutor", desc: "24/7 Q&A support with intelligent responses" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-ai flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 shadow-glow border-primary/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  AI Learning Assistant
                </CardTitle>
                <CardDescription>Experience intelligent learning support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Student:</p>
                  <p className="text-muted-foreground">"Can you explain quantum computing in simple terms?"</p>
                </div>
                <div className="bg-gradient-ai/10 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2 text-primary">AI Tutor:</p>
                  <p className="text-muted-foreground">
                    "Quantum computing uses quantum mechanics principles to process information differently than classical computers. Think of it like having a magical coin that can be both heads and tails simultaneously..."
                  </p>
                </div>
                <Button variant="learning" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Try AI Tutor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Learning Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Social Learning Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect, collaborate, and learn together in our vibrant community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Peer Connections",
                description: "Connect with like-minded learners and form study groups",
                features: ["Study Groups", "Peer Matching", "Collaborative Projects"]
              },
              {
                icon: Share2,
                title: "Knowledge Sharing",
                description: "Share insights, notes, and discoveries with the community",
                features: ["Note Sharing", "Discussion Forums", "Expert Q&A"]
              },
              {
                icon: Award,
                title: "Gamified Learning",
                description: "Earn badges, compete in challenges, and track progress",
                features: ["Learning Badges", "Peer Challenges", "Leaderboards"]
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-social mx-auto flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ai relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Join thousands of learners already experiencing the future of education with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Play className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPlatform;