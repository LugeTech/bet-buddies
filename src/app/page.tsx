"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Users, Zap, DollarSign, ArrowRight, Bell } from "lucide-react"
import Link from 'next/link'

export default function ExcitingLandingPage() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Trophy className="h-8 w-8 text-yellow-300" />
          <span className="ml-2 text-2xl font-bold">BetBuddies</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-300 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-300 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-300 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-300 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Bet, Challenge, Win
                  <span className="text-yellow-300"> with Friends!</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                  BetBuddies: Where every moment becomes an epic showdown!
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-x-4"
              >
                <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 text-lg px-6 py-3">
                  Start Betting Now!
                </Button>
                <Button variant="outline" className="text-yellow-300 border-yellow-300 hover:bg-yellow-300/20 text-lg px-6 py-3">
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-yellow-300">Unleash the Fun!</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-pink-500 to-red-500 border-none">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Trophy className="h-12 w-12 text-yellow-300" />
                    <h3 className="text-2xl font-bold text-center">Live Sports Betting</h3>
                    <p className="text-center text-gray-200">
                      Feel the rush of live sports action with real-time odds and instant payouts!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-none">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Users className="h-12 w-12 text-yellow-300" />
                    <h3 className="text-2xl font-bold text-center">Friend Challenges</h3>
                    <p className="text-center text-gray-200">
                      Dare your friends to outrageous challenges and claim epic bragging rights!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-red-500 to-orange-500 border-none">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Zap className="h-12 w-12 text-yellow-300" />
                    <h3 className="text-2xl font-bold text-center">Interactive Mini-Games</h3>
                    <p className="text-center text-gray-200">
                      Test your luck and skills in quick, thrilling mini-games against friends!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-pink-500">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-yellow-300">Live Action</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-purple-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Hot Sports Bets</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-purple-700 rounded-lg">
                      <div>
                        <Badge className="bg-red-500">Live</Badge>
                        <h4 className="text-lg font-bold mt-1">Lakers vs. Warriors</h4>
                        <p className="text-sm text-gray-300">NBA - Q3 05:22</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-yellow-300 border-yellow-300 hover:bg-yellow-300/20">
                          Lakers +3.5
                        </Button>
                        <Button variant="outline" size="sm" className="text-yellow-300 border-yellow-300 hover:bg-yellow-300/20">
                          Warriors -3.5
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-700 rounded-lg">
                      <div>
                        <Badge className="bg-green-500">Upcoming</Badge>
                        <h4 className="text-lg font-bold mt-1">Man City vs. Liverpool</h4>
                        <p className="text-sm text-gray-300">Premier League - Starts in 2h</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-yellow-300 border-yellow-300 hover:bg-yellow-300/20">
                          Man City 2.10
                        </Button>
                        <Button variant="outline" size="sm" className="text-yellow-300 border-yellow-300 hover:bg-yellow-300/20">
                          Liverpool 3.50
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Friend Challenges</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-pink-700 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-lg font-bold">Ice Bucket Challenge</h4>
                          <p className="text-sm text-gray-300">Dare by @johndoe</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">Accept</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-pink-700 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="@janedoe" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-lg font-bold">24-Hour No Phone Challenge</h4>
                          <p className="text-sm text-gray-300">Dare by @janedoe</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">Accept</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-yellow-300">What Our Winners Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-pink-500 to-red-500 border-none">
                  <CardContent className="p-6">
                    <p className="text-gray-200 mb-4">
                      "BetBuddies has turned every game into an adrenaline rush! The live betting feature is insane!"
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@mikeross" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Mike Ross</p>
                        <p className="text-sm text-gray-300">Sports Fanatic</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-none">
                  <CardContent className="p-6">
                    <p className="text-gray-200 mb-4">
                      "The friend challenges are epic! It's like having a reality show with your buddies 24/7!"
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@sarahlee" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sarah Lee</p>
                        <p className="text-sm text-gray-300">Challenge Champion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-gradient-to-br from-red-500 to-orange-500 border-none">
                  <CardContent className="p-6">
                    <p className="text-gray-200 mb-4">
                      "The mini-games are addictive! I've never had so much fun losing money to my friends!"
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@alexchen" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Alex Chen</p>
                        <p className="text-sm text-gray-300">Mini-Game Master</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-purple-900">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-300">© 2023 BetBuddies. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {showNotification && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          className="fixed bottom-4 right-4 bg-yellow-400 text-purple-900 p-4 rounded-lg shadow-lg flex items-center space-x-2"
        >
          <Bell className="h-5 w-5" />
          <p className="font-semibold">New challenge from @friendname!</p>
          <Button size="sm" variant="outline" className="ml-2" onClick={() => setShowNotification(false)}>
            View
          </Button>
        </motion.div>
      )}
    </div>
  )
}
