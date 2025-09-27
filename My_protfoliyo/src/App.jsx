import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-col items-center p-7 rounded-2xl bg-white/10 ring-1 ring-white/20">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex">
    <span >Class Warfare</span>
    <span>The Anti-Patterns</span>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default App
