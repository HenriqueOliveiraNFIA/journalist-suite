import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Timeline, PenTool, Network, FolderOpen, Lightbulb, Edit, Download, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">JournalistSuite</h1>
          <p className="text-xl text-gray-600">Complete toolkit for modern journalists</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Document Upload</CardTitle>
              <CardDescription>Upload PDFs, notes, articles, and transcripts for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/documents">
                <Button className="w-full">Start Uploading</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Timeline className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Dynamic Timeline</CardTitle>
              <CardDescription>Interactive timeline with dates, locations, people, and events</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/timeline">
                <Button className="w-full">View Timeline</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <PenTool className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Article Generator</CardTitle>
              <CardDescription>AI-powered article generation with custom styles and tones</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/generator">
                <Button className="w-full">Generate Article</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Network className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle>Cross Investigation</CardTitle>
              <CardDescription>Detect patterns and connections across multiple documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/investigation">
                <Button className="w-full">Start Investigation</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FolderOpen className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Smart Dossiers</CardTitle>
              <CardDescription>Generate thematic reports with documents, analyses, and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dossiers">
                <Button className="w-full">Create Dossier</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-yellow-600 mb-2" />
              <CardTitle>Lead Suggestions</CardTitle>
              <CardDescription>AI suggestions for headlines, leads, and writing styles</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/suggestions">
                <Button className="w-full">Get Suggestions</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Edit className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle>Smart Writing Mode</CardTitle>
              <CardDescription>Complete writing workflow from documents to publication</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/writing">
                <Button className="w-full">Start Writing</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Download className="w-8 h-8 text-teal-600 mb-2" />
              <CardTitle>Professional Export</CardTitle>
              <CardDescription>Export articles, reports, and dossiers in multiple formats</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/export">
                <Button className="w-full">Export Content</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-pink-600 mb-2" />
              <CardTitle>Insights Dashboard</CardTitle>
              <CardDescription>Analytics on processed documents, critical events, and suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard">
                <Button className="w-full">View Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Demo users available: Alice Johnson, Bob Smith, Carol Davis</p>
          <Button variant="outline">Login as Demo User</Button>
        </div>
      </div>
    </div>
  )
}