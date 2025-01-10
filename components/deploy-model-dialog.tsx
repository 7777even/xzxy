import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Search } from 'lucide-react'

interface DeployModelDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function DeployModelDialog({ open, onOpenChange }: DeployModelDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] h-[90vh] flex flex-col">
                <DialogHeader className="flex-shrink-0">
                    <DialogTitle>Deploy model as endpoint</DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto">
                    <div className="space-y-4 pr-1">
                        {/* 模型名称 */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">模型名称</label>
                            <p className="text-xs text-gray-500">select a supported Model</p>
                            <Select>
                                <SelectTrigger className="h-9">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="model1">
                                        <p>Aya-23-8B-Chat</p>
                                        <p>CohereForAl/aya-23-8B</p>
                                    </SelectItem>
                                    <SelectItem value="model2">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model3">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model4">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model5">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model6">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model7">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model8">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model9">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                    <SelectItem value="model10">
                                        <p>Aya-23-35B-Chat</p>
                                        <p>CohereForAl/aya-23-35B</p>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 自定义模型仓库 */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">自定义模型仓库</label>
                            <p className="text-xs text-gray-500">海外区输入HuggingFace Repo地址,例如:unsloth/llama-3-8b-Instruct，中国区请输入魔搭社区地址,例如:baicai003/Llama3-Chinese_v2</p>
                            <Input placeholder="Model Repo" className="h-7" />
                        </div>

                        {/* 自定义模型S3Path */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">自定义模型S3Path</label>
                            <p className="text-xs text-gray-500">输入S3存储路径，例如：s3://bucket/model/</p>
                            <p className="text-sm font-medium">S3 URI</p>
                            <div className="flex gap-2 items-center">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input
                                        className="pl-7 h-7 flex-1"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50 h-7"
                                    >
                                        View
                                        <ExternalLink className="h-4 w-4 text-gray-600" />
                                    </Button>
                                    <div className="h-5 w-px bg-gray-300 mx-2" /> {/* 分隔线 */}
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-4 py-2 text-sm bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 h-7"
                                    >
                                        Browse S3
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* 实例类型 */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">实例类型</label>
                            </div>
                            <a href="#" className="text-blue-500 text-xs flex items-center gap-1">
                                使用机型计算器性价比 <ExternalLink className="h-3 w-3" />
                            </a>
                            <Select>
                                <SelectTrigger className="h-7">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="type1">ml.g4dn.2xlarge</SelectItem>
                                    <SelectItem value="type2">ml.g4dn.12xlarge</SelectItem>
                                    <SelectItem value="type3">ml.g5.2xlarge</SelectItem>
                                    <SelectItem value="type4">ml.g5.12xlarge</SelectItem>
                                    <SelectItem value="type5">ml.g5.48xlarge</SelectItem>
                                    <SelectItem value="type6">ml.g4dn.4xlarge</SelectItem>
                                    <SelectItem value="type7">ml.g4dn.8xlarge</SelectItem>
                                    <SelectItem value="type8">ml.g4dn.16xlarge</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 实例数量 */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium">实例数量</label>
                            <p className="text-xs text-gray-500">调整节点的实例数量</p>
                            <Input type="number" defaultValue="1" className="h-7" />
                        </div>

                        {/* 引擎模型 */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">引擎模型</label>
                            </div>
                            <a href="#" className="text-blue-500 text-xs flex items-center gap-1">
                                查看引擎支持模型项目表 <ExternalLink className="h-3 w-3" />
                            </a>
                            <RadioGroup defaultValue="auto" className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="auto" id="auto" />
                                    <label htmlFor="auto" className="text-sm">Auto</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="vllm" id="vllm" />
                                    <label htmlFor="vllm" className="text-sm">vllm</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="lmi-dist" id="lmi-dist" />
                                    <label htmlFor="lmi-dist" className="text-sm">lmi-dist</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="trt-llm" id="trt-llm" />
                                    <label htmlFor="trt-llm" className="text-sm">trt-llm</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hf-accelerate" id="hf-accelerate" />
                                    <label htmlFor="hf-accelerate" className="text-sm">HF accelerate</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-5 flex-shrink-0">
                    <Button
                        variant="ghost"
                        className=" text-blue-700 hover:bg-gray-100 px-4 rounded-full"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-blue-500 text-white hover:bg-blue-600 px-4 rounded-full"
                        onClick={() => onOpenChange(false)}
                    >
                        Confirm
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}