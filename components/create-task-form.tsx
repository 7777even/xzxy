"use client"

import { useState } from 'react';
import { Search, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import Link from 'next/link';

export default function CreateTaskForm() {
    const [isDeepSpeedExpanded, setIsDeepSpeedExpanded] = useState(false);
    const [isExtraExpanded, setIsExtraExpanded] = useState(false);
    const [isLoraExpanded, setIsLoraExpanded] = useState(false);
    const [isRLHFExpanded, setIsRLHFExpanded] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* 主内容区 */}
            <div className="flex-1">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* 顶部导航区域 */}
                    <div className="flex items-center gap-4 py-6">
                        {/* 面包屑导航 */}
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/model-training" className="text-blue-500 underline">Model Hub</Link>
                            <span className="text-gray-500">&gt;</span>
                            <Link href="/model-training" className="text-blue-500 underline">项目</Link>
                            <span className="text-gray-500">&gt;</span>
                            <span className="text-gray-500">创建项目</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold">任务详情</h1>

                    {/* Training job settings */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <h2 className="text-lg font-medium mb-6">Training job settings</h2>

                        <div className="space-y-6">
                            {/* Job Name */}
                            <div className="space-y-2">
                                <Label>Job Name</Label>
                                <p className="text-sm text-gray-500">Give a name to your job</p>
                                <Input placeholder="Give a name to your job" className="max-w-2xl" />
                            </div>

                            {/* Train Stage */}
                            <div className="space-y-2">
                                <Label>Train Stage</Label>
                                <p className="text-sm text-gray-500">The stage to perform in training</p>
                                <Select>
                                    <SelectTrigger className="max-w-2xl">
                                        <SelectValue placeholder="Select train stage" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="stage1">Stage 1</SelectItem>
                                        <SelectItem value="stage2">Stage 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Model Name */}
                            <div className="space-y-2">
                                <Label>Model Name</Label>
                                <p className="text-sm text-gray-500">选择模型名称</p>
                                <Select>
                                    <SelectTrigger className="max-w-2xl">
                                        <SelectValue placeholder="Select model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="model1">Model 1</SelectItem>
                                        <SelectItem value="model2">Model 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Use Existing Model Weight */}
                            <div className="space-y-2">
                                <Label>Use Existing Model Weight (Optional)</Label>
                                <p className="text-sm text-gray-500">使用已有的模型文件进行训练</p>
                                <p className="text-sm text-black-500">S3 URI</p>
                                <div className="flex gap-2 items-center">
                                    <div className="relative flex-1 max-w-2xl">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input placeholder="" className="pl-9" />
                                    </div>
                                    <div className="flex items-center">
                                        <Button
                                            variant="outline"
                                            className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50"
                                        >
                                            View
                                            <ExternalLink className="h-4 w-4 text-gray-600" />
                                        </Button>
                                        <div className="h-5 w-px bg-gray-300 mx-2" /> {/* 分隔线 */}
                                        <Button
                                            className="rounded-full px-4 py-2 text-sm bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                                        >
                                            Browse S3
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Use Existing Checkpoint */}
                            <div className="space-y-2">
                                <Label>Use Existing Checkpoint (Optional)</Label>
                                <p className="text-sm text-gray-500">
                                    使用已有的checkpoint文件继续训练
                                    <span className="text-red-500">（⚠️：如果是Lora训练，选择Lora模型的checkpoint)</span>
                                </p>
                                <p className="text-sm text-black-500">S3 URI</p>
                                <div className="flex gap-2 items-center">
                                    <div className="relative flex-1 max-w-2xl">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input placeholder="" className="pl-9" />
                                    </div>
                                    <div className="flex items-center">
                                        <Button
                                            variant="outline"
                                            className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50"
                                        >
                                            View
                                            <ExternalLink className="h-4 w-4 text-gray-600" />
                                        </Button>
                                        <div className="h-5 w-px bg-gray-300 mx-2" /> {/* 分隔线 */}
                                        <Button
                                            className="rounded-full px-4 py-2 text-sm bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                                        >
                                            Browse S3
                                        </Button>
                                    </div>
                                </div>
                            </div>


                            {/* Prompt Template */}
                            <div className="space-y-2">
                                <Label>Prompt Template</Label>
                                <p className="text-sm text-gray-500">Select a Prompt Template to format the dataset</p>
                                <Select>
                                    <SelectTrigger className="max-w-2xl">
                                        <SelectValue placeholder="Select template" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="template1">Template 1</SelectItem>
                                        <SelectItem value="template2">Template 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Finetuning method */}
                            <div className="space-y-2">
                                <Label>Finetuning method</Label>
                                <p className="text-sm text-gray-500">Choose Finetuning method for the job</p>
                                <RadioGroup defaultValue="lora" className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="lora" id="lora" />
                                        <Label htmlFor="lora">Lora</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="full" id="full" />
                                        <Label htmlFor="full">Full</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Quantization bit */}
                            <div className="space-y-2">
                                <Label>Quantization bit</Label>
                                <p className="text-sm text-gray-500">Enable 4/8-bit model quantization (QLoRA)</p>
                                <RadioGroup defaultValue="none" className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="none" id="none" />
                                        <Label htmlFor="none">None</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="8" id="8" />
                                        <Label htmlFor="8">8</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="4" id="4" />
                                        <Label htmlFor="4">4</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Booster Option */}
                            <div className="space-y-2">
                                <Label>Booster Option</Label>
                                <RadioGroup defaultValue="none" className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="none" id="booster-none" />
                                        <Label htmlFor="booster-none">None</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="flashmini2" id="flashmini2" />
                                        <Label htmlFor="flashmini2">FlashAttn2</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Job最长运行时间 */}
                            <div className="space-y-2">
                                <Label>Job最长运行时间(小时)</Label>
                                <p className="text-sm text-gray-500">Job最长可运行时间（单位：小时），超过这个时间Job将被终止</p>
                                <Input type="number" defaultValue="48" className="max-w-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Datasets settings */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <h2 className="text-lg font-medium mb-6">Datasets settings</h2>

                        <div className="space-y-6">
                            {/* Training Data in S3 */}
                            <div className="space-y-2">
                                <Label>Training Data in S3</Label>
                                <p className="text-sm text-gray-500">Input the S3 path of your own dataset</p>
                                <p className="text-sm text-black-500">S3 URI</p>
                                <div className="flex gap-2 items-center">
                                    <div className="relative flex-1 max-w-2xl">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <Input placeholder="" className="pl-9" />
                                    </div>
                                    <div className="flex items-center">
                                        <Button
                                            variant="outline"
                                            className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50"
                                        >
                                            View
                                            <ExternalLink className="h-4 w-4 text-gray-600" />
                                        </Button>
                                        <div className="h-5 w-px bg-gray-300 mx-2" /> {/* 分隔线 */}
                                        <Button
                                            className="rounded-full px-4 py-2 text-sm bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
                                        >
                                            Browse S3
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* 开源数据集 */}
                            <div className="space-y-2">
                                <Label>开源数据集</Label>
                                <p className="text-sm text-gray-500">select open-source datasets from hf</p>
                                <Select>
                                    <SelectTrigger className="max-w-2xl">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dataset1">Dataset 1</SelectItem>
                                        <SelectItem value="dataset2">Dataset 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Max samples & Cutoff length */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Max samples</Label>
                                    <p className="text-sm text-gray-500">Maximum samples per dataset</p>
                                    <Input type="number" defaultValue="50000" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Cutoff length</Label>
                                    <p className="text-sm text-gray-500">Max tokens in input sequence</p>
                                    <Input type="number" defaultValue="1024" />
                                </div>
                            </div>

                            {/* Val size */}
                            <div className="space-y-2">
                                <Label>Val size</Label>
                                <p className="text-sm text-gray-500">Proportion of data in the dev set.</p>
                                <Input type="number" defaultValue="0.1" step="0.1" min="0" max="1" className="max-w-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* 训练实例设置 */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <h2 className="text-lg font-medium mb-6">训练实例设置</h2>

                        <div className="space-y-6">
                            {/* Instances Type */}
                            <div className="space-y-2">
                                <Label>Instances Type</Label>
                                <p className="text-sm text-gray-500">Select an instance type for training</p>
                                <Select>
                                    <SelectTrigger className="max-w-2xl">
                                        <SelectValue placeholder="Select instance type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="type1">Type 1</SelectItem>
                                        <SelectItem value="type2">Type 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Instances amount */}
                            <div className="space-y-2">
                                <Label>Instances amount</Label>
                                <p className="text-sm text-gray-500">Set the instance amount</p>
                                <Input type="number" defaultValue="1" min="1" className="max-w-2xl" />
                            </div>

                            {/* 使用Spot实例 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between max-w-2xl">
                                    <div>
                                        <Label>使用Spot实例</Label>
                                        <p className="text-sm text-gray-500">使用Spot实例训练，降低成本</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Switch />
                                    <span className="text-sm text-black-500 ml-2">启用</span>
                                </div>
                            </div>

                            {/* 最大等待Spot时间 */}
                            <div className="space-y-2">
                                <Label>最大等待Spot时间(分钟/小时)</Label>
                                <p className="text-sm text-gray-500">如没有等到Spot实例，超时后将使用按需实例</p>
                                <Input type="number" defaultValue="72" className="max-w-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* DeepSpeed configurations */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <button
                            className="flex items-center justify-between w-full"
                            onClick={() => setIsDeepSpeedExpanded(!isDeepSpeedExpanded)}
                        >
                            <h2 className="text-lg font-medium">DeepSpeed configurations (Applicable for Multi-GPU/Nodes)</h2>
                            <ChevronDown className={`transform ${isDeepSpeedExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isDeepSpeedExpanded && (
                            <div className="mt-6 space-y-6">
                                {/* DeepSpeed Stage */}
                                <RadioGroup defaultValue="none" className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="none" id="ds-none" />
                                        <Label htmlFor="ds-none">None</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="stage2" id="stage2" />
                                        <Label htmlFor="stage2">Stage 2</Label>
                                        <p className="text-sm text-gray-500">optimizer states + gradients are partitioned</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="stage3" id="stage3" />
                                        <Label htmlFor="stage3">Stage 3</Label>
                                        <p className="text-sm text-gray-500">Stage 2 + weights are partitioned</p>
                                    </div>
                                </RadioGroup>
                            </div>
                        )}
                    </div>

                    {/* 训练超参数设置 */}
                    <div className="bg-white rounded-lg shadow p-6 mt-6">
                        <h2 className="text-lg font-medium mb-6">训练超参数设置</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Learning rate */}
                                <div className="space-y-2">
                                    <Label>Learning rate</Label>
                                    <p className="text-sm text-gray-500">Initial learning rate for AdamW</p>
                                    <Input type="text" defaultValue="5e-5" />
                                </div>
                                {/* Epoch */}
                                <div className="space-y-2">
                                    <Label>Epoch</Label>
                                    <p className="text-sm text-gray-500">Total number of training epochs to perform</p>
                                    <Input type="number" defaultValue="2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Batch size per device */}
                                <div className="space-y-2">
                                    <Label>Batch size per device</Label>
                                    <p className="text-sm text-gray-500">Number of samples processed on each GPU</p>
                                    <Input type="number" defaultValue="2" />
                                </div>
                                {/* Gradient accumulation */}
                                <div className="space-y-2">
                                    <Label>Gradient accumulation</Label>
                                    <p className="text-sm text-gray-500">Number of steps for gradient accumulation</p>
                                    <Input type="number" defaultValue="4" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Training precision */}
                                <div className="space-y-2">
                                    <Label>Training precision</Label>
                                    <p className="text-sm text-gray-500">Whether to use mixed precision training</p>
                                    <Select defaultValue="bf16">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select precision" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bf16">bf16</SelectItem>
                                            <SelectItem value="fp16">fp16</SelectItem>
                                            <SelectItem value="fp32">fp32</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>


                        </div>

                        {/* Extra 参数设置 */}
                        <div className="mt-6 border-t pt-6">
                            <button
                                onClick={() => setIsExtraExpanded(!isExtraExpanded)}
                                className="flex items-center gap-2 w-full"
                            >
                                <ChevronRight className={`h-4 w-4 transform transition-transform ${isExtraExpanded ? 'rotate-90' : ''}`} />
                                <span className="font-medium">Extra 参数设置</span>
                            </button>

                            {isExtraExpanded && (
                                <div className="mt-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Warmup steps */}
                                        <div className="space-y-2">
                                            <Label>Warmup steps</Label>
                                            <p className="text-sm text-gray-500">Number of steps used for warmup</p>
                                            <Input type="number" defaultValue="10" />
                                        </div>
                                        {/* Logging steps */}
                                        <div className="space-y-2">
                                            <Label>Logging steps</Label>
                                            <p className="text-sm text-gray-500">Number of steps between two logs</p>
                                            <Input type="number" defaultValue="10" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Save steps */}
                                        <div className="space-y-2">
                                            <Label>Save steps</Label>
                                            <p className="text-sm text-gray-500">Number of steps between two checkpoints</p>
                                            <Input type="number" defaultValue="500" />
                                        </div>
                                        {/* Optimizer */}
                                        <div className="space-y-2">
                                            <Label>Optimizer</Label>
                                            <p className="text-sm text-gray-500">The optimizer to use</p>
                                            <Select defaultValue="adamw_torch">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select optimizer" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="adamw_torch">adamw_torch</SelectItem>
                                                    <SelectItem value="adam">adam</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Lora 参数设置 */}
                        <div className="mt-6 border-t pt-6">
                            <button
                                onClick={() => setIsLoraExpanded(!isLoraExpanded)}
                                className="flex items-center gap-2 w-full"
                            >
                                <ChevronRight className={`h-4 w-4 transform transition-transform ${isLoraExpanded ? 'rotate-90' : ''}`} />
                                <span className="font-medium">Lora 参数设置</span>
                            </button>

                            {isLoraExpanded && (
                                <div className="mt-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* LoRA rank */}
                                        <div className="space-y-2">
                                            <Label>LoRA rank</Label>
                                            <p className="text-sm text-gray-500">The rank of LoRA matrices</p>
                                            <Input type="number" defaultValue="8" />
                                        </div>
                                        {/* LoRA alpha */}
                                        <div className="space-y-2">
                                            <Label>LoRA alpha</Label>
                                            <p className="text-sm text-gray-500">Lora scaling coefficient</p>
                                            <Input type="number" defaultValue="16" />
                                        </div>
                                    </div>

                                    {/* LoRA Target Modules */}
                                    <div className="space-y-2">
                                        <Label>LoRA Target Modules</Label>
                                        <p className="text-sm text-gray-500">Lora target modules such as v_proj,k_proj, default is all, which apply to all linear layers</p>
                                        <Input defaultValue="all" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RLHF 参数设置 */}
                        <div className="mt-6 border-t pt-6">
                            <button
                                onClick={() => setIsRLHFExpanded(!isRLHFExpanded)}
                                className="flex items-center gap-2 w-full"
                            >
                                <ChevronRight className={`h-4 w-4 transform transition-transform ${isRLHFExpanded ? 'rotate-90' : ''}`} />
                                <span className="font-medium">RLHF 参数设置</span>
                            </button>

                            {isRLHFExpanded && (
                                <div className="mt-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Beta 参数 */}
                                        <div className="space-y-2">
                                            <Label>Beta 参数</Label>
                                            <p className="text-sm text-gray-500">惩罚项中 beta 系数大小</p>
                                            <Input type="number" defaultValue="0.1" step="0.1" />
                                        </div>
                                        {/* Fix gamma */}
                                        <div className="space-y-2">
                                            <Label>Fix gamma</Label>
                                            <p className="text-sm text-gray-500">惩罚项中 SFT 损失的权重大小</p>
                                            <Input type="number" defaultValue="0" />
                                        </div>
                                    </div>

                                    {/* 损失函数类型 */}
                                    <div className="space-y-2">
                                        <Label>损失函数类型</Label>
                                        <Select defaultValue="sigmoid">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select loss function" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sigmoid">sigmoid</SelectItem>
                                                <SelectItem value="other">other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* 底部按钮 */}
                    <div className="flex justify-end gap-4 mt-6 mb-12">
                        <Button
                            variant="outline"
                            className="px-8 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-50"
                        >
                            取消
                        </Button>
                        <Button
                            className="px-8 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        >
                            创建
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}