"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Message Sent!
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Thank you for contacting me. I'll respond within 24 hours with all the information you need.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-8">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={fieldVariants}>
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="service">Service Type *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding Photography</SelectItem>
                      <SelectItem value="portrait">Portrait Session</SelectItem>
                      <SelectItem value="family">Family Photography</SelectItem>
                      <SelectItem value="corporate">Corporate Photography</SelectItem>
                      <SelectItem value="event">Special Event</SelectItem>
                      <SelectItem value="maternity">Maternity Session</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="date">Event Date (approximate)</Label>
                  <Input id="date" type="date" />
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                      <SelectItem value="3000+">$3,000+</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div className="space-y-2" variants={fieldVariants}>
                  <Label htmlFor="message">Tell me about your project *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your event, ideas, preferred style, number of guests, location, etc."
                    rows={5}
                    required
                  />
                </motion.div>

                <motion.div className="flex items-center space-x-2" variants={fieldVariants}>
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I want to receive photography tips and special offers
                  </Label>
                </motion.div>

                <motion.div className="flex items-center space-x-2" variants={fieldVariants}>
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I accept the privacy policy and data processing *
                  </Label>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <motion.div
                            className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
