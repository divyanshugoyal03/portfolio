"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Cloud,
  Container,
  Server,
  Settings,
  Award,
  Calendar,
  Building,
  Moon,
  Sun,
  ChevronDown,
  Zap,
  Code,
  Database,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const skills = {
    "AWS Cloud Services": [
      "VPC",
      "Route 53",
      "EC2",
      "EBS",
      "S3",
      "IAM",
      "Load Balancing",
      "CloudFormation",
      "Autoscaling",
      "Secret Manager",
    ],
    "Containerization & Orchestration": ["Amazon ECS", "Docker", "Docker Compose", "Kubernetes", "EKS"],
    "CI/CD & DevOps Tools": ["GitLab CI", "Jenkins", "Consul", "Vault", "Helm"],
    "Monitoring & Logging": ["ELK Stack", "Grafana", "Prometheus"],
    "Infrastructure as Code": ["Terraform", "CloudFormation"],
    "Scripting & Programming": ["Bash/Shell", "YAML", "Python", "Git"],
  }

  const experience = [
    {
      title: "Senior DevOps Engineer",
      company: "Deutsche Telekom Digital Labs",
      location: "Gurugram",
      period: "February 2022 - Current",
      achievements: [
        "Managed containerized workloads with Kubernetes (EKS) ensuring high availability and scalability",
        "Enhanced CI/CD pipelines, reducing deployment time by 30% with standardized Helm charts",
        "Developed monitoring systems with Prometheus, Grafana, and ELK stack achieving 99.9% uptime",
        "Leveraged DevOps and Agile best practices to enhance organizational agility",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "RoundGlass H2O Pvt. Ltd.",
      location: "Chandigarh",
      period: "November 2019 - February 2022",
      achievements: [
        "Designed and deployed scalable AWS architectures improving uptime and scalability by 25%",
        "Managed containers with Docker, Docker Compose, and AWS ECS with seamless scaling",
        "Administered DNS with GoDaddy and Route 53, managed SSL certificates using AWS ACM",
      ],
    },
    {
      title: "Associate DevOps Engineer",
      company: "Ascentx Software Development",
      location: "Chandigarh",
      period: "March 2017 - November 2019",
      achievements: [
        "Designed and implemented multi-tier AWS architecture improving scalability",
        "Streamlined migration from local servers to cloud infrastructure",
        "Enforced ISO 27001 compliance policies ensuring data integrity and security",
      ],
    },
  ]

  const projects = [
    {
      title: "LLM-based Chatbot Deployment on AWS ECS",
      description:
        "Deployed a large language model-powered chatbot using AWS ECS, orchestrating multi-container services for scalable and resilient infrastructure.",
      technologies: ["AWS ECS", "Docker", "Multi-container", "LLM"],
      icon: <Database className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "CI/CD & Helm Templatization for Microservices",
      description:
        "Built reusable CI/CD pipelines and Helm charts, eliminating manual configurations and saving 100% DevOps effort during new service development.",
      technologies: ["CI/CD", "Helm", "Kubernetes", "Microservices"],
      icon: <Settings className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Containerization of Legacy Monoliths",
      description:
        "Transformed monolithic applications into Docker containers and deployed them on AWS ECS to enhance scalability and deployment agility.",
      technologies: ["Docker", "AWS ECS", "Legacy Migration", "Containerization"],
      icon: <Container className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "On-Prem to AWS Cloud Migration",
      description:
        "Led end-to-end migration of services from local servers to AWS using secure multi-tier architecture, boosting system availability and scalability.",
      technologies: ["AWS", "Cloud Migration", "Multi-tier Architecture", "Infrastructure"],
      icon: <Cloud className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const certifications = [
    {
      title: "Certified Kubernetes Administrator (CKA) with Practice Tests",
      provider: "Udemy + KodeKloud",
      date: "Jan 2025",
      duration: "23.5 hours",
    },
    {
      title: "Terraform for the Absolute Beginners with Labs",
      provider: "Udemy + KodeKloud",
      date: "Jan 2025",
      duration: "4.5 hours",
    },
    {
      title: "Introduction to AWS Lambda – A 2-hour Crash Course",
      provider: "Udemy",
      date: "Jan 2025",
      duration: "2.5 hours",
    },
    {
      title: "Kubernetes for the Absolute Beginners – Hands-on",
      provider: "Udemy + KodeKloud",
      date: "Oct 2024",
      duration: "6.5 hours",
    },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""} overflow-x-hidden max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-8`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>

        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-lg rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-green-200/30 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-24 h-24 bg-orange-200/30 rounded-lg animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>


      {/* Header */}
      <header className="fixed left-0 top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3 group">
        <div className="relative" style={{ paddingLeft: '2rem' }}>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-sm">DG</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
        </div>
        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Divyanshu Goyal
        </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium ml-auto">
        {["About", "Experience", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-blue-600 transition-colors duration-300 group text-black dark:text-white dark:hover:text-blue-400"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center ml-auto">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <span className="block w-6 h-0.5 bg-blue-600 mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-blue-600 mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-blue-600 transition-all duration-300"></span>
        </button>
          </div>

          <Button
        variant="ghost"
        size="icon"
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 hover:scale-110 transition-transform duration-300 dark:text-white"
          >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileNavOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileNavOpen(false)}>
        <nav
          className="absolute top-16 right-0 w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-lg flex flex-col items-end py-6 space-y-4 animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {["About", "Experience", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 pr-8"
          onClick={() => setMobileNavOpen(false)}
            >
          {item}
            </Link>
          ))}
        </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24 w-full">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
            }}
          ></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                Available for new opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-gradient">
                Divyanshu
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Goyal
                </span>
              </h1>

              <div className="space-y-2">
                <p
                className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
                >
                Senior DevOps Engineer
                </p>
                <div
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
                >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>8 Years of Experience</span>
                </div>
              </div>
              </div>

              <p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
              >
              Transforming infrastructure challenges into{" "}
              <span className="text-blue-600 font-semibold">scalable cloud solutions</span> with{" "}
              <span className="text-purple-600 font-semibold">cutting-edge DevOps practices</span>
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:text-white"
              >
                <a href="#experience">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Experience
                </a>
              </Button>
              {/* Work GitHub Profile Button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold"
              >
                <Link href="https://github.com/abcofdevops" target="_blank" title="View Projects">
                <Github className="h-5 w-5 mr-2" />
                View Projects
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent dark:text-white"
              >
                <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="relative px-7 py-3 bg-white/80 dark:bg-gray-900/80 border-0 shadow-xl rounded-full ring-2 ring-blue-400/40 hover:ring-purple-500/60 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-blue-700 dark:text-blue-200 font-bold tracking-wider transition-all duration-300 group overflow-hidden"
                asChild
              >
                <Link href="./resume.pdf" target="_blank" className="flex items-center gap-2">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></span>
                <Download className="h-5 w-5 text-blue-600 dark:text-blue-300 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.7)] group-hover:drop-shadow-[0_0_16px_rgba(139,92,246,0.8)]" />
                <span className="z-10">Resume</span>
                </Link>
              </Button>
              </div>

              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              {[
                { icon: Github, href: "https://github.com/divyanshugoyal03", color: "hover:text-gray-800 dark:text-white" },
                { icon: Linkedin, href: "https://linkedin.com/in/divyanshugoyal03", color: "hover:text-blue-600 dark:text-white " },
                { icon: Mail, href: "mailto:divyanshugoyal03@gmail.com", color: "hover:text-red-500 dark:text-white" },
              ].map(({ icon: Icon, href, color }, index) => (
                <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`transform hover:scale-125 transition-all duration-300 ${color}`}
                asChild
                >
                <Link href={href} target="_blank">
                  <Icon className="h-5 w-5" />
                </Link>
                </Button>
              ))}
              </div>
              {/* Remove the duplicate work GitHub button below */}
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                {/* Animated Rings */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800 animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full border-2 border-purple-200 dark:border-purple-800 animate-spin"
                  style={{ animationDuration: "8s", animationDirection: "reverse" }}
                ></div>
                <div
                  className="absolute inset-8 rounded-full border border-green-200 dark:border-green-800 animate-spin"
                  style={{ animationDuration: "6s" }}
                ></div>
                {/* Responsive Spacer for Alignment */}
                <div className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-24 h-1"></div>
                {/* Profile Image */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient"></div>
                  <Avatar className="w-full h-full">
                    <AvatarImage src="./divyanshu.png?height=320&width=320" alt="Divyanshu Goyal" />
                    <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      DG
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Floating Tech Icons */}
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  <Cloud className="h-8 w-8 text-orange-500" />
                </div>
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <Container className="h-8 w-8 text-blue-500" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <Server className="h-8 w-8 text-green-500" />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "3s" }}
                >
                  <Settings className="h-8 w-8 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </div>
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <Zap className="h-6 w-6 text-blue-600 mr-2" />
                    Driving Innovation at the Intersection of DevOps, Cloud & Automation
                  </h3>
                  <p>
                    With 8 years of experience spanning infrastructure automation, cloud architecture, and DevOps
                    transformation, I've built and led scalable technology ecosystems for enterprises and growth-stage
                    companies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Infrastructure Expertise</h4>
                    <p className="text-sm">
                      Specializing in transforming complex infrastructure challenges into streamlined, automated
                      solutions with AWS, Kubernetes, and modern DevOps practices.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Performance Results</h4>
                    <p className="text-sm">
                      Achieved 99.9% system uptime, reduced deployment times by 30%, and enhanced system scalability by
                      25% across multiple enterprise environments.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4">
                    <p className="font-semibold text-slate-800 dark:text-white mb-2 flex items-center">
                      <Award className="h-5 w-5 text-purple-600 mr-2" />
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AWS Cloud Architecture",
                        "Kubernetes & Container Orchestration",
                        "CI/CD Pipeline Optimization",
                        "Infrastructure as Code",
                        "DevOps Transformation",
                        "System Reliability Engineering",
                      ].map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-0 hover:scale-105 transition-transform duration-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Phone className="h-5 w-5" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "divyanshugoyal03@gmail.com", color: "text-red-500" },
                    { icon: Phone, label: "Phone", value: "+91-7015570297", color: "text-green-500" },
                    { icon: MapPin, label: "Location", value: "Gurugram, India", color: "text-blue-500" },
                  ].map(({ icon: Icon, label, value, color }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <Icon className={`h-4 w-4 ${color}`} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                        <p className="font-medium">{value}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2 mb-4">
                      {[
                        {
                          icon: Linkedin,
                          href: "https://linkedin.com/in/divyanshugoyal03",
                          color: "hover:text-blue-600",
                        },
                        {
                          icon: Github,
                          href: "https://github.com/divyanshugoyal03",
                          color: "hover:text-gray-800 dark:hover:text-white",
                        },
                      ].map(({ icon: Icon, href, color }, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="icon"
                          className={`h-10 w-10 transform hover:scale-110 transition-all duration-300 ${color}`}
                          asChild
                        >
                          <Link href={href} target="_blank">
                            <Icon className="h-5 w-5" />
                          </Link>
                        </Button>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-white"
                      asChild
                    >
                      <Link href="./resume.pdf" target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              8 years of driving infrastructure innovation and DevOps excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-l-4 border-l-blue-600 hover:border-l-purple-600 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium flex items-center gap-2">
                        <Building className="h-4 w-4 text-blue-500" />
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 w-fit bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-700"
                    >
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and tools powering modern infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="group h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg group-hover:text-blue-600 transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300">
                      {category.includes("AWS") && <Cloud className="h-5 w-5 text-orange-500" />}
                      {category.includes("Container") && <Container className="h-5 w-5 text-blue-500" />}
                      {category.includes("CI/CD") && <Settings className="h-5 w-5 text-green-500" />}
                      {category.includes("Monitoring") && <Server className="h-5 w-5 text-purple-500" />}
                      {category.includes("Infrastructure") && <Server className="h-5 w-5 text-red-500" />}
                      {category.includes("Scripting") && <Code className="h-5 w-5 text-gray-500" />}
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:scale-110 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Infrastructure solutions that drive business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-4 transition-all duration-300`}
                ></div>

                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:scale-110 transition-transform duration-200 cursor-default"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Continuous growth and professional development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">{cert.title}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium">{cert.provider}</span>
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-700"
                      >
                        {cert.date}
                      </Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {cert.duration} training
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Gradient Background Overlay */}
      <div className="fixed inset-0 left-1/2 right-1/2 -translate-x-1/2 w-screen h-full -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      </div>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/10 rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Ready to transform your infrastructure? Let's connect!</p>
          </div>

            <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Responsive button group with spacing and NO backdrop */}
            <div className="mb-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center px-4 sm:px-0">
              <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              asChild
              >
              <Link href="mailto:divyanshugoyal03@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
              </Button>
              <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
              asChild
              >
              <Link href="https://linkedin.com/in/divyanshugoyal03" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-8 mt-8">
              {/* Important & Bigger Social Icons */}
              {[
              { icon: Github, href: "https://github.com/divyanshugoyal03", label: "GitHub" },
              { icon: Phone, href: "tel:+917015570297", label: "Call" },
              { icon: Mail, href: "mailto:divyanshugoyal03@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-16 w-16 text-white hover:text-blue-300 hover:bg-white/10 transform hover:scale-125 transition-all duration-300 border-2 border-blue-400 shadow-xl"
                asChild
              >
                <Link href={href} target="_blank" title={label}>
                <Icon className="h-9 w-9" />
                </Link>
              </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        footer .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 640px) {
          footer .container {
        padding-left: 2rem;
        padding-right: 2rem;
          }
        }
        @media (min-width: 768px) {
          footer .container {
        padding-left: 3rem;
        padding-right: 3rem;
          }
        }
        footer {
          z-index: 50;
          position: relative;
        }
      `}</style>
      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Divyanshu Goyal. Crafted with ❤️ and lots of ☕
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
