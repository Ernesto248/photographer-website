import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          I'm here to answer all your questions and help you plan the perfect session.
        </p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">sarah@photostudio.com</p>
                <p className="text-sm text-muted-foreground">Response within 24h</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9:00-18:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">New York, NY</p>
                <p className="text-sm text-muted-foreground">Available for travel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hours</h3>
                <p className="text-muted-foreground">Monday to Friday</p>
                <p className="text-sm text-muted-foreground">9:00 - 18:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Facebook className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">See my latest work and photography tips</p>
      </div>

      <Card className="bg-primary text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
          <p className="text-white/90 mb-4">Not sure which service you need? Schedule a free 15-minute consultation.</p>
          <Button variant="secondary" size="sm">
            Schedule Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
