/**
 * v0 by Vercel.
 * @see https://v0.dev/t/81qXDUvPnGf
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Subscribe to our Newsletter
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Stay updated with our latest news and promotions. Enter your email below.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button className="bg-blue-500 hover:bg-blue-700 text-white animate-bounce" type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              We respect your privacy. By subscribing, you agree to our terms and conditions.
            </p>
          </div>
          <div className="bg-green-500 dark:bg-green-400 text-white rounded-lg p-4 max-w-lg">
            <h2 className="text-xl font-bold">Success!</h2>
            <p className="text-sm">You have successfully subscribed to our newsletter.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

