"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle, Clock, AlertCircle, BadgeCheck, ShieldOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Severity = "HIGH" | "MEDIUM" | "LOW"

type UserData = {
  name: string
  email: string
  company: {
    name: string
    plan: string
  }
  securityScore: number
}

type ComplianceScores = {
  nist: {
    score: number
    categories: {
      identify: number
      protect: number
      detect: number
      respond: number
      recover: number
    }
  }
  iso: {
    score: number
    categories: {
      riskAssessment: number
      securityPolicy: number
      assetManagement: number
      accessControl: number
      cryptography: number
    }
  }
  cis: {
    score: number
    categories: {
      basicControls: number
      foundationalControls: number
      organizationalControls: number
    }
  }
}

type SecurityAlert = {
  id: string
  title: string
  description: string
  severity: Severity
  createdAt: string
}

type PendingTask = {
  id: string
  title: string
  description: string
  progress: number
  dueDate: Date
}

type MetricCallout = {
  label: string
  value: string
  note: string
  icon: typeof Shield
}

const complianceScores: ComplianceScores = {
  nist: {
    score: 65,
    categories: {
      identify: 70,
      protect: 65,
      detect: 60,
      respond: 55,
      recover: 50,
    },
  },
  iso: {
    score: 72,
    categories: {
      riskAssessment: 75,
      securityPolicy: 80,
      assetManagement: 65,
      accessControl: 70,
      cryptography: 60,
    },
  },
  cis: {
    score: 68,
    categories: {
      basicControls: 75,
      foundationalControls: 65,
      organizationalControls: 60,
    },
  },
}

const metricCallouts: MetricCallout[] = [
  {
    label: "Phishing resilience",
    value: "84%",
    note: "A respectable number, though one person still nearly trusted a fake invoice written in comic sans.",
    icon: BadgeCheck,
  },
  {
    label: "Patch latency",
    value: "6 days",
    note: "Not bad. Not excellent. Definitely better than 'we patch when Kevin remembers.'",
    icon: Shield,
  },
  {
    label: "Risky exceptions",
    value: "3",
    note: "Three active exceptions remain, which is still low enough to discuss without sighing heavily.",
    icon: ShieldOff,
  },
]

