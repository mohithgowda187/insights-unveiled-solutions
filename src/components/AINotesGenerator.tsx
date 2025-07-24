import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Upload, 
  Play, 
  Pause, 
  Square, 
  Mic, 
  FileText, 
  Brain,
  Download,
  Copy
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AINotesGenerator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState("");
  const [aiNotes, setAiNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      toast({
        title: "Video uploaded successfully",
        description: "Ready to start transcription and note generation",
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file",
        variant: "destructive",
      });
    }
  };

  const simulateTranscription = async () => {
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate real-time transcription
    const sampleTranscript = `Welcome to our AI and Machine Learning course. Today we'll be discussing neural networks and their applications in modern technology.

Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes called neurons that process and transmit information.

Key concepts we'll cover:
- Perceptrons and multi-layer networks
- Backpropagation algorithm
- Activation functions like ReLU and Sigmoid
- Deep learning architectures
- Convolutional Neural Networks for image processing
- Recurrent Neural Networks for sequential data

Let's start with the basic building block - the perceptron. A perceptron takes multiple inputs, applies weights to them, sums them up, and passes the result through an activation function to produce an output.`;

    const words = sampleTranscript.split(' ');
    let currentTranscript = "";
    
    for (let i = 0; i < words.length; i++) {
      currentTranscript += words[i] + " ";
      setTranscript(currentTranscript);
      setProgress((i / words.length) * 50); // First 50% for transcription
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Simulate AI summarization
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const aiSummary = `# AI & ML Course Notes - Neural Networks

## 📝 Key Topics Covered
- **Neural Networks**: Computational models inspired by biological neural networks
- **Basic Components**: Interconnected nodes (neurons) for information processing

## 🧠 Core Concepts
### Perceptron
- Basic building block of neural networks
- **Process**: Input → Weights → Sum → Activation Function → Output

### Network Architectures
1. **Multi-layer Networks**: Complex pattern recognition
2. **Deep Learning**: Multiple hidden layers for advanced learning
3. **CNNs**: Specialized for image processing
4. **RNNs**: Designed for sequential/time-series data

### Mathematical Foundations
- **Backpropagation**: Learning algorithm for weight optimization
- **Activation Functions**:
  - ReLU: f(x) = max(0,x)
  - Sigmoid: f(x) = 1/(1+e^(-x))

## 💡 Applications
- Image recognition and computer vision
- Natural language processing
- Time series prediction
- Pattern recognition

## 📚 Next Steps
- Implement basic perceptron
- Explore activation functions
- Build multi-layer network
- Apply to real-world datasets`;

    setAiNotes(aiSummary);
    setProgress(100);
    setIsProcessing(false);
    
    toast({
      title: "Notes generated successfully!",
      description: "AI has created comprehensive notes from your video",
    });
  };

  const startRecording = () => {
    if (!videoFile) {
      toast({
        title: "No video file",
        description: "Please upload a video file first",
        variant: "destructive",
      });
      return;
    }
    
    setIsRecording(true);
    setIsPaused(false);
    simulateTranscription();
  };

  const pauseRecording = () => {
    setIsPaused(!isPaused);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    setIsProcessing(false);
  };

  const copyNotes = () => {
    navigator.clipboard.writeText(aiNotes);
    toast({
      title: "Notes copied!",
      description: "AI-generated notes copied to clipboard",
    });
  };

  const downloadNotes = () => {
    const blob = new Blob([aiNotes], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-generated-notes.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Notes downloaded!",
      description: "AI-generated notes saved as Markdown file",
    });
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Video Upload
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button 
              variant="outline" 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-20 border-dashed"
            >
              <Upload className="mr-2 h-6 w-6" />
              {videoFile ? videoFile.name : "Upload Video File"}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            {videoFile && (
              <Badge variant="secondary" className="w-full justify-center">
                <FileText className="mr-2 h-4 w-4" />
                {videoFile.name} ({(videoFile.size / 1024 / 1024).toFixed(2)} MB)
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Controls Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Real-time Processing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Button 
              onClick={startRecording}
              disabled={!videoFile || isRecording}
              variant="default"
            >
              <Play className="mr-2 h-4 w-4" />
              Start Processing
            </Button>
            <Button 
              onClick={pauseRecording}
              disabled={!isRecording}
              variant="outline"
            >
              {isPaused ? <Play className="mr-2 h-4 w-4" /> : <Pause className="mr-2 h-4 w-4" />}
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button 
              onClick={stopRecording}
              disabled={!isRecording}
              variant="destructive"
            >
              <Square className="mr-2 h-4 w-4" />
              Stop
            </Button>
          </div>
          
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Transcript */}
      {transcript && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-primary" />
              Live Transcript
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-32 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm leading-relaxed">{transcript}</p>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* AI Generated Notes */}
      {aiNotes && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI-Generated Notes
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={copyNotes}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={downloadNotes}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 p-4 bg-muted/30 rounded-lg">
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">{aiNotes}</pre>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AINotesGenerator;