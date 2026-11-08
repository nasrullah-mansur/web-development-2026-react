import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@base-ui/react/separator'
import { ArrowRight, LockKeyhole } from 'lucide-react'

export default function OrderSummery() {
    return (
        <div className="lg:col-span-1">
            <Card className="gap-0 rounded-2xl shadow-sm lg:sticky lg:top-6">
                <CardHeader className="pb-5">
                    <CardTitle className="text-xl">
                        Order Summary
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">

                    {/* Subtotal */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Subtotal
                        </span>

                        <span className="font-semibold">

                        </span>
                    </div>

                    {/* Shipping */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Shipping
                        </span>

                        <span className="text-sm font-medium text-emerald-600">
                            Free
                        </span>
                    </div>

                    <Separator />

                    {/* Grand Total */}
                    <div className="flex items-center justify-between">
                        <span className="text-base font-semibold">
                            Total
                        </span>

                        <span className="text-2xl font-bold tracking-tight">

                        </span>
                    </div>

                    {/* Checkout Button - UI Only */}
                    <Button
                        size="lg"
                        className="h-12 w-full rounded-xl"
                    >
                        <LockKeyhole className="mr-2 size-4" />
                        Proceed to Checkout
                        <ArrowRight className="ml-2 size-4" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                        Secure and safe checkout
                    </p>

                </CardContent>
            </Card>
        </div>
    )
}