export default function Dashboard() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [securityAlerts] = useState<SecurityAlert[]>([
    {
      id: "1",
      title: "Unusual Login Activity",
      description: "Multiple failed login attempts detected from IP 192.168.1.105",
      severity: "HIGH",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Software Update Available",
      description: "Security update available for your firewall software",
      severity: "MEDIUM",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Data Backup Reminder",
      description: "Weekly data backup is due in 2 days",
      severity: "LOW",
      createdAt: new Date().toISOString(),
    },
  ])

  const [pendingTasks] = useState<PendingTask[]>([
    {
      id: "1",
      title: "Complete Security Assessment",
      description: "Finish the quarterly security assessment",
      progress: 65,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      title: "Update Security Policies",
      description: "Review and update security policies",
      progress: 30,
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
  ])

  useEffect(() => {
    // Simulate loading data
    const timeoutId = window.setTimeout(() => {
      setUserData({
        name: "John Doe",
        email: "john@example.com",
        company: {
          name: "Acme Inc.",
          plan: "PROFESSIONAL",
        },
        securityScore: 72,
      })
      setLoading(false)
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const getSeverityColor = (severity: Severity) => {
    switch (severity) {
      case "HIGH":
        return "bg-red-100 text-red-800 border-red-200"
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "LOW":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSeverityIcon = (severity: Severity) => {
    switch (severity) {
      case "HIGH":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "MEDIUM":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      case "LOW":
        return <AlertCircle className="h-5 w-5 text-green-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />
    }
  }

  const handleGenerateReport = () => {
    toast({
      title: "Report queued",
      description: "We told the dashboard to make a neat little report instead of another dramatic PDF monster.",
    })
  }

  const handleViewAlert = (alert: SecurityAlert) => {
    toast({
      title: alert.title,
      description: `${alert.severity} priority. ${alert.description}`,
    })
  }

  const handleViewAllAlerts = () => {
    toast({
      title: "Alert center",
      description: `There are ${securityAlerts.length} alerts in the queue, which is manageable and still fewer than most inboxes.`,
    })
  }

  const handleViewFramework = (frameworkName: string) => {
    toast({
      title: `${frameworkName} details`,
      description: "Detailed drill-down coming next. The button now does more than provide emotional support.",
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading dashboard data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Security Dashboard</h1>
          <p className="text-gray-500">
            Monitor your organization&apos;s security posture without pretending chaos is a management framework.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button onClick={handleGenerateReport}>Generate Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData?.securityScore || 0}/100</div>
            <p className="text-xs text-gray-500">+5 from last month</p>
            <Progress value={userData?.securityScore || 0} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securityAlerts.length}</div>
            <p className="text-xs text-gray-500">
              {securityAlerts.filter((a) => a.severity === "HIGH").length} high,{" "}
              {securityAlerts.filter((a) => a.severity === "MEDIUM").length} medium,{" "}
              {securityAlerts.filter((a) => a.severity === "LOW").length} low
            </p>
            <Progress value={securityAlerts.length > 0 ? 70 : 0} className="h-2 mt-2 bg-yellow-100" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/4</div>
            <p className="text-xs text-gray-500">Frameworks compliant</p>
            <Progress value={75} className="h-2 mt-2 bg-green-100" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Overview</CardTitle>
              <CardDescription>Track your compliance with security frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="nist">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="nist">NIST CSF</TabsTrigger>
                  <TabsTrigger value="iso">ISO 27001</TabsTrigger>
                  <TabsTrigger value="cis">CIS Controls</TabsTrigger>
                </TabsList>
                <TabsContent value="nist" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Identify</span>
                        <span className="text-sm font-medium">{complianceScores.nist.categories.identify}%</span>
                      </div>
                      <Progress value={complianceScores.nist.categories.identify} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Protect</span>
                        <span className="text-sm font-medium">{complianceScores.nist.categories.protect}%</span>
                      </div>
                      <Progress value={complianceScores.nist.categories.protect} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Detect</span>
                        <span className="text-sm font-medium">{complianceScores.nist.categories.detect}%</span>
                      </div>
                      <Progress value={complianceScores.nist.categories.detect} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Respond</span>
                        <span className="text-sm font-medium">{complianceScores.nist.categories.respond}%</span>
                      </div>
                      <Progress value={complianceScores.nist.categories.respond} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Recover</span>
                        <span className="text-sm font-medium">{complianceScores.nist.categories.recover}%</span>
                      </div>
                      <Progress value={complianceScores.nist.categories.recover} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <Button variant="outline" size="sm" onClick={() => handleViewFramework("NIST CSF")}>
                      View Details
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="iso" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Risk Assessment</span>
                        <span className="text-sm font-medium">{complianceScores.iso.categories.riskAssessment}%</span>
                      </div>
                      <Progress value={complianceScores.iso.categories.riskAssessment} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Security Policy</span>
                        <span className="text-sm font-medium">{complianceScores.iso.categories.securityPolicy}%</span>
                      </div>
                      <Progress value={complianceScores.iso.categories.securityPolicy} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Asset Management</span>
                        <span className="text-sm font-medium">{complianceScores.iso.categories.assetManagement}%</span>
                      </div>
                      <Progress value={complianceScores.iso.categories.assetManagement} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Access Control</span>
                        <span className="text-sm font-medium">{complianceScores.iso.categories.accessControl}%</span>
                      </div>
                      <Progress value={complianceScores.iso.categories.accessControl} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Cryptography</span>
                        <span className="text-sm font-medium">{complianceScores.iso.categories.cryptography}%</span>
                      </div>
                      <Progress value={complianceScores.iso.categories.cryptography} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <Button variant="outline" size="sm" onClick={() => handleViewFramework("ISO 27001")}>
                      View Details
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="cis" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Basic Controls</span>
                        <span className="text-sm font-medium">{complianceScores.cis.categories.basicControls}%</span>
                      </div>
                      <Progress value={complianceScores.cis.categories.basicControls} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Foundational Controls</span>
                        <span className="text-sm font-medium">
                          {complianceScores.cis.categories.foundationalControls}%
                        </span>
                      </div>
                      <Progress value={complianceScores.cis.categories.foundationalControls} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Organizational Controls</span>
                        <span className="text-sm font-medium">
                          {complianceScores.cis.categories.organizationalControls}%
                        </span>
                      </div>
                      <Progress value={complianceScores.cis.categories.organizationalControls} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <Button variant="outline" size="sm" onClick={() => handleViewFramework("CIS Controls")}>
                      View Details
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Security Alerts</CardTitle>
              <CardDescription>Recent security events and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.length > 0 ? (
                  securityAlerts.slice(0, 3).map((alert) => (
                    <Alert key={alert.id} className={getSeverityColor(alert.severity)}>
                      <div className="flex items-start">
                        {getSeverityIcon(alert.severity)}
                        <div className="ml-3 w-full">
                          <AlertTitle className="text-sm font-semibold">{alert.title}</AlertTitle>
                          <AlertDescription className="text-xs mt-1">{alert.description}</AlertDescription>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {new Date(alert.createdAt).toLocaleString()}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 text-xs"
                              onClick={() => handleViewAlert(alert)}
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Alert>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">No active alerts</div>
                )}
                <div className="text-center mt-2">
                  <Button variant="link" size="sm" onClick={handleViewAllAlerts}>
                    View All Alerts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
            <CardDescription>Work that still needs doing, because security is rude like that.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingTasks.map((task) => (
                <div key={task.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-gray-500">{task.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">Due {task.dueDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={task.progress} className="h-2" />
                    <span className="min-w-12 text-sm font-medium">{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Readiness Notes</CardTitle>
            <CardDescription>Short version: progress is real, perfection remains fictional.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {metricCallouts.map(({ label, value, note, icon: Icon }) => (
              <div key={label} className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{label}</h3>
                      <p className="text-sm font-medium text-slate-900">{value}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600">{note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
