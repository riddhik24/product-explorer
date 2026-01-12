interface ErrorStateProps {
  message?: string
}

export default function ErrorState({
  message = "Something went wrong. Please try again.",
}: ErrorStateProps) {
  return (
    <div className="text-center py-10 text-red-600">
      <p className="font-medium">{message}</p>
    </div>
  )
}
