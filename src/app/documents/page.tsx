'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, FileText, CheckCircle } from 'lucide-react'

export default function DocumentsPage() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [processing, setProcessing] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setProcessing(true)
      // Simulate processing
      setTimeout(() => {
        const fileNames = Array.from(files).map(file => file.name)
        setUploadedFiles(prev => [...prev, ...fileNames])
        setProcessing(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Document Upload</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>
              Upload PDFs, notes, articles, transcripts, or conversation screenshots for AI analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
              <input
                type="file"
                multiple
                accept=".pdf,.txt,.doc,.docx,.jpg,.png"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button asChild>
                  <span>Choose Files</span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {processing && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <div>
                  <p className="font-medium">Processing documents...</p>
                  <p className="text-sm text-gray-600">AI is analyzing content, extracting facts, and generating insights</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <FileText className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium">{file}</span>
                    <span className="text-xs text-gray-500 ml-auto">Processed</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => window.history.back()}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}